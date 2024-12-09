import React from 'react'
import './ClassicHam.css'

import { Link } from 'react-router-dom'



const ClassicHam = () => {

    return (
        <div className='classicHam'>

            <label className='hamburgerMenu'>
                <input type='checkbox' />
            </label>

            <aside className='sidebar'>
                <nav>
                    <div>This</div>
                    <div>is</div>
                    <div>the</div>
                    <div>Sidebar</div>
                    <Link to='/' >Return Home</Link>
                </nav>
            </aside>

        </div>
    )
}

export default ClassicHam
