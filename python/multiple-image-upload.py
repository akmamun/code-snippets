
import os
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

def image_upload():
    target = os.path.join(APP_ROOT, 'folder_name/')  #  save folder path
    if not os.path.isdir(target):
            os.mkdir(target)     # create folder if not exits
    db_table = db_table_name  # database table name
    if request.method == 'POST':
        for upload in request.files.getlist("field_name"): #  multiple image handel
            filename = secure_filename(upload.filename)
            destination = "/".join([target, filename])
            upload.save(destination)
        return 'Image Upload Successfully', 201
