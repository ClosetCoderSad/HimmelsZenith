import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-underline'>

      <div>
        <img className='w-11 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-policytext'>We offer a hassle-free exchange policy</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Cash on Delivery</p>
        <p className='text-policytext'>100% Original Product with Cash on delivery</p>
      </div>

    </div>
  )
}

export default OurPolicy
