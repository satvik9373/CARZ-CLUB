import {
    UserButton
  } from "@clerk/nextjs";
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
        <Image src='/logo.png'
        alt='logo'
        width={50}
        height={70}
        />
        <div className="hidden md:flex gap-5">
            <h2 className="px-3 cursor-pointer p-2 rounded-full hover:text-yellow-500 hover:scale-105 transition-all">Home</h2>
            <h2 className="px-3 cursor-pointer p-2 rounded-full hover:text-yellow-500 hover:scale-105 transition-all">History</h2>
            <h2 className="px-3 cursor-pointer p-2 rounded-full hover:text-yellow-500 hover:scale-105 transition-all">Contact Us</h2>
        </div>
        <UserButton/> 
    </div>
  )
}

export default Navbar