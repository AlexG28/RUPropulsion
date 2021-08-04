import React from 'react';
import './ContactUs.css'

function ContactUs () {

    return (
        <div className="contact-us">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>

                <label>
                    Email Address:
                    <input type="text" name="email" />
                </label>
                
                <textarea>
                    Message
                </textarea>

                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}

export default ContactUs;