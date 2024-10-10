import React from 'react'
import img from "../../assets/images/about-1.jpg"

const About = () => {
  return (
    <div className='flex justify-evenly flex-wrap'>
      <div><img src={img} alt="" width={450} className='bg-red-500'/></div>
      <div>
        <h1 className=''>Why choose us?</h1>
        {/* {About.map(() => { */}
          <div className='grid grid-rows-2 grid-cols-2 gap-4'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        {/* })} */}
      </div>
    </div>
  )
}

export default About
