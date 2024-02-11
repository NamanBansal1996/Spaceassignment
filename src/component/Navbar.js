import React from 'react'
import galaxy from './galaxy.png'
import './navbar.css';



export default function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={galaxy} alt='logo'/>
      </div>
      
        <div className='links'>
  <ul>
    <li>About</li>
    <li>Projects</li>
    <li>Dashboard</li>
    <li>Contact Us </li>
  </ul>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="search w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
    </>
  )
}
