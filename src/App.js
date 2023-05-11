import React, { useState } from 'react';
import CustomRouter from "./CustomRouter";



const StudentContent = () => {
    return <div className="container">Student Content</div>;
};

const LibrarianContent = () => {
    return <div className="container">Librarian Content</div>;
};

const App = () => {
    const [role, setRole] = useState('');

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    return (
        <CustomRouter />
    );
};

export default App;
