import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'

const MainLayout = () => {
  return (
    <div>       
        <Nav/>
        <main>
             <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout