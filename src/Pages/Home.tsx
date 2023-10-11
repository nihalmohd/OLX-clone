import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Posts from '../Components/Post/Post'

function Home() {
  return (
    <div className="homeParentDiv">
      <Header/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div >
  )
}

export default Home
