import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navabar'>
            <div className='nav-infideck-logo'>logo</div>
            <div className='nav-infideck-btns'>
                <div className='nav-btn'>About</div>
                <div className='nav-btn'>Work</div>
                <div className='nav-btn'>Services</div>
                <div className='nav-btn'>Plans</div>
                <div className='nav-btn'>Contact</div>
            </div>
            <div className='nav-lets-talk'>Let's Talk</div>
        </div>
    )
}

export default Navbar