import React from 'react'
import Header from './Header'
import HeroCard from './HeroCard';

const HeroSection = () => {
  const word = "< Hello World />";
  return (
    <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
       <div className=''>
       {/* Text Section */}
       </div>
       <div>
        <HeroCard/>
       </div>
    </div>
  )
}


export default HeroSection
