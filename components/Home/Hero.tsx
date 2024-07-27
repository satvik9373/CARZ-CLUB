import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
<h2 className='text-[40px] md:text-[60px] font-bold'>Premium Cars In your Ares</h2>
<h2 className='text-[20px] text-gray-500 pr-20'>Premium Cars In your Ares Book a test drive Now</h2>
<button className='p-2 mt-5 bg-yellow-500 text-white px-4 rounded-full hover:scale-105 transition-all'>Book A Test Drive Now</button>
        </div>
        <div>
<Image src='/hero image.png'
alt='hero image' 
width={600}
height={500}
className='w-full object-cover'
/>
        </div>
    </div>
  )
}

export default Hero