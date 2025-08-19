import { useState, useEffect } from 'react';
// Replace these paths with Gopal's profile photos or keep placeholder images if none available
import GopalPhoto1 from "../../../public/personal_photos/gopal_photo_1.jpg";
import GopalPhoto2 from "../../../public/personal_photos/gopal_photo_2.png";

function About() {
  const [currentImage, setCurrentImage] = useState(GopalPhoto1);
  const [currentText, setCurrentText] = useState(" AWS & DevOps Engineer");
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => prev === GopalPhoto1 ? GopalPhoto2 : GopalPhoto1);
    }, 6000);

    const textInterval = setInterval(() => {
      setCurrentText(prev =>
        prev === " AWS & DevOps Engineer"
          ? " Provisioning Cloud Infrastructure"
          : " AWS & DevOps Engineer"
      );
      setCharIndex(0); // Reset character index when text changes
    }, 6000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [charIndex, currentText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <section className="max-w-7xl mx-auto flex flex-wrap gap-16 justify-center items-center relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <p className="text-lg md:text-xl text-gray-300 animate-fadeIn delay-100">
            Hello, I&apos;m
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-fadeIn delay-200">
            Gopal Kautik Dafal
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-2 animate-fadeIn delay-300">
            Experienced AWS & DevOps Engineer
          </p>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 animate-fadeIn delay-400 transition-all duration-300">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
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
  );
}

export default About;
