import React from 'react';
import { useForm } from 'react-hook-form';

import './ContactUs.css';

export default function NewsLetter() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='newsletterForm' >
      <h3 className='newsletterTitle'>Subscribe to our newsletter</h3>
      <form className='newsLetter-form' onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Newsletter Email" {...register("Email", {})} />

        <input type="submit" value='Submit email' />
      </form>
    </div>
  );
}