import { Link } from "react-router-dom"
import "./Navbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";



function Navbar() {

    const mobileNav = useMediaQuery('(max-width: 1024px)');
    const smallMobileNav = useMediaQuery('(max-width: 724px)');


    const [isSidebarOpen, setSidebarOpen] = useState(false);



    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };



    const [darkMode, setDarkMode] = useState(true);

    if (darkMode) {
        document.body.style = `
            background-color: #1e1e2f;
            color: #e0e0e0;
            font-family: 'Poppins', sans-serif;
            transition: background-color 0.5s ease, color 0.5s ease;
        `;
    } else {
        document.body.style = `
            background-color: white;
            color: black;
            font-family: 'Poppins', sans-serif;
            transition: background-color 0.5s ease, color 0.5s ease;
        `;
    }

    const toggleDarkMode = () => {
        setDarkMode(true);
    }

    const toggleLightMode = () => {
        setDarkMode(false);
    }


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

        const searchResults = document.querySelectorAll(`[data-search-term*='${searchTerm.toLowerCase()}']`);
        searchResults.forEach(result => {
            result.classList.add('highlight');
        });
    };

    


    return (
        
        <main>
            
            {/* connect sidebar to navbar  */}
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

            <nav className="fixed top-0 w-full bg-gray-800 shadow-gray-700  shadow-lg z-50 p-4 flex flex-row lg:flex-row lg:justify-between items-center gap-2">
            {/* Toggle Sidebar Icon (|||) for Mobile */}
            <div className="p-2"
                onClick={toggleSidebar}
            >
                <button 
                    className="text-center text-lg font-semibold rotate-90 text-gray-200"
                    onClick={toggleSidebar}
                >
                    |||
                </button>
            </div>

            {/* Header with Dark/Light Mode Icons */}
            <header className="flex justify-between items-center w-full lg:w-auto lg:space-x-6">
                <div className="flex items-center space-x-2">
                    {/* Dark Mode Icon */}
                    <div onClick={toggleDarkMode} className="cursor-pointer p-1 hover:bg-gray-700 rounded-full">
                        <DarkModeIcon className="text-yellow-400" />
                    </div>

                            {/* Light Mode Icon */}
                            <div onClick={toggleLightMode} className="cursor-pointer p-1 hover:bg-gray-700 rounded-full">
                                <LightModeIcon className="text-yellow-300" />
                            </div>
                        </div>

                        {/* Portfolio Title (Visible on larger screens) */}
                        {!smallMobileNav && (
                            <div className="hidden lg:block text-xl font-bold text-gray-200">
                                PORTFOLIO
                            </div>
                        )}
                </header>

            {/* Search Section */}
            <div className="relative flex items-center w-full sm:w-48 md:w-60 lg:w-auto lg:space-x-4 mt-4 lg:mt-0">
                <input
                    type="search"
                    placeholder="Search website information"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="rounded-md h-8 p-1 w-32 sm:w-40 md:w-48 lg:w-60 bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 text-sm"
                />
                <button className="ml-1 h-8 w-auto bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-md shadow transition duration-300 text-sm">
                    Search
                </button>
            </div>




            {/* Navbar Links with Scrollable Border Animation */}
            <ul className="hidden lg:flex items-center gap-x-6 text-sm mt-4 lg:mt-0">
                {["Experience", "Skills", "Projects", "Education", "Contact"].map((item) => (
                    <li key={item} className="navbar-list">
                        <Link
                            href={item === "Contact" ? "./src/contact.html" : "#"}
                            className="relative group hover:text-blue-400 transition duration-300 text-gray-200"
                        >
                            {item}
                            <span className="block absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Profile Section (Hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-x-2 cursor-pointer hover:text-blue-400 transition duration-300 mt-4 lg:mt-0" onClick={scroll}>
                <AccountCircleIcon className="text-gray-400" />
                <p className="text-sm text-gray-200">Profile</p>
            </div>


            </nav>

        
        
    </main>
   
    


  
    )

}


export default Navbar
