import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-panel'>
            <div className="footer-socialIcons">
                <a href='https://www.facebook.com/rupropulsion/' target='_blank' rel="noreferrer"> <AiOutlineFacebook /> </a>
                <a href='https://www.instagram.com/rupropulsion/?hl=en' target='_blank' rel="noreferrer">  <AiOutlineInstagram />  </a>
                <a href='https://www.linkedin.com/company/rupropulsion/mycompany/' target='_blank' rel="noreferrer"> <AiOutlineLinkedin /> </a>
                
            </div>
            
            <div className='footer-credit'>
                <h5 className ='footer-rights'>All rights reserved | 2018-2021 RPG</h5>
                <h5 className ='credit'>Website by Alex, Carole and Arib</h5>
            </div>
            
            <div className='footer-newsletter'>
                <h3>join our newsletter</h3>
            </div>
        </div>
    )
}
