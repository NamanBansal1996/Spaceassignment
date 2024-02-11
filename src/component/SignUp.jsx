import React from 'react'

export default function SignUp() {
  return (
    <div className='signup'>
        <input type='text' placeholder='Name'/>
        <input type='age' placeholder='25years'/>
        <input type='email' placeholder='abc@xyz.com'/>
        <input type='password' placeholder='******'/>
        <input type='number' placeholder='1234567890'/>
        <button>Register</button>
      
    </div>
  )
}
