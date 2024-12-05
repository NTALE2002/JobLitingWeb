import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav.jsx'
const LayOut = () => {
  return (
  <>
  <Nav/>

    <main>
      <Outlet/>
    </main>
  </>
    
  )
}

export default LayOut