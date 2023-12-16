import React from 'react';
import '../styles/AboutInfideck.css';
import designline from '../images/designline.png';
import evolveline from '../images/evolveline.png';
import promoteline from '../images/promoteline.png';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "I am Sanath SB, passionate about programming and the development of new applications. I have shared my tech stacks and personal projects in this portfolio."
]

const AboutInfideck = () => {
  return (
    <div className='about-infideck'>
            <div className='infideck-about'>
           <AboutText/>
            </div>

          <div className='infideck-work'>
        
              <div className='infi-work-title '>Frontend Tech Stacks</div>
              <div className='infi-work-des'>React JS, Next JS, Three JS, Framer Motion, GSAP</div>
              {/* <div className='infi-work-learnmore'>
                  <div>Learn More</div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                  </svg></div>
              </div> */}
            </div>

            <div className='infideck-work'>
              <div className='infi-work-title infititle'>Backend Tech Stacks</div>
              <div className='infi-work-des infides'>Mongo DB, Supabase, Python (Beginner), Java(Beginner) and Rest APIs</div>
              {/* <div className='infi-work-learnmore infilearnmore'>
                  <div>Learn More</div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#256AB3" />
                  </svg></div>
              </div> */}
            </div>

            <div className='infideck-work'>
              <div className='infi-work-title'>Experience</div>
              <div className='infi-work-des'>I have nearly 1 year of experience in the development field, and I am enthusiastic about learning and transitioning to the latest technologies.</div>
              {/* <div className='infi-work-learnmore'>
                  <div>Learn More</div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2385 4.56152L11.8275 5.97852L16.8705 10.9995H2V13L16.8695 12.9995L11.8275 18.0215L13.2385 19.4385L20.7085 11.9995L13.2385 4.56152Z" fill="#FF7732" />
                  </svg></div>
              </div> */}
            </div>

    </div>
  )
}

export function AboutText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className="body">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="lineMask">
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}

export default AboutInfideck