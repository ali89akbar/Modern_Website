import React from 'react'
import styles from './../style.js'
import {  robot } from '../assets'
import discount  from '../assets/Discount.svg'
import Getstarted from './Getstarted.jsx'

const Hero = () => (
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className="size-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>
            Get 10% off on all items in our store!</span>
          Account
          </p>
          </div>
 
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The Next <br className='sm:block 
              hidden'/>{" "}
            <span className='text-gradient'>
              Generation</span> {" "}
            </h1>

<div className='ss:flex hidden md:mr-4
 mr-0'>
<Getstarted/>

</div>
          </div>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Payment Method. </h1>
            <p className={`${styles.paragraph} max-w-[470px] mb-[70px]`}>Our team Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod aliquid eveniet? Perspiciatis, ad ipsum tenetur id voluptatem illo ut soluta vero repudiandae earum consequatur rem fugit mollitia nam. Nihil.</p>
        </div>
     
     
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

 <div className={`ss:hidden ${styles.flexCenter}`}>
  <Getstarted/>
 </div>
    </section>
  )


export default Hero