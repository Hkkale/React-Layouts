import React from 'react'

const Header = () => {
  return (
    <header className='h-2/17 w-full rounded-2xl ' style={{backgroundColor:"#FFFFFF", }}>

      <nav className='h-full w-full flex  rounded-2xl justify-between pl-6 pr-15 '>

        <div className='h-full  flex items-center justify-center  gap-0.5 poppins-medium text-lg w-1/10'>
          <h1 >Mora</h1>
          <div className='h-full  flex justify-center items-center pt-2'>
          <img className='h-2 w-2 pt-' src="src\assets\circle.svg" alt="" srcset="" />
          </div>
        </div>


        <div className='h-full flex flex-row gap-25 items-center  poppins-regular text-sm w-8/10 justify-center'>
          <h3>Capabilities</h3>
          <h3>Safety</h3>
          <h3>Research</h3>         

        </div>

        <div className='h-full flex flex-row gap-2 items-center  w-1/10 justify-center '>

          <div className='h-full  flex items-center justify-center w-1/2'><img className='h-8' src="src\assets\menu.png" alt="" /></div>
          <div className='h-full  flex items-center justify-center w-1/2'><img className='h-8' src="src\assets\search.svg" alt="bala" /></div>
                   

        </div>



      </nav>
      
    </header>
  )
}

export default Header
