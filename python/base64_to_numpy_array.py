import numpy as np
import base64

def base64_to_numpy(input_base64):
   img = base64.b64decode(input_base64)
   img_array = np.fromstring(img, np.uint8)
   np_array = cv2.imdecode(img_array, 1)
   print(np_array)
   return np_array

