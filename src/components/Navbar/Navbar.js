import React, { Component } from 'react';
import { MenuItems} from './MenuItems';

/* TODO:
    - not sure about the icon, should probably remove it 
*/


class Navbar extends Component {
    render() { 
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon">
                    <img src="https://img.icons8.com/color/48/000000/rocket--v1.png"/>
                </div> 
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a className={item.className} href={item.url}>
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