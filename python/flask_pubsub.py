import os, time
from flask import Flask
import flask_socketio
from flask_socketio import SocketIO
from google.cloud import pubsub_v1

app = Flask(__name__)

socketio = SocketIO(app,cors_allowed_origins="http://localhost:3000") 

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = os.getcwd() + "/Pubsub.json"  #import pubsub serveice credential json file


@socketio.on('connect')       
def receive_pubsub_messages(): 
    MESSAGE = []
    project_id= "Your Google Cloud Project ID"
    subscription_name= "Your Pub/Sub subscription topic name"
    subscriber = pubsub_v1.SubscriberClient()
    subscription_path = subscriber.subscription_path(project_id, subscription_name)

    def callback(message):
        data = message.data.decode('utf-8') 
        message.ack()
        MESSAGE.append(data) 
        socketio.emit('receive_event', {'data' : MESSAGE}, broadcast=True)   

    subscriber.subscribe(subscription_path, callback=callback)

    # while True:
    #     time.sleep(30)

if __name__ == '__main__':
    socketio.run(app, debug=True)
