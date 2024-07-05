import { Outlet } from "react-router-dom"
import Contact from "../Contact/Contact"
import Navbar from "../Navbar/Navbar"
import About from "../About/About"

function Landing() {
  return (
    <div>
      <Outlet />   
        <Navbar />
      <Outlet />

      <button className="fixed font-bold text-2xl bottom-12 left-[45%] border-2 border-green-400 rounded-2xl bg-black text-green-400 p-4 ">
        <a href="mailto:gauravghuge737@gmail.com"> Hire Me <br />Lets Talk </a>
      </button>

      <About />

      <Contact />
      
    </div>
  )
}

export default Landing
