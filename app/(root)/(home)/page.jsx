import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='home flex flex-col justify-center  h-screen w-full 50 '>
    <h1 className='text-7xl font-semibold text-yellow-800 head-text mt-6'>
      Welcome to Recipe book
    </h1>
    <Link href={"/recipe-list"} className='text-white text-2xl hover:font-medium '>Click Here to Generate Recipes</Link>
    </div>
  )
}
