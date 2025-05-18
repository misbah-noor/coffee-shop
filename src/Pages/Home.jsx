import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home()
{
    useEffect(() => {
        AOS.init()
    }, []);
    
    return(
    <div className='hero overflow-hidden'>
     <div className='hero-section md:h-screen text-white'>
     <div className='pt-20 pb-10'>
        <div className='flex flex-col justify-center items-center md:mt-[70px]' data-aos='zoom-in' data-aos-duration='1000'>
        <h2 className='font-semibold text-5xl md:text-7xl text-white text-center mt-[65px] text-shadow md:mt-20px'>Welcome to Coffee Shop</h2>
            <p className='w-[60%] mt-8 text-center md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit possimus a facilis. Repellat maiores sequi culpa autvoluptates ea quod eligendi fugit sapiente magnam, culpa aut eveniet temporibus maxime quasi architecto numquam similique vel reprehenderit est dolorum!</p>
            <div className="buttons flex gap-4 mt-8">
                <button className='btn border-2 border-amber-900  px-7 py-2 rounded-full bg-amber-900 hover:bg-transparent text-white shadow-xl shadow-amber-900/60'><a href='/menu'>Shop Now</a></button>
                <button className='btn border-2 px-7 py-2 shadow-xl shadow-amber-900/60 rounded-full hover:bg-amber-900 hover:border-amber-900'><a href="/about">Read More</a></button>
            </div>
        </div>
    
     </div>
           
        </div>
        </div>
      
    )
}