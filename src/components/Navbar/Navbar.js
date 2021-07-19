import React, { Component } from 'react';
import { MenuItems} from './MenuItems';
import './Navbar.css';
/* TODO:
    - not sure about the icon, should probably remove it 
    - Naming is really messed up
*/

//https://www.youtube.com/watch?v=fL8cFqhTHwA
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.setState.clicked})
    } // https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

    render() { 
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-text">Ryerson Propulsion Group</h1>
                
                <div className="icon">
                    <img src="https://img.icons8.com/color/48/000000/rocket--v1.png"/>
                </div> 
               
                <div className="menu-bars" onClick={this.handleClick}>
                    <i className={this.state.clicked}></i>
                    <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
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