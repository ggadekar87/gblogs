import './email.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
//https://dashboard.emailjs.com/admin/account/general
const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_els9jek', 'template_1zg8y2c', form.current, 'Ns_K5zKD9nCcN7cA3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("myForm").reset();
    };

    return <div className="Email">
        <form id="myForm" className="email-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="from_name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" /> </div>
        </form>
    </div>;
};

export default Email;
