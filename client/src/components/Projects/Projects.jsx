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
        }



    ]

    const [projects, setProjects] = useState([""])


    useEffect(() => {

        setProjects(project);


    },[])



    return (
        <div className='mt-20 mb-10'>
        <h1 className='text-3xl font-bold m-12 text-center underline text-white'>Projects</h1>
      
        <section className="flex flex-col sm:flex-row sm:flex-wrap justify-around text-center gap-8" data-search-term="projects">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="shadow-lg shadow-gray-900 p-4 w-[90%] sm:w-[45%] lg:w-[30%] m-auto rounded-xl bg-gray-800 transition-transform duration-300 transform hover:scale-105"
            >
              <h2 className='text-green-600 text-xl bg-gray-700 p-2 rounded-lg'>{project.name}</h2>
      
              <br />
              <p> 
                <span className="text-rose-600 text-start bg-gray-700 p-2 rounded-lg mr-4">Status: </span>
                {project.status}
              </p>
              <br />
              
              <img 
                src={project.image}
                alt="project landing page"
                className="w-[90%] h-auto m-auto rounded-lg shadow-md"
              />
      
              <br />
              <p className='text-gray-300'>{project.description}</p>
      
              <br />   
              <div className="flex gap-2 justify-center items-center">
                <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm transition-transform duration-200 transform hover:scale-105">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View Project
                  </a>    
                </button>
      
                <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm transition-transform duration-200 transform hover:scale-105">
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
