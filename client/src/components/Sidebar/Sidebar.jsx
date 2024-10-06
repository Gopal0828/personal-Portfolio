import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isSidebarOpen, setSidebarOpen }) {

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

   return (
      <div className="flex">

         
         {/* Sidebar */}
         <div
         className={`fixed top-20 left-0 h-full bg-gray-800 shadow-lg z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
         } transition-transform duration-300 ease-in-out w-64`}
         >
         <div className="text-center pt-8 text-white">

            <button
                  className="fixed top-0 right-4 text-white text-3xl rounded-md z-50"
                  onClick={toggleSidebar}
            >
               &lt;
            </button>

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
                  to="/"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  DashBoard
               </Link>
               </li>

               <li  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200">
                  <Link
                     to="/"
                  
                  >
                     Education
                  </Link>

               </li>
               <li  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200">
                  <Link
                     to="/"
                  
                  >
                     Experience
                  </Link>

               </li>
               <li>
               <Link
                  to="/"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  Projects 
               </Link>
               </li>
               <li>
               <Link
                  to="/"
                  className="text-white hover:text-gray-300 hover:bg-gray-700 p-2 block rounded-md transition-colors duration-200"
               >
                  Profiles 
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
