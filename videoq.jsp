<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </head>
    <body>
        <div class="player">
            <span class="videoArea">
              <video class="video" controls width="800"></video>
            </span>
            <span>
                <span><button onclick="qChanger(0)">160</button></span>
                <span><button onclick="qChanger(1)">320</button></span>
                <span><button onclick="qChanger(2)">640</button></span>
                <span><button onclick="qChanger(3)">1280</button></span>
            </span>
            <script src="assets/js/videoQ1.js" defer></script>
        </div>
    </body>
</html>