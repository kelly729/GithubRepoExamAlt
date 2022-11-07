import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers,FaFacebook,FaInstagram,FaTwitter,FaMoon,FaSun } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import user from '../assets/images/hero.png'
import Logo from '../assets/images/Logo.png'
// import { Navbar } from './Navbar';
// import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
  return (
   <>
   <div className='main-container'>
    <div className='content'>
        <div className='icons'>
            <ul>
            <li> <FaTwitter/> </li>
            <li> <FaFacebook/> </li>
            <li> <FaInstagram/> </li>
 
            </ul>
        </div>
        <div className='home-cont'>
            <h2>Git Hub Repo <span>Fetch</span></h2>
            <p>Fetching and displaying multiple github repo <br></br>
            from a git hub account
          </p>
          <NavLink to="/repos" className="btn-cont" >
            View Repos
          </NavLink>
        </div>
        <div className='hero-img'>
          <img src={user} alt=''></img>

        </div>
    </div>
   </div>
   </>
  )
}

export default Home
