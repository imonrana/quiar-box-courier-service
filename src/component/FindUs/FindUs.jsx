import React from 'react'
import Container from '../Container/Container'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import Button from '../Button/Button';

const FindUs = () => {
  return (
    <section className='bg-sectionBg pt-[169px] pb-[183px]'>
        <Container>
            <div>
            <header className='text-center'>
                <h2 className='font-secondary font-bold text-[31.25px] text-primary'>FIND US</h2>
                <h3 className='font-primary font-extrabold text-[39.06] text-[#261134]'>Access us easily</h3>
            </header>

            <article className='flex  gap-x-[23px]  mt-[85px]'>

            <iframe className='w-[761px] border-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58108.9414354158!2d89.65828110574697!3d24.457416698929823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdc1df830dba1b%3A0x58f0cbb092e78b62!2sSirajganj!5e0!3m2!1sen!2sbd!4v1732073913851!5m2!1sen!2sbd" 
            allowFullscreen="" loading="lazy" referrePolicy="no-referrer-when-downgrade"></iframe>
            
            <address className='p-[88px] bg-[#FEFCFA] not-italic '>
                <h4 className='font-primary font-bold text-xl leading-[120%] '>Contact with us</h4>
                <ul className='mt-[37px] mb-[51px] space-y-[15px] font-primary font-normal text-base leading-[120%] text-[#5C5B6C]'>
                    <li>
                        <span  className='inline-block align-middle text-[27px] mr-[13px] text-[#FFAF0F]'><CiLocationOn /></span>
                        2277 Lorem Ave, San Diego, CA 22553
                    </li>
                    <li className='flex w-[325px] items-center'>
                        <span className='text-[27px] mr-[13px] text-[#FFAF0F]'><IoTimeOutline /></span>
                        Monday - Friday: 10 am - 10pm
                        Sunday: 11 am - 9pm
                    </li>
                    <li>
                        <span className='inline-block align-middle text-[27px] mr-[13px] text-[#FFAF0F]'><MdMailOutline /></span>
                        info@quriarbox.com
                    </li>
                </ul>
                <div className='flex gap-x-[24px] text-[22px] text-[#EBEBF5]'>
                <a href="#"><FaFacebookSquare  className=' active:text-primary hover:text-primary transition-all duration-700 ease-linear'/></a>
                <a href="#"><FaInstagram  className='hover:text-primary transition-all duration-700 ease-linear'/></a>
                <a href="#"><FaSquareTwitter className='hover:text-primary transition-all duration-700 ease-linear' /></a>
                </div>
            </address>
            </article>
            <Button className="font-secondary font-bold text-xl text-white py-[22px] px-[113px] block mx-auto mt-[30px] cursor-pointer hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-500 ease-in-out border"> <span className='inline-block align-middle text-[30px] mr-[2px]'><MdCall /></span>Call us to delivery  123-456789</Button>
            </div>
        </Container>
    </section>
  )
}

export default FindUs