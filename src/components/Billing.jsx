import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='product' className={layout.sectionImgReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="" className={`size-100% relative z-[5]`}/>
      <div className='a'></div>
    </div>
  </section>
)

export default Billing