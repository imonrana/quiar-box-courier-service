
import React from 'react'
import Container from '../Container/Container'

import bannerImg from "../../assets/banner image.png"

import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
   <section className= 'bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC] py-[168px]'>
<Container>
       <div className='flex items-center'>
       <article className='font-primary'>
            <h1 className='font-extrabold text-[49px] text-[#261134] mb-[16px] leading-[120%]'>A trusted provider of courier services.</h1>
            <p className='text-xl text-[#4D4D4D] w-[330px] mb-[41px] '>We deliver your products safely to your home in a reasonable time.</p>
            <button type="button" className='py-[12px] px-5  bg-primary rounded-[5px] group  '> <a className='text-xl text-white flex items-center gap-x-[5px] ' href="#">Get started <FaArrowRight className=' relative group-hover:left-1 transition-all duration-700'/> </a></button>
        </article>

        <figure>
            <img src={bannerImg} alt="bannerImg" />
        </figure>
       </div>
       </Container>

   </section>
  )
}

export default Banner