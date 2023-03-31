import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styleEnd.scss"
import Footer from '../Footer/Footer'

const End = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='end'>
        <h1>Շնորհակալության ձեռ պատվերը ընդունվել է</h1>
        <h3>Շուտով մենք կկապնվենք ձեր հետ պատվերը հաստատելու համար</h3>
        <button onClick={() => navigate("/")}>Վերադառնալ Գլխավոր Էջ</button>
    </div>
        <Footer/>
    </>
  )
}

export default End