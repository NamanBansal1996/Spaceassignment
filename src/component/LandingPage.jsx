import React from 'react'
import './landingpage.css';
import moon from './moon2.png';
import SignUp from './SignUp';


export default function LandingPage() {
  return (
    <div className='landingpage'>
        <div className='landingpage_left'>
            <p>Explore<br/>Astronomy</p>
            <img src={moon} alt='moon'/>
        
        </div>
        <div className='landingpage_right'>
            <SignUp/>
        </div>


      
    </div>
  )
}
