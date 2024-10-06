import { Component } from 'react';


export default class Contact extends Component {
  render() {
    return (
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
        <section className="text-center my-12">
          <p className="text-3xl font-semibold text-white">
            Contact <span className="text-blue-400">Us</span>
          </p>
          <p className="text-lg text-gray-300">Let’s connect with Gaurav Ghuge</p>
        </section>

        <main className="flex flex-col md:flex-row justify-center w-full items-center gap-8 md:gap-12">
          {/* Contact Details Section */}
          <div className="bg-gray-800 shadow-lg flex flex-col justify-center items-center rounded-xl p-8 md:p-10 md:w-[30rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Contact Details</h2>
            <p className="text-lg text-gray-300 mb-6">Connect with Gaurav to know more!</p>

            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-400">PHONE</h3>
              <p className="text-lg text-gray-200">+91 8767482793, +91 9421328262</p>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-400">EMAIL</h3>
              <p className="text-lg text-gray-200">gauravghuge737@gmail.com</p>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-400">ADDRESS</h3>
              <p className="text-lg text-gray-200">
                226, At Deopul Village, Post Wasadi <br />
                Sub-District Kannad, Aurangabad (Sambajinagar) <br />
                Maharashtra, India 431104
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 md:p-10 w-full md:w-[40rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Get in Touch</h2>
            <input
              type="text"
              placeholder="Name"
              className="input p-4 rounded border border-gray-500 w-full mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="input p-4 rounded border border-gray-500 w-full mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input p-4 rounded border border-gray-500 w-full mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              cols="30"
              rows="5"
              className="message p-4 rounded border border-gray-500 w-full mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Message"
            ></textarea>

            <button className="button bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Send Now!
            </button>
          </div>
        </main>
      </div>
    );
  }
}
