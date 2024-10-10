import React from 'react'

const Counts = () => {
  const counts = [
    {
      numbers:50,
      hosts:"customers",
    },
    {
      numbers:8500,
      hosts:"Professionals",
    },
    {
      numbers:20,
      hosts:"Products",
    },
    {
      numbers:50,
      hosts:"Pets Hosted",
    },
  ]
  return (
    <div className='py-12 bg-green-500 text-white grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-4'>
      {counts.map((count) => (
        <div className='flex flex-col w-full justify-center items-center gap-2'>
          <h1 className='font-bold text-5xl'>{count.numbers}</h1>
          <p className='capitalize'>{count.hosts}</p>
        </div>
      ))}
    </div>
  )
}

export default Counts
