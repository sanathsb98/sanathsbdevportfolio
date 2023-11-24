import React from 'react';
import '../styles/ServicesWeOffer.css';
import digitalMarketing from '../images/digitalMarketing.png';
import seo from '../images/seo.png';
import branding from '../images/branding.png';
import softwareDev from '../images/softwareDev.png';
import visualProd from '../images/visualProd.png';
import creativeDes from '../images/CreativeDes.png';

const ServicesWeOffer = () => {
  return (
    <div className='services-we-offer'>
        <div className='services-offer-titles'>
            <div className='services-offer-title'>Services we offer</div>
            <div className='services-offer-description'>Elevate your digital presence with our comprehensive suite of services. From innovative digital marketing strategies to cutting-edge web design, seamless software development, and captivating design services</div>
        </div>
        <div className='services-offer-types'>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={digitalMarketing} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>Digital Marketing</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={seo} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>SEO & SMM</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={branding} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>Branding</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={softwareDev} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>Software Development</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={visualProd} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>Visual Production</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            <div className='services-offer-type'>
               <div className='services-img-section'>
                <img src={creativeDes} style={{width:'100%',height:'100%'}}/>
               </div>
               <div className='services-content-section'>
                <div className='services-title'>Creative Design</div>
                <div className='services-des'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to...</div>
                <div className='services-learn-more'>
                    <div className='sev-learnmore-txt'>Learn More</div>
                    <div className='sev-learnmore-icon'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                              </svg>
                          </div>
                </div>
               </div>
            </div>

            

        </div>
    </div>
  )
}

export default ServicesWeOffer