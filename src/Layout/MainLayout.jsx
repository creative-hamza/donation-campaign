// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <div className="max-w-7xl mx-auto">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;