import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const[toggle,setToggle]= useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* Logo on the left */}
      <img src={logo} alt="logo" className='w-[124px] h-[40px]' />

      {/* Nav Links on the right */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium inline cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
          >
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img
       src={toggle ? close : menu} 
       alt="menu"
      className='size-[28px] object-contain'
      onClick={()=>{
        setToggle(!toggle)
      }}
      />

      
      <div className={`
        ${!toggle ?  'hidden' : 'flex' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>         
      
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium inline cursor-pointer text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} `}
          >
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
      
      </div>
    </nav>
  )
}

export default Navbar;
