#pip install opencv-python
import cv2

url = "rtsp camera link" #put your camera rtsp link
cap = cv2.VideoCapture(url)
fourcc = cv2.VideoWriter_fourcc(*'vp80')
fps = cap.get(cv2.CAP_PROP_FPS)

width, height = int(cap.get(3)), int(cap.get(4))

counter = 0
out = cv2.VideoWriter("filename.webm", fourcc, fps, (width, height)) #video write format
while True:
    read, image = cap.read()
    counter += 1
    print(counter)
    if read:
        
        k = cv2.waitKey(1)

        if cv2.waitKey(32) == ord(' '):
            out.release()
            cap.release()
            break
        out.write(image)
    else:
        cap = cv2.VideoCapture(url)