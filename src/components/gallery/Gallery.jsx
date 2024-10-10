import React from 'react'
import { Image } from "@nextui-org/react";
import gallery1 from "../../assets/images/gallery-1.jpg"
import gallery2 from "../../assets/images/gallery-2.jpg"
import gallery3 from "../../assets/images/gallery-3.jpg"
import gallery4 from "../../assets/images/gallery-4.jpg"
import gallery5 from "../../assets/images/gallery-5.jpg"
import gallery6 from "../../assets/images/gallery-6.jpg"

const Gallery = () => {
  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ]
  return (
    <div className='flex flex-col gap-20 justify-center items-center py-20'>
      <div>
        <h1 className='text-4xl font-bold capitalize'>pets <span className='text-green-500'>gallery</span></h1>
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {gallery.map((gallery) => (
          <div className='flex justify-center overflow-hidden h-[210px]'>
            <Image
              // isZoomed
              radius='none'
              width={320}
              alt=""
              src={gallery}
              className='hover:brightness-90'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
