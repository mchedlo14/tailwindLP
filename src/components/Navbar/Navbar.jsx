import React from 'react'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='max-w-5xl h-14 mx-auto mt-4 bg-white flex items-center justify-between'>
        <img src={logo}/>

        <nav>
            <ul className='flex gap-x-8'>
                <li className='cursor-pointer hover:text-navbtnbg'>First</li>
                <li className='cursor-pointer hover:text-navbtnbg'>Second</li>
                <li className='cursor-pointer hover:text-navbtnbg'>Third</li>
                <li className='cursor-pointer hover:text-navbtnbg'>Fourth</li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-[1.25rem]'>
            <p className='select-none cursor-pointer'>Additional link</p>
            <button className='bg-navbtnbg w-[5rem] h-[2.5rem] text-white'>Log in</button>
        </div>
    </div>
  )
}

export default Navbar