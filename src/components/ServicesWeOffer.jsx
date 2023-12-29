import React from 'react';
import '../styles/ServicesWeOffer.css';
import digitalMarketing from '../images/digitalMarketing.png';
import seo from '../images/seo.png';
import branding from '../images/branding.png';
import softwareDev from '../images/softwareDev.png';
import visualProd from '../images/visualProd.png';
import creativeDes from '../images/creativeDes.png';
import eventsite from '../images/eventsite.png';
import reduxsite from '../images/redux.png';

const ServicesWeOffer = () => {
    const redirectToEventSite = () => {
        window.location.href = 'https://eventsitesb.netlify.app';
      };
      const redirectToReduxCart = () => {
        window.location.href = 'https://reduxcartsite.netlify.app/';
      };
  return (
    <div className='services-we-offer'>
        <div className='services-offer-titles'>
            <div className='services-offer-title'>MY SHOWCASE</div>
         
            <div className='services-offer-description'>Here are some of my own works which I have developed and hosted</div>
        </div>
        <div className='services-offer-types'>

              <div className='services-offer-type'>
                  <div className='services-img-section'>
                      <img src={eventsite} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className='services-content-section'>
                      <div className='services-title'>Event Site</div>
                      <div className='services-des'>I developed a responsive event website using React </div>
                      <div className='services-learn-more' onClick={redirectToEventSite}>
                          <div className='sev-learnmore-txt'>Watch Live</div>
                          <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='services-offer-type'>
                  <div className='services-img-section'>
                      <img src={reduxsite} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className='services-content-section'>
                      <div className='services-title'>Redux Cart</div>
                      <div className='services-des'>I developed a responsive redux shopping cart.</div>
                      <div className='services-learn-more' onClick={redirectToReduxCart}>
                          <div className='sev-learnmore-txt'>Watch Live</div>
                          <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <div className='services-offer-type'>
                  <div className='services-img-section'>
                      <img src={eventsite} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className='services-content-section'>
                      <div className='services-title'>Event Site</div>
                      <div className='services-des'>I developed a responsive event website using React for various screen resolutions. </div>
                      <div className='services-learn-more' onClick={redirectToEventSite}>
                          <div className='sev-learnmore-txt'>Watch Live</div>
                          <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div> */}

          

         

           

           

           

            

        </div>
    </div>
  )
}


export default ServicesWeOffer