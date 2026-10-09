import React from 'react'
import './newsletter.css'
const NewLetter = () => {
  return (
    <div className='newsletters'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe To our newletters and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
