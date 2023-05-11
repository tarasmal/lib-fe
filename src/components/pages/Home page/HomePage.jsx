import React from 'react';
import Navbar from "../../organisms/Navbar/Navbar";
import {Outlet} from "react-router";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default HomePage;
