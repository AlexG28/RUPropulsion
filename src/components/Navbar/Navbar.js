import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

import logoPhoto from './logo-transparent.png';

/* TODO:
    -add social media icons on the hamburger menu
    - click anywhere and close the menu
        - https://www.codingdeft.com/posts/react-on-click-outside/
*/

// https://github.com/briancodex/react-sidebar-v1/tree/master/src/components

export default function Navbar () {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar); 
    const currentIcon = (b) => {return b ? <AiOutlineClose /> : <HiOutlineMenu />}

    const node = useRef();
    
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (sidebar && node.current && !node.current.contains(e.target)) {
                setSidebar(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [sidebar])


    return(
        <div className="navbar" ref={node}>

            <NavLink to='/'>
                <img className='navbar-logo' src = {logoPhoto} alt='logo' />

            </NavLink>
            
            <nav className={ sidebar ? "navbar-items active" : "navbar-items"}>
                <ul className='navbar-menu'>
                    <li><NavLink className='nav-links' to='/' onClick={showSidebar}>Home</NavLink></li>
                    <li><NavLink className='nav-links' to='/TheTeam' onClick={showSidebar}>The Team</NavLink></li>
                    <li><NavLink className='nav-links' to='/Mission' onClick={showSidebar}>Mission</NavLink></li>
                    <li><NavLink className='nav-links' to='/Events' onClick={showSidebar}>Events</NavLink></li>
                    <li><NavLink className='nav-links' to='/Blog' onClick={showSidebar}>Blog</NavLink></li>
                    <li><NavLink className='nav-links' to='/ContactUs' onClick={showSidebar}>Contact Us</NavLink></li>
                </ul>
            </nav>
        
            <div className="navbar-bars" onClick={showSidebar}>
                {currentIcon(sidebar)}
            </div>
        </div>
    )
}

