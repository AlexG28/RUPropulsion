import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
/* TODO:
    -add social media icons on the hamburger menu
    -
*/

// https://github.com/briancodex/react-sidebar-v1/tree/master/src/components

export default function Navbar () {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar); 
    const currentIcon = (b) => {return b ? <AiOutlineClose /> : <HiOutlineMenu />}
    
    return(
        <div className="navbar">

            <h1 className="navbar-title">Ryerson Propulsion Group</h1>
            
            <nav className={ sidebar ? "navbar-items active" : "navbar-items"}>
                <ul className='navbar-menu' onClick={showSidebar}>
                    <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
                    <li><NavLink className='nav-links' to='/TheTeam'>The Team</NavLink></li>
                    <li><NavLink className='nav-links' to='/Mission'>Mission</NavLink></li>
                    <li><NavLink className='nav-links' to='/Events'>Events</NavLink></li>
                    <li><NavLink className='nav-links' to='/Blog'>Blog</NavLink></li>
                    <li><NavLink className='nav-links' to='/ContactUs'>Contact Us</NavLink></li>
                </ul>
            </nav>
        
            <div className="navbar-bars" onClick={showSidebar}>
                {currentIcon(sidebar)}
            </div>
        </div>
    )
}

