import React from 'react';
import { useForm } from 'react-hook-form';
import NewsLetter from '../ContactUs/Newsletter';
import './ContactUs.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// todo: make it look good 
// https://freefrontend.com/css-contact-forms/
// https://react-hook-form.com/
// make a selection of choices for the topic of message
// current website: https://rupropulsion.wixsite.com/rpg2020

// amazing tool holy hahahahhahahah
// https://react-hook-form.com/form-builder/

export default function ContactUs () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <>
            <Navbar />
            <div className = 'page' >
                <div className='pageTitle' >
                    <h3 className='pageTitleText' >Contact us</h3>
                    <p>For all inquiries, please contact us with the form below</p>
                </div>

                <form className='contactUs-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='nameInput' type="text" placeholder="Full Name" {...register("Full Name", {})} />
                    <input className='emailInput' type="email" placeholder="Email" {...register("Email", {})} />
                    
                    <select className='selectTopic' {...register("Topic")}>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Recruitment"> Recruitment</option>
                        <option value="General Inquiry"> General Inquiry</option>
                    </select>
                    
                    <textarea className='messageInput' {...register("Message", {})}>
                        Message
                    </textarea>
        
                    <input className='submitButton' type="submit" value='Submit' />
                </form>
                <NewsLetter />
            </div>
            <Footer />
        </>
    );
}

