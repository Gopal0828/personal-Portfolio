import { useEffect, useState } from 'react'

function Projects() {

    const project = [
        {
            id: 1,
            name: 'Personal Portfolio',
            description: 'developed in using react, tailwind and redux for frontend',
            dueDate: '2021-09-01',
            image: './second-portfolio.png',
            repository: 'https://github.com/gauravghuge7/personal-Portfolio',
            url: 'https://personal-portfolio-opal-kappa.vercel.app/',
            status: 'Completed',
        },
        {
            id: 2,
            name: 'Old Portfolio Project',
            description: 'create a static web site using html, css, and javascript', 
            dueDate: '2021-09-01',
            repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
            url: 'https://gauravghuge7.github.io/Portfolio-Project-UI/',
            image: "./old-portfolio.png",
            status: 'Completed',
        },

        
        {
            id: 2,
            name: 'Employee Management System',
            description: 'developed a web application for employee management that can check the daily tasks of employees and can also add new tasks',
            dueDate: '2021-09-01',
            repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
            image: './arohi-employee.png',
            url: 'https://emplyeemanagement1.vercel.app/',

            status: 'In Progress',
        },
        {
            id: 2,
            name: 'Learning Management System',
            field: "software development",
            availableFor: "mobile browsers and web browsers",
            description: 'create a system that allows students to manage their own information, including their contact information, they can manage their profile like view profile, edit profile, delete profile etc.  a students can Enrolled in a course, they can view their course details, view theie lectures and assignments, and lectures notes',
            url: 'https://emplyeemanagement1.vercel.app/',
            repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
            image: '',
            technologies: 'React, Redux, Tailwind CSS, MongoDB, Express, Node.js',

            notice: 'If project is not working, there is hosted on personal account, only for personal use and not for commercial use. there you can check the repository of code there is attached the hosted link youn check from there if project not working, contact me on gauravghuge737@gmail.com '
        },
        {
          id: 5,
          name: 'Laptop Checker App',
          description: 'Designed an interface in Next.js for evaluating laptop performance, offering users actionable insights and optimized system interactions.',
          repository: 'https://github.com/gauravghuge7/Second_hand_Laptop_checker',
          url: 'https://second-hand-laptop-checker.vercel.app/',
          image: '',
          technologies: 'Next.js',
          status: 'Completed',
      },
      {
          id: 6,
          name: 'Company Management System',
          description: 'Built a Jira-like system for managing teams, clients, and tasks using React and Node.js.',
          repository: 'https://github.com/gauravghuge7/company-management',
          url: '',
          image: '',
          technologies: 'React, Node.js',
          status: 'Completed',
      },
      {
          id: 7,
          name: 'Student Career Guide and Preparation',
          description: 'Developed a MERN-based career guidance site with a responsive UI using React and secure APIs in Node.js. Integrated OpenAI for question paper preparation and scoring.',
          repository: 'https://github.com/gauravghuge7/EMS_PRODUCTION',
          url: 'https://naukari-project.onrender.com/',
          image: '',
          technologies: 'MERN stack',
          status: 'Completed',
      }





    ]

    const [projects, setProjects] = useState([""])


    useEffect(() => {

        setProjects(project);


    },[])



    return (
        <div className='mt-20 mb-10'>
        <h1 className='text-3xl font-bold m-12 text-center underline text-white'>Projects</h1>
      
        <section className="flex flex-col m-2 items-center sm:flex-row sm:flex-wrap justify-center  text-center gap-20" data-search-term="projects">
  {projects.map((project, index) => (
    <div 
      key={index} 
      className="shadow-lg shadow-gray-900 p-6 w-[90%] sm:w-[45%] lg:w-[30%] m-auto rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-gray-700 hover:via-gray-600 hover:to-gray-700"
    >
      {/* Project Name */}
      <h2 className='text-yellow-400 text-2xl font-bold bg-gray-900 p-3 rounded-lg mb-4 shadow-md transition-colors duration-300'>
        {project.name}
      </h2>
      
      {/* Project Status */}
      <p className="text-start mb-4">
        <span className="text-rose-500 bg-gray-900 p-2 rounded-lg mr-2">Status: </span>
        {project.status}
      </p>
      
      {/* Project Image */}
      <img 
        src={project.image}
        alt="project landing page"
        className="w-[90%] h-auto m-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
      
      {/* Project Description */}
      <p className='text-gray-300 mt-4 mb-6 leading-relaxed'>
        {project.description}
      </p>   
      
      {/* Project Buttons */}
      <div className="flex gap-4 justify-center items-center">
        <button className="text-white bg-teal-500 p-3 rounded-lg shadow-md text-sm transition-transform duration-300 transform hover:scale-105 hover:bg-teal-400">
          <a href={project.url} target="_blank" rel="noreferrer">
            View Project
          </a>    
        </button>

        <button className="text-white bg-pink-500 p-3 rounded-lg shadow-md text-sm transition-transform duration-300 transform hover:scale-105 hover:bg-pink-400">
          <a href={project.repository} target="_blank" rel="noreferrer">
            View Repository
          </a>    
        </button>
      </div>
    </div>
  ))}
</section>

      </div>
      
    )
}

export default Projects
