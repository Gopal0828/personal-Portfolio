import { useState } from "react";



function Profiles() {

    const [profile, setProfile] = useState([
        {
            title: "GitHub",
            icon: "./socialAssets/github.png",
            link: "https://github.com/gauravghuge7",
            description: "See Repository at my GitHub profile",
            username: "gauravghuge7"
        },
        {
            title: "LinkedIn",
            icon: "./socialAssets/linked.png",
            link: "https://www.linkedin.com/in/gaurav-ghuge-530651226/",
            description: "join me on LinkedIn",
            username: "gauravghuge"
        },
        {
            title: "Instagram",
            icon: "./socialAssets/insta.jpeg",
            link: "https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==",
            description: "join With me on Instagram",
            username: "garry_7038"
        },
        {
            title: "Twitter",
            icon: "./socialAssets/twitter.png",
            link: "https://twitter.com/gauravghuge737",
            description: "join With me on twiiter",
            username: "gauravghuge737"
        },
        {
            title: "HashNode",
            icon: "./socialAssets/hashnode.png",
            link: "https://hashnode.com/@gauravghuge",
            description: "Read my Articles On HashNode",
            username: "gauravghuge"
        },
        {
            title: "Medium",
            icon: "./socialAssets/medium.png",
            link: "https://medium.com/@gauravghuge737",
            description: "Read my Ariticals on Medium",
            username: "gauravghuge737"
        },
        {
            title: "LeetCode",
            icon: "./socialAssets/leetcode.jpeg",
            link: "https://leetcode.com/gauravghuge7/",
            description: "Check my Progress On LeetCode",
            username: "gauravghuge7"
        },
        {
            title: "HackerRank",
            icon: "./socialAssets/hacker.png",
            link: "https://www.hackerrank.com/profile/guduughuge7",
            description: "Check my Progress On HackerRank",
            username: "guduughuge7"
        },


    ]); 



    return (
        <div className="m-8 p-8 text-center">

            <h2 className="text-xl font-bold text-center m-12 underline"> My Profiles </h2>
            
            <div className="flex flex-wrap gap-20 xs:flex-col md:flex-row justify-center">

                {
                    profile.map((item, index) => (
                 
                        <a 
                            key={index}
                            href={item.link}  
                            className="shadow-lg p-4  shadow-gray-800 rounded-md hover:shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black overflow-auto w-64 md:w-64 lg:w-80 xl:w-96"
                            style={{ pointerEvents: 'auto', zIndex: 1 }}
                        >

                            <span>
                                <h2 className="text-xl font-bold text-center">{item.title}</h2>
                                <img src={item.icon} alt={item.title} height={60} width={60} />
                            </span>
                            <p>{item.description}</p>
                            <h3 className="text-center font-semibold underline text-blue-900">{item.username}</h3>

                        </a>
              
                    ))
                }

            </div>



        
        </div>
    )
}


export default Profiles
