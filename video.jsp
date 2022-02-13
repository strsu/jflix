<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main2.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    </head>
    <body>
        <div class="player">
            <div class="videoArea">
              <video class="video"></video>
            </div>
            <div class="controller">
                <div class="progressBar">
                    <span class="nowPlayTime">00:00:00</span>
                    <div class="bar">
                        <div class="currentBar">
                          <a href="#"></a>
                        </div>
                        <div class="progressMove">
                            <div class="progressThumbnail"></div>
                            <div class="progressTime"></div>
                        </div>
                    </div>
                    <span class="leftPlayTime">00:00:00</span>
                </div>
                <div class="btn">
                    <div class="leftBtn">
                        <span class="playBtn" onclick="control('play')">
                            <img src='./images2/playBtn.png'/>
                        </span>
                        <span class="pauseBtn" onclick="control('pause')">
                            <img src='./images2/pauseBtn.png'/>
                        </span>
                        <span class="prevBtn"><img src='./images2/prev.png' /></span>
                        <span class="nextBtn"><img src='./images2/next.png' /></span>
                        <span class="soundBtn"><img src='./images2/sound.png' /></span>
                    </div>
                    <div class="rightBtn">
                        <span class="fullBtn" onclick="openFullscreen()" ><img src='./images2/full.png' /></span>
                    </div>
                </div>
            </div>
            <script src="assets/js/video2.js" defer></script>
            <script src="assets/js/videoEv.js" defer></script>
            <script>
                function control(f) {
                    if(f == 'play') {
                        document.getElementsByClassName("video")[0].play();
                        document.getElementsByClassName('playBtn')[0].style.display = 'none';
                        document.getElementsByClassName('pauseBtn')[0].style.display = 'flex';
                    } else if(f == 'pause') {
                        document.getElementsByClassName("video")[0].pause();
                        document.getElementsByClassName('playBtn')[0].style.display = 'flex';
                        document.getElementsByClassName('pauseBtn')[0].style.display = 'none';
                    }
                }
            </script>
        </div>
    </body>
</html>