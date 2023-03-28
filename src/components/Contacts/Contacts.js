import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import "./styleContacts.scss"
import { useSelector } from 'react-redux';
import { selectbasket } from '../../store/slices/basketSlice';

export const Contacts = () => {
  const form = useRef();
  const navigat = useNavigate()
  const basket = useSelector(selectbasket)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p6ey6od', 'template_8ea8wqq', form.current, 'tnFCxYm_YYGlyjwfF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      navigat("/basket/send/end")
    };
    
  return (
    <div className="form_container">
      <div className="blue">
        <form ref={form} onSubmit={sendEmail}>
          <label >Անուն</label>
          <input type="text" name="user_name" required />
          <label>Հասցե</label>
          <input type="text" name="user_adress" required />
          <label>Հեռախոսահամար</label>
          <input type="number"name="user_number" className='number' required placeholder='+374...' />
          <label>Email</label>
          <input type="email" name="user_email"  />
          <input type="text" name="message" defaultValue={JSON.stringify(basket)} style={{display: "none"}} />
          <input type="submit" value="Պատվիրել"  className='submit'/>
      </form>
      </div>
    </div>
  );
};
