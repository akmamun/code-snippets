# pip install opencv-python
import cv2

camera = cv2.VideoCapture(0)  # use 0 for web camera
#  for cctv camera'rtsp://username:password@ip_address:554/user=username_password='password'_channel=channel_number_stream=0.sdp'
def camera_stream():
    while True:
        # Capture frame-by-frame
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame) # or return cv2.imencode('.jpg', frame)[1].tobytes()
            return buffer.tobytes()