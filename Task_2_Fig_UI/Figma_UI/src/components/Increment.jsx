import React, { useState } from 'react'

const Increment = () => {
  const [page ,setPage]=useState(1);

  function incrementHandler(){
    if(page===8){
      return;
    }
    setPage(page+1);
  }

  function decrementHandler(){
    if(page===1){
      return;
    }
    setPage(page-1);
  }


  return (
    <div className='h-full w-full  flex flex-col  poppins-regular'>
      <div onClick={incrementHandler} className='h-1/3 w-full  flex justify-center items-center '><img className='h-9 w-9 hover:cursor-pointer ' src="src\assets\up.png" alt="" /></div>
      <div className='h-1/3 w-full  flex justify-center items-center'><h3  className='text-xs'>{page} of 8</h3></div>
      <div onClick={decrementHandler} className='h-1/3 w-full  flex justify-center items-center'><img  className='h-9 w-9 hover:cursor-pointer' src="src\assets\down.png" alt="" /></div>
      
    </div>
  )
}

export default Increment
