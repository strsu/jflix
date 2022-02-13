// https://w3c.github.io/media-source/#append-window
// https://developer.mozilla.org/en-US/docs/Web/API

//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery  // 각종 팁

// # Setting up adaptive streaming media sources
//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources

'use strict';

const ip = 'localhost';

let GmediaSource = null;
let video = document.getElementsByClassName('video')[0];

let baseURL = 'http://'+ip+':5000/media/Avengers_mdp360p/';

let videoURL = new Array();
let videoDuration = new Array();
let audioURL = new Array();
let audioDuration = new Array();

const maxBufferSize = 10;   // 최대 버퍼 사이즈
let videoBufferSize = 0;         // 사용중인 버퍼 사이즈
let audioBufferSize = 0;         // 사용중인 버퍼 사이즈

let videoIdx = 0;                // 현재 가져오는 track Id
let audioIdx = 0;                // 현재 가져오는 track Id

let videoLastTrackId = maxBufferSize;       // 마지막으로 가져온 트랙 Id
let audioLastTrackId = maxBufferSize;       // 마지막으로 가져온 트랙 Id

let videoInit = null;
let audioInit = null;

let videoCodec = 'video/mp4; codecs=';
let audioCodec = 'audio/mp4; codecs=';

let isready = false;

let curState = 'end'

setup();

function setup() {
    let init = 'MDP.mdp';
    
    fetchAB_(init, 'text').then((response)=>{
        if(!response) {
            return;
        } else {
            xmlParser(response);
            mseplayer();
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
    });
}

function mseplayer() {
    if ('MediaSource' in window && MediaSource.isTypeSupported(videoCodec) && MediaSource.isTypeSupported(audioCodec)) {
        let mediaSource = new MediaSource;
        console.log(mediaSource.readyState); // closed
        video.src = URL.createObjectURL(mediaSource);
        
        mediaSource.addEventListener('sourceopen', onSourceOpen);
        GmediaSource = mediaSource;
    
    } else {
        console.error('Unsupported MIME type or codec: ', videoCodec, 'or', audioCodec);
    }
}


function xmlParser(xml) {
    
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");
    xmlDoc = xmlDoc.getElementsByTagName("AdaptationSet");

    for( let Adapt of xmlDoc) {
        let id = Adapt.getElementsByTagName('Representation')[0].getAttribute('id');
        let codec = Adapt.getElementsByTagName('Representation')[0].getAttribute('codecs');
        let bandwidth = Adapt.getElementsByTagName('Representation')[0].getAttribute('bandwidth');

        // init 파일, 세그먼트 파일 정보 업데이트

        let timescale = Adapt.getElementsByTagName('SegmentTemplate')[0].getAttribute('timescale');
        let init = Adapt.getElementsByTagName('SegmentTemplate')[0].getAttribute('initialization');

        let sTag = Adapt.getElementsByTagName('S');

        let url = new Array();
        let duration = new Array();
        let runningTime = 0;

        for( let s of sTag) {
            let idx = url.length + 1;
            let idx_ = '00'
            if(parseInt(idx) < 10) idx_ += '00'+idx.toString();
            else if(parseInt(idx) < 100) idx_ += '0'+idx.toString();
            else idx_ += idx.toString();
            let name = 'chunk-stream'+id.toString()+'-'+idx_+'.m4s';
            url.push(name);

            let d = s.getAttribute('d');
            runningTime += d / timescale;
            duration.push(runningTime);

            if( s.getAttribute('r') != null) {
                for(let j=0; j < s.getAttribute('r'); j++) {
                    idx = url.length + 1;
                    idx_ = '00'
                    if(parseInt(idx) < 10) idx_ += '00'+idx.toString();
                    else if(parseInt(idx) < 100) idx_ += '0'+idx.toString();
                    else idx_ += idx.toString();
                    name = 'chunk-stream'+id.toString()+'-'+idx_+'.m4s';
                    url.push(name);
        
                    d = s.getAttribute('d');
                    runningTime += d / timescale;
                    duration.push(runningTime);
                }
            }

        }

        // 업데이트
        if (Adapt.getAttribute('contentType') == 'video') {
            videoCodec += '"' + codec + '"';
            videoInit = init.replace('$RepresentationID$', id.toString());
            videoURL = url;
            videoDuration = duration;
        } else {
            audioCodec += '"' + codec + '"';
            audioInit = init.replace('$RepresentationID$', id.toString());
            audioURL = url;
            audioDuration = duration;
        }

    }
}

function onSourceOpen (_) {
    let mediaSource = this;
    let videoSourceBuffer = mediaSource.addSourceBuffer(videoCodec);
    let audioSourceBuffer = mediaSource.addSourceBuffer(audioCodec);

    console.log('onSourceOpen', mediaSource.readyState);
    video.addEventListener("seeked",   onSeeked.bind(mediaSource));
    video.addEventListener("seeking",   onSeeking.bind(mediaSource));
    video.addEventListener("progress",  onProgress.bind(mediaSource));
    video.addEventListener("stalled",   onStalled.bind(mediaSource));
    video.addEventListener("timeupdate",onTimeupdate.bind(mediaSource));
    video.addEventListener("emptied",   onEmptied.bind(mediaSource));
    video.addEventListener("error",   onError.bind(mediaSource));

    videoSourceBuffer.mode = 'segments';
    audioSourceBuffer.mode = 'segments';
    mediaSource.duration = videoDuration[videoDuration.length-1];

    fetchAB_(videoInit).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            let firstAppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", firstAppendHandler);

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
                        isready = true;
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
    
    if (mediaSource.sourceBuffers[0].updating) return console.log('uptading');
    
    fetchAB_(videoURL[videoIdx]).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            //if(mediaSource.sourceBuffers.length < 1) return;
            if(response === undefined) return console.log('undefined err');
            
            mediaSource.sourceBuffers[0].appendBuffer(response);
            videoIdx += 1;
            videoBufferSize += 1;
            console.log('video', videoIdx, videoBufferSize);
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
    
    if (mediaSource.sourceBuffers[1].updating) return console.log('uptading');
    
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
        let xhr = new XMLHttpRequest;
        //url = baseURL + url;
        xhr.open('get', baseURL + url);
        xhr.responseType = type;
        xhr.onload = function () {
            if(xhr.response) {
                console.log('url:',baseURL+url);
                resolve(xhr.response);
            } else {
                reject(new Error("Request is failed"));
            }
        };
        xhr.send();
    });
};

/**
 * @param {*} _ : this
 * @description : These examples add an event listener for the HTMLMediaElement's emptied event, 
 *                then post a message when that event handler has reacted to the event firing.
 */
 function onSeeked(video_) {
    let mediaSource = this;
    console.log('seeked after finish seeking');
}

/**
 * @param {*} _ : this
 * @description : seeking 이벤트 핸들러로 시킹된 해당 위치의 미디어 데이터를 제공하는 작업을 수행한다.
 */
function onSeeking(_) {
    console.log('onSeeking');
    let mediaSource = this;

    // sourceBuffer에서 처리되고 있는 버퍼가 있다면 취소한다.
    if (mediaSource.readyState == "open") {
      mediaSource.sourceBuffers[0].abort();
      mediaSource.sourceBuffers[1].abort();
    }

    let videoCurSeg = getCurSeg(video.currentTime, 'video');  // 현재 시간의 세그먼트

    console.log(videoCurSeg, videoDuration[videoCurSeg-1]);

    if(videoCurSeg == -1) return console.log('ERR curSeg');

    // 버퍼시간 안에서
    if((videoCurSeg <= videoLastTrackId && videoCurSeg >= videoLastTrackId - 30)) {
        update(mediaSource);
    } else {
        // end 버퍼가 바로 바뀌지 않는다.
        console.log('buffer end', mediaSource.sourceBuffers[0].buffered.end(0), video.buffered.end(0));
        mediaSource.sourceBuffers[0].remove(0, mediaSource.sourceBuffers[0].buffered.end(0));
        mediaSource.sourceBuffers[1].remove(0, mediaSource.sourceBuffers[1].buffered.end(0));

        // 세그먼트를 가져오는 도중 seek가 발생하면 오류..
        update(mediaSource, 'seek');
    }
}

/**
 * @param {*} _ : this
 * @description : These examples add an event listener for the HTMLMediaElement's emptied event, 
 *                then post a message when that event handler has reacted to the event firing.
 */
 function onEmptied(video_) {
    let mediaSource = this;
    console.log('no more segment to play.');
}


/**
 * @param {*} _ : this
 * @description : Fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
 *                브라우저가 미디어 데이터를 가져 오려고 할 때 발생하지만 데이터를 사용할 수 없습니다.
 */
function onStalled(video_) {
    let mediaSource = this;
    console.log('onStalled -> fail to fatch segment');
}

/**
 * @param {*} _ : this
 * @description : 현재 재생위치가 바뀌었을 때 발생
 */
function onTimeupdate(video_) {
    return;
    let mediaSource = mediasource;
    let endBufferdTime = video.buffered.end(0);

    // 남은 시간이 100초를 안 남겼으면 다음 세그먼트 호출
    if(video.currentTime + 100 >= endBufferdTime) {
        //videoIdx = getCurSeg(endBufferdTime-1)+1;
        //audioIdx = getCurSeg(endBufferdTime-1, 'audio')+1;
        console.log('videoIdx - ', videoIdx, getCurSeg(endBufferdTime-1), endBufferdTime-1);
        //appendNextVideoMediaSegment(mediaSource);
        //appendNextAudioMediaSegment(mediaSource);
    }
}

/**
 * @param {*} _ : this
 * @description : 현재 재생위치가 바뀌었을 때 발생
 */
 function onError(_) {
    console.log('error');
}

// progress 이벤트 핸들러로 플레이될 세그먼트의 데이터를 준비해 sourceBuffer에 제공한다.
function onProgress(video_) {
    console.log('onProgress');
    let video = video_;
    let mediaSource = this;
    
    if(!isready) return;
    if (videoURL.length <= videoIdx) return console.log('load finish');
    if (videoBufferSize >= maxBufferSize) return console.log('videoBufferSize >= maxBufferSize');
    appendNextVideoMediaSegment(mediaSource);
    appendNextAudioMediaSegment(mediaSource);
}

// setInterval(update, 1000*maxBufferSize, mediaSource);

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

        console.log('videoIdx', videoIdx, videoLastTrackId, videoDuration[videoIdx-1]);
        console.log('audioIdx', audioIdx, audioLastTrackId, audioDuration[audioIdx-1]);

        if(mediaSource.sourceBuffers[0].updating || mediaSource.sourceBuffers[1].updating) {
            setTimeout(update, 500, mediaSource, 'seek');
            //update(mediaSource, 'seek');
        } else {
            appendNextVideoMediaSegment(mediaSource, 'update');
            appendNextAudioMediaSegment(mediaSource, 'update');
        }
    }
}

function getCurSeg(curTime, which) {
    let duration = videoDuration;
    let url = videoURL;
    if(which == 'audio') {
        duration = audioDuration;
        url = audioURL;
    }
    
    for(let i=0; i<duration.length-1; i++) {
        if (i == 0) {
            if(curTime < duration[i]) {
                return 0;
            }
        } else {
            if(duration[i-1] <= curTime && curTime < duration[i]) {
                //console.log('@', duration[i-1], curTime, duration[i], i);
                return i-1;
            }
        }
    }
}