import React from 'react'
import Container from '../Container/Container'
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import testiImg from "../../assets/Avatar.png"

const Testimonial = () => {
  return (
    <section className='bg-sectionBg pt-[149px] pb-[172px]'>
        <Container>
            <div>
                <header className='flex gap-x-[38px] justify-center items-center text-center'>
                <FaQuoteLeft className='text-[133px] text-[rgb(255,175,15,0.60)]' />
               <div> 
                <h2 className='font-secondary font-bold text-[31px] text-primary'>TESTIMONIAL</h2>
               <h3 className='font-primary font-extrabold text-[39px]  text-[#11111D]'>Our Awesome
                Clients
                </h3>
                </div>
                </header>

                <article className='w-[872px] bg-white shadow-lg py-[37px] px-[34px] rounded-2xl mx-auto mt-[89px]' >
                    <h6 className='font-primary font-bold text-[25px] leading-[22px] text-primary'>Fantastic service!</h6>
                    <p className='font-primary font-normal text-[16px]  leading-[22px] text-[#000000] mt-[11px] mb-[15px]'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div className='flex justify-between items-center'>
                        {/* start */}
                        <div className='flex gap-x-[7px] text-primary'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>

                        {/* profile */}
                        <figure className=' flex gap-x-[16px] items-center'>
                            <figcaption className='font-primary font-bold text-base'>
                                <p className='text-[#000000]'>Yves Tanguy</p>
                                <p className='text-[rgb(0,0,0,0.6)]'>Chief Executive, DLF</p>
                                </figcaption>
                                <img src={testiImg} alt="avatar" />
                            </figure>
                        
                    </div>
                </article>

            </div>
        </Container>

    </section>
  )
}

export default Testimonial