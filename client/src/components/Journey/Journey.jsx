import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Journey.css';

const Journey = () => {

   useEffect(() => {
      AOS.init({
      duration: 1000,
      once: true,
      });
   }, []);

   const bcs = {
      title: 'Education',
      description: `
         - Bachelor of Computer Science from Dr. Babasaheb Ambedkar Marathwada University (Expected 2025). 
         - Higher Secondary Education from Maharashtra State Board with 83.17% (2019 – 2021). 
         - Secondary Education from Maharashtra State Board with 79.00% (2018 – 2019).
      `,
      icon: '🎓',
   }

   const arohi = {
      title: 'Work Experience',
      description: `
         - Full Stack Developer Intern at Arohi Softwares (May 2024 – Sep 2024). 
         - Responsibilities included: 
            - Payment integration and verification using Node.js.
            - Integration of APIs like Cloudinary, Razorpay, and AWS for storage and payments.
            - Development of an Employee Management System using the MERN stack.
            - Contributions to a Learning Management System's design and deployment.
      `,
      icon: '💼',
   }

   


   const projects = [
   
      {
         title: 'Projects - Laptop Checker App',
         description: `
            - Designed an interface in Next.js for evaluating laptop performance and delivering actionable insights. 
            - Focused on system hardware interaction and user-centric design principles.
            - Links:
               - Live App: https://second-hand-laptop-checker.vercel.app/
               - Source Code: https://github.com/gauravghuge7/Second_hand_Laptop_checker
         `,
         icon: '🚀',
      },
      {
         title: 'Projects - Company Management System',
         description: `
            - Built a Jira-like system for managing teams, clients, and tasks using React and Node.js. 
            - Developed tools for automated data gathering and impactful insights.
            - Links:
               - Source Code: https://github.com/gauravghuge7/company-management
         `,
         icon: '🚀',
      },
      {
         title: 'Projects - Student Career Guide and Preparation',
         description: `
            - Developed a MERN-based career guidance platform with a responsive UI using React. 
            - Integrated OpenAI for question paper preparation and automated scoring.
            - Links:
               - Live Project: https://naukari-project.onrender.com/
         `,
         icon: '🚀',
      },
      {
         title: 'Projects - Learning Management System',
         description: `
            - Contributed to the design and deployment of an LMS focusing on content management and interaction. 
            - Technologies used include React, Node.js, and AWS.
         `,
         icon: '🚀',
      }
   ]

   useEffect(() => {
      const handleScroll = () => {
         const verticalCards = document.getElementById('line');
         if (verticalCards) {
            verticalCards.classList.add('animate');
            console.log('verticalCards', verticalCards);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">My Journey</h1>

      <aside
         id='vertical-cards'
      >

         <main
            className='flex gap-30 w-[90%] ml-20'
         > 

            <mark id='line' className='h-[36rem] w-2 bg-black ' ></mark>

            <article className="w-full max-w-4xl py-10 flex justify-center items-center mx-auto">
               <div className="w-[80%]  bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-8">

               <div className="w-full">
                  <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">{bcs.title}</h2>
                  <p className="text-lg leading-relaxed px-6 sm:px-12">
                     {bcs.description}
                  </p>
               </div>
               <div className="flex items-center space-x-6 mt-6">
                  <span className="bg-white text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                     💼
                  </span>
                  <span className="bg-white text-teal-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                     🚀
                  </span>
               </div>
               </div>
            </article>

         </main>


         <div id='line' className='h-2 ml-20 w-[85%] bg-black' ></div>

         <main
            className='flex gap-40 w-[90%] ml-5'
         > 

            <article className="w-full max-w-4xl py-10 flex justify-center items-center mx-auto">
               <div className="w-[80%]  bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-8">

               <div className="w-full">
                  <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">{arohi.title}</h2>
                  <p className="text-lg leading-relaxed px-6 sm:px-12">
                     {arohi.description}
                  </p>
               </div>
               <div className="flex items-center space-x-6 mt-6">
                  <span className="bg-white text-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                     💼
                  </span>
                  <span className="bg-white text-teal-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                     🚀
                  </span>
               </div>
               </div>
            </article>

            <mark id='line' className='h-[32rem] w-2 bg-black '> </mark>

         </main>

         
         


      
      </aside>


   </div>
);
};

export default Journey;
