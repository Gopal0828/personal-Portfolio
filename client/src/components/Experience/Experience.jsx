import { useState, useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'Arohi Software',
      address: 'Shrigonda, Ahmednagar, Maharashtra, India',
      position: 'Full Stack Developer',
      startDate: '07 May 2025',
      endDate: '18 August 2025',
      description: 'I started my first job as a full stack developer in May 2024. I am very interested in learning new things and I am ready to work on industry live projects.',
      project: [
        {
          id: 1,
          name: 'Employee Management System',
          description: 'Create a system that allows employees to manage their own information.',
          url: 'https://emplyeemanagement1.vercel.app/',
          repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
          image: './arohi-employee.png',
        },
        {
          id: 2,
          name: 'Learning Management System',
          description: 'Create a system that allows students to manage their information and enroll in courses.',
          url: 'https://cloud.google.com/',
          repository: 'https://github.com/ArohiSoftware/LMS',
          image: '',
          technologies: 'React, Redux, Tailwind CSS, MongoDB, Express, Node.js',
        }
      ]
    },
  ]);

  const [open, setOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      const target = document.getElementById(`exp-card-${currentIndex}`);
      if (target) {
        const { top } = target.getBoundingClientRect();
        const offset = window.scrollY + top; // Calculate the absolute position relative to the viewport
        lineRef.current.style.top = `${offset + target.offsetHeight / 2}px`; // Position the line in the center of the card
      }
    }
  }, [currentIndex]);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length);
  };

  if (!open) {
    return (
      <div>
        <h1 className='text-2xl text-center'>
          <span className="underline">Experience</span>
          &nbsp; &nbsp;
          <span 
            className="hover:bg-gray-400 p-2 rounded-xl text-center"
            onClick={() => setOpen(!open)}
          > 
            Open Experience 
          </span> 
        </h1> 
      </div>
    );
  }

  return (
    <div className="container">
      <div className="travel-line" ref={lineRef}></div> {/* Animated line */}
      <h1 className='text-2xl text-center'>
        <span className="underline">Experience</span>
        &nbsp; &nbsp;
        <span 
          className="hover:bg-gray-400 p-2 rounded-xl text-center"
          onClick={() => setOpen(!open)}
        > 
          Close Experience 
        </span>
      </h1> 

      <section className='mt-20 text-xl w-full max-w-5xl mx-auto mb-10 flex flex-wrap justify-around align-center gap-4'>
        {experience.map((exp, index) => (
          <div 
            key={index} 
            id={`exp-card-${index}`} // Give each card a unique ID
            className="card shadow-lg shadow-gray-900 border border-gray-900 p-4 w-full sm:w-72 rounded-xl hover:shadow-2xl transition-all duration-300 ease-in-out" // Adjust width for responsiveness
            onClick={handleNextCard} // Click to navigate to the next card
          >
            <h2 className='text-gray-900 text-2xl font-bold text-center'>
              <a href="https://www.linkedin.com/company/arohi-software/">{exp.company}</a>
            </h2>
            <p className='text-center text-blue-900'>{exp.position}</p>
            <p className='text-sm'><span className="text-rose-600 bg-gray-700 p-1 rounded-lg mr-4">Address: </span>{exp.address}</p>
            <p className='text-sm'><span className="text-rose-600 bg-gray-700 p-1 rounded-lg mr-4">Start Date: </span>{exp.startDate}</p>
            <p className='text-sm'><span className="text-rose-600 bg-gray-700 p-1 rounded-lg mr-4">End Date: </span>{exp.endDate}</p>
            <p className='text-sm'><span className="text-rose-600 bg-gray-700 p-1 rounded-lg mr-4">Description: </span>{exp.description}</p>
            
            <h3 className='text-rose-600 bg-gray-700 p-2 text-center rounded-lg mt-2'>Projects</h3>
            <section className='flex flex-col gap-4 text-center text-gray-900 align-center justify-around'>
              {exp.project && exp.project.map((pro, index) => (
                <div
                  key={index}
                  className="project-card m-auto mt-2 border border-gray-900 rounded-xl p-2 transition-shadow duration-300 hover:shadow-xl" // Smaller project cards with hover effect
                >
                  <h4 className="text-green-600 bg-gray-700 p-2 rounded-lg">{pro.name}</h4>
                  <p className="text-gray-900 text-sm">{pro.description}</p>
                  {pro.image && (
                    <img 
                      src={pro.image}
                      alt="Project Landing Page"
                      className="w-full h-auto rounded-lg mt-2"
                    />
                  )}
                  <main className="text-white text-sm mt-2">
                    <p><span className="text-blue-600 bg-gray-300 p-1 rounded-lg mr-4">Technologies: </span>{pro.technologies}</p>
                  </main>
                  <div className="flex gap-2 justify-center items-center mt-2">
                    <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm ">
                      <a href={pro.url} target="_blank" rel="noreferrer">View Project</a>    
                    </button>
                    <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm ">
                      <a href={pro.repository} target="_blank" rel="noreferrer">View Repository</a>    
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Experience;
