import React from 'react'
import bg2 from '../../assets/images/bg_2.jpg'
import { feedback } from '../../_Details'
import { FaQuoteLeft } from "react-icons/fa6";
import person_2 from "../../assets/images/person_2.jpg"

const Feedback = () => {
  return (
    <div className='relative'>
      <div className='brightness-[60%]'><img src={bg2} alt="" /></div>
      <div className='absolute top-0 flex flex-col gap-28 justify-center items-center h-full w-full'>
        <h1 className='text-2xl sm:text-4xl text-white font-bold'>Happy Clients & <span className='text-green-500 underline underline-offset-4'>Feedbacks</span></h1>
        {/* <div className='flex flex-wrap justify-evenly w-full'>
          {feedback.map((feedback, index) => (
            <div className={`bg-white h-[270px] w-[300px] p-4 flex flex-col gap-4 rounded-md`}>
              <div className='relative'>
                <span className='absolute -top-10 bg-green-500 text-white rounded-full p-2 text-2xl'><FaQuoteLeft/></span>
                <p className='text-gray-500 leading-7'>{feedback.para}</p>
              </div>
              <div className='flex justify-evenly items-center'>
                <div className='rounded-full'><img src={person_2} alt="" width={75} className='rounded-full' /></div>
                <div className=''>
                  <h1 className='font-medium'>{feedback.name}</h1>
                  <p className='text-sm text-gray-500'>{feedback.post}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Feedback
