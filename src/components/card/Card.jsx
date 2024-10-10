import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import './card.css'

const Card = ({ icon, heading, para, divClassName }) => {
  return (
    <div className='h-72 w-80 relative'>
      <div className={`maindiv shadow-md shadow-black bg-white p-6 text-center flex flex-col gap-4 hover:bg-green-500 hover:text-white transition-all duration-500 ${divClassName}`}>
        <div className='icondiv absolute -top-8 rounded-full bg-green-500 p-4 text-white'>
          <div className='text-4xl'>{icon}</div>
        </div>
        <h1 className=' font-semibold capitalize text-xl'>{heading}</h1>
        <p className=''>{para}</p>
        <div className='relative'>
          <button className='btn bg-green-500 text-white rounded-full p-2'><FaAngleRight className='text-3xl'/></button>
        </div>
      </div>
    </div>
  )
}

export default Card
