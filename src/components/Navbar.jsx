import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [light, setLight] = useState("💡Light");
  const  toggleHandler = () =>{
    light ==="💡Light" ? setLight('💡Dark') : setLight('💡Light')
  }
  return (
    <div className='flex flex-row justify-center space-x-12 align-baseline p-4 grid-cols-3 max-w-screen '>
      <img src="https://takeuforward.org/SecondaryLogoWO.png" alt="" height={30} width={200} className='self-start'/>
      <div className='flex flex-row space-x-12 mt-1.5'>
        <Link to="/home">🏠Home</Link>
        <Link to='/plus'>₹ Plus Dashboard</Link>
        <Link to='/pricing'>💲Pricing</Link>
      </div>
      <div  className='flex flex-row flex-wrap space-x-5'>
        <button onClick={toggleHandler} className='border border-black bg-gray-900 rounded-3xl p-2 px-4'>{light}</button>
        <button className='border border-transparent bg-orange-500 rounded-3xl p-2 px-4'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar;