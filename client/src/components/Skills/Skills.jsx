import { useState } from "react";

export default function Skills() {
  const [skills] = useState([
    {
      name: "Frontend",
      description: [
        { name: "HTML", image: "./html.png" },
        { name: "CSS", image: "./css.png" },
        { name: "JavaScript", image: "./javascript.png" },
        { name: "React", image: "./react.png" },
        { name: "Tailwind Css", image: "./tailwind.png" },
        { name: "Redux", image: "./redux.png" },
        { name: "Redux Toolkit", image: "./redux-toolkit.png" }
      ]
    },
    {
      name: "Backend",
      description: [
        { name: "NodeJs", image: "./nodejs.png" },
        { name: "Express", image: "./express.png" },
        { name: "JavaScript", image: "./javascript.png" },
        { name: "Authentication", image: "./authentication.png" },
        { name: "JWT", image: "./jwt.png" },
        { name: "Authorization", image: "./authorization.png" }
      ]
    },
    {
      name: "Core Languages",
      description: [
        { name: "C++", image: "./c++.png" },
        { name: "JAVA", image: "./java.png" },
        { name: "Data Structures", image: "./data-structures.png" },
        { name: "Algorithms", image: "./algorithms.png" }
      ]
    },
    {
      name: "Databases",
      description: [
        { name: "MongoDB", image: "./mongodb.png" },
        { name: "MySQL", image: "./mysql.png" },
        { name: "SQL", image: "./sql.png" },
        { name: "DBMS", image: "./dbms.png" },
        { name: "RDBMS", image: "./rdbms.png" }
      ]
    },
    {
      name: "Tools",
      description: [
        { name: "VS Code", image: "./vscode.png" },
        { name: "Git", image: "./git.png" },
        { name: "npm", image: "./npm.png" },
        { name: "Postman", image: "./postman.png" },
        { name: "Terminal", image: "./terminal.png" },
        { name: "Linux", image: "./linux.png" },
        { name: "GitHub", image: "./github.png" },
        { name: "AWS", image: "./aws.png" }
      ]
    }
  ]);

  return (
    <main className="py-16 px-6 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-white mb-14 tracking-tight">
        My Tech Stack
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {skills.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 w-full max-w-sm transform hover:scale-[1.05] border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-center text-blue-400 mb-6 underline underline-offset-8 decoration-blue-500">
              {item.name}
            </h2>

            <ul className="space-y-4">
              {item.description.map((descItem, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 p-4 rounded-xl"
                >
                  <img
                    src={descItem.image}
                    alt={descItem.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-white font-medium text-lg">{descItem.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}