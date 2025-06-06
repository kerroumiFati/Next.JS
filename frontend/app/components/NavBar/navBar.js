// components/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faBell, faSun,  faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Navbar = ({ toggleTheme }) => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    <div className="mb-4">
        <Image
          src="/enterprise-icon.png"  // Update with the correct path
          alt="Enterprise Icon"
          width={80}
          height={80}
        />
      </div> 
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl"></a>
    </div>



    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>


      </button>
      <button className="btn btn-ghost btn-circle">
      <div > 
    <a  data-tip="Details">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </div>  </button>
      <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
        <FontAwesomeIcon icon={faUser}  size="2x"/>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48 right-4">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
