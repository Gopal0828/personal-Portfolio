import { useState, useRef } from "react";
import "./Experience.css";

function Experience() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Arohi Software",
      address: "Shrigonda, Ahmednagar, Maharashtra, India",
      position: "Full Stack Developer",
      startDate: "07 May 2025",
      endDate: "18 August 2025",
      description:
        "I started my first job as a full stack developer in May 2024. I am very interested in learning new things and I am ready to work on industry live projects.",
      project: [
        {
          id: 1,
          name: "Employee Management System",
          description:
            "Create a system that allows employees to manage their own information.",
          url: "https://emplyeemanagement1.vercel.app/",
          repository: "https://github.com/gauravghuge7/emplyeemanagement1",
          image: "./arohi-employee.png",
          technologies: "React, Node.js, MongoDB",
        },
        {
          id: 2,
          name: "Learning Management System",
          description:
            "Create a system that allows students to manage their information and enroll in courses.",
          url: "https://cloud.google.com/",
          repository: "https://github.com/gauravghuge7/LMS",
          image: "",
          technologies: "React, Redux, Tailwind CSS, MongoDB, Express, Node.js",
        },
      ],
    },
  ]);

  const projectRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProjects = () => {
    projectRef.current.showModal();
  };

  const closeProjects = () => {
    projectRef.current.close();
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-200">
        Experience
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="experience-card shadow-lg rounded-lg p-6 bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              {exp.company}
            </h2>
            <hr className="border-gray-600 my-2" />
            <p className="text-sm text-gray-400 mb-2">
              <strong>Address:</strong> {exp.address}
            </p>
            <hr className="border-gray-600 my-2" />
            <p className="text-md text-gray-300 mb-2">
              <strong>Position:</strong> {exp.position}
            </p>
            <hr className="border-gray-600 my-2" />
            <p className="text-sm text-gray-400 mb-2">
              <strong>Start Date:</strong> {exp.startDate}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>End Date:</strong> {exp.endDate}
            </p>
            <hr className="border-gray-600 my-2" />
            <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
              onClick={openProjects}
            >
              View Projects
            </button>
          </div>
        ))}
      </section>

      {/* Projects Modal */}
      <dialog  ref={projectRef} className="custom-dialog p-6 rounded-lg shadow-2xl bg-gray-900">
        <button
          onClick={closeProjects}
          className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
        <h2 className="text-2xl font-semibold text-teal-400 mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience[currentIndex]?.project.map((pro, index) => (
            <div
              key={index}
              className="project-card border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-gray-800"
            >
              <h3 className="text-lg font-medium text-teal-400 mb-2">
                {pro.name}
              </h3>
              <p className="text-sm text-gray-300 mb-2">{pro.description}</p>
              {pro.image && (
                <img
                  src={pro.image}
                  alt={`${pro.name} Image`}
                  className="rounded-md mb-4"
                />
              )}
              <p className="text-sm text-gray-400 mb-2">
                <strong>Technologies:</strong> {pro.technologies}
              </p>
              <div className="flex gap-4">
                <a
                  href={pro.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                >
                  View Project
                </a>
                <a
                  href={pro.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
}

export default Experience;
