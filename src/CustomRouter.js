import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomePage from "./components/pages/Home page/HomePage";
import StudentContent from "./components/pages/StudentContent/StudentContent";
import LibrarianContent from "./components/pages/LibrarianContent/LibrarianContent";
import About from "./components/pages/About/About";

const CustomRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />}>
                    <Route path={'student'} element={<StudentContent />}/>
                    <Route path={'librarian'} element={<LibrarianContent />}/>
                    <Route path={'about'} element={<About />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
};

export default CustomRouter;
