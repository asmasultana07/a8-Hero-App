import React from "react";
import logoImage from "../assets/logo.png";
import { Link,NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';



const Navbar = () => {

  const getNavActive = ({ isActive }) => {
    const navLink = "border-b  border-[#632EE3] text-[16px] font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent";
    const navLinkActive = "text-[16px] font-medium";

    return isActive ? navLink : navLinkActive; 
  };



  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm px-10 md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/"> 
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/"> 
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/"> 
                      Installation
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to="/" >
            <div className="flex justify-center items-center">
              <img src={logoImage} alt="" className="w-8 h-8"/>
              <a className="btn btn-ghost p-1 text-lg  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
               HERO.IO
              </a>
            </div>
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <li> <NavLink to="/" className={getNavActive}>  Home </NavLink>
            </li>
            <li>  <NavLink to="/apps" className={getNavActive}>   Apps </NavLink>
            </li>
            <li> <NavLink to="/installation" className={getNavActive}>    Installation </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a href="https://github.com/asmasultana07" target="_blank" 
          className="rounded-md text-white text-[16px]  btn 
                                bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-pink-500 hover:to-purple-500"> 
          <FaGithub />Contribute</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
