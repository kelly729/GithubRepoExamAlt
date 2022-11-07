import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';
import "../styles/navbar.css"


const Navbar = () => {
    const [isClicked,setIsClicked]=useState(false)

  return (
    <header className={isClicked?"nav-mobile":"nav-header"}>
    <div className='Logo'>
      Github<span>repository</span>
    </div>
     <nav className="navlinks">
     <ul>
     <li> <NavLink  to="/">Home</NavLink></li>
     <li> <NavLink  to="/repos">Repos</NavLink></li>
     <li ><NavLink  to="/about">About</NavLink></li>
     <li ><NavLink  to="/error">Error page</NavLink></li>
     </ul>
          
    </nav>
    <a onClick={()=>setIsClicked(!isClicked)} className='bar'>{isClicked?<AiOutlineClose/>:<ImMenu/>}</a>
    <Outlet/>  
   </header>
  )
}

export default Navbar
