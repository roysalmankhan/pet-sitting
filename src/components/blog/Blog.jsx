import React from 'react'
import { FaComment } from "react-icons/fa";
import blog1 from "../../assets/images/image_1.jpg"
import blog2 from "../../assets/images/image_2.jpg"
import blog3 from "../../assets/images/image_3.jpg"

const Blog = () => {
  const blogs = [
    blog1,
    blog2,
    blog3,
  ]
  return (
    <div className='py-8 sm:py-16 bg-blue-50 flex justify-center items-center'>
      <div>
        <div className='pb-8 sm:pb-12'><h1 className='text-center text-2xl sm:text-4xl capitalize font-medium'>Latest news from our blog</h1></div>
        <div className='grid sm:grid-cols-3 p-2 justify-center gap-4 items-center'>
          {blogs.map((blog) => (
            <div className='grid-cols-1 w-[350px] bg-white rounded-t-2xl'>
              <div className='h-[220px] overflow-hidden'>
                <img src={blog} alt="" className='rounded-2xl' />
              </div>
              <div className='p-8 '>
                <small className='uppercase font-mono tracking-wider text-gray-400 text-start text-sm'><span className='hover:text-black cursor-pointer'>April 07, 2020</span> <span className='hover:text-black cursor-pointer'>admin</span> <span className='text-green-500 inline-flex'><FaComment /></span></small>
                <p className='tracking-wide leading-7 hover:text-green-500 cursor-pointer transition-all duration-200'>Even the all-powerful Pointing has no control about the blind texts</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
