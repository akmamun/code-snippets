// npm install socket.io-client
import React,{Component} from 'react';
import socketIOClient from "socket.io-client"

class Socket extends Component {

  constructor() {
        super();
        this.state = {
            response: 0, 
            endpoint: "http://localhost:5000"
        };
    }

    componentDidMount() {

        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        console.log("MOUNT");
        socket.on("my", function (data) {
            console.log("GETTING DATA ", data);
        })
    }

    render() {

        return (
            <div>
                Test Socket
            </div>
        )
    }
}
export default Socket;
