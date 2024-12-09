import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div>
            <h1>Welcome!</h1>
            <p>Click on a link to demo my animation!</p>

            <Link to='/classicHam'>Classic Hamburger</Link>

        </div>
    )
}

export default HomePage
