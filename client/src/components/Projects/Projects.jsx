import { useEffect, useState } from 'react'

function Projects() {

    const project = [
        {
            id: 1,
            name: 'Personal Portfolio',
            description: 'developed in using react, tailwind and redux for frontend',
            dueDate: '2021-09-01',
            repository: 'https://github.com/gauravghuge7/Portfolio',
            hostedLink: 'https://gauravghuge7.github.io/Portfolio/',
            status: 'Completed',
        },
        {
            id: 2,
            name: 'Employee Management System',
            description: 'developed a web application for employee management that can check the daily tasks of employees and can also add new tasks',
            dueDate: '2021-09-01',
            repository: 'https://github.com/gauravghuge7/Employee-Management-System',
            hostedLink: 'https://gauravghuge7.github.io/Employee-Management-System/',

            status: 'In Progress',
        },
        {
            id: 3,
            name: 'Learning Management System',
            description: 'This is a project description',
            dueDate: '2021-09-01',
            repository: 'https://github.com/gauravghuge7/Learning-Management-System',
            hostedLink: 'https://gauravghuge7.github.io/Learning-Management-System/',
            status: 'In Progress',
        }


    ]

    const [projects, setProjects] = useState([""])


    useEffect(() => {

        setProjects(project);


    },[])



    return (
        <div className=' mt-20 mb-10'>
            <h1 className='text-xl font-bold m-12 text-center underline'>Projects</h1>

            <section className="flex flex-wrap justify-around text-center gap-4">

                {

                    projects.map((project, index) => (


                        <div 
                            key={index} 
                            className="shadow-lg shadow-gray-900  p-4 w-[20rem] rounded-xl"
                            >

                            <h2 className='text-blue-100 text-xl text-center'>{project.name}</h2>

                            <p className=''>{project.description}</p>

                            <button> 
                                <a href={projects.repository} 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Repository</a>
                            </button>

                            <p>Due Date: {project.dueDate}</p>
                            <p>Status: {project.status}</p>

                        </div>

                    ))

                }

            </section>
        
        </div>
    )
}

export default Projects
