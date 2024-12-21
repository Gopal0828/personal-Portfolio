import { useState } from "react";
import './profiles.css'; // Ensure to import your CSS file

function Profiles() {
    const [profile, setProfile] = useState([
        {
            title: "GitHub",
            icon: "./github.png",
            link: "https://github.com/gauravghuge7",
            description: "See Repository at my GitHub profile",
            username: "gauravghuge7"
        },
        {
            title: "LinkedIn",
            icon: "./linked.png",
            link: "https://www.linkedin.com/in/gaurav-ghuge-530651226/",
            description: "Join me on LinkedIn",
            username: "gauravghuge"
        },
        {
            title: "Instagram",
            icon: "./insta.jpeg",
            link: "https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==",
            description: "Join with me on Instagram",
            username: "garry_7038"
        },
        {
            title: "Twitter",
            icon: "./twitter.png",
            link: "https://twitter.com/gauravghuge737",
            description: "Join with me on Twitter",
            username: "gauravghuge737"
        },
        {
            title: "HashNode",
            icon: "./hashnode.png",
            link: "https://hashnode.com/@gauravghuge",
            description: "Read my articles on HashNode",
            username: "gauravghuge"
        },
        {
            title: "Medium",
            icon: "./medium.png",
            link: "https://medium.com/@gauravghuge737",
            description: "Read my articles on Medium",
            username: "gauravghuge737"
        },
        {
            title: "LeetCode",
            icon: "./leetcode.jpeg",
            link: "https://leetcode.com/gauravghuge7/",
            description: "Check my progress on LeetCode",
            username: "gauravghuge7"
        },
        {
            title: "HackerRank",
            icon: "./hacker.png",
            link: "https://www.hackerrank.com/profile/guduughuge7",
            description: "Check my progress on HackerRank",
            username: "guduughuge7"
        },
    ]);

    return (
        <div className="w-full h-[40rem]">
            <h2 className="text-2xl font-bold text-center mb-12 underline text-white">My Profiles</h2>
            <div className="scroll-container">
                <div className="scroll-content gap-40">
                    {profile.map((item, index) => (
                        <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="snap-start shadow-md p-3 border-red-400 border-2 shadow-gray-400 rounded-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:text-black mx-2" // Adjusted padding, shadow, and margins
                        style={{ minWidth: '180px', maxWidth: '220px' }} // Smaller width
                        >
                      <span className="flex flex-col items-center"> {/* Center content vertically */}
                          <img src={item.icon} alt={item.title} className="mb-2" style={{ height: '50px', width: '50px' }} /> {/* Adjusted image size */}
                          <h2 className="text-lg font-semibold text-center">{item.title}</h2> {/* Reduced font size */}
                          <p className="text-sm text-gray-700 text-center">{item.description}</p> {/* Reduced font size */}
                          <h3 className="text-xs font-medium underline text-blue-800 text-center">{item.username}</h3> {/* Reduced font size */}
                      </span>
                  </a>
                  
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profiles;
