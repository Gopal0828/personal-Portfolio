
import { useState } from "react";

export default function Skills() {

    const [skills, setSkills] = useState([
        
        {
            name: "Frontend",
            description: [
                {
                    name: "HTML",
                    image: "./skills/html.png"
                },
                {
                    name: "CSS",
                    image: "./skills/css.png"
                },
                {
                    name: "JavaScript",
                    image: "./skills/javascript.png"
                },
                {
                    name: "React",
                    image: "./skills/react.png"
                },
                {
                    name: "Tailwind Css",
                    image: "./skills/tailwind.png"
                },
                {
                    name: "Redux",
                    image: "./skills/redux.png"
                },
                {
                    name: "Redux Toolkit",
                    image: "./skills/redux-toolkit.png"
                }
                
               
            ]
        },
        {
            name: "Backend",
            description: [
                {
                    name: "NodeJs",
                    image: "./skills/nodejs.png"
                },
                {
                    name: "Express",
                    image: "./skills/express.png"
                },
                {
                    name: "JavaScript",
                    image: "./skills/javascript.png"
                },
                {
                    name: "Authentication",
                    image: "./skills/authentication.png"
                },
                {
                    name: "JWT",
                    image: "./skills/jwt.png"
                },
                {
                    name: "Authorization",
                    image: "./skills/authorization.png"
                }
            ]
       
        },
        {       
            name: "Core Languages",
            description: [
                {
                    name: "C++",
                    image: "./skills/c++.png"
                },
                {
                    name: "JAVA",
                    image: "./skills/java.png"
                },
                {
                    name: "Data Structures",
                    image: "./skills/data-structures.png"
                },
                {
                    name: "Algorithms",
                    image: "./skills/algorithms.png"
                },
                
                
               
            ]
            
        },
        {
            name: "Databases",
            description: [
                {
                    name: "MongoDB",
                    image: "./skills/mongodb.png"
                },
                {
                    name: "MySQL",
                    image: "./skills/mysql.png"
                },
                {
                    name: "SQL",
                    image: "./skills/sql.png"
                },
                {
                    name: "DBMS",
                    image: "./skills/dbms.png"
                },
                {
                    name: "RDBMS",
                    image: "./skills/rdbms.png"
                }
            ]   
        },

        {
            name: "Tools",
            description: [
                {
                    name: "vscode",
                    image: "./skills/vscode.png"
                },
                {
                    name: "git",
                    image: "./skills/git.png"
                },
                {
                    name: "npm",
                    image: "./skills/npm.png"
                },
                {
                    name: "Postman",
                    image: "./skills/postman.png"
                },
                {
                    name: "Terminal",
                    image: "./skills/terminal.png"
                },
                {
                    name: "Linux",
                    image: "./skills/linux.png"
                },
                {
                    name: "GitHub",
                    image: "./skills/github.png"
                },
                {
                    name: "AWS",
                    image: "./skills/aws.png"
                }
            ]   
        }
            
    ]);









    return (
        <main>

            <h1 className='text-4xl font-bold text-center'>Skills</h1>
            <div className="flex flex-wrap justify-around  gap-20">

                {

                    skills.map((item, index) => (

                        <section  
                            className="shadow-xl shadow-gray-300  p-4 rounded-xl bg-gray-400 w-64 md:w-64 lg:w-80 xl:w-96 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black overflow-auto"
                            key={index}
                        >


                            <h2 className='text-2xl font-bold text-center mb-2 underline'>
                                {item.name}
                            </h2>

                            <section className='flex flex-col gap-4 '>
                                {   
                                    item.description && item.description.map((item, index) => (

                                        <li 
                                            key={index}
                                            className=' text-xl flex shadow-xl p-4 gap-4 rounded-xl shadow-gray-400 bg-green-100 '>

                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className='w-6 h-6'
                                            />
                                                
                                            <p>{item.name}</p>
                                      

                                            
                                        </li>
                                    ))
                                
                                }
                            
                            </section>

                        </section>
                    ))
                }

                
            </div>

        </main>
    )
  }




