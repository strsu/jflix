'use strict';

const ip = "localhost";
const baseUrl = 'http://'+ip+':5000/media/Avengers1/'; //'http://'+ip+':5000/media/mp4/';
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

const videoMaxBufferSize = 30;
const audioMaxBufferSize = 30;
let videoBufferSize = 0;
let audioBufferSize = 0;

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
    }

    console.log(curVideoIdx, videoIdx, needFetch);

    if(needFetch) {
        needFetch = false;

        // 가져와야 할 seg가 있는데, 이동한 시간의 seg와 다르면 제거
        for(let i=0; i<videoFetchingList.length; i++) {
            videoFetchingList.shift();
        }

        for(let i=0; i<audioFetchingList.length; i++) {
            audioFetchingList.shift();
        }

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

        appendNextMediaSegment(mediaSource, "audio");
        appendNextMediaSegment(mediaSource, "video");
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
        appendNextMediaSegment(param, 'video');
        
        loadInit(param, 'audio')
        .then(function(param) {
            isInitFinish = true;
            appendNextMediaSegment(param, 'audio');
        }, function (err) {
            console.error(err);
        });

    }, function (err) {
        console.error(err);
    });
}

function appendNextMediaSegment(mediaSource, type='video') {

    // 세그먼트 추가 불가 할 경우
    if (mediaSource.readyState == "closed") return console.log('close');
    if (mediaSource.sourceBuffers === undefined) return console.log('mediaSource.sourceBuffers is undefined');
    if (needFetch) return console.log("needFetch");

    if(type == 'audio') {
        if (audioFetchingList.length == 0) return console.log("No more need to fetch audio segment");
        if (audioBufferSize >= audioMaxBufferSize) return console.log('audioBufferSize', audioBufferSize);
        if (mediaSource.sourceBuffers[1].updating) {
            setTimeout(appendNextMediaSegment, 100, mediaSource, type);
            return console.log('audio updating');
        }

        if (audioFetchingList[0] > audioDurations[curQ].length) return console.log("out of index");
    } else {
        if (videoFetchingList.length == 0) return console.log("No more need to fetch video segment");
        if (videoBufferSize >= videoMaxBufferSize) return console.log('videoBufferSize', videoBufferSize);
        if (mediaSource.sourceBuffers[0].updating) {
            setTimeout(appendNextMediaSegment, 100, mediaSource, type);
            return console.log('video updating');
        }

        if (videoFetchingList[0] > videoDurations[curQ].length) return console.log("out of index");
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
                    resolve(response);
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    addSeg(mediaSource, type)
    .then(function(response) {
        if(type == 'audio') {
            mediaSource.sourceBuffers[1].appendBuffer(response);
        } else {
            mediaSource.sourceBuffers[0].appendBuffer(response);
        }
        return type;
        /*if(type == 'audio') {
            let AppendAudioHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", AppendAudioHandler);
                audioBufferSize += 1;
                console.log("audio success", audioBufferSize);
                appendNextMediaSegment(mediaSource, type);
            };
            try {
                mediaSource.sourceBuffers[1].addEventListener("updateend", AppendAudioHandler);
                mediaSource.sourceBuffers[1].appendBuffer(response);
            } catch (err) {
                console.error(err, 'audio', audioIdx);
                audioBufferSize -= 1;
                if(err.toString().includes("quota")) {
                    appendNextMediaSegment(mediaSource, type);
                } else if(audioIdx != undefined) {
                    audioFetchingList.push(audioIdx);
                    setTimeout(appendNextMediaSegment, 500, mediaSource, type);
                }
            }
        } else {
            let AppendVideoHandler = function(e) {
                let sourceBuffer = e.target;
                sourceBuffer.removeEventListener("updateend", AppendVideoHandler);
                videoBufferSize += 1;
                console.log("video success", videoBufferSize);
                appendNextMediaSegment(mediaSource, type);
            };
            try {
                mediaSource.sourceBuffers[0].addEventListener("updateend", AppendVideoHandler);
                mediaSource.sourceBuffers[0].appendBuffer(response);
            } catch (err) {
                console.error(err, 'video', videoIdx);
                videoBufferSize -= 1;
                if(err.toString().includes("quota")) {
                    appendNextMediaSegment(mediaSource, type);
                } else if(videoIdx != undefined) {
                    videoFetchingList.push(videoIdx);
                    setTimeout(appendNextMediaSegment, 500, mediaSource, type);
                }
            }*/
    })
    .then(function(result) {
        if(result == "audio") {
            audioBufferSize += 1;
            console.log("audio success", audioIdx, audioBufferSize);
        } else {
            videoBufferSize += 1;
            console.log("video success", videoIdx, videoBufferSize);
        }
        //appendNextMediaSegment(mediaSource, type);
        setTimeout(appendNextMediaSegment, 100, mediaSource, type);
    })
    .catch(function (err) {
        // https://stackoverflow.com/questions/34970272/invalidstateerror-an-attempt-was-made-to-use-an-object-that-is-not-or-is-no-lo
        // 오류가 난 이유는 비디오 데이터를 제대로 불러오기 못 해서라고 한다.
        if(err != 'endOfStream') {
            if(type == 'audio') {
                console.error('err', err, type, audioIdx, audioBufferSize);
                audioFetchingList.unshift(audioIdx);
            } else {
                console.error('err', err, type, videoIdx, videoBufferSize);
                videoFetchingList.unshift(videoIdx);
            }
            //appendNextMediaSegment(mediaSource, type);
            setTimeout(appendNextMediaSegment, 100, mediaSource, type);
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