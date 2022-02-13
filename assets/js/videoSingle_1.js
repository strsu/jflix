// https://w3c.github.io/media-source/#append-window
// https://developer.mozilla.org/en-US/docs/Web/API

//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery  // 각종 팁

// # Setting up adaptive streaming media sources
//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources

'use strict';

const ip = 'localhost';

let GmediaSource = null;
let video = document.getElementsByClassName('video')[0];

let videoURL = '';
let videoDuration = new Array();
let videoMediaRange = new Array();
let audioURL = '';
let audioDuration = new Array();
let audioMediaRange = new Array();

const maxBufferSize = 30;   // 최대 버퍼 사이즈
let videoBufferSize = 0;         // 사용중인 버퍼 사이즈
let audioBufferSize = 0;         // 사용중인 버퍼 사이즈

let videoIdx = 0;                // 현재 가져오는 track Id
let audioIdx = 0;                // 현재 가져오는 track Id

let videoLastTrackId = maxBufferSize;       // 마지막으로 가져온 트랙 Id
let audioLastTrackId = maxBufferSize;       // 마지막으로 가져온 트랙 Id

//let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let videoCodec = 'video/mp4; codecs="avc1.64001e"';
let audioCodec = 'audio/mp4; codecs="mp4a.40.2"';

let isXmlLoad = false;


if ('MediaSource' in window && MediaSource.isTypeSupported(videoCodec) && MediaSource.isTypeSupported(audioCodec)) {
    let mediaSource = new MediaSource;
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);
    //audio.src = URL.createObjectURL(mediaSource);  // <- 필요 없음, 없어도 소리 남
    
    let init = 'http://'+ip+':5000/media/MDP_320x180.mdp';

    fetchAB_(init, 'text').then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream by network');
            return;
        } else {
            xmlParser(response, mediaSource);
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
    });
    
    mediaSource.addEventListener('sourceopen', onSourceOpen);
    GmediaSource = mediaSource;

} else {
    console.error('Unsupported MIME type or codec: ', videoCodec, 'or', audioCodec);
}

function xmlParser(xml, mediaSource) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");
    xmlDoc = xmlDoc.getElementsByTagName("SegmentTemplate")[0];
    let s = xmlDoc.getElementsByTagName("S");
    let duration = 0;

    let timescale = xmlDoc.getAttribute('timescale')
    let idx = 1;
    let idx_ = '';
    for(let i = 0; i < s.length; i++) {

        let d = s[i].getAttribute('d');
        duration += (d / timescale);
        videoDuration.push((d / timescale));

        if(parseInt(idx) < 10) idx_ = '00'+idx.toString();
        else if(parseInt(idx) < 100) idx_ = '0'+idx.toString();
        else idx_ = idx.toString();
        let tmp = 'http://'+ip+':5000/media/Avengers_mdp360p/chunk-stream0-00'+idx_+'.m4s';
        videoURL.push(tmp);

        idx = parseInt(idx) + 1;

        // 'r'은 길이가 같은 세그먼트의 갯수
        if( s[i].getAttribute('r') != null) {
            for(let j=0; j < s[i].getAttribute('r'); j++) {
                if(idx < 10) idx_ = '00'+idx.toString();
                else if(idx < 100) idx_ = '0'+idx.toString();
                else idx_ = idx.toString();
                let tmp = 'http://'+ip+':5000/media/Avengers_mdp360p/chunk-stream0-00'+idx_+'.m4s';
                videoURL.push(tmp);
                videoDuration.push((d / timescale));
                idx += 1;
            }
        }
    }
    mediaSource.duration = duration;
    isXmlLoad = true;
    console.log('duration', duration);

    // 오디오 영역
    xmlDoc = parser.parseFromString(xml,"text/xml");
    xmlDoc = xmlDoc.getElementsByTagName("SegmentTemplate")[1];
    s = xmlDoc.getElementsByTagName("S");
    duration = 0;

    timescale = xmlDoc.getAttribute('timescale')
    idx = 1;
    idx_ = '';
    for(let i = 0; i < s.length; i++) {

        let d = s[i].getAttribute('d');
        duration += (d / timescale);
        audioDuration.push((d / timescale));

        if(parseInt(idx) < 10) idx_ = '00'+idx.toString();
        else if(parseInt(idx) < 100) idx_ = '0'+idx.toString();
        else idx_ = idx.toString();
        let tmp = 'http://'+ip+':5000/media/Avengers_mdp360p/chunk-stream1-00'+idx_+'.m4s';
        audioURL.push(tmp);

        idx = parseInt(idx) + 1;

        // 'r'은 길이가 같은 세그먼트의 갯수
        if( s[i].getAttribute('r') != null) {
            for(let j=0; j < s[i].getAttribute('r'); j++) {
                if(idx < 10) idx_ = '00'+idx.toString();
                else if(idx < 100) idx_ = '0'+idx.toString();
                else idx_ = idx.toString();
                let tmp = 'http://'+ip+':5000/media/Avengers_mdp360p/chunk-stream1-00'+idx_+'.m4s';
                audioURL.push(tmp);
                audioDuration.push((d / timescale));
                idx += 1;
            }
        }
    }
}

function onSourceOpen (_) {
    let mediaSource = this;
    let videoSourceBuffer = mediaSource.addSourceBuffer(videoCodec);
    let audioSourceBuffer = mediaSource.addSourceBuffer(audioCodec);

    console.log('onSourceOpen', mediaSource.readyState);
    video.addEventListener("seeking", onSeeking.bind(mediaSource));
    video.addEventListener("progress",onProgress.bind(mediaSource));

    setInterval(update, 1000*maxBufferSize, mediaSource);

    videoSourceBuffer.mode = 'segments';
    audioSourceBuffer.mode = 'segments';
    //sourceBuffer.mode = 'sequence';

    let videoInit = 'http://'+ip+':5000/media/Avengers_mdp360p/init-stream0.m4s';

    fetchAB_(videoInit).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            let firstAppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", firstAppendHandler);

                // 비디오 초기화 후 오디오 초기화 진행                
                let audioInit = 'http://'+ip+':5000/media/Avengers_mdp360p/init-stream1.m4s';

                fetchAB_(audioInit).then((response)=>{
                    if(!response) {
                        mediaSource.endOfStream("network");
                        console.log('endOfStream');
                        return;
                    } else {
                        let firstAppendHandler = function(e) {
                            let sourceBuffer = e.target;
                            sourceBuffer.removeEventListener("updateend", firstAppendHandler);
                            appendNextVideoMediaSegment(mediaSource);
                            appendNextAudioMediaSegment(mediaSource);
                        };
                        
                        audioSourceBuffer.addEventListener("updateend", firstAppendHandler);
                        mediaSource.sourceBuffers[1].appendBuffer(response);
                    }
                }).catch((err)=>{
                    console.error('ERR:', err); // Error 출력
                    return;
                });

            };
            
            videoSourceBuffer.addEventListener("updateend", firstAppendHandler);
            mediaSource.sourceBuffers[0].appendBuffer(response);
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
        return;
    });
}

function appendNextVideoMediaSegment(mediaSource, state='') {
    if (mediaSource.readyState == "closed") return console.log('close');

    if (mediaSource.sourceBuffers === undefined) return console.log('mediaSource.sourceBuffers is undefined');
    if (videoBufferSize >= maxBufferSize) return console.log('videoBufferSize', videoBufferSize);

    if (videoLastTrackId >= videoURL.length) return console.log('videoLastTrackId >= videoURL.length');
    if (videoIdx >= videoLastTrackId) return console.log('videoIdx >= videoLastTrackId');
    
    if (mediaSource.sourceBuffers[0].updating) {
        console.log('uptading');
        if(state == 'update') {
            let AppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", AppendHandler);
                //video.play();
        
                if (videoBufferSize < maxBufferSize) {
                    // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
                    appendNextVideoMediaSegment(mediaSource, 'update');
                }
            };
        
            mediaSource.sourceBuffers[0].addEventListener("updateend", AppendHandler);
        }
        return;
    }
    
    fetchAB_(videoURL[videoIdx]).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            //if(mediaSource.sourceBuffers.length < 1) return;
            if(response === undefined) return console.log('undefined err');
            if(video.buffered.length > 0) {
                console.log('video-bf', videoIdx, videoBufferSize, video.buffered.end(0));
            }
            mediaSource.sourceBuffers[0].appendBuffer(response);
            videoIdx += 1;
            videoBufferSize += 1;
            if(video.buffered.length > 0) {
                console.log('video-af', videoIdx, videoBufferSize, video.buffered.end(0));
            }
        }
    }).catch((err)=>{
        console.error('ERR:', err, mediaSource.sourceBuffers); // Error 출력
        return;
    });


    let AppendHandler = function(e) {
        let sourceBuffer = e.target;
        sourceBuffer.removeEventListener("updateend", AppendHandler);
    };

    mediaSource.sourceBuffers[0].addEventListener("updateend", AppendHandler);
}

function appendNextAudioMediaSegment(mediaSource, state='') {
    if (mediaSource.readyState == "closed") return console.log('close');

    if (mediaSource.sourceBuffers === undefined) return console.log('mediaSource.sourceBuffers is undefined');
    if (audioBufferSize >= maxBufferSize) return console.log('audioBufferSize', audioBufferSize);

    if (audioLastTrackId >= audioURL.length) return console.log('audioLastTrackId >= audioURL.length');
    if (audioIdx >= audioLastTrackId) return console.log('audioIdx >= audioLastTrackId');
    
    if (mediaSource.sourceBuffers[1].updating) {
        console.log('uptading');
        if(state == 'update') {
            let AppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", AppendHandler);
                //video.play();
        
                if (audioBufferSize < maxBufferSize) {
                    // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
                    appendNextAudioMediaSegment(mediaSource, 'update');
                }
            };
        
            mediaSource.sourceBuffers[1].addEventListener("updateend", AppendHandler);
        }
        return;
    }
    
    fetchAB_(audioURL[audioIdx]).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            //if(mediaSource.sourceBuffers.length < 1) return;
            if(response === undefined) return console.log('undefined err');
            
            mediaSource.sourceBuffers[1].appendBuffer(response);
            audioIdx += 1;
            audioBufferSize += 1;
            console.log('audio', audioIdx, audioBufferSize);
        }
    }).catch((err)=>{
        console.error('ERR:', err, mediaSource.sourceBuffers); // Error 출력
        return;
    });


    let AppendHandler = function(e) {
        let sourceBuffer = e.target;
        sourceBuffer.removeEventListener("updateend", AppendHandler);
    };

    mediaSource.sourceBuffers[1].addEventListener("updateend", AppendHandler);
}

function fetchAB_ (url, type='arraybuffer') {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest;+
        xhr.open('get', url);
        xhr.responseType = type;
        xhr.onload = function () {
            if(xhr.response) {
                console.log(url);
                resolve(xhr.response);
            } else {
                reject(new Error("Request is failed"));
            }
        };
        xhr.send();
    });
};

// seeking 이벤트 핸들러로 시킹된 해당 위치의 미디어 데이터를 제공하는 작업을 수행한다.
function onSeeking(_) {
    console.log('onSeeking - ', '(video)', video.currentTime);
    let mediaSource = this;
    // sourceBuffer에서 처리되고 있는 버퍼가 있다면 취소한다.
    if (mediaSource.readyState == "open") {
      mediaSource.sourceBuffers[0].abort();
      mediaSource.sourceBuffers[1].abort();
    }

    let videoCurSeg = getCurSeg(video.currentTime, 'video');  // 현재 시간의 세그먼트

    if(videoCurSeg == -1) return console.log('ERR curSeg');

    // 버퍼시간 안에서
    if((videoCurSeg <= videoLastTrackId && videoCurSeg >= videoLastTrackId - 30)) {
        update(mediaSource);
    } else {
        // end 버퍼가 바로 바뀌지 않는다.
        mediaSource.sourceBuffers[0].remove(0, mediaSource.sourceBuffers[0].buffered.end(0));
        mediaSource.sourceBuffers[1].remove(0, mediaSource.sourceBuffers[1].buffered.end(0));

        // 세그먼트를 가져오는 도중 seek가 발생하면 오류..
        update(mediaSource, 'seek');
    }
}

// progress 이벤트 핸들러로 플레이될 세그먼트의 데이터를 준비해 sourceBuffer에 제공한다.
function onProgress(_) {
    console.log('onProgress');
    let mediaSource = this;
    if(!isXmlLoad) return;
    if (videoURL.length <= videoIdx) return console.log('load finish');
    if (videoBufferSize >= maxBufferSize) return console.log('videoBufferSize >= maxBufferSize');
    appendNextVideoMediaSegment(mediaSource);
    appendNextAudioMediaSegment(mediaSource);
}

function update(mediaSource, state='') {
    console.log('update', state);
    //if(mediaSource.sourceBuffers[0].updating) return;

    let currentTime = parseInt(video.currentTime);
    if (currentTime == 0) return;
    let videoCurSeg = getCurSeg(currentTime);  // 현재 시간의 세그먼트
    let audioCurSeg = getCurSeg(currentTime, 'audio');  // 현재 시간의 세그먼트

    if(videoCurSeg == -1 || audioCurSeg == -1) return console.log('ERR curSeg');

    console.log(currentTime, videoCurSeg, audioCurSeg);
    
    // 현재 시간에서 3분을 더한 시간이 로드된 영상길이보다 길다면,
    // 즉, 불러온 영상이 3분이 안 남았다면, 다음 영상을 불러온다.
    let aheadTime = parseInt(maxBufferSize/3);
    let endTime = parseInt(maxBufferSize/3);

    let videoBufferStart = mediaSource.sourceBuffers[0].buffered.start(0);  // 버퍼에 기록된 영상의 첫 시간
    let videoBufferEnd = mediaSource.sourceBuffers[0].buffered.end(0);      // 버퍼에 기록된 영상의 끝 시간

    console.log('bufferStart', videoBufferStart, 'bufferEnd', videoBufferEnd);

    // seek 에서 넘어온게 아니라면
    if(videoCurSeg < videoLastTrackId && videoBufferEnd != 0) {
        if(state == '' && videoBufferEnd <= currentTime + endTime*10) {
            // 앞에 1분의 영상을 제외한 나머지 부분은 지워버린다.
            mediaSource.sourceBuffers[0].remove(0, currentTime - 60);
            videoLastTrackId = getCurSeg(videoBufferEnd);           // 가져올 세그먼트 트랙 id
            videoBufferSize = videoLastTrackId - videoCurSeg + 6;      // 버퍼 사이즈 업데이트
            videoIdx = videoLastTrackId;                          // 마지막으로 가져온
            videoLastTrackId += endTime;                     // 추가로 가져올 세그먼트

            mediaSource.sourceBuffers[1].remove(0, currentTime - 60);
            audioLastTrackId = getCurSeg(audioBufferEnd);           // 가져올 세그먼트 트랙 id
            audioBufferSize = audioLastTrackId - audioCurSeg + 6;      // 버퍼 사이즈 업데이트
            audioIdx = audioLastTrackId;                          // 마지막으로 가져온
            audioLastTrackId += endTime;                     // 추가로 가져올 세그먼트
            
            console.log('video', videoCurSeg, videoLastTrackId, videoBufferSize);
            console.log('audio', audioCurSeg, audioLastTrackId, audioBufferSize);
            appendNextVideoMediaSegment(mediaSource, 'update');
            appendNextAudioMediaSegment(mediaSource, 'update');
            return;
        }
    }
    

    if(state == 'seek') {
        videoBufferSize = 0;
        videoIdx = videoCurSeg - 1;
        videoLastTrackId = videoCurSeg + maxBufferSize;

        audioBufferSize = 0;
        audioIdx = audioCurSeg - 1;
        audioLastTrackId = audioCurSeg + maxBufferSize;

        appendNextVideoMediaSegment(mediaSource, 'update');
        appendNextAudioMediaSegment(mediaSource, 'update');
    }
}

function getCurSeg(curTime, which) {
    let duration = videoDuration;
    let url = videoURL;
    if(which == 'audio') {
        duration = audioDuration;
        url = audioURL;
    }
    // 하나의 세그먼트가 10초라고 가정했을 때
    // 예상되는 seg id까지의 모든 재생시간을 더한다.
    let expectSegNum = parseInt(curTime / 10) < url.length ? parseInt(curTime / 10) : url.length ;  // 예상 현재시간 세그id
    let expectTime = 0;
    for(let i=0; i<expectSegNum; i++) {
        expectTime += duration[i];
    }

    //console.log('expectTime', expectTime, 'expectSegNum', expectSegNum);

    // 예상되는 재생 시간이 현재 시간보다 크면
    // expact seg id가 read seg id보다 크다.
    if(expectTime > curTime) {
        for(let i=expectSegNum-1; i >= 0; i--) {
            if(curTime > expectTime-duration[i] && curTime < expectTime) return i;
            expectTime -= duration[i];
        }
    } else {
        for(let i=expectSegNum; i < videoURL.length; i++) {
            if(curTime < expectTime+duration[i] && curTime > expectTime) return i;
            expectTime += duration[i];
        }
    }

    return -1

}