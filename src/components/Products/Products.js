import React from 'react'
import { data } from "../../data/script"
import Product from "../Product/Product"
import { v4 } from "uuid"
import "./style.scss"
import Slider from '../Swiper/Slider'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

const Products = () => {
  
  return (
    <article>
        <Header/>
        <Slider/>
        <div className="blue_rigth"> </div>
          <div className='products'>
            {
              data.map(product => {
                return <Product {...product} key={v4()}/>
              })
            }
        </div>
        <Footer/>
    </article>
  )
}

export default Products