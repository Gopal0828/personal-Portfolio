

function About() {


    return (
        <div className="flex m-28 md:flex-col justify-center items-center">

            <section className="flex flex-wrap m-8 p-8 gap-20 justify-center items-center">

                <div className="flex flex-col">

                    {/**   about information section */}
                    <p>
                        <p className="text-xl">Hello, It Me</p> 
                        <p className="text-5xl font-bold text-blue-400">GAURAV GHUGE</p>
                        <p className="text-xl">I am a student who is passionate in </p><br />
                        <span className="text-5xl font-bold text-blue-400">SoftWare Development <br />& System Design</span> 
                    </p>

                    <br />
                    
                    <button className="rounded-2xl w-96 border-green-400 bg-black text-green-400 p-4 font-bold text-2xl">
                        <a 
                            href="http://res.cloudinary.com/dsh5742fk/image/upload/v1723997745/hbwrkwlmb0zaak2bx5q4.pdf"
                             
                            download="http://res.cloudinary.com/dsh5742fk/image/upload/v1723997745/hbwrkwlmb0zaak2bx5q4.pdf"
                        >
                            Download Resume
                        </a>
                    </button>

                </div>

                <div className="rounded-[50%] p-4">
                    <img 
                        src="./public/professional photo.png" 
                        alt="photo" 
                        height="400px"
                        width="400px"
                        
                        className="rounded-[50%] border-4 border-gray-900"
                    />
                </div>  

            </section>
        </div>
    )
}


export default About
