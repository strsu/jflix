# jflix
 넷플릭스, 왓챠 클론코딩


### MSE에서 지원하는 영상 코텍 설명   
![image](https://user-images.githubusercontent.com/25381921/174421295-d6e29b11-08eb-4d95-aa4c-adb8c1a5e9ef.png)

### 브라우저 별 지원하는 영상 코덱 종류   
![image](https://user-images.githubusercontent.com/25381921/174421391-cf436ab5-6f4a-41a8-ab91-662a8de5cf32.png)

### dash를 이용하는 방법
![image](https://user-images.githubusercontent.com/25381921/174422038-27f68975-3ba0-4422-96a2-268ce145cd2b.png)   
일반적으로 dash 방식을 이용하기 위해서는 mdp파일이 필요하다.    
ffmpeg라는 프로그램을 사용하면 mdp파일 및 영상이 생성된다.    

위 사진에서 가장 위 명령어는 MSE, DASH를 사용하기 위한, 브라우저에서 지원해주는 코덱으로 mp4파일을 변환해주는 명령어이다.    
잘 모르겠다면 저 명령어를 가져다 쓰는것 만으로도 MSE를 사용하는데 별다른 문제는 안 생길 것이다.   

나머지 명령어는 화질별로 MDP 파일을 생성하는 것인데, 각각의 화질마다 인코딩을 다시하면 시간이 너무 많이 소요되기 때문에 먼저 인코딩을 한 후에 MDP파일을 생성하는 것을 권한다.   

## 공식 참조
1. https://www.w3.org/TR/media-source-2/
2. https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API
