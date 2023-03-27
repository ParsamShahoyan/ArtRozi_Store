import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, delItem, increment } from '../../store/slices/basketSlice'
import { TiDeleteOutline } from "react-icons/ti"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

const BasketItem = ({img, id, price, count}) => {
  
    const dispatch = useDispatch()
    const inc = () => {
        dispatch(increment(id))
    }
    const dec = () => {
        dispatch(decrement(id))
    }
    const delet = () => {
        dispatch(delItem(id))
    }

    return (
    <div className='item' key={id}>
        <h2 onClick={delet}><TiDeleteOutline/></h2>
        <img src={img} alt="" />
        <p>ID: {id}</p>
        <span>{price} Դր․</span>
        <div className="count">
            <button onClick={inc}><AiOutlinePlus/></button>
            <h3>{count}</h3>
            <button onClick={dec}><AiOutlineMinus/></button>
        </div>
    </div>
  )
}

export default BasketItem