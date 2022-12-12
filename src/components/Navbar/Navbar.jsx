import React from 'react'
import logo from "../../assets/logo-st.png"

const Navbar = () => {
  return (
    <>
        <div className='bg-black p-2 w-full'>
            <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>Welcome All</h3>
        </div>

        <div className='flex justify-around items-center'>
            <div>
                <img src={logo} className="w-full h-28" alt='store' />
            </div>
            <div className='flex flex-row items-center'>
                <button className='font-inter text-2xl font-bold tracking-normal leading-none text-center mr-4'>Logout</button>
            </div>
        </div>
    </>
  )
}

export default Navbar