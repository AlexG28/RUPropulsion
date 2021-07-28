import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-panel'>
            <div className="footer-socialIcons">
                <a href='https://www.facebook.com/rupropulsion/' target='_blank' rel="noreferrer"> <AiOutlineFacebook /> </a>
                <a href='https://www.instagram.com/rupropulsion/?hl=en' target='_blank' rel="noreferrer">  <AiOutlineInstagram />  </a>
                <a href='https://www.linkedin.com/company/rupropulsion/mycompany/' target='_blank' rel="noreferrer"> <AiOutlineLinkedin /> </a>
                <a href='https://www.instagram.com/rupropulsion/?hl=en' target='_blank' rel="noreferrer"> <AiOutlineTwitter /> </a>
            </div>
        </div>
    )
}
