import React from 'react';
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <div className="container" style={{ marginTop: '220px',textAlign:"center"}} >
            <h2>Page not found </h2>
            <Link to="/">Go to home</Link>
        </div>

    );
};


export default NotFound;

// Add in APP.js following way
//<Route path="*" component={NotFound}/> 
