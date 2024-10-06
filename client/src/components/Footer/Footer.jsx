
function Footer() {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-10'>
      <div className='container mx-auto flex flex-col items-center justify-center space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://github.com/gauravghuge7" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>GitHub</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://leetcode.com/gauravghuge7/" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>LeetCode</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://www.linkedin.com/in/gaurav-ghuge-530651226/" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>LinkedIn</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://hashnode.com/@gauravghuge" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>HashNode</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://medium.com/@gauravghuge737" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>Medium</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>Instagram</a>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out text-center'>
            <a href="https://twitter.com/gauravghuge737" className='text-xl hover:text-yellow-400 transition duration-300 ease-in-out'>Twitter</a>
          </div>
        </div>
        <p className='text-center text-xl mt-6'>
          © 2023 Gaurav Ghuge. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
