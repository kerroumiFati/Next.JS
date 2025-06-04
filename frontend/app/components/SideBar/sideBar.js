'use client'
import React ,{useState} from 'react';
import Link from 'next/link';// Import Link from react-router-dom if you're using it
import user from'../../Admin/Users/page'
import { FaUser } from 'react-icons/fa';
export default function Sidebar() {
  const [showServices, setShowServices] = useState(false);
  const [showSeetting, setShowSeetting] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleServices = () => {
    setShowServices(!showServices);
};
const toggleSeetting = () => {
    setShowSeetting(!showSeetting);
};
    return (
        <div className="flex-row ">
                     {/* <div className={`lg:flex lg:flex-col lg:w-72 lg:p-3 bg-white shadow ${showSidebar ? 'h-screen' : 'h-auto lg:h-screen'}`}>

                      </div>*/}
            <div className="flex flex-col w-full p-3 bg-white shadow h-screen lg:h-auto lg:min-h-screen ">
                <div className="space-y-3 ">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Admin</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className=" space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    href='/'
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 
                                            1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span>Accueil</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="/mail"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2
                                             0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 
                                             1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <span>Boîte de réception</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <button 
                                    onClick={toggleServices}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <FaUser className="inline-block " /> 
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                   
                                    <span>Les Employer</span>
                                </button >
                            </li>
                            {showServices && (
                        <div className="mb-4">
                            <p className="text-sm text-gray-500">Services:</p>
                            <ul className="pl-4">
                                <li className="mb-2">
                                    <Link href="/Modules/Estimation" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Estimation
                                    </Link>
                                </li>
                                {/* Add other services here */}
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Procurement
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                    Commercial
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                    Technique
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                    Finance
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                    Logistique
                                    </Link>
                                </li>
                                {/* Repeat the structure for each service */}
                            </ul>
                        </div>
                    )}
                            <li className="rounded-sm">
                                <button
                                       onClick={toggleSeetting}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826
                                             2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066
                                              2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 
                                              0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 
                                              0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31
                                               2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span>Paramètres</span>
                                </button>
                            </li>
                            {showSeetting && (
                        <div className="mb-4">
                            
                            <ul className="pl-4">
                                <li className="mb-2">
                                    <Link href="/Admin/Users" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Ajouter Employer
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Estimation" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Modifier Employer
                                    </Link>
                                </li>
                                {/* Add other services here */}
                                <li className="mb-2">
                                    <Link href="/Admin/Role" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Ajouter Role
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/Modules/Procurement" className="text-gray-800 hover:text-blue-300 transition duration-300 ease-in-out">
                                        Listes des roles
                                    </Link>
                                </li>
                    
                            </ul>
                        </div>
                    )}
                            <li className="rounded-sm">
                                <Link
                                    href="/Login"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>Déconnecter</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    );
}