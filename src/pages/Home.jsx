import React,{useRef} from 'react';
import '../styles/Home.css';
import fluidGlass from '../images/fluidGlass.png'
import AboutInfideck from '../components/AboutInfideck';
import ServicesWeOffer from '../components/ServicesWeOffer';
import sphere from '../images/sphere.gif';
import { Typewriter } from 'react-simple-typewriter';
import maskvideo from '../images/maskvideo.mp4';


const Home = () => {

    const interactiveDivRef = useRef(null);


    return (
        <div className='home-page'>
    <div className='gradient-bg'>
                    <div className='interactive'></div>
                </div>
            <div className='home-intro-section'>


             

                <div className='intro-content-space'>

            
                

                    <div className='intro-content-texts'>
                        <div className='gradients-container'>
                            <div ref={interactiveDivRef} className='interactive'></div>

                        </div>
                        <div className='intro-texts'>

                           
                       
                            <video className='intro-video' autoPlay muted loop src={maskvideo} style={{ width: '100%', height: 'auto', position: 'absolute' }} type='video/mp4' />
                            <div className='intro-txt'>Crafting Digital</div>
                            <div className='intro-txt'>Experiences that</div>
                            <div className='intro-txt'>Matters</div>
                        </div>

                        <div className='intro-content-slogans'>
                            <Typewriter
                                words={['Design. Promote. Evolve']}
                                loop={100}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>

                        <div className='intro-content-learnmore'>
                            <div>Learn More</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 5.06152L11.8275 6.47852L16.8705 11.4995H2V13.5L16.8695 13.4995L11.8275 18.5215L13.2385 19.9385L20.7085 12.4995L13.2385 5.06152Z" fill="#FF7732" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className='intro-content-image'>
                    <div className='gradients-container'>
                                <div className='g1'></div>

                            </div>
                        <img style={{ backgroundSize: 'cover', width: '90%', height: 'auto' }} src={sphere} />
                        {/* <spline-viewer url="https://prod.spline.design/x1rxbrh5r6v0w0wK/scene.splinecode"></spline-viewer> */}
                    </div>
                </div>
            </div>



            <div className='about-our-infideck'>
                <AboutInfideck />
            </div>

            <div className='services-offer-section'>
                <ServicesWeOffer />
            </div>




        </div>
    )
}

export default Home