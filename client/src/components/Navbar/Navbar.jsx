import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { education, experience, project } from "../../services/information";



function Navbar() {
    const smallMobileNav = useMediaQuery('(max-width: 724px)');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    const handleSearch = (e) => {
        console.log("e.target.value", e.target.value);
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredResults([]); 
            return;
        }

        const projectMatches = project.filter(project =>
            project.name.toLowerCase().includes(term) ||
            project.description?.toLowerCase().includes(term)
        );

        const experienceMatches = experience.flatMap(exp =>
            exp.project?.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description?.toLowerCase().includes(term)
            ) || []
        );

        const educationMatches = education.filter(edu =>
            edu.schoolName.toLowerCase().includes(term) ||
            edu.degree?.toLowerCase().includes(term) ||
            edu.major?.toLowerCase().includes(term) ||
            edu.year?.toLowerCase().includes(term)
        );

        setFilteredResults([
            ...projectMatches.map(p => ({ ...p, type: 'projects' })),
            ...experienceMatches.map(p => ({ ...p, type: 'experience' })),
            ...educationMatches.map(e => ({ ...e, type: 'education' }))
        ]);
    };


    useEffect(() => {
        document.body.style = darkMode
            ? `background-color: #1e1e2f; color: #e0e0e0; font-family: 'Poppins', sans-serif; transition: 0.5s;`
            : `background-color: white; color: black; font-family: 'Poppins', sans-serif; transition: 0.5s;`;
    }, [darkMode]);

    return (
        <main>

            <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50 px-4 py-3 flex justify-between items-center">
                {/* Left - Sidebar Toggle */}
                <div className="flex items-center gap-2">
                    {
                        showMobileMenu  && (
                            <button onClick={toggleSidebar} className="text-xl hover:text-blue-400">
                                <MenuIcon />
                            </button>
                        )
                    }

                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
                            {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    {!smallMobileNav && (
                        <Link to="/" className="text-2xl font-semibold text-white hover:text-blue-400 transition">
                            PORTFOLIO
                        </Link>
                    )}
                </div>

                {/* Center - Search Bar */}
                <div className="relative sm:flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                        <input
                            type="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="rounded-md px-2 py-1 bg-gray-800 border border-gray-600 text-sm text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none w-48 md:w-64"
                        />
                    </div>
                    {searchTerm && filteredResults.length > 0 && (
                    <div className="absolute top-full mt-1 left-0 bg-white text-black rounded shadow-lg z-50 w-64 max-h-64 overflow-y-auto">
                        {filteredResults.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.type}`} // dynamic routing: /project, /education, etc.
                            onClick={() => setSearchTerm('')}
                            className="block px-4 py-2 hover:bg-gray-100 border-b text-sm"
                        >
                            <strong>{item.name}</strong>
                            <p className="text-xs text-gray-600">{item.description?.slice(0, 60)}...</p>
                            <span className="text-xs italic text-blue-500">({item.type})</span>
                        </Link>
                        ))}
                    </div>
                    )}

                </div>

                {/* Right - Icons & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <button onClick={toggleDarkMode} className="p-1 rounded-full hover:bg-gray-700">
                        {darkMode ? <DarkModeIcon className="text-yellow-400" /> : <LightModeIcon className="text-yellow-300" />}
                    </button>

                    <ul className="hidden lg:flex items-center gap-6 text-sm">
                        {["Experience", "Education", "Projects", "Contact", "Information"].map((item) => (
                            <li key={item}>
                                <Link to={`/${item}`} className="relative group hover:text-blue-400 transition">
                                    {item}
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav Dropdown */}
            {showMobileMenu && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md flex flex-col items-center py-4 z-40">
                    {["Experience", "Education", "Projects", "Contact", "Information"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item}`}
                            onClick={() => setShowMobileMenu(false)}
                            className="py-2 px-4 w-full text-center hover:bg-gray-700 transition text-white border-b border-gray-700"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Navbar;
