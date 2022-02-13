// https://w3c.github.io/media-source/#append-window
// https://developer.mozilla.org/en-US/docs/Web/API

//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery  // 각종 팁

// # Setting up adaptive streaming media sources
//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources

'use strict';

const ip = '192.168.91.42';

let GmediaSource = null;
let video = document.getElementsByClassName('video')[0];

let videoURL = new Array();
let videoDuration = new Array();
let audioURL = new Array();
let audioDuration = new Array();
const maxBufferSize = 30;   // 최대 버퍼 사이즈
let bufferSize = 0;         // 사용중인 버퍼 사이즈
let idx = 0;                // 현재 가져오는 track Id

let timescale = 0           // 세그먼트 타임스케일

let lastTrackId = maxBufferSize;       // 마지막으로 가져온 트랙 Id

//let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let videoCodec = 'video/mp4; codecs="avc1.64001e"';
let audioCodec = 'audio/mp4; codecs="mp4a.40.2"';

let isXmlLoad = false;


if ('MediaSource' in window && MediaSource.isTypeSupported(videoCodec)) {
    let mediaSource = new MediaSource;
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);
    
    let init = 'http://'+ip+':5000/media/Avengers_mdp360p/MDP.mdp';
    console.log('init', init);

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
    
    mediaSource.addEventListener('sourceopen', onSourceOpen.bind(this, video));
    GmediaSource = mediaSource;

} else {
    console.error('Unsupported MIME type or codec: ', videoCodec);
}

function onSourceOpen (videoTag, e) {
    let mediaSource = e.target;
    //if(mediaSource.sourceBuffers.length > 0) return;
    let sourceBuffer = mediaSource.addSourceBuffer(videoCodec);
    //let sourceBuffer_audio = mediaSource.addSourceBuffer(audioCodec);

    console.log('onSourceOpen', mediaSource.readyState);
    videoTag.addEventListener("seeking", onSeeking.bind(videoTag, mediaSource));
    videoTag.addEventListener("progress",onProgress.bind(videoTag, mediaSource));

    setInterval(update, 1000*maxBufferSize, mediaSource);

    sourceBuffer.mode = 'segments';
    //sourceBuffer_audio.mode = 'segments';
    //sourceBuffer.mode = 'sequence';

    let init = 'http://'+ip+':5000/media/Avengers_mdp360p/init-stream0.m4s';

    fetchAB_(init).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            let firstAppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", firstAppendHandler);
                console.log('start');
                appendNextMediaSegment(mediaSource);
            };
            
            sourceBuffer.addEventListener("updateend", firstAppendHandler);
            mediaSource.sourceBuffers[0].appendBuffer(response);
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
        return;
    });
}

function xmlParser(xml, mediaSource) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");
    xmlDoc = xmlDoc.getElementsByTagName("SegmentTemplate")[0];
    let s = xmlDoc.getElementsByTagName("S");
    let duration = 0;

    timescale = xmlDoc.getAttribute('timescale')
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

    console.log('@', audioURL.length, audioDuration.length);

}

function appendNextMediaSegment(mediaSource, state='') {
    if (mediaSource.readyState == "closed") return;
    
    if (bufferSize >= maxBufferSize) return console.log('bufferSize', bufferSize);

    if (lastTrackId >= videoURL.length) return;
    if (idx >= lastTrackId) return;
    
    if (mediaSource.sourceBuffers[0].updating) {
        console.log('uptading');
        if(state == 'update') {
            let AppendHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", AppendHandler);
                video.play();
        
                if (bufferSize < maxBufferSize) {
                    // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
                    appendNextMediaSegment(mediaSource, 'update');
                }
            };
        
            mediaSource.sourceBuffers[0].addEventListener("updateend", AppendHandler);
        }
        return;
    }
    
    fetchAB_(videoURL[idx]).then((response)=>{
        if(!response) {
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            //if(mediaSource.sourceBuffers.length < 1) return;
            if(response === undefined) return console.log('undefined err');
            
            mediaSource.sourceBuffers[0].appendBuffer(response);
            idx += 1;
            bufferSize += 1;
        }
    }).catch((err)=>{
        console.error('ERR:', err, mediaSource.sourceBuffers); // Error 출력
        return;
    });


    let AppendHandler = function(e) {
        let sourceBuffer = e.target;
        sourceBuffer.removeEventListener("updateend", AppendHandler);

        //appendNextMediaSegment(mediaSource);
    };

    mediaSource.sourceBuffers[0].addEventListener("updateend", AppendHandler);
    
}

function fetchAB (url, cb, type='arraybuffer') {
    //console.log(url);
    let xhr = new XMLHttpRequest;
    xhr.open('get', url);
    xhr.responseType = type;
    xhr.onload = function () {
        console.log(idx, url);
        cb(xhr.response);
    };
    xhr.send();
};

function fetchAB_ (url, type='arraybuffer') {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest;
        xhr.open('get', url);
        xhr.responseType = type;
        xhr.onload = function () {
            if(xhr.response) {
                console.log(idx, url);
                resolve(xhr.response);
            } else {
                reject(new Error("Request is failed"));
            }
        };
        xhr.send();
    });
};

// seeking 이벤트 핸들러로 시킹된 해당 위치의 미디어 데이터를 제공하는 작업을 수행한다.
function onSeeking(mediaSource, e) {
    console.log('onSeeking');
    let video = e.target;
    console.log('@', video.currentTime);
    // sourceBuffer에서 처리되고 있는 버퍼가 있다면 취소한다.
    if (mediaSource.readyState == "open") {
      mediaSource.sourceBuffers[0].abort();
    }

    let curSeg = getCurSeg(video.currentTime);  // 현재 시간의 세그먼트

    if(curSeg == -1) return console.log('ERR curSeg');

    // 버퍼시간 안에서
    if(curSeg <= lastTrackId && curSeg >= lastTrackId - 30) {
        update(mediaSource);
    } else {
        // end 버퍼가 바로 바뀌지 않는다.
        mediaSource.sourceBuffers[0].remove(0, video.buffered.end(0));

        // 세그먼트를 가져오는 도중 seek가 발생하면 오류..
        update(mediaSource, 'seek');
    }

}

// progress 이벤트 핸들러로 플레이될 세그먼트의 데이터를 준비해 sourceBuffer에 제공한다.
function onProgress(mediaSource, e) {
    console.log('onProgress');
    if(!isXmlLoad) return;
    if (videoURL.length <= idx) return console.log('load finish');
    if (bufferSize >= maxBufferSize) return;
    appendNextMediaSegment(mediaSource);
}

function update(mediaSource, state='') {
    console.log('update', state);
    //if(mediaSource.sourceBuffers[0].updating) return;

    let currentTime = parseInt(video.currentTime);
    if (currentTime == 0) return;
    let curSeg = getCurSeg(currentTime);  // 현재 시간의 세그먼트

    if(curSeg == -1) return console.log('ERR curSeg');

    console.log(currentTime, curSeg);
    
    // 현재 시간에서 3분을 더한 시간이 로드된 영상길이보다 길다면,
    // 즉, 불러온 영상이 3분이 안 남았다면, 다음 영상을 불러온다.
    let aheadTime = parseInt(maxBufferSize/3);
    let endTime = parseInt(maxBufferSize/3);

    let bufferStart = video.buffered.start(0);  // 버퍼에 기록된 영상의 첫 시간
    let bufferEnd = video.buffered.end(0);      // 버퍼에 기록된 영상의 끝 시간

    console.log('bufferStart', bufferStart, 'bufferEnd', bufferEnd);

    // seek 에서 넘어온게 아니라면
    if(curSeg < lastTrackId && bufferEnd != 0) {
        if(state == '' && bufferEnd <= currentTime + endTime*10) {
            // 앞에 1분의 영상을 제외한 나머지 부분은 지워버린다.
            mediaSource.sourceBuffers[0].remove(0, currentTime - 60);
            lastTrackId = getCurSeg(bufferEnd);           // 가져올 세그먼트 트랙 id
            bufferSize = lastTrackId - curSeg + 6;      // 버퍼 사이즈 업데이트
            idx = lastTrackId;                          // 마지막으로 가져온
            lastTrackId += endTime;                     // 추가로 가져올 세그먼트
            
            console.log(curSeg, lastTrackId, bufferSize);
            appendNextMediaSegment(mediaSource, 'update');
            return;
        }
    }
    

    if(state == 'seek') {
        bufferSize = 0;
        idx = curSeg - 1;
        lastTrackId = curSeg + maxBufferSize;
        appendNextMediaSegment(mediaSource, 'update');
    }
}

function getCurSeg(curTime) {
    // 하나의 세그먼트가 10초라고 가정했을 때
    // 예상되는 seg id까지의 모든 재생시간을 더한다.
    let expectSegNum = parseInt(curTime / 10) < videoURL.length ? parseInt(curTime / 10) : videoURL.length ;  // 예상 현재시간 세그id
    let expectTime = 0;
    for(let i=0; i<expectSegNum; i++) {
        expectTime += videoDuration[i];
    }

    //console.log('expectTime', expectTime, 'expectSegNum', expectSegNum);

    // 예상되는 재생 시간이 현재 시간보다 크면
    // expact seg id가 read seg id보다 크다.
    if(expectTime > curTime) {
        for(let i=expectSegNum-1; i >= 0; i--) {
            if(curTime > expectTime-videoDuration[i] && curTime < expectTime) return i;
            expectTime -= videoDuration[i];
        }
    } else {
        for(let i=expectSegNum; i < videoURL.length; i++) {
            if(curTime < expectTime+videoDuration[i] && curTime > expectTime) return i;
            expectTime += videoDuration[i];
        }
    }

    return -1

}