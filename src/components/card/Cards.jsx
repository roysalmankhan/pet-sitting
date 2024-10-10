import React from 'react'
import Card from './Card'
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import { FaDog } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className='relative -top-1 sm:-top-10'>
      <div className='flex justify-evenly flex-wrap gap-8 sm:gap-0'>
        <Card icon={<FaPersonWalkingLuggage />} heading={'Dog Walking'} para={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.'} />
        <Card icon={<WiDayCloudy />} heading={'Pet Daycare'} para={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.'} />
        <Card icon={<FaDog />} heading={'Pet Grooming'} para={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.'} />
      </div>
    </div>
  )
}

export default Cards
