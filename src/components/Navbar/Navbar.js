import React, { Component } from 'react';
import { MenuItems} from './MenuItems';
import './Navbar.css';

import { HiOutlineMenu } from 'react-icons/hi'
/* TODO:
    - not sure about the icon, should probably remove it 
    - Naming is really messed up
*/

// https://www.youtube.com/watch?v=fL8cFqhTHwA
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

class Navbar extends Component {
    
    
    
    render() { 
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-text">Ryerson Propulsion Group</h1>
                
                <div className="navbar-icon">
                    <img src="https://img.icons8.com/color/48/000000/rocket--v1.png"/>
                </div> 
                
                <div className="menu-bars">
                    <HiOutlineMenu />
                </div>
                
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;