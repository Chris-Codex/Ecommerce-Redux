import React from 'react'
import logo from "../../assets/logo.jpg"

const Footer = () => {
    const year = new Date().getFullYear()

  return (
    <div>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray opacity-50 outlined-none border-none' />
        </div>
        <div className='flex items-center justify-around pt-4'>
            <div>
                <img className='h-20' src={logo} alt="name" />
            </div>
            <div>
                <p className='text-black text-sm font-inter no-underline normal-case'>Copyright &copy {year} page by Christian</p>
            </div>
        </div>
    </div>
  )
}

export default Footer