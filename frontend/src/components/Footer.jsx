import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col items-center sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>

        <div className='sm:flex sm:flex-col sm:items-start flex-col items-center'>
          <div className='sm:flex sm:justify-start flex justify-center'><img className='mb-5 max-w-32 h-auto w-auto' src='/favicon.png' alt="" /></div>
          <p className='w-full md:w-2/3 text-latesttext'>Our mission at Himmels Zenith is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-center sm:text-start'>COMPANY</p>
          <ul className='flex flex-col space-y-1 items-center sm:items-start text-latesttext'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about' ><li>About us</li></Link>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-center'>GET IN TOUCH</p>
          <ul className='flex flex-col space-y-1 items-center text-latesttext'>
            <li>+1-469-756-9160</li>
            <li>Contact@Abrar_dev.com</li>
            <div className='pt-2 flex flex-row justify-normal items-center gap-5'>
              <a href='https://www.instagram.com/himmelszenith/' target='_blank'><img className='w-5' src={assets.instagramicon} alt="" /></a>
              <a href='https://www.facebook.com/profile.php?id=61561474117192' target='_blank'><img className='w-5' src={assets.facebookicon} alt="" /></a>
              <a href='https://www.linkedin.com/company/himmels-zenith/' target='_blank'><img className='w-5' src={assets.linkedinicon} alt="" /></a>
            </div>
          </ul>
        </div>

      </div>

      <div className='py-5'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ HimmelsZenith.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
