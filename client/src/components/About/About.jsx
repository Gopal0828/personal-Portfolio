import { useState, useEffect } from 'react';
import AboutImage from "../../../public/personal_photos/photo_gaurav_ghgue.jpg";
import GauravGhibali from "../../../public/personal_photos/gibili_photo.png";

function About() {
  const [currentImage, setCurrentImage] = useState(AboutImage);
  const [currentText, setCurrentText] = useState(" Fullstack (MERN) Software Development");
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => prev === AboutImage ? GauravGhibali : AboutImage);
    }, 6000);

    const textInterval = setInterval(() => {
      setCurrentText(prev => 
        prev === " Software Developer" 
          ? "Java Developer" 
          : " Fullstack Software Development"
      );
      setCharIndex(0); // Reset character index when text changes
    }, 6000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    }; // Cleanup on unmount
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here (lower number = faster)

      return () => clearInterval(typingInterval);
    }
  }, [charIndex, currentText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <section className="max-w-7xl mx-auto flex flex-wrap gap-16 justify-center items-center relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <p className="text-lg md:text-xl text-gray-300 animate-fadeIn delay-100">
            Hello, It&apos;s Me
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-fadeIn delay-200">
            Gaurav Ghuge
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-2 animate-fadeIn delay-300">
            I am a professional software developer
          </p>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 animate-fadeIn delay-400 transition-all duration-300">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
          
          {/* <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg md:text-xl font-bold hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            <a href="./Gaurav_Ghuge_Resume.pdf" download className="flex items-center gap-2">
              Download Resume
            </a>
          </button> */}
        </div>

        <div className="flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={currentImage} 
              alt="profile photo" 
              className="relative rounded-full w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover border-4 border-gray-800/50 transition duration-500 transform group-hover:scale-105 group-hover:border-blue-400/50" 
            />
          </div>
        </div>  
      </section>
    </div>
  )
}

export default About;
