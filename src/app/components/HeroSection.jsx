import React from 'react'
import Header from './Header'

const HeroSection = () => {
  const word = "< Hello World />";
  return (
    <div className='min-h-95 w-full flex justify-center items-center'>
       <div className=''>
       <h1 className='text-5xl outfit-bold'>{word}<span className=''>.</span></h1>
       <h2 className=''>I'm Allen <span className='text-primary'>O.</span> Douglas</h2>
       </div>
    </div>
  )
}


export default HeroSection
