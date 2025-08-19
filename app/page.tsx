import { CardHoverEffectDemo } from '@/components/HoverEffect'
import Test from '@/components/Test'
import React from 'react'

const page = () => {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold z-50 text-transparent top-96 bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>Hello World !</h1>

      <Test />

      {/* <CardHoverEffectDemo /> */}
    </main>
  )
}

export default page
