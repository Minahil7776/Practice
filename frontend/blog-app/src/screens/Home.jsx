import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Article from '../components/Article'

export default function Home() {
  return (
    <div>
        {/* Home route */}
        <Navbar/>
        {/* Carousel route */}
        <Carousel/>
        {/* Article */}
        <Article/>
        {/* Footer */}
        {/* <Footer/> */}
    </div>
  )
}
