import React from 'react'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

import './Footer.css';

import { NavLink } from 'react-router-dom';

/*
    TODO:
    -make the instagram logo a little big bigger 
        - find out why the current solution to this problem doesn't work

*/

export default function Footer() {
    return (
        <div className='footer-panel'>
            <div className="footer-socialIcons">
                <a href='https://www.facebook.com/rupropulsion/' target='_blank' rel="noreferrer"> <FaFacebook /> </a>
                <a href='https://www.instagram.com/rupropulsion/?hl=en' target='_blank' rel="noreferrer">  <AiFillInstagram />  </a>
                <a className='instagram_icon' href='https://www.linkedin.com/company/rupropulsion/mycompany/' target='_blank' rel="noreferrer"> <ImLinkedin2 /> </a>
            </div>
            
            <div className='footer-credit'>
                <h5 className ='footer-rights'>© 2021 RPG: Ryerson Propulsion Group</h5>
                <h5 className ='credit'>Website by Alex, Carole and Arib</h5>
            </div>
            
            <div className='footer-newsletter'>
                <NavLink className = 'newsletter-text' to='/ContactUs'>Join our Newsletter</NavLink>
            </div>
        </div>
    )
}
