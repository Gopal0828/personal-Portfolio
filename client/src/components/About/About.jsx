
function About() {
  return (
    <div className="flex flex-col justify-center items-center m-10 md:m-20 lg:m-28">
  <section className="flex flex-wrap m-4 p-6 gap-12 justify-center items-center">
    
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      {/** about information section with fade-in animation */}
      <p className="text-lg md:text-xl mb-2 animate-fadeIn delay-100">Hello, It&nbsp;s Me</p>
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 animate-fadeIn delay-200">GAURAV GHUGE</p>
      <p className="text-lg md:text-xl mt-2 animate-fadeIn delay-300">I am a student who is passionate in</p>
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mt-2 animate-fadeIn delay-400">
        Software Development<br />& System Design
      </span>
      
      <button className="mt-4 rounded-xl w-48 md:w-72 lg:w-96 border-green-400 bg-black text-green-400 py-3 md:py-4 text-lg md:text-xl lg:text-2xl font-bold hover:bg-green-400 hover:text-black transition duration-300 transform hover:scale-105">
        <a href="./Gaurav_Ghuge_Resume.pdf" download>
          Download Resume
        </a>
      </button>
    </div>

    <div className="flex justify-center items-center mt-6 md:mt-0">
      <div className="relative group">
        <img 
          src="http://res.cloudinary.com/dsh5742fk/image/upload/v1723997949/ireznsofoi9jvpioxf2t.jpg" 
          alt="photo" 
          className="rounded-full border-4 border-gray-900 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 transition duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
      </div>
    </div>  
  </section>
</div>

  )
}

export default About;
