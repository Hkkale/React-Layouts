import React from 'react'

const Section1 = () => {
  return (
    <section className='h-160 w-full border border-yellow-500  plus-jakarta-sans-200 flex flex-col justify-center items-center relative gap-7 overflow-y-hidden'>

      <h1 className='text-white  font-bold  h-2/5 w-full flex justify-center items-center relative z-10 border' style={{fontSize:"300px"}}>CREATIVE </h1>
      <h1 className='text-white  font-bold h-2/5 w-full flex justify-center items-center relative z-10 border' style={{fontSize:"300px"}}>WORLD</h1>

      <div className='h-4/6 z-20 bg-amber-400 w-75 absolute left-100 bottom-10 rotate-19'></div>
      <div className='h-4/6 z-20 bg-amber-400 w-75 absolute right-91  -rotate-19'></div>
      
    </section>
  )
}

export default Section1
