import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'


const SharedLayout = ({children}) => {
  return (
    <>
    <div>
        <Navbar/>  
    </div>
    <div>
        {children}
    </div>
    
    </>
  )
}

export default SharedLayout
