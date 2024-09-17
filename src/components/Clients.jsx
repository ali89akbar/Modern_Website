import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div key={index} className={`flex-1 p-3 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt={client.name} className='w-[100%] h-[100%] object-cover sm:w-[192px] cursor-pointer ' />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Clients