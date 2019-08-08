# pip install flask flask_socketio 
from flask import Flask
from flask_socketio import SocketIO,emit
import flask_socketio

app = Flask(__name__)
socketio = SocketIO(app,cors_allowed_origins="*") 

@socketio.on('connect')
def test_message():
    data = "asd"
    emit('my', {data: 'got it!'})

if __name__ == '__main__':
    # app.run(debug=True)
        socketio.run(app, debug=True)
    
