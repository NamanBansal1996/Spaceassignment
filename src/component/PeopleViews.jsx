import React, { useEffect, useState } from 'react'
import './peopleviews.css';

export default function PeopleViews() {
    const [data,setData] = useState([]);//empty data 
    useEffect(()=>{
        async function getData(){
            let response = await fetch("http://api.open-notify.org/astros.json");
            // console.log(response);
            let result = await response.json();
            setData(result.people);
        }
        getData();
        
    },[]);
console.log(data,"this is fetched data")
  return (
    <>
            <div className='view'>
                <div className='heading'>
                    <h1>Acheivers</h1></div>
                <div className='poster'>
                    {
                        data.map((el)=>(

                        
                
                    <div className='acheivers'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                    
                <p>{el.name}</p>
                <p>{el.craft}</p>
                </div>
))
}
                </div>
        </div>
    </>
  )
}
