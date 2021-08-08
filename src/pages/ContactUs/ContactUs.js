import React from 'react';
import { useForm } from 'react-hook-form';
import NewsLetter from '../ContactUs/Newsletter';
import './ContactUs.css'

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
        <div>

            <form className='contactUs-form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full Name" {...register("Full Name", {})} />
                <input type="email" placeholder="Email" {...register("Email", {})} />
                <select {...register("Topic")}>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Recruitment"> Recruitment</option>
                    <option value="General Inquiry"> General Inquiry</option>
                </select>
                <textarea {...register("Message", {})}>
                    Message
                </textarea>
    
                <input type="submit" value='Submit' />
            </form>
            <NewsLetter />
        </div>
    );
}

