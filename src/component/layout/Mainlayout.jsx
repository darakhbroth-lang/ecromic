import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer'
// import Sidebar from './Sidebar'

function Mainlayout() {
  return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
  )
}

export default Mainlayout
