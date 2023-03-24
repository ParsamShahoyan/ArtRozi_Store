import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () => {
  const form = useRef();
    const obj = {
        name: 'laaa',
        number: 155111
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6ey6od', 'template_8ea8wqq', form.current, 'tnFCxYm_YYGlyjwfF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      {/* <label>Message</label> */}
      <input type="text" name="message" value={JSON.stringify(obj)} style={{display: "none"}} />
      <input type="submit" value="Send" />
    </form>
  );
};
