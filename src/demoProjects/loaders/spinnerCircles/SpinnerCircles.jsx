import React from 'react'
import { Link } from 'react-router-dom'
import './SpinnerCircles.css'


const SpinnerCircles = () => {
  return (
    <div className="swirlyCirclePage">
      <div className='swirlyCircle'>
        <div className='innerSwirly'>
          <div className='deepSwirly'></div>
        </div>
      </div>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default SpinnerCircles
