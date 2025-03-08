import React from 'react'
import AudioWave from './AudioWave'
import Increment from './Increment'

const Body = () => {
  return (
    <main className='h-15/17 w-full  grid  grid-cols-17 gap-4 pt-3 pr-2  '>


      {/* Left Side Container */}

      <section className='col-span-7  grid grid-cols-17 grid-rows-17 gap-5 h-full w-full '>

        <div className='col-span-17 row-span-12 rounded-2xl  p-5 h-full w-full ' style={{backgroundColor:"#FFFFFF"}}>
        <div className=' h-full w-4/5 flex flex-col gap-2 pl-5'>
            <div className=' h-4/6 '>
            <h1 className='font-bold text-6xl'  style={{fontFamily:"Syne"}}>Create Stunning Video</h1>
              
            </div>

            <div className=' h-1/6 poppins-regular text-xs' >
              <p>Find skilled freelancers for your projects.
                from writing to web development on our platform</p>
            </div>

            <div className=' h-1/6 flex flex-row gap-3 items-center'>
              <button className=' h-full text-white poppins-semibold text-xs w-35 rounded-3xl' style={{backgroundColor:"#D803FE"}}>Try More Ai</button>
              <button style={{backgroundColor:"#E6E6E6"}} className=' h-full text-xs w-10 flex justify-center items-center rounded-full'><img className='pl-0.5 h-5 w-5' src="src\assets\Triangle.png" alt="" /></button>
            </div>
            
          </div>
        </div>



      {/* Audio Wave Container */}
        <div className='col-span-12 row-span-5 rounded-2xl  p-1' style={{backgroundColor:"#FFFFFF"}}>
          <AudioWave/>
        </div>

      {/* Increment Container */}
        <div className='col-span-5 row-span-5  h-full w-full rounded-2xl p-3' style={{backgroundColor:"#FFFFFF"}}>

          <Increment/>


        </div>


      </section>

      <section className='col-span-10   rounded-3xl'  style={{backgroundColor:"#D9D9D9"}}>

      </section>

      

    </main>
  )
}

export default Body
