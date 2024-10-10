import React from 'react'
import Nav from './nav/Nav'
import Header from './nav/Header'
import Heropage from './heropage/Heropage'
import Cards from './card/Cards'
import About from './about/About'
import Feedback from './feedback/Feedback'
import Gallery from './gallery/Gallery'
import Blog from './blog/Blog'
import Packages from './packages/Packages'
import Counts from './counts/Counts'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Heropage />
      <Cards />
      {/* <About /> */}
      <Counts />
      <Feedback />
      <Packages />
      <Gallery />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
