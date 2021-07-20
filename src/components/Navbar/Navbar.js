import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
/* TODO:
    - not sure about the icon, should probably remove it 
    - Naming is really messed up
*/

// https://www.youtube.com/watch?v=fL8cFqhTHwA
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// https://github.com/briancodex/react-sidebar-v1


// to stop reloading whole page use Link

function Navbar () {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    //fix all of this 

    const currentIcon = (b) => {return b ? <AiOutlineClose /> : <HiOutlineMenu />}
    // <nav className = "navbarItems">
    return(
        <nav className={ sidebar ? "NavbarItems" : "NavbarItems active"}>
        
            <h1 className="navbar-text">Ryerson Propulsion Group</h1>
            
            <div className="navbar-icon">
                <img src="https://img.icons8.com/color/48/000000/rocket--v1.png"/>
            </div> 
            
            <div className="menu-bars" onClick={showSidebar}>
                {currentIcon(sidebar)}
            </div>
            
            <ul className='nav-menu'>
                <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-links' to='/TheTeam'>The Team</NavLink></li>
                <li><NavLink className='nav-links' to='/Mission'>Mission</NavLink></li>
                <li><NavLink className='nav-links' to='/Events'>Events</NavLink></li>
                <li><NavLink className='nav-links' to='/Blog'>Blog</NavLink></li>
                <li><NavLink className='nav-links' to='/ContactUs'>Contact Us</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;