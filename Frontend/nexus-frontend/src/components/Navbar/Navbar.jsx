import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
// import faker from "faker";
import image from "../../images/letter_N_logo.png";

function Navbar() {
    // let image = "f../../images/letter_N_logo.png";

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <table>
                        <tr>
                            <td>
                                <NavLink className="navbar-brand" to="/">
                                    <img src={image} alt="Nexus photo" />
                                </NavLink>
                            </td>
                            <td>
                                <div className="collapse">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/"
                                            >
                                                Event
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">
                                                About us{" "}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
