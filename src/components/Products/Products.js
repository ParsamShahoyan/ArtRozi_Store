import React from 'react'
import { data } from "../../data/script"
import Product from "../Product/Product"
import { v4 } from "uuid"
import "./style.scss"
import Slider from '../Swiper/Slider'

const Products = () => {
  return (
    <article>
        <Slider/>
        <div className="between">
          <hr />
          <h2>Տեսականին</h2>
          <hr />
        </div>
        <div className="blue_rigth"> </div>
          <div className='products'>
            {
              data.map(product => {
                return <Product {...product} key={v4()}/>
              })
            }
        </div>
    </article>
  )
}

export default Products