import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-latesttext'>Our Store</p>
          <p className=' text-text_1'>Lalmatia Block B <br />Dhaka, Bangladesh</p>
          <p className=' text-text_1'>Tel: (469) 756-9160 <br />himmelszenith@gmail.com</p>
          <p className=' font-semibold text-xl text-latesttext'>Our Socials</p>
          <div className='pt-2 flex flex-row justify-normal items-center gap-5'>
              <a href='https://www.instagram.com/himmelszenith/' target='_blank'><img className='w-8' src={assets.instagramicon} alt="" /></a>
              <a href='https://www.facebook.com/profile.php?id=61561474117192' target='_blank'><img className='w-8' src={assets.facebookicon} alt="" /></a>
              <a href='https://www.linkedin.com/company/himmels-zenith/' target='_blank'><img className='w-8' src={assets.linkedinicon} alt="" /></a>
          </div>
          <p className=' text-text_1'>Follow to Stay up-to-date with the latest trends,<br/>exclusive offers, and new arrivals!</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact