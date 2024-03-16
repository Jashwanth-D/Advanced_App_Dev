import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Public/Navbar'
import Footer from '../Components/Public/Footer'

const WebLayout = () => {
  return (
    <><div className='h-screen w-screen p-0 m-0 flex-col justify-centre'>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
    </>

  )
}

export default WebLayout