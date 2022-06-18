# jflix
 
## #프로젝트 설명   
MediaSource Extensions 이하 MSE라 불리는 브라우저 API를 통해서 직접 영상을 재생할 수 있는 환경을 만들어보고자, 유사한 서비스를 제공하는 <넷플릭스, 왓챠>와 같은 서비스를 제공하기 위한 클론코딩을 목표로 만든 프로젝트입니다.

## #MSE란 무엇인가?   
과거에는 인터넷에서 영상을 보기위해서 지금은 사라진 adobe flashplayer 혹은 MS의 silver light와 같은 외부 플러그인을 설치해야 했습니다.    
지금도 비슷하게라면 토익 인강을 듣기위해서 aqua player를 설치하는것과 비슷했습니다.    
하지만 html5가 나오면서 브러우저에서 자체적으로 영상을 재생하는 태그를 추가했고, 이에 표준이 필요해 지면서 mpeg에서는 DASH라는 포맷을 apple에서는 HLS라는 포맷을 만을었습니다.   

이번 프로젝트에서는 DASH, HLS 중 DASH를 이용해서 브라우저에서 영상을 재생하는 방법을 알아보고자 합니다.   

----------------

### #MSE에서 지원하는 영상 코텍 설명   
![image](https://user-images.githubusercontent.com/25381921/174421295-d6e29b11-08eb-4d95-aa4c-adb8c1a5e9ef.png)

### #브라우저 별 지원하는 영상 코덱 종류   
![image](https://user-images.githubusercontent.com/25381921/174421391-cf436ab5-6f4a-41a8-ab91-662a8de5cf32.png)

### #dash를 이용하는 방법
![image](https://user-images.githubusercontent.com/25381921/174423032-eeb9138e-a845-4032-999f-acadb2159560.png)   
일반적으로 dash 방식을 이용하기 위해서는 mdp파일이 필요하다.    
ffmpeg라는 프로그램을 사용하면 mdp파일 및 영상이 생성된다.    

위 사진에서 가장 위 명령어는 MSE, DASH를 사용하기 위한, 브라우저에서 지원해주는 코덱으로 mp4파일을 변환해주는 명령어이다.    
잘 모르겠다면 저 명령어를 가져다 쓰는것 만으로도 MSE를 사용하는데 별다른 문제는 안 생길 것이다.   

나머지 명령어는 화질별로 MDP 파일을 생성하는 것인데, 각각의 화질마다 인코딩을 다시하면 시간이 너무 많이 소요되기 때문에 먼저 인코딩을 한 후에 MDP파일을 생성하는 것을 권한다.   

### #ffmpeg를 통해 생성된 MDP 및 영상/음성 파일
![image](https://user-images.githubusercontent.com/25381921/174422325-b606f662-5083-4902-8284-4a7ce00596d1.png)   
보면 총 3종류의 파일이 생성되는 것을 확인 할 수 있다.   
1. init-steam : MSE 객체를 생성할 때 해당 파일을 인자로 줘야한다.
2. chuck-stream : 설정한 시간별로 분할 된 영상/음성 파일, 위 옵션에선 10초 단위이다.
3. mdp파일 - 영상/음성의 메타데이터

이다. 이제부터 MDP파일을 좀 자세히 알아보자, 또한 ffmpeg로 MDP 생성에 대한 문제점을 알아보자.

![image](https://user-images.githubusercontent.com/25381921/174422852-3b9ac557-58fa-4a9a-8790-6266da52a9a9.png)    

이것이 mdp 파일의 내부 모습이다.
그냥 영상 재생에 필요한 정보를 담은 메타데이터이다.
다만, ffmpeg를 사용했을 때 문제점이라면 MDP파일을 생성할 때 옵션에서 각 세그먼트는 10초 길이로 설정했지만,   
실제 생성되는 영상의 길이는 모두 10초 보다 길거나 짧다. 확인된 가장 짧은 영상은 6초도 있었다.    
-> 이 부분이 내가 옵션 설정을 잘못해서 인지 ffmpeg의 고질적인 문제인진 아직 모르겠다.    
-> 영상 길이가 모두 다르기 때문에 영상을 임의로 이동했을 때, 즉 600초 부근에서 영상/음성의 세그먼트 번호가 60이 아니라는것을 명심해야 한다.    

## 공식 참조
1. https://www.w3.org/TR/media-source-2/
2. https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API
