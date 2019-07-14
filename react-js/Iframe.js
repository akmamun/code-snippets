import React from 'react';

const Iframe = () => {

    const style = { /* this is for full width iframe page load */
        iframe: {
            border: "none",
            top: 0, right: 0,
            bottom: 0, left: 0,
            width: "100%",
            height: "100vh"
        }

    };

    const src = "source route"
    return (
        <div>
            <iframe title="API Documentation" src="" style={style.iframe}/>
        </div>

    );
};

export default Iframe;
