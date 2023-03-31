import React from 'react'
import header from "../../data/img/header.png"
import "./styleHeader.css"

const Header = () => {
  return (
    <header>
        <img className='header_img' src={header} alt="" />
        <h3 className='header_num'>+37477458586</h3>
        <p className='header_p'>Բարի գալուստ մեր ձեռագործ խանութ: Մենք ստեղծում ենք եզակի ապրանքներ, <strong>փափուկ խաղալիքները,</strong> <strong>ձեռքի պայուսակները,</strong> ներառյալ <strong> հագուստի վրա դիմանկարներ նկարելը</strong> և շատ ավելին, ինչպես մեծահասակների, այնպես էլ երեխաների համար: Գնե՛ք մեզնից նվերներ ձեզ և ձեր սիրելիների համար:</p>
    </header>
  )
}

export default Header