import React from 'react'
import "./styleModal.css"

const Modal = ({active, setactive, children}) => {
  return (
    <div className={active? "modal active": "modal"} onClick={() => setactive(false)}>
          <img className='image' src={children} alt="" onClick={(e) => e.stopPropagation() } />
    </div>
  )
}

export default Modal