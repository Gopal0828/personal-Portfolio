import { useRef, useState } from 'react'

const ExperienceView = () => {
   
  const [experience, setExperience] = useState([
   {
       id: 1,
       company: 'Arohi Software',
       address: 'Shrigonda, Ahmednagar, Maharashtra, India',
       position: 'Full Stack Developer', 
       startDate: '07 May 2025',
       endDate: '18 August 2025',
       description: 'I started my first job as a full stack developer in May 2024. I am very interested in learning new things and I am ready to work on industry live projects.',
       project: [
         {
             id: 1,
             name: 'Employee Management System',
             description: 'Create a system that allows employees to manage their own information.',
             url: 'https://emplyeemanagement1.vercel.app/',
             repository: 'https://github.com/gauravghuge7/emplyeemanagement1',
             image: './arohi-employee.png',
         },
         {
             id: 2,
             name: 'Learning Management System',
             description: 'Create a system that allows students to manage their information and enroll in courses.',
             url: 'https://cloud.google.com/',
             repository: 'https://github.com/ArohiSoftware/LMS',
             image: '',
             technologies: 'React, Redux, Tailwind CSS, MongoDB, Express, Node.js',
         }
       ]
   },
 ]);


 const experienceRef = useRef(null);


 return (
   <div>
       <h1>Experience Details</h1>

       <section>
         {
             experience.map((item, index) => {
               return (
                   <div 
                     key={index} 
                     className=''
                   >
                     <h2>{item.company}</h2>
                     <p>{item.position}</p>
                     <p>{item.startDate}</p>
                     <p>{item.endDate}</p>
                     <p>{item.description}</p>
                   </div>
               )
             })
         }
       </section>



       <main>
         <dialog
            
         >
         
         </dialog>
       
       </main>
       
   </div>
 )  


}

export default ExperienceView