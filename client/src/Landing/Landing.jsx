
import Contact from "../components/Contact/Contact.jsx"

import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Experience from "../components/Experience/Experience.jsx"
import Profiles from "../components/Profiles/Profiles.jsx"






function Landing() {
  return (
    <div>


      <button className="fixed font-semibold text-2xl bottom-12 left-[45%] border-2 border-green-400 rounded-2xl bg-black text-green-400 p-2 ">

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
