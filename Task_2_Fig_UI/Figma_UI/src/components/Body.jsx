import React from 'react'

const Body = () => {
  return (
    <main className='h-14/17 w-full  grid  grid-cols-17 gap-4 pt-5 pr-2  '>


      {/* Left Side Container */}

      <section className='col-span-7   grid grid-cols-17 grid-rows-17 gap-5 h-full w-full '>

        <div className='col-span-17 row-span-11 rounded-2xl ' style={{backgroundColor:"#FFFFFF"}}></div>
        <div className='col-span-12 row-span-6  rounded-2xl' style={{backgroundColor:"#FFFFFF"}}></div>
        <div className='col-span-5 row-span-6  rounded-2xl' style={{backgroundColor:"#FFFFFF"}}></div>


      </section>

      <section className='col-span-10   rounded-3xl'  style={{backgroundColor:"#D9D9D9"}}>

      </section>

      

    </main>
  )
}

export default Body
