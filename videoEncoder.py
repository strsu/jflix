import os
import time
import subprocess
from multiprocessing import Process

#os.environ['path'] = r'C:\ffmpeg-4.4.1\bin\ffmpeg.exe'
workdir = os.path.dirname(os.path.realpath(__file__))

videoPath = r'D:\dataset\a\yy'
videoName = 'MIDV-024.mp4'
savePath = os.path.join(r'D:\tomcat_1\webapps\ROOT\media\res', videoName[:-4])

def get_length(input_video):
    result = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', input_video], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return float(result.stdout)

def runEncoding(where = 'forth'):
    if not os.path.isdir(savePath):
        os.makedirs(savePath)

    runningTime = get_length(f'{os.path.join(videoPath,videoName)}')
    start = 0
    end = int((int(runningTime)//10)/2)
    if where == 'back':
        start = int((int(runningTime)//10)/2)+1
        end = int(runningTime)//10
    elif where == 'full':
        end = int(runningTime)//10

    for i in range(162, end):
        print(f'{i}/{int(runningTime)//10}', end='\n')
        s = time.time()
        command_480p = [ 'ffmpeg',
                    #'-hwaccel', 'cuda', # 이유는 모르겟는데 gpu가 더 느림, cpu 평균 65 -> gpu 평균 140 ???
                    '-y', '-i', f'{os.path.join(videoPath,videoName)}',
                    '-vcodec', 'libx264',
                    '-acodec', 'aac',
                    '-pix_fmt', 'yuv420p',
                    '-movflags', 'empty_moov+default_base_moof+frag_keyframe',
                    '-profile:v', 'baseline',
                    #'-vf','scale=1970:1080',
                    #'-vf','scale=1280:720',
                    #'-vf','scale=800:480',
                    '-vf','scale=-1:480',
                    '-threads', '2',
                    '-ss', str(i*10),
                    '-t', '10', # or -to (i+1)*10
                    f'{os.path.join(savePath,videoName[:-4] + "_" +str(i) + ".mp4")}' ]
        
        result = subprocess.Popen(command_480p, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out, err = result.communicate()
        exitcode = result.returncode

        print(f'decodingTime: {time.time()-s}', end='\n')

        if exitcode != 0:
            print(exitcode, out.decode('utf8'), err.decode('utf8'))

runEncoding('full')

p1 = Process(target=runEncoding, args=('forth',))
p2 = Process(target=runEncoding, args=('back',))

#p1.start()
#p2.start()

#p1.join()
#p2.join()


'''
ffmpeg -i D:/tomcat_1/webapps/ROOT/media/2.mp4 -vcodec libx264 -acodec aac -pix_fmt yuv420p -movflags empty_moov+default_base_moof+frag_keyframe -profile:v baseline D:/tomcat_1/webapps/ROOT/media/res/2.mp4
https://stackoverflow.com/questions/57350018/ffmpeg-encode-mp4-for-html-mediasource-stream
'''