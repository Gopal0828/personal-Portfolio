import { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="bg-black min-h-screen p-6 md:p-12 text-white">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Contact <span className="text-blue-500">Us</span>
          </h1>
          <p className="text-lg text-gray-400">Let’s connect with Gaurav Ghuge</p>
        </section>

        <main className="flex flex-col lg:flex-row items-stretch gap-10 justify-center max-w-7xl mx-auto">
          {/* Contact Details Card */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4 text-center">Contact Details</h2>
            <p className="text-gray-400 mb-6 text-center">Connect with Gaurav to know more!</p>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-1">PHONE</h3>
                <p className="text-gray-300">+91 8767482793, +91 9421328262</p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-1">EMAIL</h3>
                <p className="text-gray-300">gauravghuge737@gmail.com</p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-1">ADDRESS</h3>
                <p className="text-gray-300">
                  226, At Deopul Village, Post Wasadi <br />
                  Sub-District Kannad, Aurangabad (Sambajinagar) <br />
                  Maharashtra, India 431104
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl flex-1">
            <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Now!
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
