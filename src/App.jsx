import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './style'
import {Navbar,Hero,Carddeal,Billing,Business,Clients,CTA,Feedback,Getstarted,Footer,Stats,Testominal} from './components/index';




function App() {

  return (
  <div className='bg-green-300 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>

      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats/> 
      <Business/>
      <Billing/>
      <Carddeal/>
      <Testominal/>
      <Clients/>
      <CTA/>
      <Footer/>
      </div>
    </div>
  </div>
  )
}

export default App
