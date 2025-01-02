import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 mb-20'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-latesttext'>
          <p>Himmels Zenith was inspired by a passion for fashion and a desire to bring high-quality, trendy clothing to everyone. Our journey began with a simple idea: to offer the latest styles at affordable prices, all infused with a nostalgic retro vibe.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.</p>
          <b className='text-newsletter'>Our Mission</b>
          <p>Our mission at Himmels Zenith is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      
      <NewsletterBox />

    </div>
  )
}

export default About
