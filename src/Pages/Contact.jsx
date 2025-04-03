import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

  useEffect(() => {
    AOS.init()
  });
    return(
        <div>
        <div className="section flex justify-center items-center flex-col pt-[120px]">
            <h1 className='text-white md:text-5xl text-5xl font-bold'>Contact Us</h1>
            <h2 className='text-slate-100 mt-10'>Home -- Contact Us</h2>
        </div>
           
         <div className='h-full py-14' data-aos='fade-up' data-aos-duration='3000'>
           <h2 className='text-center leading-14 mx-auto font-bold pb-10 text-5xl text-amber-700 w-75'>For Quality Coffee Contact Us</h2>

           <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-14 gap-8 px-20 md:mx-auto container'>
      
         
             <div class="left" data-aos='fade-down' data-aos-duration='3000'>
            <h2 class="text-gray-900 text-3xl mb-8 font-medium font-roboto">Feedback</h2>
          
            <div class=" mb-9">
              <input type="text" id="name" placeholder="Enter your name" name="name" class="w-full bg-white rounded-3xl border border-gray-300 text-xl outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class=" mb-9">
              <input type="email" id="email" placeholder="Email" name="email" class="w-full bg-white rounded-3xl border border-gray-300 text-xl outline-none text-gray-700 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="mb-4">
              <textarea id="message" placeholder="Message" name="message" class="w-full bg-white rounded-3xl border border-gray-300 h-32 text-xl outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="px-8 py-4 bg-gradient-to-r from-amber-900 to-amber-500 text-white font-bold text-md rounded-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-900 hover:origin-left transition-all ease-in-out duration-200 flex gap-2 items-center justify-center mt-5">
              Message Now
          </button>
          </div>
           <div class="right" data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
           >
            <img className="object-cover object-center rounded md:mt-12 mt-4 hover:scale-105 transition-all ease-in-out border-1 border-amber-700 shadow-amber-950 shadow-[0_2px_18px_6px_rgba(126,36,0,0.17)]" alt="contact" src="/images/blog1.jpg"/>
          </div>
           
            
         </div>

         </div>

        </div>
    );
};

export default Contact;

