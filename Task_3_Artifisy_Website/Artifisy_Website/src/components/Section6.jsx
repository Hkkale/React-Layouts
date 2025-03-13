import React from 'react'

const Section6 = () => {
  return (
    <section className='h-500 w-full px-20'>




      {/* Text Container */}
      <div className='h-60 w-2/3  plus-jakarta-sans-300 text-white'>
      <h1 className='text-[64px] font-medium'>Every masterpiece</h1>
      <h1 className='text-[64px] font-medium'>begins with single step</h1>
      </div>


      {/* Blank purple container */}
      <div className='h-140 mt-10 w-full purple-background rounded-[60px]'>

      </div>

      <div className='h-220 w-full  mt-20 flex flex-row gap-1 plus-jakarta-sans-300 text-white'>

        <div className='h-full w-190  pr-45'>
          <p className='text-[27px] font-bold'>Every masterpiece begins with a single step. From my early days of exploring creativity to mastering the art of design, this timeline reflects the evolution of my passion, skills, and vision.</p>
        </div>



        <div className='h-full w-10  relative flex justify-center py-10'>

          <div className='h-153 w-[1px] purple-background absolute'></div>
          <div className='h-[15px] w-[15px] purple-background absolute rounded-full'></div>
          <div className='h-[15px] w-[15px] purple-background absolute rounded-full top-80'></div>
          <div className='h-[15px] w-[15px] purple-background absolute rounded-full top-160'></div>

        </div>



        <div className='h-full w-140  pl-22 py-7 pr-18'>

          <div className='plus-jakarta-sans-300 flex flex-col gap-2 '>
            <h1 className='text-[27px] font-bold'>Foundation of Creativity</h1>
            <p className='text-[20px] '>Started as a curious mind, diving into the world of design. Experimented with various styles and techniques to build a solid foundation.</p>
            <div className='purple-background rounded-4xl mt-5 flex items-center justify-center w-43 h-7'><h1 className='text-[14px]'>2020-2024</h1></div>
          </div>




          <div className='plus-jakarta-sans-300 flex flex-col gap-2  mt-14'>
            <h1 className='text-[27px] font-bold'>Growth and Innovation</h1>
            <p className='text-[20px] '>Refined my craft by embracing new technologies and approaches. Worked on impactful projects that pushed the boundaries of traditional design.</p>
            <div className='purple-background rounded-4xl mt-5 flex items-center justify-center w-43 h-7'><h1 className='text-[14px]'>2020-2024</h1></div>
          </div>

          <div className='plus-jakarta-sans-300 flex flex-col gap-2  mt-24'>
            <h1 className='text-[27px] font-bold'>Mastering the Art</h1>
            <p className='text-[20px] '>Evolved into a professional designer, delivering exceptional results for clients worldwide. Focused on creating immersive visuals and storytelling</p>
            <div className='purple-background rounded-4xl mt-5 flex items-center justify-center w-43 h-7'><h1 className='text-[14px]'>2020-2024</h1></div>
          </div>










        </div>

      </div>
      
    </section>
  )
}

export default Section6
