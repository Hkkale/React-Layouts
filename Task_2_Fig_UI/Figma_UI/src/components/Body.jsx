import React from 'react'
import AudioWave from './AudioWave'
import Increment from './Increment'

const Body = () => {
  return (
    <main className='w-full h-16/17 md:h-15/17   grid grid-cols-1  md:grid-cols-17 gap-4 pt-3 pr-2    '>


      {/* Left Side Container */}

      <section className=' col-span-1 md:col-span-7 grid grid-cols-5 md:grid-cols-17 grid-rows-17 md:gap-5 gap-2 h-full w-full'>
        <div className='col-span-5 md:col-span-17  row-span-12 rounded-2xl p-5 h-full w-full bg-white'>
          <div className='h-full w-full md:w-4/5 flex flex-col md:gap-2 gap-4 md:pl-5 pl-7 '>
            <div className='md:h-4/6 h-2/4'>
              <h1 className='font-bold text-5xl md:text-6xl' style={{ fontFamily: "Syne" }}>
                Create Stunning Video
              </h1>
            </div>
            <div className='md:h-1/6 h-1/4 poppins-regular text-sm md:text-xs'>
              <p>
                Find skilled freelancers for your projects, from writing to web development on our platform.
              </p>
            </div>
            <div className='h-1/6  flex flex-row gap-3 items-center'>
              <button
                className='h-full text-white poppins-semibold text-xs w-35 rounded-3xl hover:cursor-pointer hover:ring-1 hover:ring-gray-500 px-4 py-2'
                style={{ backgroundColor: "#D803FE" }}>
                Try More AI
              </button>
              <button
                style={{ backgroundColor: "#E6E6E6" }}
                className='h-full text-xs w-10 flex justify-center items-center rounded-full hover:cursor-pointer hover:ring-1 hover:ring-gray-500'>
                <img className='h-5 w-5' src='src/assets/Triangle.png' alt='' />
              </button>
            </div>
          </div>
        </div>

        {/* Audio Wave Container */}
        <div className='col-span-4 md:col-span-12 row-span-5 rounded-2xl p-1 bg-white '>
          <AudioWave />
        </div>

        {/* Increment Container */}
        <div className='col-span-1 md:col-span-5 row-span-5 h-full w-full rounded-2xl p-3 bg-white '>
          <Increment />
        </div>
      </section>

    {/* Right Container  */}
      <section className='col-span-1 md:col-span-10 h-80 md:h-full w-full p-3  rounded-3xl '  style={{backgroundColor:"#D9D9D9"}}>

        <div className='h-full w-full  flex p-1 items-end '>

          <div className=' md:h-1/2 h-2/3 w-full md:px-12 px-6 py-3  '>
            <div className='md:w-6/10 w-7/10 h-2/4 rounded-xl md:p-3 p-1 flex flex-col md:gap-3 gap-1  ' style={{backgroundColor:"#ffffffc4",}}>
              <h1 className='poppins-medium '>Motion Design</h1>
              <p className='poppins-regular text-xs' >We Love Create Experience That Enable People To Connect, Express Themselves</p>
            </div>
            <div className='w-full h-1/3  flex justify-end items-center pr-5'>
              <div className='md:w-3/10 w-4/10 h-2/4  rounded-xl flex flex-row items-center justify-center gap-3   ' style={{backgroundColor:"#ffffffc4",}}>
              <h2 className='text-xs poppins-regular'>By Mora Ai</h2>
              <img className='h-3 w-4' src="src\assets\downArrow.svg" alt="" />
              </div>
            </div>
          </div>
          

        </div>

      </section>

      

    </main>
  )
}

export default Body
