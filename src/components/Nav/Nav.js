import React from 'react'
import { SlBasket } from "react-icons/sl"
import logoM from "../../data/img/logoM.png"
import "./styleNav.scss"
import { NavLink, Link } from "react-router-dom"
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useSelector } from 'react-redux'
import { selectbasket } from '../../store/slices/basketSlice'


const Nav = () => {

  const basket = useSelector(selectbasket)
  return (
    <nav>
      <div className="nav_mobi">
        <BurgerMenu/>
        <Link style={{position:"absolute", right:"25px", top:"13px"}} to={"/basket"}><SlBasket  /> </Link><span className='count_mobi'>{basket.length}</span> 
      </div>
      <div className="nav_div">
        <Link to="/"><img src={logoM} alt="" style={{width: "80px"}} /></Link>
        <NavLink  className='link' activeclassname="active" to="/"><h2 >Գլխավոր</h2></NavLink>
        <NavLink  className='link' activeclassname='active' to="/about"><h2 >Առաքման</h2></NavLink>
        <Link  to={"/basket"}  style={{position: "relative"}}><SlBasket/><span className='count'>{basket.length}</span></Link> 
      </div>
    </nav>
  )
}

export default Nav