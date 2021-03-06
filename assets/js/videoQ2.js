'use strict';

const ip = "localhost";
const baseUrl = 'http://'+ip+':4000/Avengers1/'; // 'http://'+ip+':5000/media/Avengers1/';
let mdp = baseUrl + 'avengers1.mdp';
let video = document.getElementsByClassName('video')[0];

let GmediaSource = null;

let isInitFinish = false;

let qList = new Array();    // 비디오 퀄리티 리스트
let curQ = 0;               // 현재 비디오 퀄리티

let videoCodecs = new Array();
let audioCodecs = new Array();

let videoDurations = new Array();
let audioDurations = new Array();

let videoIdx = 1;
let audioIdx = 1;

let lastAppendVideoSeg = 0;
let lastAppendAudioSeg = 0;

// 버퍼 사이즈를 세그먼트 개수로 하지 말고, 시간으로 하면 어떨꺼
// 5분 = 300초
const videoMaxBufferSize = 30;
const audioMaxBufferSize = 30;
let videoBufferSize = new Array();
let audioBufferSize = new Array();

let needFetch = false;
let videoFetchingList = new Array();
let audioFetchingList = new Array();

/**
 * stop : 
 * play : 
 * pause : 
 * seek : 
 */
let state = 'stop';

init();

function init() {
    getXml();
}

function initMedia() {
    let Unsupported = new Array();

    for(let i=0; i<videoCodecs.length; i++) {
        if(!MediaSource.isTypeSupported(videoCodecs[0]) || !MediaSource.isTypeSupported(audioCodecs[0])) {
            Unsupported.push(i);
        }
    }
    
    for(let i=0; i<Unsupported.length; i++) {
        let idx = Unsupported[i];
        qList.pop(idx);
        videoCodecs.pop(idx);
        audioCodecs.pop(idx);
        videoDurations.pop(idx);
        audioDurations.pop(idx);
    }

    let mediaSource = new MediaSource;
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);

    GmediaSource = mediaSource;
    
    mediaSource.addEventListener('sourceopen', onSourceOpen);

    for(let i=0; i<videoDurations[curQ].length; i++) {
        videoBufferSize.push(0);
    }

    for(let i=0; i<audioDurations[curQ].length; i++) {
        audioBufferSize.push(0);
    }
}

function onSourceOpen (_) {
    let mediaSource = this;

    mediaSource.removeEventListener('sourceopen', onSourceOpen);
    let addSourceBuffers = function(param) {
        return new Promise(function (resolve, reject) {
            let videoSourceBuffer = param.addSourceBuffer(videoCodecs[curQ]);
            let audioSourceBuffer = param.addSourceBuffer(audioCodecs[curQ]);
                videoSourceBuffer.mode = 'segments';
                audioSourceBuffer.mode = 'segments';
            
            if(param.sourceBuffers.length == 2) {
                resolve(param);
            } else {
                reject('fail to add');
            }
        });
    }

    for(let i=videoIdx; i<videoIdx+videoMaxBufferSize; i++) {
        videoFetchingList.push(i);
    }

    for(let i=audioIdx; i<audioIdx+audioMaxBufferSize; i++) {
        audioFetchingList.push(i);
    }

    addSourceBuffers(mediaSource)
    .then(function(param){
        video.addEventListener("progress", onProgress.bind(param));
        video.addEventListener("timeupdate", onTimeupdate.bind(param));

        video.addEventListener("seeked", onSeeked.bind(param));
        video.addEventListener("seeking", onSeeking.bind(param));
        
        loadInitSeg(param);
    }, function (err) {
        console.error(err);
    });

}

// progress 이벤트 핸들러로 플레이될 세그먼트의 데이터를 준비해 sourceBuffer에 제공한다.
function onProgress(video_) {
    let mediaSource = this;
    let video = video_;

    if(!isInitFinish) return;
    /*
    console.log('onProgress', state);

    if(state == 'play') {
        appendNextMediaSegment(mediaSource);
        appendNextMediaSegment(mediaSource, 'audio');
    }*/
}

/**
 * @param {*} _ : this
 * @description : 현재 재생위치가 바뀌었을 때 발생
 */
 function onTimeupdate(video_) {
    let mediaSource = this;

    console.log("onTimeupdate");

    if(video_.seeking) return;

    let curTime = video_.target.currentTime;

    let curTimeIdx = getCurSeg(curTime, "video");

    let endVideoSeg   = getCurSeg(mediaSource.sourceBuffers[0].buffered.end(0), "video");
    let endAudioSeg   = getCurSeg(mediaSource.sourceBuffers[1].buffered.end(0), "audio");
    /*
        mediaSource.sourceBuffers[0].buffered.end(0)
        사실 mediaSource에 버퍼는 즉각적으로 갱신이 안 되는 것 같다.
        실제로는 불러온 세그먼트지만, 버퍼에 아직 정상적으로 적용이 안 되서 안 가져온 세그먼트라 판단할 가능성이 높다.
        때문에 전체 세그먼트수 만큼의 메모리를 할당 받아서, 가져온 세그먼트는 1, 안 가져온 세그먼트는 0으로 표기하는
        방식을 이용해서 버퍼를 관리하려고 한다/    
    */

    //console.log("curTimeIdx, endVideoSeg, endAudioSeg", curTimeIdx, endVideoSeg, endAudioSeg);

    let term = 80;
    let needF = false;

    if (curTime + term >= mediaSource.sourceBuffers[0].buffered.end(0) || 
        curTime + term >= mediaSource.sourceBuffers[1].buffered.end(0)) {
            needF = true;
        }

    function bufferUpdate() {
        return new Promise(function (resolve, reject) {

            if(video_.seeking) resolve("nomore");

            // 재생된 버퍼 비우기
            if(videoDurations[curQ][curTimeIdx-1] + 5 <= curTime) {
                mediaSource.sourceBuffers[0].remove(0, videoDurations[curQ][curTimeIdx-1])
            }

            if(audioDurations[curQ][curTimeIdx-1] + 5 <= curTime) {
                mediaSource.sourceBuffers[1].remove(0, audioDurations[curQ][curTimeIdx-1])
            }

            if(needF) {
                resolve("complete");
            } else {
                resolve("nomore");
            }
        });
    }

    bufferUpdate()
    .then(function(response) {
        console.log('response:', response, needF, getCurSeg(curTime, "video"), endVideoSeg, getCurSeg(curTime, "audio"), endAudioSeg);
        if(response == "complete") {
            if(curTime + term >= mediaSource.sourceBuffers[0].buffered.end(0)) {
                for(let i=1; i<=videoMaxBufferSize - endVideoSeg + getCurSeg(curTime, "video"); i++) {
                    videoFetchingList.push(endVideoSeg + i);
                }
                appendNextMediaSegment(mediaSource, "video", "onTimeupdate");
            }
        
            if(curTime + term >= mediaSource.sourceBuffers[1].buffered.end(0)) {
                for(let i=1; i<=audioMaxBufferSize - endAudioSeg + getCurSeg(curTime, "audio"); i++) {
                    audioFetchingList.push(endAudioSeg + i);
                }
                console.log('@@', audioFetchingList.length);
                appendNextMediaSegment(mediaSource, "audio", "onTimeupdate");
            }

            needF = false;
        }
    });
 }

/**
 * @param {*} _ : this
 * @description : These examples add an event listener for the HTMLMediaElement's emptied event, 
 *                then post a message when that event handler has reacted to the event firing.
 */
 function onSeeked(video_) {
    let mediaSource = this;
    console.log("seeked");
}

/**
 * @param {*} _ : this
 * @description : seeking 이벤트 핸들러로 시킹된 해당 위치의 미디어 데이터를 제공하는 작업을 수행한다.
 */
function onSeeking(video_) {
    let mediaSource = this;

    // 가끔 video_ 가 undefined로 인식됨.
    // 글로벌 변수 video도 똑같음.
    // undefined일 때 이를 해결 할 방법이 필요.
    // 안 그러면 영상 또는 오디오 데이터를 못 불러온다.

    let curVideoIdx = getCurSeg(video_.target.currentTime, "video");
    let curAudioIdx = getCurSeg(video_.target.currentTime, "audio");

    if( mediaSource.sourceBuffers.length > 0 && mediaSource.sourceBuffers[0].buffered.length > 0) {
        for(let i=0; i<mediaSource.sourceBuffers[0].buffered.length; i++) {
            let startSeg = getCurSeg(mediaSource.sourceBuffers[0].buffered.start(0), "video");
            let endSeg   = getCurSeg(mediaSource.sourceBuffers[0].buffered.end(0),   "video");

            // 버퍼가 현재 재생 영역이라면 추가 데이터를 가져 올 필요 없다.
            if(startSeg <= curVideoIdx && curVideoIdx <= endSeg) needFetch = false;
            else {
                // 버퍼가 현재 재생 영역이 아니면 버퍼 삭제
                mediaSource.sourceBuffers[0].remove(0, mediaSource.sourceBuffers[0].buffered.end(0))
                mediaSource.sourceBuffers[1].remove(0, mediaSource.sourceBuffers[1].buffered.end(0))
                needFetch = true;
            }
        }
    } else {
        needFetch = true;
    }

    console.log(curVideoIdx, videoIdx, needFetch);

    function fetchListUpdater() {
        return new Promise(function(resolve, reject) {
            // 가져와야 할 seg가 있는데, 이동한 시간의 seg와 다르면 제거
            videoFetchingList = new Array();
            audioFetchingList = new Array();

            for(let i=curVideoIdx; i<curVideoIdx+videoMaxBufferSize; i++) {
                videoFetchingList.push(i);
            }

            for(let i=curAudioIdx; i<curAudioIdx+audioMaxBufferSize; i++) {
                audioFetchingList.push(i);
            }

            // 버퍼를 지우고 새로운 세그먼트를 가져온다.
            //mediaSource.sourceBuffers[0].remove(0, mediaSource.sourceBuffers[0].buffered.end(0))
            videoBufferSize = 0;
            audioBufferSize = 0;

            resolve("complete");
        });
    }

    if(needFetch) {
        needFetch = false;

        fetchListUpdater()
        .then(function(response) {
            if(response == "complete") {
                appendNextMediaSegment(mediaSource, "audio", "onSeeking");
                appendNextMediaSegment(mediaSource, "video", "onSeeking");
            }
        });
    }
}

function loadInitSeg(mediaSource) {

    if(mediaSource.sourceBuffers.length < 1) return console.log('fail to load init seg');

    let loadInit = function(param, type) {
        return new Promise(function (resolve, reject) {
            let folder = qList[curQ].split('x')[0];
            let Init = baseUrl+folder+'/init-stream0.m4s';
            if (type == 'audio') {
                Init = baseUrl+folder+'/init-stream1.m4s';
            }
            fetchAB_(Init).then((response)=>{
                if(!response) {
                    param.endOfStream("network");
                    console.log('endOfStream');
                    return;
                } else {
                    let firstAppendHandler = function(e) {
                        let sourceBuffer = e.target;
                        sourceBuffer.removeEventListener("updateend", firstAppendHandler);
                        resolve(param);
                    }
                    
                    if (type == 'audio') {
                        param.sourceBuffers[1].addEventListener("updateend", firstAppendHandler);
                        param.sourceBuffers[1].appendBuffer(response);
                    } else {
                        param.sourceBuffers[0].addEventListener("updateend", firstAppendHandler);
                        param.sourceBuffers[0].appendBuffer(response);
                    }
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    loadInit(mediaSource, 'video')
    .then(function(param) {

        state = 'play';

        param.duration = videoDurations[curQ][videoDurations[curQ].length-1];
        appendNextMediaSegment(param, 'video', "loadInitSeg");
        
        loadInit(param, 'audio')
        .then(function(param) {
            isInitFinish = true;
            appendNextMediaSegment(param, 'audio', "loadInitSeg");
        }, function (err) {
            console.error(err);
        });

    }, function (err) {
        console.error(err);
    });
}

function appendNextMediaSegment(mediaSource, type='video', from="") {

    // 세그먼트 추가 불가 할 경우
    if (mediaSource.readyState == "closed") return console.log('close');
    if (mediaSource.sourceBuffers === undefined) return console.log('mediaSource.sourceBuffers is undefined');
    if (needFetch) return console.log("needFetch");

    if(type == 'audio') {
        if (audioFetchingList.length == 0) return console.log("No more need to fetch audio segment");
        if (audioBufferSize >= audioMaxBufferSize) return console.log('audioBufferSize', audioBufferSize);
        if (mediaSource.sourceBuffers[1].updating) {
            setTimeout(appendNextMediaSegment, 100, mediaSource, type, "appendNextMediaSegment");
            return console.log('audio updating');
        }

        if (audioFetchingList[0] > audioDurations[curQ].length) return console.log("out of index");
    } else {
        if (videoFetchingList.length == 0) return console.log("No more need to fetch video segment");
        if (videoBufferSize >= videoMaxBufferSize) return console.log('videoBufferSize', videoBufferSize);
        if (mediaSource.sourceBuffers[0].updating) {
            setTimeout(appendNextMediaSegment, 100, mediaSource, type, "appendNextMediaSegment");
            return console.log('video updating');
        }

        if (videoFetchingList[0] > videoDurations[curQ].length) return console.log("out of index");
    }

    // onTimeupdate에서 호출된 경우
    if(from == "onTimeupdate") {
        
    }


    function addSeg(param, type) {
        return new Promise(function(resolve, reject){
            let folder = qList[curQ].split('x')[0];
            let url = baseUrl+folder;
            if(type == 'audio') {
                audioIdx = audioFetchingList.shift();
                url += '/chunk-stream1-'+audioIdx.toString().padStart(5, '0')+'.m4s';
                //console.log("audioIdx", audioIdx);
            } else {
                videoIdx = videoFetchingList.shift();
                url += '/chunk-stream0-'+videoIdx.toString().padStart(5, '0')+'.m4s';
                //console.log("videoIdx", videoIdx);
            }

            fetchAB_(url)
            .then((response)=>{
                if(!response) {
                    param.endOfStream("network");
                    console.log('endOfStream');
                    reject('endOfStream');
                } else {
                    if(type == "audio") resolve(response, audioIdx);
                    else resolve(response);
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    addSeg(mediaSource, type)
    .then(function(response) {
        /*
            updateend 이벤트가 실패를 하든 성공을 하든 둘 다 호출됨.
            버퍼 삽입 실패를 잡을 수 없음.
            더욱이 이벤트에서 appendNextMediaSegment 함수를 호출하면
            같은 세그먼트를 여러번 호출해서 오류가 남
            즉, 512 seg를 수차례 fetch -> insert 를 겪에 됨.
        */
        if(type == 'audio') {
            mediaSource.sourceBuffers[1].appendBuffer(response);
        } else {
            mediaSource.sourceBuffers[0].appendBuffer(response);
        }
        return type;
    })
    .then(function(result) {
        if(result == "audio") {
            audioBufferSize[audioIdx-1] = 1;
            //console.log("audio success", audioIdx, audioBufferSize);
        } else {
            videoBufferSize[videoIdx-1] = 1;
            for(let i=0; i<mediaSource.sourceBuffers[0].buffered.length; i++) {
                console.log("video success", videoIdx, 
                    mediaSource.sourceBuffers[0].buffered.start(i),
                    mediaSource.sourceBuffers[0].buffered.end(i)
                );
            }
            
        }
        //appendNextMediaSegment(mediaSource, type);
        setTimeout(appendNextMediaSegment, 100, mediaSource, type, "appendNextMediaSegment");
    })
    .catch(function (err) {
        // https://stackoverflow.com/questions/34970272/invalidstateerror-an-attempt-was-made-to-use-an-object-that-is-not-or-is-no-lo
        // 오류가 난 이유는 비디오 데이터를 제대로 불러오기 못 해서라고 한다.
        if(err != 'endOfStream') {
            if(type == 'audio') {
                console.error('err', err, type, audioIdx, audioBufferSize);
                console.log("b", audioFetchingList);
                audioFetchingList.unshift(audioIdx);
                console.log("a", audioFetchingList);
            } else {
                console.error('err', err, type, videoIdx, videoBufferSize);
                console.log("b", videoFetchingList);
                videoFetchingList.unshift(videoIdx);
                console.log("b", videoFetchingList);
            }
            //appendNextMediaSegment(mediaSource, type);
            setTimeout(appendNextMediaSegment, 100, mediaSource, type, "appendNextMediaSegment");
        }
    });
    
}

function qChanger(q) {
    if(curQ != q) {

        state = 'stop';

        curQ = q;

        let curTime = video.currentTime;

        videoIdx = getCurSeg(curTime, 'video');
        audioIdx = getCurSeg(curTime, 'audio');

        console.log(videoIdx, audioIdx);

        videoBufferSize = 0;
        audioBufferSize = 0;

        // 이거 false로 안 하면 버퍼 생성전에 onProgress가 nextSeg를 호출해서 오류 남
        isInitFinish = false;

        if(GmediaSource.sourceBuffers.length > 1) {
            GmediaSource.removeSourceBuffer(GmediaSource.sourceBuffers[1]);
            GmediaSource.removeSourceBuffer(GmediaSource.sourceBuffers[0]);
        }
        
        let mediaSource = new MediaSource;
            GmediaSource = mediaSource;
        video.src = URL.createObjectURL(mediaSource);

        video.currentTime = curTime;
        
        console.log('qChanger:', mediaSource.readyState); // closed

        mediaSource.addEventListener('sourceopen', onSourceOpen);
    }
}


function getXml() {
    fetchAB_(mdp, 'text').then((response)=>{
        if(!response) {
            return;
        } else {
            xmlParser(response);
        }
    }).catch((err)=>{
        console.error('ERR:', err); // Error 출력
    });
}

function xmlParser(xml) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");

    let quality = xmlDoc.getElementsByTagName("Period");

    for(let i=0; i<quality.length; i++) {
        let tag = quality[i].getElementsByTagName("AdaptationSet");
        
        let res = getSeg(tag[0]);
        videoDurations.push(res);

        res = getSeg(tag[1], "audio");
        audioDurations.push(res);
    }

    // mediasource 초기화 함수
    // 여기서 호출해야 함.
    initMedia();
}

function getSeg(tag, type='video') {

    tag = tag.getElementsByTagName("Representation")[0];

    if(type == "video") {
        let codec = 'video/mp4; codecs="'+ tag.getAttribute("codecs") +'"';
        videoCodecs.push(codec);
        qList.push(tag.getAttribute("width")+'x'+tag.getAttribute("height"));
    } else {
        let codec = 'audio/mp4; codecs="'+ tag.getAttribute("codecs") +'"';
        audioCodecs.push(codec);
    }

    tag = tag.getElementsByTagName("SegmentTemplate")[0];
    let timescale = tag.getAttribute('timescale');
    
    let duration = new Array();
    let d = 0

    tag = tag.getElementsByTagName("S");

    for(let i=0; i<tag.length; i++) {
        d = d + tag[i].getAttribute('d')/timescale;
        duration.push(d);

        let r = tag[i].getAttribute('r');
        if(r == null) continue;

        for(let j=0; j<r; j++) {
            d = d + tag[i].getAttribute('d')/timescale;
            duration.push(d);
        }
    }
    return duration;
}

function fetchAB_ (url, type='arraybuffer') {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest;+
        xhr.open('get', url);
        xhr.responseType = type;
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

function getCurSeg(curTime, type='video') {

    let duration = videoDurations[curQ];
    if(type == 'audio') {
        duration = audioDurations[curQ];
    }

    if(curTime <= duration[0]) return 1;

    // 하나의 세그먼트가 10초라고 가정했을 때
    let expectSegNum = parseInt(curTime / 10) < duration.length ? parseInt(curTime / 10) : duration.length ;  // 예상 현재시간 세그id

    // 예상되는 재생 시간이 현재 시간보다 크면
    if(duration[expectSegNum] > curTime) {
        for(let i=expectSegNum; i > 0; i--) {
            if(curTime > duration[i-1] && curTime < duration[i]) return i+1;
        }
    } else {
        for(let i=expectSegNum; i < duration.length; i++) {
            if(curTime > duration[i] && curTime < duration[i+1]) return i+1;
        }
    }
}