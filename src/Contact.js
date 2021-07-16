import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {

    return (

        <div className='contact'>
            <h1>Contact</h1>
            <form id='contact-form'>
                <input type='text' name='user_name' placeholder='Name' />
                <br />
                <input type='email' name='user_email' placeholder='Email' />
                <br />
                <textarea name='message' placeholder='Message' />
                <br />
                <input type='submit' value='Send' />
            </form>
        </div>

    );
}
export default Contact;