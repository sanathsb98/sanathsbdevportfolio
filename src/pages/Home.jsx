import React from 'react';
import '../styles/Home.css';
import fluidGlass from '../images/fluidGlass.png'
import AboutInfideck from '../components/AboutInfideck';
import ServicesWeOffer from '../components/ServicesWeOffer';

const Home = () => {
  return (
      <div className='home-page'>

          <div className='home-intro-section'>
              <div className='intro-content-space'>
                  <div className='intro-content-texts'>
                     
                      <div className='intro-texts'>
                          <div>Crafting Digital</div>
                          <div>Experiences that</div>
                          <div>Matters</div>
                      </div>

                      <div className='intro-content-slogans'>
                          <div>Design.</div>
                          <div>Promote.</div>
                          <div>Evolve.</div>
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
                      <img style={{ backgroundSize: 'contain', width: '100%', height: 'auto' }} src={fluidGlass} />
                  </div>
              </div>
          </div>


    
   <div className='about-our-infideck'>
   <AboutInfideck/>
   </div>

   <div className='services-offer-section'>
    <ServicesWeOffer/>
   </div>
      
    


      </div>
  )
}

export default Home