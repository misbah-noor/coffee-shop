import React, { useEffect } from 'react'
import AOS from  'aos'
import 'aos/dist/aos.css'
import Footer from '../Components/Nav/Navbar/Footer';

const About = () => {
useEffect(() => {
    AOS.init();
}, []);
    return(
       <div> 
       <div className='section'>
        <div className="flex justify-center items-center flex-col pt-[120px]">
            <h1 className='text-white md:text-5xl text-5xl font-bold'>About Us</h1>
            <h2 className='text-slate-100 mt-10'>Home -- About</h2>
        </div>       
        </div>
        <div className="container mx-auto px-24 py-34 mt-13 mb-10">
         <div className='grid grid-col-1 md:grid-cols-2 md:gap-6 gap-37 items-center'>
         <div className='left-box flex justify-center relative' data-aos='fade-right' data-aos-duration='3000'>
         <div className='brown-box absolute bg-amber-800 md:h-[135px] w-[130px] z-3 right-[-2%] top-30 lg:right-[-8%] lg:top-87 rounded-lg text-center'>
            <h2 className='text-amber-50 mt-5 text-2xl font-semibold mb-2'>Best Quality</h2>
            <p>⭐⭐⭐⭐</p>
         </div>
            <img src="/images/hero-img.jpg" alt="about" className='w-full rounded-2xl shadow-xl z-2'/>
            <div className='wheat-box absolute bg-amber-200 h-[150px] w-[150px] z-1 left-[-5%] top-[-9%] rounded-lg'></div>
         </div>
         <div className="right-box md:ms-14" data-aos='fade-left' data-aos-duration='3000'>
            <h2 className='text-2xl text-amber-800 mb-10 relative font-semibold'>About Us</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit expedita repellat quasi totam id sunt dolores, eius sapiente necessitatibus iste aliquid amet corporis cum ratione. Error odit accusantium magnam at vel amet laboriosam id.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit expedita repellat quasi totam id sunt dolores, eius sapiente necessitatibus iste aliquid amet corporis cum ratione. Error odit accusantium magnam at vel amet laboriosam id.</p>
            <button className='btn border-2 border-amber-800  px-7 py-2 bg-amber-900 hover:bg-transparent text-white hover:text-amber-800 shadow-xl shadow-amber-900/60 transition-all ease-in-out rounded-full mt-8'><a href='/menu'>Our Menu</a></button>
         </div>
         </div>
        </div>
         <Footer/>
        </div>
        
    )
};
export default About;