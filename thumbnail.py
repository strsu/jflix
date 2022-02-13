import cv2
import os

def getCapture(path, name, savePath):

    capture = cv2.VideoCapture(os.path.join(path, name))
    fps = capture.get(cv2.CAP_PROP_FPS)

    if capture.isOpened() is False:
        print(f"Error opening video stream or file: {name}")
    
    end = capture.get(cv2.CAP_PROP_FRAME_COUNT) - 1
    sec = 1
    while capture.isOpened():
        capture.set(cv2.CAP_PROP_POS_FRAMES, sec*fps)    # We set the current frame position
        ret, frame = capture.read()     # Capture frame-by-frame from the video file
        if ret is True:
            cv2.imwrite(os.path.join(savePath, f'{name[:-4]}_{sec}.png'), cv2.resize(frame, (320, 180)) )
            sec += 1
        else:
            break

        if sec >= end:
            capture.release()
            break

if __name__ == "__main__":
    path = r'D:\마블영화\The Avengers (2012)'
    savePath = r'D:\tomcat_1\webapps\ROOT\thumbnail\Avengers'
    name = 'The.Avengers.2012.1080p.BluRay.x264.YIFY.mp4'
    getCapture(path, name, savePath)

