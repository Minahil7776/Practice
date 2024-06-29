import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function Contect() {
  return (
    <div>
        {/* Navbar */}
        <div><Navbar/></div>

        <div className='about-container'>
            <div className='about-heading'>Contect Us</div>
            <div className='about-subheading'>How to contect</div>
            <div className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis sint. Molestiae libero illum id magni. Error, consectetur necessitatibus corrupti veniam molestiae quo hic earum, porro quas, velit id omnis.</div>
        </div>

        {/* Footer */}
        <div><Footer/></div>
    </div>
  )
}
