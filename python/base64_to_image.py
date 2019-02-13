SAVE_DIR = os.path.dirname(os.path.abspath(__file__))

def base64_to_image(filename):
    path = os.path.join(SAVE_DIR, 'images/')
    if not os.path.isdir(path):
        os.mkdir(path)
    data = base64.b64decode(filename)
    filename = 'frame' + str(datetime.datetime.now().microsecond) + '.jpg'
    destination = "/".join([path, filename])
    with open(destination, 'wb') as f:
        f.write(data)
    return "success", 201
# @app.route('/frame/upload/', methods=['GET', 'POST'])
# def upload_image():
#     if request.method == "POST":
#         file = request.form['images']
#         convert_to_image(file)
#     return "Successfully", 201
