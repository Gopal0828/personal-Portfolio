    import { useState } from "react"

    function Experience() {

    const [experience , setExperience] = useState([
        {
            id: 1,
            company: 'Arohi Software',
            address: 'Shrigonda, Ahmednagar, Maharashtra, India',
            position: 'Full Stack Developer',
            profile: "",
            startDate: '07 may 2025',
            endDate: 'currently working',

            description: 'I started my first job as a full stack developer in may 2024. i have not any experience of how work in company. i am very interested in learning new things and i am ready to learn new things and work on Industry live projects and how works there. ',
            project: [
                {
                    id: 1,
                    name: 'Employee Management System',
                    description: 'Create a system that allows employees to manage their own information, including their contact information, salary, and benefits.',

                    url: 'https://emplyeemanagement1.vercel.app/',
                    repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
                    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                },

                {
                    id: 2,
                    name: 'Learning Management System',
                    field: "software development",
                    availableFor: "mobile browsers and web browsers",
                    description: 'create a system that allows students to manage their own information, including their contact information, they can manage their profile like view profile, edit profile, delete profile etc.  a students can Enrolled in a course, they can view their course details, view theie lectures and assignments, and lectures notes',
                    url: 'https://cloud.google.com/',
                    repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
                    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                    technologies: 'React, Redux, Tailwind CSS, MongoDB, Express, Node.js',

                    notice: 'If project is not working, there is hosted on personal account, only for personal use and not for commercial use. there you can check the repository of code there is attached the hosted link youn check from there if project not working, contact me on gauravghuge737@gmail.com '
                }

            ]
        },
        

        


    ])



    return (
        <div>
            <h1 className='text-2xl text-center underline'>Experience</h1>

            <section className='mt-20 text-xl w-[80%]  m-auto  mb-10 flex flex-wrap flex-col md:flex-row gap-4 justify-around align-center border-1 border-gray-700 rounded-lg'>

                {
                    experience.map((exp, index) => (
                        <div 
                            key={index} 
                            className="shadow-lg  shadow-gray-900  p-4 w-auto md:w-80%  rounded-xl"
                        >


                            <h2 className='text-gray-900 text-3xl font-bold text-center'>
                                <a href="https://www.linkedin.com/company/arohi-software/">{exp.company}</a>
                            </h2>

                            <p className='text-center text-blue-900'>{exp.position}</p>

                            <p><span className="text-rose-600 bg-gray-700 p-2 rounded-lg mr-4">Address : </span>{exp.address}</p>
                            <br/>

                            <p><span className="text-rose-600 bg-gray-700 p-2 rounded-lg mr-4">Start Date: </span>{exp.startDate}</p>
                            <br/>

                            <p><span  className="text-rose-600 bg-gray-700 p-2 rounded-lg mr-4">End Date: </span>{exp.endDate}</p>
                            <br/>

                            <p><span className="text-rose-600 bg-gray-700 p-2 rounded-lg mr-4">Description: </span>{exp.description}</p>

                            <br/>

                            <div> 
                                <h3 className='text-rose-600 bg-gray-700 p-2 text-center rounded-lg mr-4'>Projects</h3>
                                <section className='flex flex-col gap-4 text-center align-center justify-around'>
                                {
                                    exp.project && exp.project.map((pro, index) => (

                                        <div

                                            key={index}
                                            className="shadow-sm hover:shadow-2xl hover:shadow-gray-400 shadow-gray-900 m-auto  p-4 w-[90%] mt-4 rounded-xl"
                                        >

                                            <h2 
                                                className="text-green-600 bg-gray-700 p-2 rounded-lg"
                                            >
                                                {pro.name}
                                            </h2>
                                            <p className="text-white text-sm">{pro.description}</p>

                                            <img 
                                                src="" 
                                                alt="project Landing Page"
                                                className="w-full h-auto rounded-lg"
                                                height="200px"
                                                width="500px"
                                            />





                                            <main className="text-white text-sm">
                                            
                                            

                                                <p><span className="text-blue-600 bg-gray-700 p-2 rounded-lg mr-4">Technologies: </span>{pro.technologies}</p>

                                                <br/>





                                                <p>
                                                    <span className="text-rose-600 bg-gray-700 p-2 rounded-lg mr-4">Notice: </span>{pro.notice}
                                                </p>

                                                <br/>
                                            </main>







                                            <div className="flex gap-2 justify-center items-center">
                                            
                                                <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm ">
                                                
                                                    
                                                    <a href={pro.url} target="_blank" rel="noreferrer">
                                                        View Project
                                                    </a>    
                                                </button>

                                                <button className="text-gray-900 rounded p-2 bg-pink-400 text-sm ">
                                                
                                                    
                                                    <a href={pro.url} target="_blank" rel="noreferrer">
                                                        View Repository
                                                    </a>    
                                                </button>
                                            
                                            </div>


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
