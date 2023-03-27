import React from 'react'
import { data } from "../../data/script"
import Product from "../Product/Product"
import { v4 } from "uuid"
import "./style.scss"
import Slider from '../Swiper/Slider'


const Products = () => {
  return (
    <div>
        <Slider/>
    <div className='products'>
        {
            data.map(product => {
              return <Product {...product} key={v4()}/>
            })
        }
        
    </div>
    </div>
  )
}

export default Products