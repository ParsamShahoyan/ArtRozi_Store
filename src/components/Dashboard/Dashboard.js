import React from 'react'
import {Outlet} from "react-router-dom"
import Nav from '../Nav/Nav'

const Dashboard = () => {
  return (
    <div>
        <Nav></Nav>
        <Outlet/>
    </div>
  )
}

export default Dashboard