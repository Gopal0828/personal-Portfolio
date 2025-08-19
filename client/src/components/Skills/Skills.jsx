import { useState } from "react";
import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { SiTerraform, SiAnsible, SiSonarqube, SiSplunk } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    {
      name: "Cloud & Containerization",
      description: [
        { name: "AWS", icon: <FaAws size={30} color="#FF9900" /> },
        { name: "Docker", icon: <FaDocker size={30} color="#2496ED" /> },
      ],
    },
    {
      name: "Automation & Infrastructure",
      description: [
        { name: "Terraform", icon: <SiTerraform size={30} color="#623CE4" /> },
        { name: "Ansible", icon: <SiAnsible size={30} color="#EE0000" /> },
        { name: "Jenkins", icon: <FaJenkins size={30} color="#D24939" /> },
        { name: "Python", icon: <FaPython size={30} color="#3776AB" /> },
      ],
    },
    {
      name: "Monitoring & Logging",
      description: [
      
        { name: "Splunk", icon: <SiSplunk size={30} color="#1F2326" /> },
        { name: "SonarQube", icon: <SiSonarqube size={30} color="#4E9BCD" /> },
      ],
    },
    {
      name: "Version Control & OS",
      description: [
        { name: "Git", icon: <FaGitAlt size={30} color="#F05032" /> },
        { name: "Linux", icon: <FaLinux size={30} color="#FCC624" /> },
      ],
    },
  ]);

  return (
    <main className="py-16 px-6 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-white mb-14 tracking-tight">
        Gopal Dafal's DevOps Tech Stack
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
                  <span>{descItem.icon}</span>
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
