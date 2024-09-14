import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='product' className={layout.sectionImgReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="" className={`size-100% relative z-[5]`}/>
      <div className='absolute z-[3] -left-1/2 top-0 size-[50%] rounded-full white__gradient'/>
      
      <div className='absolute z-[0] -left-1/2 bottom-0 size-[50%] rounded-full pink__gradient'/>
      
    </div>
  </section>
)

export default Billing