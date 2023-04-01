import React from 'react'
import "./styleModal.css"
import { TiDelete } from "react-icons/ti" 

const Modal = ({active, setactive, children}) => {
  return (
    <div className={active? "modal active": "modal"} onClick={() => setactive(false)}>
      <img className='image' src={children} alt="" onClick={(e) => e.stopPropagation() } />
      <TiDelete className='delete' onClick={() => setactive(false)}/>
    </div>
  )
}

export default Modal