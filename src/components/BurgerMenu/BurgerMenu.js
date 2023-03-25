import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import './styleMenu.scss'

const BurgerMenu = () => {
  return (
    <details className="burger_menu">
        <ul>
            <li><Link  to={"/"}>Home</Link></li>
            <li><Link  to={"/about"}>About</Link></li>
            <li><Link style={{position:"absolute"}} to={"/basket"}><SlBasket/></Link></li>
        </ul>
        <summary style={{listStyle:"none",}}><AiOutlineMenu  style={{fontSize: "30px"} }/></summary>
    </details>
  )
}

export default BurgerMenu