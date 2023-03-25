import React from 'react'
import { SlBasket } from "react-icons/sl"
import logo from "../../data/img/logo_png.PNG"
import "./styleNav.scss"
import { NavLink, Link } from "react-router-dom"
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Nav = () => {
  return (
    <nav>
      <div className="nav_mobi">
        <BurgerMenu/>
        <Link style={{position:"absolute", right:"25px", top:"13px"}} to={"/basket"}><SlBasket /></Link>
      </div>
      <div className="nav_div">
        <Link to="/"><img src={logo} alt="" /></Link>
        <NavLink  className='link' activeclassname="active" to="/"><h2 >Home</h2></NavLink>
        <NavLink  className='link' activeclassname='active' to="/about"><h2 >Abuot</h2></NavLink>
        <Link  to={"/basket"}><SlBasket/></Link>
      </div>
    </nav>
  )
}

export default Nav