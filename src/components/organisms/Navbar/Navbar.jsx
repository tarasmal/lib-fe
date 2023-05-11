import {Link} from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/student">Student</Link>
                </li>
                <li>
                    <Link to="/librarian">Librarian</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar
