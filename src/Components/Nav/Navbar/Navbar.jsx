import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/Home'
import About from '../../../Pages/About'
import Menu from '../../../Pages/Menu'
import Blog from '../../../Pages/Blog'
import Contact from '../../../Pages/Contact'
import "./Navbar.css"

export default function Navbar(){
   const [menuOpen, setmenuOpen] = useState(false);
   
  
     return(
      <Router>
      <nav className='navbar flex justify-between items-center bg-white px-20 py-2 fixed w-full top-0 z-4 shadow-lg'>
         <div>
            <img src="./images/logo2.png" className='w-18' alt="logo" />
         </div>
         <div className="nav-menu" onClick={() => {
            setmenuOpen(!menuOpen);
         }}>   
            <span></span>
            <span></span>
            <span></span>
         </div>
         <ul className={menuOpen ? "open" : ""}>
            <li>
             <NavLink to='/' onClick={() => {
            setmenuOpen(!menuOpen);
         }}
             >Home</NavLink>  
            </li>
            <li>
              <NavLink to='/about' onClick={() => {
            setmenuOpen(!menuOpen);
         }}
              >About</NavLink>
            </li>
            <li>
              <NavLink to='/menu' onClick={() => {
            setmenuOpen(!menuOpen);
         }}
              >Menu</NavLink>
            </li>
            <li>
              <NavLink to='/blog' onClick={() => {
            setmenuOpen(!menuOpen);
         }}
           
              >Blog</NavLink>
            </li>
            <li>
             <NavLink to='/contact' onClick={() => {
            setmenuOpen(!menuOpen);
         }} 
             >Contact</NavLink>
            </li>
         </ul>
      </nav>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/menu' element={<Menu/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Router>
     )
}

