import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate=useNavigate();
  function handleClick(){
    navigate("/")
  }
  function capabilitiesHandler(){
    navigate("/capabilities")
  }
  function safetyHandler(){
    navigate("/safety")
  }
  function researchHandler(){
    navigate("/research")
  }
  function menuHandler(){
    navigate("/menu")
  }
  return (
    <header className='md:h-2/17 h-1/17 w-full rounded-2xl  ' style={{backgroundColor:"#FFFFFF", }}>

      <nav className='h-full w-full flex  rounded-2xl justify-between md:pl-6 md:pr-15 pl-1 pr-2 items-center '>

        <div className='h-full   flex items-center justify-center  gap-0.5 poppins-medium md:text-lg   md:w-1/10 w-2/10  '>
          <h1 className='hover:cursor-pointer ' onClick={handleClick}  >Mora</h1>
          <div className='h-full flex justify-center items-center pt-2'>
          <img className='h-2 w-2  '  src="src\assets\circle.svg" alt="" srcset="" />
          </div>
        </div>


        <div className='   h-full flex flex-row md:gap-25 gap-3 items-center  poppins-regular md:text-sm text-xs md:w-8/10 w-6/10   justify-center'>
          <h3 onClick={capabilitiesHandler} className='hover:cursor-pointer hover:underline '>Capabilities</h3>
          <h3 onClick={safetyHandler} className='hover:cursor-pointer hover:underline '>Safety</h3>
          <h3 onClick={researchHandler} className='hover:cursor-pointer hover:underline '>Research</h3>         

        </div>

        <div className='h-full flex flex-row gap-2 items-center  md:w-1/10 w-2/10 justify-center '>

          <div className='h-full  flex items-center justify-center  w-1/2'><img onClick={menuHandler} className='md:h-8 h-6 hover:cursor-pointer' src="src\assets\menu.png" alt="" /></div>
          <div className='h-full  flex items-center justify-center w-1/2'><img className='md:h-8 h-6 hover:cursor-pointer' src="src\assets\search.svg" alt="bala" /></div>
                   

        </div>



      </nav>
      
    </header>
  )
}

export default Header
