import React from 'react'
import { Outlet } from 'react-router-dom'
import Manubar from '../manu/Manubar'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
  <>
  <Manubar/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default Layout
