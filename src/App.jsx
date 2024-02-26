import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import {createBrowserRouter ,createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import Layout from './conponents/root/Layout';
import Pricing from './pages/Pricing';
import Featurespage from './pages/Featurespage';
import Workpage from './pages/Workpage';
import Readpage from './pages/Readpage';
import Blogpage from './pages/Blogpage';
import Readblogpage from './pages/Readblogpage';
import Privacy from './pages/Privacy';
import Contactpage from './pages/Contactpage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<Aboutpage/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/features' element={<Featurespage/>}></Route>
    <Route path='/work' element={<Workpage/>}></Route>
    <Route path='/read' element={<Readpage/>}></Route>
    <Route path='/blog' element={<Blogpage/>}></Route>
    <Route path='/readblog' element={<Readblogpage/>}></Route>
    <Route path='/contact' element={<Contactpage/>}></Route>
    <Route path='/privacy' element={<Privacy/>}></Route>
  </Route>
))

const App = () => {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

