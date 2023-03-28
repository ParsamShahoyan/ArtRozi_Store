import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./styleBasket.scss"
import { selectbasket } from '../../store/slices/basketSlice'
import BasketItem from '../BasketItem/BasketItem'
import { v4 } from 'uuid'

const Basket = () => {
  const navigate = useNavigate()
  const basket = useSelector(selectbasket)
  useEffect(() => {
    basket.length ? navigate("/basket") : navigate("/basket/null")
  },[])

  return (
    <div className='container'>
      <div className="container_items">
        {
          basket.length ?
          basket.map(el => <BasketItem {...el} key={v4()} />)
          : navigate(-1)
        }
      </div>
      {
        <h2 className='finalyPrice'>
          Վերջնական արժեքը ՝
          {basket?.map(el => el.price).reduce((e, i)=> e + i,0)}
          Դր․
        </h2>
      }
      <button className='buy' onClick={() => navigate("/basket/send")}>Գնել</button>
    </div>
  )
}

export default Basket