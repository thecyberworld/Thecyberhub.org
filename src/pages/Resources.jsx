import React from 'react';
import {ResourcesNavbar, Courses} from "../components";
import {Route, Routes} from "react-router-dom";
import CyberNews from "../components/Resources/CyberNews/CyberNews";
import WriteUps from "../components/Resources/WriteUps/WriteUps";

const Resources = () => {
    return (
        <div>
            <navbar>
                <ResourcesNavbar />
            </navbar>
            <Routes>
                <Route exact path={"/"} element={<Courses/>}/>
                <Route exact path={"cybernews"} element={<CyberNews/>}/>
                <Route path={"writeups"} element={<WriteUps/>}/>
            </Routes>
        </div>
    );
};

export default Resources;