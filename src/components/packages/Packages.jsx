import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import price1 from "../../assets/images/pricing-1.jpg"
import price2 from "../../assets/images/pricing-2.jpg"
import price3 from "../../assets/images/pricing-3.jpg"

const Packages = () => {
  const packages = [
    {
      image: price1,
      name: 'personal',
      price: '49',
    },
    {
      image: price2,
      name: 'business',
      price: '79',
    },
    {
      image: price3,
      name: 'ultimate',
      price: '109',
    },
  ]
  return (
    <div>
      <div className='py-12'>
        <h1 className='text-5xl font-semibold text-center'>Affordable Packages</h1>
      </div>
      <div className='flex flex-wrap justify-evenly gap-4'>
        {packages.map((pack) => (
          <div>
            <div className='w-[300px]'>
              <img src={pack.image} alt="" />
            </div>
            <div className='flex flex-col gap-4 text-center items-center w-full'>
              <h1 className='text-green-500 text-lg uppercase'>{pack.name}</h1>
              <p className='inline-flex'><span className='text-gray-400'><FaDollarSign /></span><span className='font-bold text-7xl'>{pack.price}</span></p>
              <ul>
                <li className='p-2 flex gap-2'><span><FaCheck className='inline-block text-blue-500' /></span>5 Dog Walk</li>
                <li className='p-2 flex gap-2 bg-gray-200 rounded-xl'><span><FaCheck className='inline-block text-blue-500' /></span>3 Vet Visit</li>
                <li className='p-2 flex gap-2'><span><FaCheck className='inline-block text-blue-500' /></span>3 Pet Spa</li>
                <li className='p-2 flex gap-2 bg-gray-200 rounded-xl'><span><FaCheck className='inline-block text-blue-500' /></span>Free Supports</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Packages
