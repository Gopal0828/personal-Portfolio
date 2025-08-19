import React from 'react';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-12'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* Gopal Dafal Section */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-yellow-400'>GOPAL KAUTIK DAFAL</h3>
            <p className='text-gray-300'>
              AWS & DevOps Engineer with 3 years of strong experience in provisioning and managing AWS cloud infrastructure.
              Skilled in building CI/CD pipelines with Jenkins and GitHub, automating infrastructure with Terraform and Ansible, containerizing applications using Docker, and orchestrating deployments via Kubernetes.
            </p>
            <p className='text-gray-300'>
              Proficient in architecting three-tier AWS solutions using EC2, S3, VPC, RDS, Lambda, and implementing serverless and microservices architectures.
              Experienced in automation using Python, configuration management, and applying monitoring tools like CloudWatch and Splunk for application insights.
            </p>
            <p className='text-gray-300'>
              Certified AWS Solutions Architect – Associate with deep knowledge of cloud security (IAM), Agile DevOps practices, and managing application quality with SonarQube and Nexus.
            </p>
          </div>

          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-yellow-400'>About</h3>
            <p className='text-gray-300'>
              Experienced DevOps professional focused on scalable cloud solutions, automation, and continuous delivery.
            </p>
            <div
              className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 text-center transform hover:scale-105'
            >
              <a
                href="mailto:gopspatil28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='text-base text-white hover:text-yellow-400 transition duration-300'
              >
                Contact via Email
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-yellow-400'>Connect</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[
                { name: 'GitHub', url: 'https://github.com/gopspatil28' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gopal-dafal' },
                { name: 'Twitter', url: 'https://twitter.com/gopspatil' }
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
                'AWS', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes',
                'Ansible', 'Python', 'Git', 'CloudWatch', 'Splunk',
                'Linux', 'CI/CD', 'Microservices', 'Serverless', 'SonarQube'
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
            © {new Date().getFullYear()} Gopal Kautik Dafal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
