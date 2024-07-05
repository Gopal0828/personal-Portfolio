import { Component } from 'react'
import './Contact.css'


export default class Contact extends Component {

  render() {
    return (
        <div className='bg-white p-8 rounded-xl'>

          
    
            <section className="head text-center my-24">
                <p className="contact">Contact <span>Us</span></p>
        
                <p className="para">lets connect with gaurav ghuge </p>
        
            </section>
    
            <main className="flex justify-center items-center gap-12 flex-wrap">


                <div className="detail shadow-lg flex flex-col justify-center align-center items-center rounded-xl p-20 py-[10rem] shadow-gray-500">
        
                    <div className="detail1 text-center">
                        <h2 className=" text-xl font-bold ">Contact detail</h2>
                        <p>connect with gaurav to know myself !</p>
        
                    </div>
        
        
                    <div className="phone">
                        
                      
                        <h3 className="text-center text-xl font-bold">PHONE</h3>
                        
                        <p>+918767482793, +919421328262  </p>
                        
                    </div>
        
        
        
                    <div className="email">
                               
                            <h3 className="text-center text-xl font-bold">EMAIL</h3>
                            
                            <p> gauravghuge737@gmail.com</p>
                    </div>
        
        
        
                    <div className="address">
                     

                        <h3  className="text-center text-xl font-bold">ADDRESS</h3>
                        
    
                        <p>226, At Deopul Village, Post Wasadi <br/> subDistrict kannad Aurangabad(Sambajinagar) <br/> maharashtra India 431104</p>
            
                    </div>
        
        
        
                </div>

        
                <div  className="flex flex-col gap-1 justify-center items-center shadow-lg rounded-xl p-20 py-[5rem] shadow-gray-500">

                    <input type="text" placeholder="Name" className="input " />

                    <input type="text" placeholder="Email" className="input" />
                
                    
                    <input type="text" placeholder="Subject" className="input" />
    
                    <textarea cols="30" rows="10" className="message" placeholder="Message"></textarea>
                    
                    <button className="button">Send Now ! </button>

                </div>
        
            </main>
        
    
            
        </div>
    )
  }
}
