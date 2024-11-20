import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/footer-logo.png"
const Footer = () => {
  return (
    <footer className='bg-[#222132]'>
        <article className=' py-[84px]'>
      <Container>
        <div className='flex justify-between'> 
              {/* get update */}
          <div>
            <h2 className='font-primary font-extrabold text-[39.06px] text-[#F2F2F2]'>Get an update every week</h2>
            <p className='font-primary font-medium text-base text-[#D2C6C6] leading-[22px] w-[501px]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
        </div>
        {/* news latter */}

        <div>
            <h6 className='font-secondary font-bold text-lg text-primary mb-[13px] '>SUBSCRIBE TO NEWSLETTER</h6>
            <input className='w-[386px] py-[15px] px-[18px] border border-[#C5C5D2] bg-transparent rounded-md '
             type="email" name="email" id="email" placeholder='Enter Your Email' />
            <input className='py-3 px-5 bg-[#F95C19] font-secondary font-bold text-xl text-white rounded-md ml-4  cursor-pointer hover:bg-transparent hover:border-primary transition-all duration-500 ease-in-out border border-transparent'
             type="submit" value="Subscribe" />
        </div>
        </div>
      </Container>
        </article>

        <article className='bg-[#2F2E41] py-[50px] '>
            <Container>
                <div className='flex justify-between'>
                    {/* logo */}
                    <figure className='space-y-[12px]'>
                        <img src={logo} alt="logo" />
                        <figcaption className='font-primary font-semibold text-base text-[#9291A1] leading-[22px] w-[190px]'>The most trusted Courier
                        company in your area.</figcaption>
                    </figure>

                    {/* menu item */}

                    <div className='flex gap-x-[136px]'>
                      <ul className='font-primary font-semibold text-base text-[#9291A1] leading-[22px]'>
                        <h5 className='font-secondary font-bold text-xl text-white mb-[22px]'>Other links</h5>
                        <li><a href="#">Blogs</a></li>
                        <li className='my-[7px]'><a href="#">Movers website</a></li>
                        <li><a href="#">Traffic Update</a></li>
                      </ul>

                      <ul className='font-primary font-semibold text-base text-[#9291A1] leading-[22px]'>
                        <h5 className='font-secondary font-bold text-xl text-white mb-[22px]'>Services</h5>
                        <li><a href="#">Corporate goods</a></li>
                        <li className='my-[7px]'><a href="#">Artworks</a></li>
                        <li><a href="#">Documents</a></li>
                      </ul>

                      <ul className='font-primary font-semibold text-base text-[#9291A1] leading-[22px]'>
                        <h5 className='font-secondary font-bold text-xl text-white mb-[22px]'>Customer Care</h5>
                        <li><a href="#">About Us</a></li>
                        <li className='my-[7px]'><a href="#">Contact US</a></li>
                        <li><a href="#">Get Update</a></li>
                      </ul>
                    </div>
                </div>
            </Container>
        </article>
        <article >
          <Container>
            <div className='flex justify-between'>
            <p className='font-primary font-medium text-[13px] text-[#DBDBE9]'>All rights Reserved © Your Company, 2021</p>
            <p className='font-primary font-normal text-[12.8px] text-[#E0DEDE]'>Made with heart by <span className='text-[#F95C19]'>Imon Rana</span></p>
            </div>
          </Container>
        </article>
    </footer>
  )
}

export default Footer