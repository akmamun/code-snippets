// Class baised component
import React, { Component } from 'react';

class Webcam extends Component {

    render() {

        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true},
                stream => {
                    let camera = document.getElementById('camera');
                    camera.srcObject = stream;
                    camera.onloadedmetadata = () => {
                        camera.play();
                    }
                }, err => {
                    console.log(err)
                }
            );
        }


        return (
            <div>
                <video id="camera" width="640" height="480" autoPlay/>
            </div>
        );


    }
}
export default Webcam;
// stream snippet
// if (navigator.getUserMedia) {   // navigator.getUserMedia pass three arguments
//             navigator.getUserMedia({video: true}, //if want audio can be true 
//                 stream => {
//                     let camera = document.getElementById('camera'); //class or id for load stream on html
//                     camera.srcObject = stream;  //src of stream
//                     camera.onloadedmetadata = () => {
//                         camera.play();
//                     }
//                 }, err => {
//                     console.log(err)
//                 }
//             );
//         }
