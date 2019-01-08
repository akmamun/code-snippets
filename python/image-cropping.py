from PIL import Image

image_input = Image.open("image_name.jpg")  # image name jpeg
height = 400  # define height size of cropping image
width = 400   # define width size of cropping image
img_height, img_width = (1200, 1200)
for i in range(0, img_height, height):  # 0,1200,400
    for j in range(0, img_width, width):  # 0,1200,400
        box = (j, i, j + width, i + height)
        cropped_img = image_input.crop(box)
        cropped_img.show()   # show cropping image preview
