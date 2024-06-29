import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className='about-container'>
        {/* Navbar */}
        <div><Navbar/></div>
        <div className='about-heading'>About Us</div>
        <div className='about-subheading'>Who We Are</div>
        <div className='about-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus porro odio consequatur omnis amet, aliquam quas ipsam a alias corporis dolorem laudantium expedita! Est aperiam temporibus architecto delectus. Dignissimos! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error adipisci tenetur ipsum ea nesciunt fugiat similique, commodi consequatur aperiam unde nulla ratione atque veritatis ullam. Perferendis ipsa veritatis sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius similique impedit illo repellendus? Corrupti explicabo commodi provident quasi accusantium pariatur quaerat fugit aut et. Tenetur aspernatur aut fuga quaerat.
        </div>
        
        {/* footer */}
        <div><Footer/></div>
    </div>

  )
}
