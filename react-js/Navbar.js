// npm install react-router-dom && bootstrap

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
 
class Navbar extends Component {
    state = {
        show: false
    }

    showMenu = () => {
        this.setState({
            show: !this.state.show
        });
    }


    render() {
        const on = `collapse navbar-collapse ${this.state.show ? 'show' : " "}`

        return (
            <nav className="navbar navbar-expand-lg navbar-light top-fixed">
                <Link className="navbar-brand" to="/">
                    <div className="logoholder">
                        <div className="logo">
                           Logo
                </div>
                    </div>
                </Link>
                <button onClick={this.showMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={on} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <NavLink to="/"className="nav-link">
                                Home
                    </NavLink>
                        </li>
                 
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
