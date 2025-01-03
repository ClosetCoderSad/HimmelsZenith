import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
  return (
    <div className='text-center px-2'>

      <p className='sm:text-2xl text-lg font-medium text-newsletter'>Get 10% off—only for the first 100 shoppers!</p>
      <p className='text-policytext mt-3 sm:text-base text-sm'>Feel the Zenith in Confidence with our premium and timeless fashion pieces. </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg'>
        <input className='w-full sm:flex-1 outline-none bg-input' type="text" placeholder='Enter your email id' required />
        <button className='bg-color text-input text-xs px-10 py-4 border border-black rounded-r-lg' type='submit'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox
