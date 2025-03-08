import React from 'react'

const Increment = () => {
  return (
    <div className='h-full w-full  flex flex-col  poppins-regular'>
      <div className='h-1/3 w-full  flex justify-center items-center'><img className='h-9 w-9' src="src\assets\up.png" alt="" /></div>
      <div className='h-1/3 w-full  flex justify-center items-center'><h3  className='text-xs'>1 of 8</h3></div>
      <div className='h-1/3 w-full  flex justify-center items-center'><img  className='h-9 w-9' src="src\assets\down.png" alt="" /></div>
      
    </div>
  )
}

export default Increment
