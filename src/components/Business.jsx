import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard=({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`size-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className='size-50% object-contain '/>
    </div>
<div className='flex-1 flex flex-col ml-3'>
  <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
  <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
</div>
  </div>
)
const Business = () =>(
  <section id='feature' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Youu do the Business,<br className='sm:block hidden'/>we'll handle the money</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, cumque architecto error iste qui, unde corporis eius sed libero dolorum officia voluptatibus suscipit voluptatem voluptates corrupti exercitationem esse enim? Consequuntur.
      </p>
      <Button styles="mt-10"/>
      </div>
      
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      </section>
)

export default Business