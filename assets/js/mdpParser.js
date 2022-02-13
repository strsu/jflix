'use strict';

let selectQuality = 0           // 현재 화질
let qualityList = new Array();  // 화질 리스트
let bandwidths = new Array();

let videoCodecs = new Array();
let audioCodecs = new Array();

let videoDuration = new Array();
let audioDuration = new Array();

let ip = 'localhost';

let init = 'http://'+ip+':5000/media/Avengers1/avengers1.mdp';

fetchAB_(init, 'text').then((response)=>{
    if(!response) {
        return;
    } else {
        xmlParser(response);
    }
}).catch((err)=>{
    console.error('ERR:', err); // Error 출력
});

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

function xmlParser(xml) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml,"text/xml");

    let qualities = xmlDoc.getElementsByTagName("Period");

    // 각 화질에 대해서
    for(let i=0; i<qualities.length; i++) {
        // 비디오
        let video = qualities[i].getElementsByTagName("AdaptationSet")[0];

        // 현재 세그먼트의 화질
        qualityList.push(video.getAttribute("maxWidth")+"x"+video.getAttribute("maxHeight"));
        
        video = video.getElementsByTagName("Representation")[0];
        let codec = video.getAttribute("codecs")
        codec = 'video/mp4; codecs=' + '"' + codec + '"';
        videoCodecs.push(codec);
        bandwidths.push(video.getAttribute("bandwidth"));

        video = video.getElementsByTagName("SegmentTemplate")[0];
        videoDuration.push(getVideoInfo(video));

        // 오디오
        let audio = qualities[i].getElementsByTagName("AdaptationSet")[1];

        audio = audio.getElementsByTagName("Representation")[0];
        let codec = audio.getAttribute("codecs")
        codec = 'audio/mp4; codecs=' + '"' + codec + '"';
        audioCodecs.push(codec);

        audio = audio.getElementsByTagName("SegmentTemplate")[0];
        audioDuration.push(getAudioInfo(audio));
    }
}

function getVideoInfo(video) {
    let s = video.getElementsByTagName("S");
    let timescale = video.getAttribute('timescale');

    let videoDuration = new Array();
    let duration = 0;
    
    let idx = 1;
    let idx_ = '';
    for(let i = 0; i < s.length; i++) {

        let d = s[i].getAttribute('d');
        duration += (d / timescale);
        videoDuration.push((d / timescale));

        // 'r'은 길이가 같은 세그먼트의 갯수
        if( s[i].getAttribute('r') != null) {
            for(let j=0; j < s[i].getAttribute('r'); j++) {
                videoDuration.push((d / timescale));
            }
        }
    }

    return videoDuration;
}

function getAudioInfo(audio) {
    let s = audio.getElementsByTagName("S");
    let timescale = audio.getAttribute('timescale');

    let audioDuration = new Array();
    let duration = 0;

    for(let i = 0; i < s.length; i++) {

        let d = s[i].getAttribute('d');
        duration += (d / timescale);
        audioDuration.push((d / timescale));

        // 'r'은 길이가 같은 세그먼트의 갯수
        if( s[i].getAttribute('r') != null) {
            for(let j=0; j < s[i].getAttribute('r'); j++) {
                audioDuration.push((d / timescale));
            }
        }
    }

    return audioDuration;
}