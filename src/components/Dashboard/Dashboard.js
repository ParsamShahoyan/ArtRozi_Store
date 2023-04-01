import React from 'react'
import {Outlet} from "react-router-dom"
import Nav from '../Nav/Nav'
import { BiArrowToTop } from "react-icons/bi"

const Dashboard = () => {
  function scrollToTop (){
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <div>
        <Nav></Nav>
        <Outlet/>
        <BiArrowToTop className="scroll" onClick={scrollToTop}/>
    </div>
  )
}

export default Dashboard