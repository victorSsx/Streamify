import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./containers/loginPage/login";

const main = () => {

    return(
        <>
        <Router>
            <Routes>
                <Route><Login /></Route>
            </Routes>
        </Router>
        </>
    );
};

export default main;