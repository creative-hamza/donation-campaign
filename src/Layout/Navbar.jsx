// import React from 'react';

import { NavLink } from "react-router-dom";

const Navbar = () => {

const links = <>

<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline font-bold bgTrans" : "bgTrans"
  }
>
  Home
</NavLink>
</li>
<li>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline font-bold bgTrans" : "bgTrans"
  }
>
  Donation
</NavLink>
</li>
<li>
<NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline font-bold bgTrans" : "bgTrans"
  }
>
  Statistics
</NavLink>
</li>


</>




    return (
        <div className="max-w-7xl mx-auto ">
        <div className="px-4 md:px-4 lg:px-4 mt-4  bg-none z-30 relative ">
            <div className="navbar flex justify-between items-center ">
                <img className="w-[200px]" src={'https://i.ibb.co/JHv5hjn/Logo.png'} alt="" />
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={1} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] text-red-500 w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menus menu-sm dropdown-content  z-[10]  rounded-box  -left-10">
                           {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className=" menu-horizontal px-1 gap-10 mr-2">
                       {links}
                    </ul>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Navbar;