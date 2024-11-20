import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import fromImg from "../../assets/from_img.png"
import Container from '../Container/Container'
import Button from '../Button/Button'

const CallBackFrom = () => {
  return (
    <section className='bg-sectionBg'>
        <Container>
            <div className='flex gap-x-6 justify-center'>
                <figure>
                    <img src={fromImg} alt="fromImg" />
                    <figcaption>
                        <h5 className='font-secondary font-bold text-2xl text-primary'>REQUEST A CALLBACK</h5>
                        <h4 className='font-primary font-extrabold text-[39.06px] leading-[39px] w-[412.87px] mt-5 mb-[9px]'>We will contact in the shortest time.</h4>
                        <p className='font-primary font-semibold text-[25px] text-[#9291A1] leading-[120%]'>Monday to Friday, 9am-5pm.</p>
                    </figcaption>
                </figure>
                <form action="" >

                    <input  
                    className='block border-2 border-[#C5C5D2] py-[15px] px-[19px] w-[423px] bg-transparent outline-none font-primary font-normal text-base leading-[120%]  '
                     type="text" name="fname" id="fname" placeholder='Name' />

                    <input 
                     className='block border-2 my-4 border-[#C5C5D2] py-[15px] px-[19px] w-[423px] bg-transparent outline-none font-primary font-normal text-base leading-[120%]  '
                     type="email" name="email" id="email" placeholder='Email' />

                    <textarea 
                    className='block resize-none mb-[54px] border-2 border-[#C5C5D2] py-[15px] px-[19px] w-[423px] h-[154px] bg-transparent outline-none font-primary font-normal text-base leading-[120%]  '
                    name="message" id="message" placeholder='Message'></textarea>

                    <Button className="block w-full text-white font-secondary font-bold text-xl  cursor-pointer hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-500 ease-in-out border ">
                        Send Message 
                        <span className='inline-block align-middle ml-2'>
                            <FaPaperPlane /></span> 
                    </Button>

                </form>
            </div>
        </Container>
    </section>
  )
}

export default CallBackFrom