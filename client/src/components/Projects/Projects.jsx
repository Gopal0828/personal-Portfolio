import { useEffect, useState } from 'react'
import { project } from '../../services/information';

function Projects() {

   

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
