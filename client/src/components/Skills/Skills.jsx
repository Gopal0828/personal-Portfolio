
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
        <main className="py-10">
            <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Skills</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {
                skills.map((item, index) => (
                    <section
                    className="transition-transform duration-300 hover:scale-105 p-4 rounded-lg shadow-lg shadow-gray-400 text-white w-56 sm:w-64 ease-in-out"
                    key={index}
                    >
                    <h2 className='text-xl font-semibold text-center mb-2 underline'>
                        {item.name}
                    </h2>
                    <section className='flex flex-col gap-2'>
                        {
                        item.description && item.description.map((descItem, index) => (
                            <li
                            key={index}
                            className='flex items-center text-lg bg-white text-gray-800 shadow-md p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200'
                            >
                            <img
                                src={descItem.image}
                                alt={descItem.name}
                                className='w-8 h-8 mr-2'
                            />
                            <p className='text-gray-700'>{descItem.name}</p>
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




