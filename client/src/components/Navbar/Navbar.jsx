import { Link } from "react-router-dom";
import "./Navbar.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

function Navbar() {
    const mobileNav = useMediaQuery('(max-width: 1024px)');
    const smallMobileNav = useMediaQuery('(max-width: 724px)');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(true);
    };

    const toggleLightMode = () => {
        setDarkMode(false);
    };

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Select all elements that have a 'data-search-term' attribute
        const searchResults = document.querySelectorAll('[data-search-term]');
        searchResults.forEach(result => {
            const content = result.getAttribute('data-search-term').toLowerCase();
            if (content.includes(term)) {
                result.style.display = 'block'; // Show element if match found
            } else {
                result.style.display = 'none'; // Hide element if no match
            }
        });
    };

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

    return (
        <main>
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50 p-4 flex flex-row lg:flex-row lg:justify-between items-center gap-2">
                <div className="p-2" onClick={toggleSidebar}>
                    <button className="text-center text-lg font-semibold rotate-90 text-gray-200">|||</button>
                </div>

                <header className="flex justify-between items-center w-full lg:w-auto lg:space-x-6">
                    <div className="flex items-center space-x-2">
                        <div onClick={toggleDarkMode} className="cursor-pointer p-1 hover:bg-gray-700 rounded-full">
                            <DarkModeIcon className="text-yellow-400" />
                        </div>
                        <div onClick={toggleLightMode} className="cursor-pointer p-1 hover:bg-gray-700 rounded-full">
                            <LightModeIcon className="text-yellow-300" />
                        </div>
                    </div>

                    {!smallMobileNav && (
                        <Link to="/" className="hidden lg:block text-xl font-bold text-gray-200">
                            PORTFOLIO
                        </Link>
                    )}
                </header>

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

                <ul className="hidden lg:flex items-center gap-x-6 text-sm mt-4 lg:mt-0">
                    {["Experience", "Skills", "Projects", "Education", "Contact"].map((item) => (
                        <li key={item} className="navbar-list">
                            <Link
                                to={`/${item}`}
                                className="relative group hover:text-blue-400 transition duration-300 text-gray-200"
                            >
                                {item}
                                <span className="block absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-x-2 cursor-pointer hover:text-blue-400 transition duration-300 mt-4 lg:mt-0">
                    <AccountCircleIcon className="text-gray-400" />
                    <p className="text-sm text-gray-200">Profile</p>
                </div>
            </nav>
        </main>
    );
}

export default Navbar;
