import React from 'react'
import { data } from "../../data/script"
import Product from "../Product/Product"
import { v4 } from "uuid"
import "./style.scss"


const Products = () => {
  return (
    <div className='products'>
        {
            data.map(product => {
              return <Product {...product} key={v4()}/>
            })
        }
        
    </div>
  )
}

export default Products