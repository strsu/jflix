// https://w3c.github.io/media-source/#append-window
// https://developer.mozilla.org/en-US/docs/Web/API
'use strict';

let GmediaSource = null;
let video = document.getElementsByClassName('video')[0];

let assetURL = 'http://192.168.234.42:5000/media/Avengers.xml';
let videoSegment = new Array();
let loadedSegment = new Array();
const maxBufferSize = 30;
let idx = 0;

let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

let playStatus = 'stop';
let playingTime = 0; // 전체 상영시간

document.getElementsByClassName('pauseBtn')[0].style.display = 'none';

// progressBar 이동
document.getElementsByClassName('bar')[0].addEventListener('click', function (e) {
    let x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        clickedValue = (x / this.clientWidth);
    let prevSeg = parseInt(document.getElementsByClassName('video')[0].currentTime / 10);
    //document.getElementsByClassName('video')[0].currentTime = clickedValue * playingTime;
    movingChecker(prevSeg, clickedValue * playingTime);
});

function update(mediaSource) {
    let time = parseInt(video.currentTime);

    let width = time/playingTime*100;
    document.getElementsByClassName('currentBar')[0].style.width = width+'%';

    if(playStatus == 'playing') {
        // 현재 플레이 시간
        let hour = parseInt(time / 3600);
        time -= 3600*hour;
        
        let min = parseInt(time / 60);
        time -= 60*min;

        if(min < 10) { min = '0' + min; }
        if(time < 10) { time = '0' + time; }

        if(hour > 0) {
            document.getElementsByClassName('nowPlayTime')[0].innerHTML = hour+':'+min+':'+time;
        } else {
            document.getElementsByClassName('nowPlayTime')[0].innerHTML = min+':'+time;
        }

        // 남은 플레이 시간
        let left = playingTime - parseInt(video.currentTime);
        hour = parseInt(left / 3600);
        left -= 3600*hour;
        
        min = parseInt(left / 60);
        left -= 60*min;

        if(min < 10) { min = '0' + min; }
        if(left < 10) { left = '0' + left; }

        if(hour > 0) {
            document.getElementsByClassName('leftPlayTime')[0].innerHTML = hour+':'+min+':'+left;
        } else {
            document.getElementsByClassName('leftPlayTime')[0].innerHTML = min+':'+left;
        }
    }
}

// 풀스크린
function openFullscreen() {
    console.log(video.requestFullscreen);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */ 
        video.msRequestFullscreen();
    }
}

// progressBar 마우스 올려놓으면
document.getElementsByClassName('bar')[0].addEventListener('mousemove', function (e) {
    let x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        clickedValue = (x / this.clientWidth);
    let prevTime = document.getElementsByClassName('video')[0].currentTime;
    //document.getElementsByClassName('video')[0].currentTime = clickedValue * playingTime;
    let time = parseInt(clickedValue * playingTime);
    let hour = parseInt(time / 3600);
        time -= 3600*hour;    
    let min = parseInt(time / 60);
        time -= 60*min;
    if(min < 10) { min = '0' + min; }
    if(time < 10) { time = '0' + time; }

    if(hour > 0) { time = hour+':'+min+':'+time; }
    else { time = min+':'+time; }
    let width = parseInt(document.documentElement.clientWidth / 4);
    let height = parseInt(document.documentElement.clientHeight / 4);
    //console.log(time, this.offsetTop, width, height);
    document.getElementsByClassName('progressMove')[0].style.left = (x-width/2)+'px';
    document.getElementsByClassName('progressMove')[0].style.top = (this.offsetTop-height)+'px';
    document.getElementsByClassName('progressThumbnail')[0].style.backgroundImage = "url('http://192.168.234.42:5000/thumbnail/Avengers/The.Avengers.2012.1080p.BluRay.x264.YIFY_" + parseInt(clickedValue * playingTime) + ".png')";
    document.getElementsByClassName('progressTime')[0].innerHTML = time;
});

// progressBar 이동
document.getElementsByClassName('bar')[0].addEventListener('mouseenter', function (e) {
    document.getElementsByClassName('progressMove')[0].style.display = 'block';
});
document.getElementsByClassName('bar')[0].addEventListener('mouseleave', function (e) {
    document.getElementsByClassName('progressMove')[0].style.display = 'none';
});

function movingChecker(prevSeg, currentTime) {
    let curSegment = parseInt(currentTime / 10);

    // 이동된 시간의 세그먼트가 버퍼에 남아있으면 패스
    if(loadedSegment.includes(curSegment)) {
        document.getElementsByClassName('video')[0].currentTime = currentTime;
        return;
    }

    if(GmediaSource == null) return;

    // 버퍼를 닫았으면 다시 열어줘야 한다.
    // 나중에 구현
    if(GmediaSource.readyState == 'ended') return;

    // 버퍼에 없으면
    if( !loadedSegment.includes(curSegment)  ) {
        if (GmediaSource.readyState === 'open') {
            GmediaSource.sourceBuffers[0].abort();
        } else {
            console.log('ERRRRR');
            return;
        }
        // 버퍼 다 비워버린다음에 다시 다운해야 함
        if( GmediaSource.sourceBuffers[0].updating == false) {
            // 버퍼를 비우는것도 updating이 false일 때 가능한데, for문 써서 연속으로 처리할 수 는 없다.
            // 버퍼를 비우는중에 또 버퍼 비우기 요청이 가면 오류가 난다.
            GmediaSource.sourceBuffers[0].remove(0, loadedSegment[loadedSegment.length-1]*10+10);
            // 버퍼에 있는 세그먼트를 초기화
            loadedSegment = new Array();
            // 영상 세그먼트는 사용자가 누른 지점의 세그먼트 id로
            idx = curSegment;
            console.log(idx);
            // 세그먼트 로드함수 호출
            appendNextMediaSegment(GmediaSource);
            timeMoving(curSegment, currentTime)
        }
    }
}

// 시그먼트가 준비되면 이동한다.
function timeMoving(segId, t) {
    if(loadedSegment.includes(segId)) {
        console.log('now move');
        document.getElementsByClassName('video')[0].currentTime = t;
    } else {
        console.log('move wait');
        setTimeout(timeMoving, 200, segId, t);
    }
}

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
    let mediaSource = new MediaSource;
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener('sourceopen', onSourceOpen.bind(this, video));

    GmediaSource = mediaSource;
    
    // 10초마다 실행
    setInterval(loadSegment, 1000 * 10, mediaSource);
    setInterval(update, 500 * 1, mediaSource);
} else {
    console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function xmlParser(xml, mediaSource) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");
    xmlDoc = xmlDoc.getElementsByTagName("mediaInfo")[0];
    let chunkCnt = xmlDoc.getElementsByTagName("chunkCnt")[0].innerHTML;
    let chunkSec = xmlDoc.getElementsByTagName("chunkSec")[0].innerHTML;
    if(chunkCnt > 0) {
        playingTime = chunkSec*chunkCnt;
        mediaSource.duration = playingTime;
        mediaSource.setLiveSeekableRange(0, playingTime);
        let baseUrl = xmlDoc.getElementsByTagName("baseUrl")[0].innerHTML;
        let port = xmlDoc.getElementsByTagName("port")[0].innerHTML;
        let location = xmlDoc.getElementsByTagName("location")[0].innerHTML;
        let name = xmlDoc.getElementsByTagName("name")[0].innerHTML;
        for(let i=0; i<chunkCnt; i++) {
            let url = baseUrl+port+location+name+i+'.mp4';
            videoSegment.push(url);
        }
        appendNextMediaSegment(mediaSource);
        playStatus = 'playing';
    }
}

function onSourceOpen (videoTag, e) {
    let mediaSource = e.target;
    let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    // 아 몬 지랄을 해도 안 되는거
    // https://solveforums.msomimaktaba.com/threads/solved-mediasource-api-append-concatenate-multiple-videos-together-into-a-single-buffer.470042/
    // 정답이 위 url에 있었네.
    sourceBuffer.mode = 'sequence';
    //sourceBuffer.mode = 'segments';
    //sourceBuffer.timestampOffset = 10;
    //mediaSource.duration = 10*assetURL.length;
    console.log('onSourceOpen', mediaSource.readyState);
    fetchAB_(assetURL, 'text').then((response)=>{
        if(!response) {
            // 초기화 세그먼트를 못 가져오면 어차피 플레이가 되지 않는다.
            // mediaSource.endOfstream 메서드로 스트림을 종료한다. 이 메서드는 정상적으로 스트림이 종료되었을때도 호출되고
            // 오류로인한 종료일때도 원인을 인자로 넘겨 종료한다. "network" 혹은 "decode"
            mediaSource.endOfStream("network");
            console.log('endOfStream by network');
            return;
        } else {
            xmlParser(response, mediaSource);
            video.addEventListener('seeking', seek);
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
    });
};

function seek (e) {
    console.log(e);
    if (GmediaSource.readyState === 'open') {
        GmediaSource.sourceBuffers[0].abort();
        console.log(GmediaSource.readyState);
    } else {
        console.log('seek but not open?');
        console.log(GmediaSource.readyState);
    }
};

function appendNextMediaSegment(mediaSource) {
    // MediaSource.readyState는 총 세가지 스테이트를 가질 수 있는데 "open", "closed", "ended"다
    // "open" 이면 현재 미디어 데이터를 처리중에 있고 "ended"는 대기 상태와 동일하다.
    // "closed"인 경우는 더이상 미디어 스트림을 받을 수 없다.
    if (mediaSource.readyState == "closed") return;
    
    // 어플리케이션 코드로 더이상 제공할 미디어 세그먼트가 없다면 endOfStream으로 스트리밍을 종료한다.
    if (videoSegment.length == idx) {
        //mediaSource.endOfStream();
        console.log('endOfStream');
        return;
    }
    
    // 동영상 버퍼를 제공하는 과정은 데이터를 디코딩하는 과정을 거쳐야 하므로 시간과 CPU 비용이 든다.
    // 항상 sourceBuffer가 updating 상태인지를 체크하고 새로운 버퍼를 제공해야 한다.
    // updating이 true인 경우 이전 미디어 데이터를 처리하고 있는 중이다.
    if (mediaSource.sourceBuffers[0].updating) { 
        // 핸들러 추가해서 호출하니까 잘 되넹... -- 22.01.16 PM 11:00
        // updating일때는 세그먼트를 추가하지 못한다.
        // 근데 추가가 완료되면 아마 이벤트리스너로 콜백함수가 실행되어야 하는데
        // 무슨 이유에선지 실행되지 않는다.
        // 그래서 updating = ture일 때 리스터를 다시 등록해주는 방식으로 호출하닌까 
        // 오류없이 동작을 하게되었다.
        let AppendHandler = function(e) {
            let sourceBuffer = e.target;
            sourceBuffer.removeEventListener("updateend", AppendHandler);
    
            if (loadedSegment.length < maxBufferSize) {
                // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
                appendNextMediaSegment(mediaSource);
            }
        };
    
        mediaSource.sourceBuffers[0].addEventListener("updateend", AppendHandler);
        return;
    }
    
    // 현재 플레이 타임에 대해서 5분 이상의 데이터는 가져오지 않는다.
    // 네트워크 트래픽 절감을 위해서
    if (loadedSegment.length >= maxBufferSize) return;
    
    fetchAB_(videoSegment[idx]).then((response)=>{
        if(!response) {
            // 초기화 세그먼트를 못 가져오면 어차피 플레이가 되지 않는다.
            // mediaSource.endOfstream 메서드로 스트림을 종료한다. 이 메서드는 정상적으로 스트림이 종료되었을때도 호출되고
            // 오류로인한 종료일때도 원인을 인자로 넘겨 종료한다. "network" 혹은 "decode"
            mediaSource.endOfStream("network");
            console.log('endOfStream');
            return;
        } else {
            // 미디어 데이터를 sourceBuffer에 제공한다.
            // MediaSource.readyState가 "ended"인 경우 다시 "open"되면서
            // sourceopen이벤트에 걸려있는 onSourceOpen핸들러가 다시 실행될 수 있으니 대처해야 한다.
            //console.log(mediaSource.readyState, response);
            mediaSource.sourceBuffers[0].appendBuffer(response);
            loadedSegment.push(idx);
            idx += 1;
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
        return;
    });

    let firstAppendHandler = function(e) {
        let sourceBuffer = e.target;
        sourceBuffer.removeEventListener("updateend", firstAppendHandler);

        if (loadedSegment.length < maxBufferSize) {
            // 아래의 함수를 통해 본격적으로 미디어 버퍼를 sourceBuffer에 제공하는 단계로 넘어간다.
            appendNextMediaSegment(mediaSource);
        }
    };

    mediaSource.sourceBuffers[0].addEventListener("updateend", firstAppendHandler);
    
}

function fetchAB (url, cb, type='arraybuffer') {
    //console.log(url);
    let xhr = new XMLHttpRequest;
    xhr.open('get', url);
    xhr.responseType = type;
    xhr.onload = function () {
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
                //console.log(url);
                resolve(xhr.response);
            } else {
                reject(new Error("Request is failed"));
            }
        };
        xhr.send();
    });
};

// 
function loadSegment(mediaSource) {
    if(mediaSource.readyState != 'open') return;
    if(mediaSource.sourceBuffers[0].timestampOffset - video.currentTime <= 100) {
        let curSegment = parseInt(video.currentTime / 10) - 6;
        let delArray = new Array();
        let reserveArray = new Array();
        
        for(let i=0; i<loadedSegment.length; i++) {
            if (loadedSegment[i] < curSegment) {
                delArray.push(loadedSegment[i]);
            } else {
                reserveArray.push(loadedSegment[i]);
            }
        }
        
        if( delArray.length > 0 && mediaSource.sourceBuffers[0].updating == false) {
            // 버퍼를 비우는것도 updating이 false일 때 가능한데, for문 써서 연속으로 처리할 수 는 없다.
            // 버퍼를 비우는중에 또 버퍼 비우기 요청이 가면 오류가 난다.
            mediaSource.sourceBuffers[0].remove(0, delArray[delArray.length-1]*10+9);
        }

        // 마지막 segment를 통해 idx 재설정
        loadedSegment = reserveArray;
        idx = loadedSegment[loadedSegment.length-1] + 1;
        appendNextMediaSegment(mediaSource);
    }
}