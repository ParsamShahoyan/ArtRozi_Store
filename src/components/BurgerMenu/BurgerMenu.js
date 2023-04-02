import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './styleMenu.scss'

const BurgerMenu = () => {
  return (
    <details className="burger_menu">
        <ul>
            <li><Link  to={"/"}>Գլխավոր</Link></li>
            <li><Link  to={"/about"}>Առաքում</Link></li>
            <li><Link style={{position:"absolute"}} to={"/basket"}>Զամբյուղ</Link></li>
        </ul>
        <summary style={{fontSize:"1px"}} ><AiOutlineMenu  style={{fontSize: "30px"} }/></summary>
    </details>
  )
}

export default BurgerMenu