import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='green'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">REACT MOVIES</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header
