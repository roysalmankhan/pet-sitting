import React from 'react'
import { Divider } from "@nextui-org/react";
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const Header = () => {
  const socials = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaDribbble />,
  ]
  return (
    <div className='bg-lime-300 py-1'>
      <div className='flex justify-around'>
        <ul className='flex gap-6 text-sm h-full'>
          <li><a href="#" className='sm:flex gap-1 hidden hover:text-green-500'><span><IoCall /></span>+91 9667371157</a></li>
          <li><a href="#" className='sm:flex hidden gap-1 hover:text-green-500'><span><FaTelegramPlane /></span> youremail@email.com</a></li>
        </ul>
        <ul className="flex h-5 items-center space-x-4 text-small">
          {socials.map((social) => (
            <>
              <li className='hover:text-green-500 cursor-pointer'>{social}</li>
              <Divider orientation="vertical" />
            </>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
