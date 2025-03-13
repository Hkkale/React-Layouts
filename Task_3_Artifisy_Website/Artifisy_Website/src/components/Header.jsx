import React from 'react'

const Header = () => {
  return (
    <header className='h-12 mt-7 w-full text-white '>
      <nav className='h-full w-full flex flex-row justify-between plus-jakarta-sans-200'>
        <div className='w-1/10 h-full  flex justify-center items-center ml-15'>
          <h1 className='font-semibold text-3xl'>ARTIFISY</h1>
        </div>
        <div className='w-4/11 h-full flex flex-row items-center justify-between mr-18 plus-jakarta-sans-400 '>
          <h2 className='text-sm hover:cursor-pointer '>ABOUT</h2>
          <h2 className='text-sm hover:cursor-pointer'>WORK</h2>
          <h2 className='text-sm hover:cursor-pointer  '>PORTFOLIO</h2>
          <h2 className='text-sm hover:cursor-pointer  border rounded-2xl px-9 py-1.5'>CONTACT</h2>
        </div>

      </nav>
      
    </header>
  )
}

export default Header
