import React from "react";
import "./Navbar.css";
import p1 from "../../assets/Profile/p1.jpg";
import p2 from "../../assets/Profile/p2.jpg";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const user = true;

    return (
        <nav>
            <div className="navbar-wrapper">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/">Logo</Link>
                        <div id="toggler">
                            <GiHamburgerMenu />
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="nav-right-left">
                            <ul className="main-menu">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about">about</NavLink>
                                </li>
                                {user || (
                                    <>
                                        <li>
                                            <NavLink to="register">
                                                Register
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="login">login</NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="nav-right-right">
                            {user ? (
                                <>
                                    <img src={p1} alt="profile" />
                                    <h6>profile name</h6>
                                    <button className="nav-btn">logout</button>
                                </>
                            ) : (
                                <>
                                    <NavLink className="nav-btn" to="register">
                                        Get Start
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
