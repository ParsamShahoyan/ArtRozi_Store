import React from 'react'
import { SlBasket } from "react-icons/sl"
import { addToBasket } from '../../store/slices/basketSlice'
import { useDispatch } from "react-redux"


const Product = ({id, price, img, count}) => {
  const dispatch = useDispatch()
  const addBasket = () => {
    dispatch(addToBasket({id, price, img, count}))
  }
  return (
    <div className ="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p>{price}</p>
      <span onClick={addBasket}><SlBasket/></span>
    </div>
  )
}

export default Product