import React from 'react'

// import img
import logo from "../../assets/brand-logo.png"
import { CiSearch } from "react-icons/ci";

import Container from '../Container/Container'

const Navbar = () => {
  return (
   <nav className='bg-[rgba(255,255,255,0.70)] drop-shadow-md	 '>
    <Container>

        <div className=' flex  w-full py-4 items-center'>
            {/*  logo start */}

            <figure className='w-[20%]'>
                <img src={logo} alt="brand_logo" />
            </figure>
            {/* menu item start */}

            <ul className='flex justify-end items-center w-4/5 font-primary font-bold text-4 text-[#817382] gap-x-[25px]'>
                <li className='hover:font-extrabold hover:text-primary'>
                    <a href="#">
                    Home
                    </a>
                </li>
                <li className='hover:font-extrabold hover:text-primary' >
                    <a href="#">
                    Our services
                    </a>
                </li>
                <li className='hover:font-extrabold hover:text-primary'>
                    <a href="#">
                    About Us
                    </a>
                </li>
                <li className='hover:font-extrabold hover:text-primary'> 
                    <a href="#">
                    What’s new?
                    </a>
                </li>

                <div className='ml-[45px] flex gap-x-[9px] items-center '>

                    <CiSearch className='text-[49px] py-[14px] bg-[#FFEDC9] rounded-lg cursor-pointer' />
                    <button type="button" className='py-[12px] px-5 bg-[#FFE4D9] rounded-[5px] hover:bg-transparent hover:border-[#FFE4D9] border border-transparent transition-all ease-in-out '> <a className='text-xl text-primary' href="#">Contact us</a></button>

                    </div>
            </ul>

           
        </div>
    </Container>
   </nav>
  )
}

export default Navbar