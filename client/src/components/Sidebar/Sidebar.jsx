import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isSidebarOpen, setSidebarOpen }) {

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   return (
      <div className="flex">

         <button
         className=""
         onClick={toggleSidebar}
         >
            &lt;
         </button>

         {/* Sidebar */}
         <div
         className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
         } transition-transform duration-300 ease-in-out w-64`}
         >
         <div className="p-6 text-white">
            <h1 className="text-xl font-bold mb-8 ">My Sidebar</h1>

            {/* Sidebar Menu with Hover and Active Pseudo-Classes */}
            <ul className="space-y-4">
               <li>
               <Link
                  to="/"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  Home
               </Link>
               </li>
               <li>
               <Link
                  to="/about"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  About
               </Link>
               </li>
               <li>
               <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  Contact
               </Link>
               </li>
            </ul>
         </div>
         </div>

         {/* Sidebar Toggle Button */}
         
      </div>
   );
}

export { Sidebar };
