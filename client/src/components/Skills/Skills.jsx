
import { useState } from "react";

export default function Skills() {

    const [skills, setSkills] = useState([
        
        {
            name: "Frontend",
            description: [
                {
                    name: "HTML",
                    image: "./html.png"
                },
                {
                    name: "CSS",
                    image: "./css.png"
                },
                {
                    name: "JavaScript",
                    image: "./javascript.png"
                },
                {
                    name: "React",
                    image: "./react.png"
                },
                {
                    name: "Tailwind Css",
                    image: "./tailwind.png"
                },
                {
                    name: "Redux",
                    image: "./redux.png"
                },
                {
                    name: "Redux Toolkit",
                    image: "./redux-toolkit.png"
                }
                
               
            ]
        },
        {
            name: "Backend",
            description: [
                {
                    name: "NodeJs",
                    image: "./nodejs.png"
                },
                {
                    name: "Express",
                    image: "./express.png"
                },
                {
                    name: "JavaScript",
                    image: "./javascript.png"
                },
                {
                    name: "Authentication",
                    image: "./authentication.png"
                },
                {
                    name: "JWT",
                    image: "./jwt.png"
                },
                {
                    name: "Authorization",
                    image: "./authorization.png"
                }
            ]
       
        },
        {       
            name: "Core Languages",
            description: [
                {
                    name: "C++",
                    image: "./c++.png"
                },
                {
                    name: "JAVA",
                    image: "./java.png"
                },
                {
                    name: "Data Structures",
                    image: "./data-structures.png"
                },
                {
                    name: "Algorithms",
                    image: "./algorithms.png"
                },
                
                
               
            ]
            
        },
        {
            name: "Databases",
            description: [
                {
                    name: "MongoDB",
                    image: "./mongodb.png"
                },
                {
                    name: "MySQL",
                    image: "./mysql.png"
                },
                {
                    name: "SQL",
                    image: "./sql.png"
                },
                {
                    name: "DBMS",
                    image: "./dbms.png"
                },
                {
                    name: "RDBMS",
                    image: "./rdbms.png"
                }
            ]   
        },

        {
            name: "Tools",
            description: [
                {
                    name: "vscode",
                    image: "./vscode.png"
                },
                {
                    name: "git",
                    image: "./git.png"
                },
                {
                    name: "npm",
                    image: "./npm.png"
                },
                {
                    name: "Postman",
                    image: "./postman.png"
                },
                {
                    name: "Terminal",
                    image: "./terminal.png"
                },
                {
                    name: "Linux",
                    image: "./linux.png"
                },
                {
                    name: "GitHub",
                    image: "./github.png"
                },
                {
                    name: "AWS",
                    image: "./aws.png"
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




