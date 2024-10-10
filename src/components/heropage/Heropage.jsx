import React from 'react'
import bgimage from "../../assets/images/bg_1.jpg"
import { Button } from "@nextui-org/react";

const Heropage = () => {
  return (
    <div className='relative'>
      <div>
        <img src={bgimage} className='brightness-[60%]' alt="" />
      </div>
      <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center gap-4'>
        <div className='text-wrap text-center text-white'>
          <h1 className='text-2xl sm:text-7xl font-bold'>Highest Quality Care For Pets You'll Love</h1>
        </div>
        <div>
          <Button className='text-white bg-green-600 font-semibold text-lg'>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Heropage
