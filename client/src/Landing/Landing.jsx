import { Outlet } from "react-router-dom"
import Contact from "../components/Contact/Contact.jsx"
import Navbar from "../components/Navbar/Navbar.jsx"
import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Experience from "../components/Experience/Experience.jsx"
import Profiles from "../components/Profiles/Profiles.jsx"





function Landing() {
  return (
    <div>
      <Outlet />   
        <Navbar className='' />
      <Outlet />

      <button className="fixed font-bold text-2xl bottom-12 left-[45%] border-2 border-green-400 rounded-2xl bg-black text-green-400 p-4 ">

        <a href="mailto:gauravghuge737@gmail.com"> Hire Me <br />Lets Talk </a>
      
      </button>

      <About />

      <Skills />


      <Profiles />

      <Projects />

      <Experience />

      <Contact />

      
    </div>
  )
}

export default Landing
