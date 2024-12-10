import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div className='reverseSlider'>
            <h1>Welcome!</h1>
            <p>Click on a link to demo my animation!</p>

            <Link to='/classicHam'>Classic Hamburger</Link>
            <Link to='/reverseGallery'>Reverse Gallery</Link>
            <Link to='/spinnerCircles'>Swirly Circles Loader</Link>

        </div>
    )
}

export default HomePage
