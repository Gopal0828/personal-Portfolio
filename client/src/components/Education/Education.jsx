import React from 'react'

const Education = () => {



   const [education, setEducation] = React.useState([

      {
        schoolName: 'Dr Babasaheb Ambedkar Marathwada University',
        degree: 'Bachelor of Science in Computer Science',
        year: "2022",
        major: 'Computer Science',
        percentage: "73.00",
    },
    {
        schoolName: 'Vivekanand College of Aurangabad',
        degree: 'Master of Computer Science (MSC)',
        year: "Completed 2024",
        major: 'Computer Science',
        percentage: "69.00",
    }
   ])


   return (
      <div>

         <h1>Education</h1>

         <section className="w-full max-w-5xl mx-auto my-10 bg-gray-800 p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl text-center text-yellow-400 font-bold mb-8">Education</h2>

  <div className="overflow-x-auto">
    <table className="table-auto w-full text-left border-collapse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <thead>
        <tr className="bg-gray-700 text-yellow-400">
          <th className="p-4">School Name</th>
          <th className="p-4">Degree</th>
          <th className="p-4">Year</th>
          <th className="p-4">Major</th>
          <th className="p-4">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {
          education.map((item, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-300">
              <td className="p-4 border-b border-gray-700">{item.schoolName}</td>
              <td className="p-4 border-b border-gray-700">{item.degree}</td>
              <td className="p-4 border-b border-gray-700">{item.year}</td>
              <td className="p-4 border-b border-gray-700">{item.major}</td>
              <td className="p-4 border-b border-gray-700">{item.percentage}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</section>

         
      </div>
   )
}

export default Education