import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import "./styleFooter.css"

const Footer = () => {
  return (
    <footer>
        <a className='footer_a' href="https://www.facebook.com/art.rozi.21"><BsFacebook/></a>
        <a className='footer_a' href="https://www.instagram.com/art.rozi/"><AiFillInstagram/></a>
        <div className='footer_div'>
            <BsTelephone className='footer_contact'/><label className='footer_p'> +37477458586</label>
            <MdEmail className='footer_contact'/><label className='footer_p'>roza.ghandilyan@mail.ru</label>
        </div>
    </footer>
  )
}

export default Footer