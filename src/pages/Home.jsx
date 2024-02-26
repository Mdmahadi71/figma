import React from 'react'
import Banner from '../conponents/banner/Banner'
import Work from '../conponents/work/Work'
import View from '../conponents/view/View'
import Features from'../conponents/features/Features'
import What from '../conponents/what/What'
import Blog from '../conponents/blog/Blog'
import Frequently from '../conponents/frequently/Frequently'



const Home = () => {
  return (
    <div>
      <Banner/>
      <Work/>
      <View/>
      <Features/>
      <What/>
      <Frequently/>
      <Blog/>
    </div>
  )
}

export default Home


