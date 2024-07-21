import { Link } from "react-router-dom"
import "./Navbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from "react";



function Navbar() {

    const mobileNav = useMediaQuery('(max-width: 1024px)');
    const smallMobileNav = useMediaQuery('(max-width: 724px)');


    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    // const closeSidebar = () => setSidebarOpen(false);


    const [darkMode, setDarkMode] = useState(true);

    if (darkMode) {
        document.body.style = '';
    }
    else {
        document.body.style = 'background-color: white; color: black; font-family: sans-serif;';
    }

    const toggleDarkMode = () => {
        setDarkMode(true);
    }

    const toggleLightMode = () => {
        setDarkMode(false);
    }







    return (

        <section className=" rounded-xl fixed top-0 left-0 w-full p-4">
   
         
                <nav className="responsive-navbar">

                    <header className="flex justify-between gap-8 items-center">
                        <div onClick={toggleDarkMode}>
                            
                            <DarkModeIcon />

                        </div>
                        <div onClick={toggleLightMode}>

                            <LightModeIcon />

                        </div>

                    </header>

                    { !smallMobileNav && <div className="text-2xl font-bold"> PORTFOLIO </div> }

                    

                    <div>
                        <input 
                            type="search"
                            placeholder="Search website information"
                            className="rounded-md p-1"
                        />
                        <button className="bg-blue-400  p-1">Search</button>
                    </div>

                    { !mobileNav &&  (
                        <ul className="flex items-center gap-x-4">
                        
                         
                            <li className="navbar-list"><Link href="#">Experience</Link></li>
                            <li className="navbar-list"><Link href="#">Skills</Link></li>
                            <li className="navbar-list"><Link href="#">Projects</Link></li>
                            <li className="navbar-list"><Link href="#">Education</Link></li>
                            <li className="navbar-list"><Link href="./src/contact.html">Contact</Link></li>
                        </ul>
                    )}


                    { /******  overflow profile Section  ******/ }
                    {!mobileNav && 

                        <div className="flex items-center gap-x-4" onClick={scroll}>
                            <AccountCircleIcon />
                            <p> Profile </p>
                        </div>

                    }


                    { /******  Mobile Navbar Section  ******/ }
                    {  mobileNav && 
                        
                        <div onClick={toggleSidebar} >
                            <DensityMediumIcon />


                            <div> {
                                isSidebarOpen && 
                                <ul className="absolute right-4 top-12 flex flex-col items-center gap-x-4">
                        
                         
                                    <li className="mobile-navbar-list"><Link href="#">Experience</Link></li>
                                    <li className="mobile-navbar-list"><Link href="#">Skills</Link></li>
                                    <li className="mobile-navbar-list"><Link href="#">Projects</Link></li>
                                    <li className="mobile-navbar-list"><Link href="#">Education</Link></li>
                                    <li className="mobile-navbar-list"><Link href="./src/contact.html">Contact</Link></li>
                                </ul>
                            }
                            </div>
                        </div>
                    }
                    

                </nav>  
            

        </section>    
    )

}



/// try for onclick timeout
// const MobileNavbar = () => setTimeout(() => {



//     return (
//         <div>
//             <DensityMediumIcon />
//         </div>
//     )
   


// }, 3000)






export default Navbar
