import { Outlet } from 'react-router'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  

  return (
   <div className='md:h-screen min-h-screen w-screen box-border md:py-5 md:px-10 py-2 px-2  ' style={{backgroundColor:"#E6EDEE",color:"#1A1A1A"}}>
    <Header/>
    <Outlet/>


   </div>
  )
}

export default App
