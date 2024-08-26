import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.module.css'
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About us </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
