import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Components/Nav/Navbar/Footer';


const Menu = () => {

    useEffect(() => {
      AOS.init()  
    })
    const coffeeMenu = [
        {
            id: 1,
            name: "Espresso Coffee",
            image: "/images/c1.jpg",
            rating: 4.5,
        },
        {
            id: 2,
            name: "Cappuccino Coffee",
            image: "/images/c2.jpeg",
            rating: 4.7,
        },
        {
            id: 3,
            name: "Latte Coffee",
            image: "/images/c3.jpeg",
            rating: 4.8,
        },
        {
            id: 4,
            name: "Cold Coffee",
            image: "/images/c4.jpg",
            rating: 4.9,
        },
        {
            id: 5,
            name: "Black Coffee",
            image: "/images/coffee.jpg",
            rating: 4.8,
        },
        {
            id: 6,
            name: "Gold Coffee",
            image: "/images/c1.jpg",
            rating: 4.4,
        },
    ];

    const [OrderMessage, setOrderMessage] = useState("");
    const handleOrder = (coffeeName) => {
        setOrderMessage(alert(`Your order for ${coffeeName} has been placed!`));

        setTimeout(() => setOrderMessage(""), 2000);
    };

    return(
        <div >
        <div className="section md:mt-20 mt-0 flex justify-center items-center flex-col pt-[120px]">
            <h1 className='text-white md:text-5xl text-5xl font-bold'>Our Menu</h1>
            <h2 className='text-slate-100 mt-10'>Home -- Menu</h2>
        </div>
        <div className=' h-full py-18 text-amber-700 flex flex-col justify-center items-center'>
         <h2 className='text-2xl md:text-4xl text-center mb-12 font-bold'>Our Coffee Menu</h2>
         <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-5'>
        {coffeeMenu.map((coffee) => (
            <div key={coffee.id} className='bg-[#3E2C20] rounded-xl shadow-lg md:w-[350px] w-full overflow-hidden' data-aos='fade-up' data-aos-duration='3000'>
             <img src={coffee.image} alt="{coffee.name}" className=' h-60 w-full object-cover rounded-md hover:scale-105 hover:transform hover:transition-all duration-300' />
             <h3 className='text-xl text-amber-500 font-semibold mt-4 px-5'>{coffee.name}</h3>

             <div className='flex items-center mt-2 px-5'>
             <span className='text-yellow-400 text-lg'>⭐{coffee.rating}</span>
             </div>

             <button className='mt-4 w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 outline-none rounded-b-lg cursor-pointer' onClick={() => handleOrder(coffee.name)}>Add to Cart +</button>
            </div>
        ))}
         </div>

        </div>
            <Footer/>
        </div>
    );
};

export default Menu;

