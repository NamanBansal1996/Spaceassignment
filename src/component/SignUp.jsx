import React, { useState } from 'react'
import './signup.css';

export default function SignUp() {
    const [popup, setPopup] = useState(false);
    console.log(popup,"this is popup static message");
// handling register button
    function handleRegister(){
        setPopup(true);
    }
// handling back function
    function handleBack(){
        setPopup(false);
    }
  return (
<>
{
        popup?
        <div className='registeration'>
            <h1>Hey, you are eligible</h1>
            <a onClick={handleBack}>back</a>
        </div>:<div className='signup'>
        <input type='text' placeholder='Name' required/>
        <input type='age' placeholder='25years' required />
        <input type='email' placeholder='abc@xyz.com' required />
        <input type='password' placeholder='******' required/>
        <input type='number' placeholder='1234567890'required />
        <select>
            <option>ISS</option>
            <option>NASA</option>
            <option>ISRO</option>
        </select>
        <button onClick={handleRegister}>Register</button>
      
    </div>
}
    
    
</>
  )
}
