// components/Layout.js
import React from 'react';
import Navbar from './/NavBar/navBar';
import Sidebar from './SideBar/sideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200 ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content    "bg-gray-100 min-h-screen flex items-center justify-center " */}
        <main className="overflow-x-hidden  h-screen overflow-y-auto bg-gray-200 p-4">
        <div className=" flex justify-center items-center  ">
      <div className="w-full max-w-2xl">
        {children}
      </div>
    </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
