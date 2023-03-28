import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import "./styleModal.css"

const Modal = ({active, setactive, children}) => {
  return (
    <div className={active? "modal active": "modal"} onClick={() => setactive(false)}>
          <img className='image' src={children} alt="" onClick={(e) => e.stopPropagation() } />
          <TiDeleteOutline onClick={() => setactive(false)} className='delete'/>
    </div>
  )
}

export default Modal