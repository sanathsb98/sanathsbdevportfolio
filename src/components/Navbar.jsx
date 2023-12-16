import React from 'react';
import '../styles/Navbar.css';
import infideckLogo from '../images/infideckLogo.svg'

const Navbar = () => {
    return (
        <div className='navabar'>
     
        <div className='navbar-contents'>
        <div className='nav-infideck-logo nav-btn'>SANATH S B</div>
            <div className='nav-infideck-btns'>
                {/* <div className='nav-btn'>About</div>
                <div className='nav-btn'>Work</div>
                <div className='nav-btn'>Services</div>
                <div className='nav-btn'>Plans</div>
                <div className='nav-btn'>Contact</div> */}
            </div>
            {/* <div className='nav-lets-talk'>Let's Talk</div> */}
        </div>
         
        </div>
    )
}

export default Navbar