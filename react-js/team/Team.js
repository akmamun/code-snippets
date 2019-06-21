import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./Team.css"


class Team extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row col-lg-11 team-offset">
                    <div className="col-lg-2">
                        <div className="team">
                            <img src="" alt=""/>
                            <h5>Alex</h5>
                            <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsu
                            </p>
                            <Link to="" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="lg"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="team">
                            <img src="" alt=""/>
                            <h5>Milles</h5>
                            <p>content
                            </p>
                            <Link to="" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="lg"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="team">
                            <img src="" alt=""/>
                            <h5>Kelis</h5>
                            <p>lorem ipsum lorem ipsumlorem ipsumlorem ips
                            </p>
                            <Link to="" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="lg"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="team">
                            <img src="" alt=""/>
                            <h5>Kloim</h5>
                            <p> lorem ipsum lorem ipsumlorem ipsumlorem ips
                            </p>
                            <Link to={"//linkedin.com/in/syed-tanzil-ahmed-54750515b"} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="lg"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="team">
                            <img src="" alt=""/>
                            <h5>Bread </h5>
                            <p>lorem ipsum lorem ipsumlorem ipsumlorem ips
                            </p>
                            <Link to="" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="lg"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Team;
