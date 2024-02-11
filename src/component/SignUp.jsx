import React from 'react'
import './signup.css';

export default function SignUp() {
  return (
    <div className='signup'>
        <input type='text' placeholder='Name'/>
        <input type='age' placeholder='25years'/>
        <input type='email' placeholder='abc@xyz.com'/>
        <input type='password' placeholder='******'/>
        <input type='number' placeholder='1234567890'/>
        <select>
            <option>ISS</option>
            <option>NASA</option>
            <option>ISRO</option>
        </select>
        <button>Register</button>
      
    </div>
  )
}
