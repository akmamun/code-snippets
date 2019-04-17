import React, {Component} from "react";
import {Link} from "react-router-dom";
// import cctv from "../../static/images/cctv-icon.png";
// import menu from "../../static/images/Menu.png";
// import setting from "../../static/images/settings.png";
// import user from "../../static/images/user.png";
import "./SideNavigation.css";

class SideNavigation extends Component {
    constructor() {
        super()
        this.state = { isOpen: false };
    }

    toggleOpen = () =>
        this.setState(
            { isOpen: true },
            document.addEventListener("click", this.handleCloseOutside)
        );

    handleCloseOutside = () => {
        this.setState(
            { isOpen: false },
            document.removeEventListener("click", this.handleCloseOutside)
        );
    };

    render() {
        const dropdownMenuShow = `dropdown-menu custom-dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div>
                <nav id="sidebar">
                    <div className="sidebar-header">
//                         <img src={menu} alt=""/>
                    </div>

                    <ul className="list-unstyled sidebar-ul">
                        <li className=" dropdown dropright">
                            <div onClick={this.toggleOpen} role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">
//                                 <img src={cctv} alt=""/>
                            </div>
                            <div className={dropdownMenuShow}
                                 aria-labelledby="navbarDropdown">
                                <div className="dropdown-item dropdown-item-title disable-title"
                                  >
                                    All Cameras
                                    <span className="badge badge-pill badge-secondary m-2">
                                        8
                                    </span>
                                </div>
                                <Link to="" className="dropdown-item">
                                    Show All Cameras
                                </Link>
                                <Link to=""  className="dropdown-item">
                                    Add New Camera
                                </Link>
                                <Link to="" className="dropdown-item">
                                    Add Image
                                </Link>
                            </div>
                        </li>
//                         <li>
//                         <img src={setting} alt=""/>
//                         </li>
//                         <li>
//                         <img src={user} alt=""/>
//                         </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideNavigation;
