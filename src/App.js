import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Routes} from "react-router";

const NavBar = () => {
    return (
        <nav>
            <ul>
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

const StudentContent = () => {
    return <div>Student Content</div>;
};

const LibrarianContent = () => {
    return <div>Librarian Content</div>;
};

const App = () => {
    const [role, setRole] = useState('');

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/">
                    {role === 'student' && <StudentContent />}
                    {role === 'librarian' && <LibrarianContent />}
                </Route>
                <Route path="/student">{role === 'student' && <StudentContent />}</Route>
                <Route path="/librarian">{role === 'librarian' && <LibrarianContent />}</Route>
            </Routes>
        </Router>
    );
};

export default App;
