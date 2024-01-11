import React from 'react';
import '../styles/Navbar.css';
import infideckLogo from '../images/infideckLogo.svg';
import resume from '../images/sanathsbresume.pdf';

const Navbar = () => {

    const downloadResume = () => {

    const resumePath = resume;
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.href = resumePath;
    anchor.download = 'sanathsb.pdf';
    anchor.click();
    document.body.removeChild(anchor);
       
    }

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
            <div onClick={downloadResume} className='nav-lets-talk'>Resume</div>
        </div>
         
        </div>
    )
}

export default Navbar