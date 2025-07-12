import React from 'react';
import logo from '../../../public/personal_photos/gaurav_logo.jpg';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-12'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* Logo Section */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>GAURAV GHUGE</h3>
            <p className='text-gray-300'>
              Full Stack Developer passionate about AI, scalable systems, and real-world solutions.
            </p>
            <img src={logo} alt="logo" className='w-16 h-16 rounded-full object-cover' />
          </div>

          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-yellow-400'>About</h3>
            <p className='text-gray-300'>
              Innovative developer with experience in modern web technologies, backend systems, and AI integrations.
            </p>
            <div
              className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 text-center transform hover:scale-105'
            >
              <a
                href="https://drive.google.com/file/d/12QRsrUyt8NHMVAegAF_kfFuHj27Dv9OI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='text-base text-white hover:text-yellow-400 transition duration-300'
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-yellow-400'>Connect</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[
                { name: 'GitHub', url: 'https://github.com/gauravghuge7' },
                { name: 'LeetCode', url: 'https://leetcode.com/gauravghuge7/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gaurav-ghuge-530651226/' },
                { name: 'HashNode', url: 'https://hashnode.com/@gauravghuge' },
                { name: 'Medium', url: 'https://medium.com/@gauravghuge737' },
                { name: 'Instagram', url: 'https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==' },
                { name: 'Twitter', url: 'https://twitter.com/gauravghuge737' },
                { name: 'YouTube', url: 'https://www.youtube.com/channel/UCNrGaENOoOUfkhCqRMxvTAw' },
              ].map((link) => (
                <div
                  key={link.name}
                  className='hover:bg-gray-700 transition duration-300 text-center transform hover:scale-105'
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-base text-white hover:text-yellow-400 transition duration-300'
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-yellow-400'>Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {[
                'Java', 'C++', 'JavaScript', 'TypeScript', 'Python',
                'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
                'MySQL', 'Spring Boot', 'Docker', 'AWS', 'LangChain',
                'Neo4j', 'GraphQL', 'HTML', 'CSS', 'REST APIs'
              ].map(skill => (
                <span
                  key={skill}
                  className='px-3 py-1 bg-gray-800 rounded-full text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-6 border-t border-gray-700 text-center pt-4'>
          <p className='text-gray-300'>
            © {new Date().getFullYear()} Gaurav Ghuge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
