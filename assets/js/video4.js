'use strict';

let video = document.getElementsByClassName('video')[0];

let assetURL = new Array();
let maxBufferSize = 70;
let curBufferSize = 0;
let lastCheckedVideoTime = 0;

for(let i=0; i<=10; i++) {
    assetURL.push('http://localhost:5000/media/res/The.Avengers.2012.1080p.BluRay.x264.YIFY_'+i+'.mp4');
}

let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
    let mediaSource = new MediaSource;
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener('sourceopen', onSourceOpen.bind(this, video));
    
    // 10초마다 실행
    setInterval(bufferGabageCollector, 1000 * 60, mediaSource);
} else {
    console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function onSourceOpen (videoTag, e) {
    let mediaSource = e.target;
    let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    mediaSource.duration = 10*assetURL.length;

    fetchAB(assetURL.shift(), function(buf) {
        console.log(buf);
        if(!buf) {
            // 초기화 세그먼트를 못 가져오면 어차피 플레이가 되지 않는다.
            // mediaSource.endOfstream 메서드로 스트림을 종료한다. 이 메서드는 정상적으로 스트림이 종료되었을때도 호출되고
            // 오류로인한 종료일때도 원인을 인자로 넘겨 종료한다. "network" 혹은 "decode"
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            sourceBuffer.appendBuffer(buf);
            curBufferSize += 1;
        }
    });
    console.log(mediaSource.readyState);
    let firstAppendHandler = function(e) {
        console.log('1',mediaSource.readyState);
        let sourceBuffer = e.target;

        // 아 몬 지랄을 해도 안 되는거
        // https://solveforums.msomimaktaba.com/threads/solved-mediasource-api-append-concatenate-multiple-videos-together-into-a-single-buffer.470042/
        // 정답이 위 url에 있었네.
        //sourceBuffer.mode = 'sequence';
        sourceBuffer.removeEventListener("updateend", firstAppendHandler);

        // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
        appendNextMediaSegment(mediaSource);
    };
    
    sourceBuffer.addEventListener("updateend", firstAppendHandler);
};

function appendNextMediaSegment(mediaSource) {
    // MediaSource.readyState는 총 세가지 스테이트를 가질 수 있는데 "open", "closed", "ended"다
    // "open" 이면 현재 미디어 데이터를 처리중에 있고 "ended"는 대기 상태와 동일하다.
    // "closed"인 경우는 더이상 미디어 스트림을 받을 수 없다.
    console.log('1', mediaSource.readyState);
    if (mediaSource.readyState == "closed") return;
    console.log('2');
    // 어플리케이션 코드로 더이상 제공할 미디어 세그먼트가 없다면 endOfStream으로 스트리밍을 종료한다.
    if (assetURL.length == 0) {
        mediaSource.endOfStream();
        console.log('endOfStream');
        return;
    }
    
    // 동영상 버퍼를 제공하는 과정은 데이터를 디코딩하는 과정을 거쳐야 하므로 시간과 CPU 비용이 든다.
    // 항상 sourceBuffer가 updating 상태인지를 체크하고 새로운 버퍼를 제공해야 한다.
    // updating이 true인 경우 이전 미디어 데이터를 처리하고 있는 중이다.
    if (mediaSource.sourceBuffers[0].updating) return;

    fetchAB(assetURL.shift(), function(buf) {
        if(!buf) {
            // 초기화 세그먼트를 못 가져오면 어차피 플레이가 되지 않는다.
            // mediaSource.endOfstream 메서드로 스트림을 종료한다. 이 메서드는 정상적으로 스트림이 종료되었을때도 호출되고
            // 오류로인한 종료일때도 원인을 인자로 넘겨 종료한다. "network" 혹은 "decode"
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            mediaSource.sourceBuffers[0].appendBuffer(buf);
            curBufferSize += 1;
        }
    });

    let firstAppendHandler = function(e) {
        //console.log(mediaSource.readyState);
        let sourceBuffer = e.target;
        sourceBuffer.removeEventListener("updateend", firstAppendHandler);

        // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
        appendNextMediaSegment(mediaSource);
    };

    mediaSource.sourceBuffers[0].addEventListener("updateend", firstAppendHandler);
    
}

function fetchAB (url, callback) {
    console.log(url);
    let xhr = new XMLHttpRequest;
    xhr.open('get', url);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
        callback(xhr.response);
    };
    xhr.send();
};

function fetchAB_ (url) {
    return new Promise(function(resolve, reject){
        console.log(url);
        let xhr = new XMLHttpRequest;
        xhr.open('get', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            if(xhr.response) {
                resolve(xhr.response);
            } else {
                reject(new Error("Request is failed"));
            }
        };
        xhr.send();
    });
};

// 버퍼를 비워주는 함수
function bufferGabageCollector(mediaSource) {
    console.log('bufferGabageCollector:', lastCheckedVideoTime, video.currentTime, curBufferSize);
    let curVideoTime = video.currentTime;
    // 버퍼를 비우고 100초가 넘었다면
    // 버퍼에서 100초만큼 지워준다.
    if(curVideoTime - lastCheckedVideoTime >= 100 && curBufferSize >= maxBufferSize) {
        mediaSource.sourceBuffers[0].remove(lastCheckedVideoTime, lastCheckedVideoTime+100);
        lastCheckedVideoTime += 100;
        curBufferSize -= 10;
    }
}