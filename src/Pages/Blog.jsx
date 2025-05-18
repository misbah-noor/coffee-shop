import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Components/Nav/Navbar/Footer';

export default function Blog(){
 
    useEffect(() => {
        AOS.init()
    });

    return(
        <div className='overflow-hidden'>
        <div className="section md:mt-20 mt-0 flex justify-center items-center flex-col pt-[120px]">
            <h1 className='text-white md:text-5xl text-5xl font-bold'>Blogs</h1>
            <h2 className='text-slate-100 mt-10'>Home -- Blog</h2>
        </div>
           
         <div className='h-full py-19 flex flex-col justify-center items-center'>
            <div data-aos='fade-up' data-aos-duration='2000'>
            <h2 className='text-center font-bold pb-10 text-2xl md:text-4xl text-amber-700'>Our Customer reviews</h2>
            </div>
         

           <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-5 '>
 
            <div className='bg-[#3E2C20]  rounded-xl shadow-lg md:w-[350px] w-full mx-auto overflow-hidden flex flex-col justify-center items-center' data-aos='fade-right' data-aos-duration='3000'>
             <img src="/images/blog.jpg" alt="error" className='w-75 h-75 object-cover rounded-full p-6' />
             <div className="content text-center pb-5">
             <h3 className='text-xl font-semibold mt-4 px-5 text-amber-500'>John Due</h3>
             <p className='text-amber-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam.</p>
             <span>⭐⭐⭐</span>
             </div>
            
            </div>

            <div className='bg-[#3E2C20]  rounded-xl shadow-lg md:w-[350px] w-full mx-auto overflow-hidden flex flex-col justify-center items-center' data-aos='fade-up' data-aos-duration='3000' >
             <img src="/images/blog2.jpg" alt="error" className='w-75 h-75 object-cover rounded-full p-2' />
             <div className="content text-center pb-5">
             <h3 className='text-xl font-semibold mt-4 px-5 text-amber-500'>Susan Jin</h3>
             <p className='text-amber-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam.</p>
             <span>⭐⭐⭐</span>
             </div>
            
            </div>

            <div className='bg-[#3E2C20]  rounded-xl shadow-lg md:w-[350px] w-full mx-auto overflow-hidden flex flex-col justify-center items-center' data-aos='fade-left' data-aos-duration='3000'>
             <img src="/images/blog3.jpg" alt="{coffee.name}" className='w-75 h-75 object-cover rounded-full p-2' />
             <div className="content text-center pb-5">
             <h3 className='text-xl font-semibold mt-4 px-5 text-amber-500'>Maria Andrew</h3>
             <p className='text-amber-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam.</p>
             <span>⭐⭐⭐</span>
             </div>
            
            </div>
     
         </div>

         </div>
 <Footer/>
        </div>
    )
}

