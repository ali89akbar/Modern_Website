import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const Carddeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
      Find a better card deal <br className='sm:block hidden'/>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut beatae reprehenderit sed sint magnam dolores corrupti? Labore, praesentium magni atque nobis culpa sunt aliquid excepturi, reprehenderit voluptatem eum, voluptate alias!
      </p>
        </h2>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt=""  className='size-[100%]'/>
      </div>
    </section>
  )
}

export default Carddeal