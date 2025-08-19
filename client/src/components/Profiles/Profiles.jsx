import { useState } from "react";
import './profiles.css'; // Ensure to import your CSS file

function Profiles() {
    const [profile, setProfile] = useState([
        {
            title: "GitHub",
            icon: "./github.png",
            link: "https://github.com/gopspatil28",
            description: "See Repository at my GitHub profile",
            username: "gopspatil28"
        },
        {
            title: "LinkedIn",
            icon: "./linked.png",
            link: "https://www.linkedin.com/in/gopal-dafal",
            description: "Join me on LinkedIn",
            username: "gopal-dafal"
        },
        {
            title: "Twitter",
            icon: "./twitter.png",
            link: "https://twitter.com/gopspatil",
            description: "Join me on Twitter",
            username: "gopspatil"
        }
    ]);

    return (
        <div className="w-full h-[40rem]">
            <h2 className="text-2xl font-bold text-center mb-12 underline text-white">Gopal Dafal Profiles</h2>
            <div className="scroll-container">
                <div className="scroll-content gap-40">
                    {profile.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="snap-start shadow-md p-3 border-red-400 border-2 shadow-gray-400 rounded-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:text-black mx-2"
                            style={{ minWidth: '180px', maxWidth: '220px' }}
                        >
                            <span className="flex flex-col items-center">
                                <img src={item.icon} alt={item.title} className="mb-2" style={{ height: '50px', width: '50px' }} />
                                <h2 className="text-lg font-semibold text-center">{item.title}</h2>
                                <p className="text-sm text-gray-700 text-center">{item.description}</p>
                                <h3 className="text-xs font-medium underline text-blue-800 text-center">{item.username}</h3>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profiles;
