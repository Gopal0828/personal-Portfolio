import { Component } from 'react'
import './Contact.css'


export default class Contact extends Component {

  render() {
    return (
        <div className='bg-gray-500 p-8 rounded-xl'>

          
    
            <section className="head text-center my-24">
                <p className="contact">Contact <span>Us</span></p>
        
                <p className="para">lets connect with gaurav ghuge </p>
        
            </section>
    
            <main className="flex flex-row justify-center w-auto md:w-[40rem] items-center gap-12 flex-wrap">

                <div className="detail shadow-lg flex flex-col justify-center items-center rounded-xl bg-gray-400 md:p-20 py-20 shadow-gray-500">
                
                    <div className="text-start mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact Details</h2>
                        <p className="text-lg md:text-xl">Connect with Gaurav to know more!</p>
                    </div>
            
                    <div className="text-center mb-10">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">PHONE</h3>
                        <p className="text-lg md:text-xl">+91 8767482793, +91 9421328262</p>
                    </div>
            
                    <div className=" text-center mb-10">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">EMAIL</h3>
                        <p className="text-lg md:text-xl">gauravghuge737@gmail.com</p>
                    </div>
            
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">ADDRESS</h3>
                        <p className="text-lg md:text-xl">
                            226, At Deopul Village, Post Wasadi <br /> 
                            Sub-District Kannad, Aurangabad (Sambajinagar) <br /> 
                            Maharashtra, India 431104
                        </p>
                    </div>
        
                </div>

            
                <div className="flex flex-col gap-4 justify-center w-full md:w-[40rem] items-center shadow-lg rounded-xl p-6 md:p-10 py-[3rem] bg-gray-400">
                    
                    <input type="text" placeholder="Name" className="input p-2 rounded border border-gray-300 w-full" />

                    <input type="text" placeholder="Email" className="input p-2 rounded border border-gray-300 w-full" />

                    <input type="text" placeholder="Subject" className="input p-2 rounded border border-gray-300 w-full" />

                    <textarea cols="30" rows="10" className="message p-2 rounded border border-gray-300 w-full" placeholder="Message"></textarea>
                    
                    <button className="button bg-blue-500 w-auto text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Now!</button>

                </div>
        
            </main>
        
    
            
        </div>
    )
  }
}
