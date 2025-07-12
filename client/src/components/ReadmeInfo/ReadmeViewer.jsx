import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReadmeContent from "./Info.md?raw";

const CopyButton = ({ label, text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`ml-4 px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
        copied
          ? "bg-green-600 text-white"
          : "bg-gray-700 text-white hover:bg-gray-600"
      }`}
    >
      {copied ? "Copied!" : `Copy ${label}`}
    </button>
  );
};

const ReadmeViewer = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(ReadmeContent);
  }, []);

  const info = {
    name: {
      label: "Name",
      text: "Gaurav Ghuge",
      link: "https://www.linkedin.com/in/gaurav-ghuge/",
    },
    email: {
      label: "Email",
      text: "gauravghuge737@gmail.com",
      link: "mailto:gauravghuge737@gmail.com",
    },
    phone: {
      label: "Phone",
      text: "+91 8767482793",
    },
    location: {
      label: "Location",
      text: "Aurangabad, Maharashtra, India",
    },
    links: [
      { label: "GitHub", url: "https://github.com/gauravghuge7" },
      { label: "LeetCode", url: "https://leetcode.com/gauravghuge7/" },
      { label: "LinkedIn (1)", url: "https://www.linkedin.com/in/gaurav-ghuge-530651226/" },
      { label: "LinkedIn (2)", url: "https://www.linkedin.com/in/gaurav-ghuge/" },
      { label: "HashNode", url: "https://hashnode.com/@gauravghuge" },
      { label: "Medium", url: "https://medium.com/@gauravghuge737" },
      { label: "Instagram", url: "https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==" },
      { label: "Twitter", url: "https://twitter.com/gauravghuge737" },
      { label: "YouTube", url: "https://www.youtube.com/channel/UCNrGaENOoOUfkhCqRMxvTAw" },
      { label: "Portfolio", url: "https://gauravghugeportfolio.com" },
    ],
  };

  const education = [
    {
      schoolName: "Maharashtra state Board of Secondary and Higher Secondary Education",
      degree: "Secondary Education",
      year: 2019,
      major: "Science",
      percentage: 79.0,
    },
    {
      schoolName: "Maharashtra state Board of Secondary and Higher Secondary Education",
      degree: "Higher Secondary Education",
      year: "2021",
      major: "Science",
      percentage: 83.17,
    },
    {
      schoolName: "Dr Babasaheb Ambedkar Marathwada University",
      degree: "Bachelor of Science in Computer Science",
      year: "2025",
      major: "Computer Science",
      percentage: "grade A++ 8.2 GPA ",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer ",
      company: "Freelancing ",
      duration: "September 2024 – April 2025",
      achievements: [
        "Built a secure, scalable e-commerce and billing platform supporting digital payments, real-time invoicing, and smooth product navigation and Handled over 2,000 concurrent users with optimized backend infrastructure",
        "Integrated secure checkout and Razorpay payment and Delhivery APIs, Improved site performance by 40% and ensured availability through resilient deployment strategies and monitoring",
        "Implemented secure checkout and order confirmation systems, optimizing the customer journey and Improved performance by 40% via CDN, lazy loading, and optimized delivery coordination",
      ],
      link: { label: "Live Demo", url: "#" },
    },
    {
      title: "Full Stack Developer Intern",
      company: "Arohi Softwares",
      location: "Ahemednagar, Maharashtra, India",
      duration: "May 2024 – September 2024",
      achievements: [
        "Worked on Node.js to handle payment acceptance and verification, Integrated third-party APIs like Cloudinary, Razorpay, and AWS to streamline storage and payment processing",
        "Developed an Employee Management System using the MERN stack, creating a dynamic web interface",
        "Collaborated on Learning Management System project, contributing to design and deployment",
      ],
    },
  ];

  return (
    <div className="p-4 mt-12 bg-black text-white">
      <div className="flex flex-col gap-6 h-full">
        {/* Personal Information in Two Columns */}
        <div className="md:w-full bg-gray-900 rounded p-6 max-h-full">
          <h2 className="text-3xl font-bold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-3">
            {[info.name, info.email, info.phone, info.location].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded mb-3 transition"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-xl font-semibold"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-xl font-semibold">{item.text}</span>
                )}
                <CopyButton label={item.label} text={item.text} />
              </div>
            ))}
          </div>
        </div>

        {/* Profile Links in Two Columns */}
        <div className="md:w-full bg-gray-900 rounded p-6 max-h-full">
          <h3 className="text-2xl font-semibold mb-4">🔗 Profiles</h3>
          <div className="grid grid-cols-2 gap-3">
            {info.links.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-3 rounded transition"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {link.label}
                </a>
                <CopyButton label={link.label} text={link.url} />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="md:w-full bg-gray-900 rounded p-6 ">
          <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded mb-3 transition hover:bg-gray-700"
            >
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <div className="flex items-center justify-between">
                <p className="text-gray-300">{edu.schoolName}</p>
                <CopyButton label={""} text={edu.schoolName} /> 
              </div>
              <p className="text-gray-400">{edu.year} | {edu.major}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-300">{edu.percentage}</p>
                <CopyButton label={""} text={edu.percentage} /> 
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="md:w-full bg-gray-900 rounded p-6 max-h-full">
          <h3 className="text-2xl font-semibold mb-4">💼 Experience</h3>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded mb-3 transition hover:bg-gray-700"
            >
            
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <CopyButton label={""} text={exp.title} /> 
              </div>

              <div className="flex items-center justify-between">
                 {exp.company && <p className="text-gray-300">{exp.company}</p>}
                 {exp.company && <CopyButton label={""} text={exp.company} />}
              </div>
              {exp.location && <p className="text-gray-400">{exp.location}</p>}
              <p className="text-gray-400">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                {exp.achievements.map((achievement, i) => (
                  <div className="flex items-center justify-between">
                    <li key={i}>{achievement}</li>
                    <CopyButton label={""} text={achievement} />
                  </div>
                  
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 inline-block"
                >
                  {exp.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadmeViewer;