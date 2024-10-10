import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white text-start py-32 flex flex-col justify-center items-center gap-10'>
      <div className='grid grid-cols-1 w-[90%] sm:grid-cols-4 gap-8'>
        <div>
          <h1 className='text-3xl font-bold pb-4'>Petsitting</h1>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div>
          <h1 className='text-3xl font-bold pb-4'>Latest News</h1>
        </div>
        <div>
          <h1 className='text-3xl font-bold pb-4'>Quick Links</h1>
          <ul className='leading-8'>
            <li className='cursor-pointer hover:text-gray-300'>Home</li>
            <li className='cursor-pointer hover:text-gray-300'>About</li>
            <li className='cursor-pointer hover:text-gray-300'>Services</li>
            <li className='cursor-pointer hover:text-gray-300'>Works</li>
            <li className='cursor-pointer hover:text-gray-300'>Blog</li>
            <li className='cursor-pointer hover:text-gray-300'>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className='text-3xl font-bold pb-4'>Have a Questions?</h1>
          <ul>
            <li><span></span> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><span></span> +2 392 3929 210</li>
            <li><span></span>	info@yourdomain.com</li>
          </ul>
        </div>
      </div>
      <div>
        <small className='text-gray-300'>All Rights Reserved</small>
      </div>
    </div>
  )
}

export default Footer
