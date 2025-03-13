import React from 'react'

const Footer = () => {
  return (
    <footer className='h-175 w-full  px-20 purple-background plus-jakarta-sans-300 text-white'>



      <div className='h-130 w-full  pt-10 flex flex-row gap-20 '>

        <div className='h-105 w-131 ' style={{backgroundColor:"#D9D9D9"}}></div>


        <div className='h-105 w-120  '>
          <h1 className='text-[64px] font-medium  h-45'>Let’s Stay
          Connected</h1>

          <p className='text-[16px] font-medium  mt-25 pr-25'>Consectetur nostra dapibus eu eleifend ipsum iaculis luctus dis ac turpis sociosqu risus integer pellentesque</p>

          <div className='h-8 w-full border mt-8  flex flex-row bg-white rounded-full items-center justify-center'>
            <input className='w-4/5  h-8 rounded-full outline-none font-normal  z-10 pl-3 text-black text-[15px]' type="text" placeholder='Type your E-mail here...' />
            <button className='w-1/5 h-8  bg-black text-[15px] font-bold rounded-full hover:cursor-pointer'>Send</button>

          </div>
        </div>










        <div className='h-105 w-50  flex items-end'>
          <div className='h-8 w-full  flex flex-row justify-between'>

            <img src="\src\assets\instagram.png" alt="" />
            <img src="\src\assets\twitter.png" alt="" />
            <img src="\src\assets\facebook.png" alt="" />

          </div>


          




        </div>

        

        

      </div>






















      <div className='h-30 w-full   mt-5  text-white plus-jakarta-sans-300 flex flex-row items-center justify-between'>

        <h1 className='text-[24px] font-bold'>Artificy</h1>
        <p className='text-[15px] font-normal'>©2024 Your Brand. All rights reserved.</p>

      </div>
      
    </footer>
  )
}

export default Footer
