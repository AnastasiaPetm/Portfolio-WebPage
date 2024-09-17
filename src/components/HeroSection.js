import React from 'react'
import './HeroSection.css';
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted>
        </video>
        <div className='profile-container'>        
         <a className='gitLink'
         href='https://github.com/ioannis-peppas/Portfolio-Website'
         target="_blank">
            Preview Git Hub </a> <i id='fa-github1' class="fa-brands fa-github"></i>
        <img className="profile-picture"src='/images/image-2.png'/>
        </div>

      </div>
    </div>


  )
}

export default HeroSection
