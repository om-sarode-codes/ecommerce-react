import React from 'react'
import './offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON THE BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-rigth">
            <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
