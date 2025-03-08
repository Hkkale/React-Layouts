import React from 'react'

const AudioWave = () => {
  return (
    <div className=' h-full w-full '>
      <div className=' w-full h-1/5 flex justify-end pt-1 pr-4'><img className='h-4 w-4 ' src="src\assets\star.svg" alt="" /></div>
      
      
      <div className=' w-full h-3/5 flex flex-row px-4 '>


      {/* left Lines */}
      <div className='h-full w-1/4  flex flex-row justify-center items-center gap-1 pl-3'>
      <div className='h-1/4  w-2 rounded-2xl ' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-2/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-3/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-4/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      </div>


      {/* Circles */}
      <div className='h-full w-2/4 flex flex-row items-center justify-center relative gap-11'>
      <div className='h-3/4  w-12 rounded-full z-10 ' style={{backgroundColor:"#D9D9D9"}}></div>
      <div className='h-4/4 border-1 border-white  w-16 rounded-full absolute  z-20' style={{backgroundColor:"#D9D9D9"}}></div>
      <div className='h-3/4  w-12 rounded-full  z-10' style={{backgroundColor:"#D9D9D9"}}></div>
      </div>
      

      {/* Right lines */}
      <div className='h-full w-1/4  flex flex-row justify-center items-center gap-1 pr-3'>
      <div className='h-4/4  w-2 rounded-2xl ' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-3/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-2/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      <div className='h-1/4  w-2 rounded-2xl' style={{backgroundColor:"#EBEBEB"}}></div>
      </div>
      
      
      </div>
      
    </div>
  )
}

export default AudioWave
