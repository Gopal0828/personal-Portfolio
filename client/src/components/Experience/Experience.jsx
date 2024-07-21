import { useState } from "react"

function Experience() {

    const [experience , setExperience] = useState([
        {
            id: 1,
            company: 'Google',
            position: 'Software Engineer',
            profile: "",
            startDate: '2021-09-01',
            endDate: '2021-09-01',
            description: 'Work on react framework, node.js, and google cloud, and also work on different javascript frameworks.',
            project: [
                {
                    id: 1,
                    name: 'Employee Management System',
                    description: 'Create a system that allows employees to manage their own information, including their contact information, salary, and benefits.',
                    url: 'https://cloud.google.com/',
                    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                },

                {
                    id: 2,
                    name: 'Google Cloud Platform',
                    description: 'This is a project description',
                    url: 'https://cloud.google.com/',
                    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                }

            ]
        },


        {
            id: 1,
            company: 'microsoft',
            position: 'Software Engineer',
            startDate: '2021-09-01',
            endDate: '2021-09-01',
            description: 'This is a project description',

        }



    ])



    return (
        <div>
            <h1 className='text-2xl text-center underline'>Experience</h1>

            <section className='mt-20 mb-10 flex  flex-wrap flex-col md:flex-row gap-4 justify-around align-center'>

                {
                    experience.map((exp, index) => (
                        <div 
                            key={index} 
                            className="shadow-lg hover:shadow-2xl hover:shadow-green-500  shadow-gray-900  p-4 w-auto md:w-[40rem] rounded-xl"
                        >


                            <h2 className='text-orange-400 text-2xl font-semibold text-center'>{exp.company}</h2>
                            <p className=''>{exp.position}</p>

                            <p><span className="text-orange-400">Start Date: </span>{exp.startDate}</p>

                            <p><span>End Date: </span>{exp.endDate}</p>

                            <p><span>Description: </span>{exp.description}</p>

                            <div> 
                                <h3 className='text-2xl font-semibold text-center'>Projects</h3>
                                <section className='flex flex-col gap-4 '>
                                {
                                    exp.project && exp.project.map((pro, index) => (

                                        <div

                                            key={index}
                                            className="shadow-sm hover:shadow-2xl hover:shadow-green-500  shadow-gray-900  p-4 w-auto md:w-[30rem] rounded-xl"
                                        >

                                            <h2 
                                                className="text-cyan-500 text-xl font-semibold text-center"
                                            >
                                                {pro.name}
                                            </h2>
                                            <p className="text-white text-sm">{pro.description}</p>

                                            <p className="text-gray-400 text-sm">
                                            
                                                <span className="text-orange-400">URL: </span>
                                                <a href={pro.url} target="_blank" rel="noreferrer">
                                                    {pro.url}
                                                </a>    
                                            </p>


                                        </div>
                                    ))
                                }
                                </section>
                            
                            </div>
                     

                        </div>
                    ))
                }

            
            </section>

        
        </div>
    )
}

export default Experience
