import {Link} from "react-router-dom";
import React from "react";
import './Navbar.styles.css';

const NavBar = () => {
    return (
        <nav className={'navbar'}>
            <ul className="nav-links">
                <li className={'link'}>
                    <Link to="/student">Student</Link>
                </li>
                <li className={'link'}>
                    <Link to="/about">About</Link>
                </li>
                <li className={'link'}>
                    <Link to="/librarian">Librarian</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar
