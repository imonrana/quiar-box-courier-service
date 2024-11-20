
import React from 'react'
import Container from '../Container/Container';
import { AiOutlineShop } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import serviecsTag from "../../assets/services_tag.png"
import Button from '../Button/Button';

const Services = () => {
  return (
    <section className='bg-sectionBg'>
   <Container>
   <header className='text-center'>
            <h4 className='font-secondary font-bold text-[31px] text-[#F95C19]'>SERVICES</h4>
            <h2 className='font-primary font-extrabold text-[39px] text-[#261134]'>Our services for you</h2>
        </header>
{/* services card start */}
        <article className='flex justify-between mt-[86px]'>
          {/* 1st card */}
          <div className='pt-[67px] pb-[49px] px-[60px] bg-[#FFFFFF] rounded-[16px] shadow'>
          <div className='text-center relative'>
          <IoBriefcaseOutline className='text-[49px] text-[#F95C19] mx-auto relative z-[2] ' />
          <div className='bg-[rgba(255,175,15,60)] h-[67px] w-[67px] rounded-full absolute top-[-70%] left-1/2 -translate-x-1/2 z-[1] '></div>

          </div>
          <h3 className='font-primary font-extrabold text-[25px] text-[#464558] text-center mt-[29px] mb-[32px]'>Business Services</h3>
          <p className='font-primary font-normal text-base text-[#7B7A8B] leading-[145%] w-[301px] mb-[36px]'> We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
          <ul className='font-primary font-normal text-base text-[#7B7A8B] leading-[120%] list-disc list-inside marker:text-primary space-y-[12px] mb-[60px] '>
            <li>Corporate goods</li>
            <li>Shipment</li>
            <li>Accesories</li>
          </ul>
          <Button className="px-[96px] bg-transparent border-2 border-[#F95C19]  rounded text-primary font-secondary font-bold text-xl hover:text-white hover:bg-primary transition-all duration-500 ease-in" ><a href="#" className=''>Learn more</a></Button>
          </div>

          {/* 2nd card */}
          <div className='pt-[67px] pb-[49px] px-[60px] bg-[#FFFFFF] rounded-[16px] shadow'>
          <div className='text-center relative'>
          <AiOutlineShop className='text-[49px] text-[#F95C19] mx-auto relative z-[2] ' />
          <div className='bg-[rgba(255,175,15,60)] h-[67px] w-[67px] rounded-full absolute top-[-70%] left-1/2 -translate-x-1/2 z-[1] '></div>
          
          </div>
          <h3 className='font-primary font-extrabold text-[25px] text-[#464558] text-center mt-[29px] mb-[32px]'>Statewide Services</h3>
          <p className='font-primary font-normal text-base text-[#7B7A8B] leading-[145%] w-[301px] mb-[36px]'>Offering home delivery around the city, where your pr            oducts will be at your doorstep within 48-72 hours.</p>
          <ul className='font-primary font-normal text-base text-[#7B7A8B] leading-[120%] list-disc list-inside marker:text-primary space-y-[12px] mb-[60px] '>
            <li>Personal items</li>
            <li>Percels</li>
            <li>Documents</li>
          </ul>
          <Button className="px-[96px] bg-transparent border-2 border-[#F95C19]  rounded text-primary font-secondary font-bold text-xl hover:text-white hover:bg-primary transition-all duration-500 ease-in" ><a href="#" className=''>Learn more</a></Button>
          </div>

          {/* 3rd card */}
          <div className='pt-[67px] pb-[49px] px-[60px] bg-[#FFFFFF] rounded-[16px] shadow'>
          <div className='text-center relative'>
          <img src={serviecsTag} alt="serviese tag" className='mx-auto z-[2] relative' />
          <div className='bg-[rgba(255,175,15,60)] h-[67px] w-[67px] rounded-full absolute top-[-70%] left-1/2 -translate-x-1/2 z-[1] '></div>
          
          </div>
          <h3 className='font-primary font-extrabold text-[25px] text-[#464558] text-center mt-[29px] mb-[32px]'>Personal Services</h3>
          <p className='font-primary font-normal text-base text-[#7B7A8B] leading-[145%] w-[301px] mb-[36px]'>
            You can trust us to safely deliver your most sensitive documents to the specific area in a short time.
        </p>
          <ul className='font-primary font-normal text-base text-[#7B7A8B] leading-[120%] list-disc list-inside marker:text-primary space-y-[12px] mb-[60px] '>
            <li>
              Gifts
            </li>
            <li>
              Package
            </li>
            <li>Documents</li>
          </ul>
          <Button className="px-[96px] bg-transparent border-2 border-[#F95C19]  rounded text-primary font-secondary font-bold text-xl hover:text-white hover:bg-primary transition-all duration-500 ease-in" ><a href="#" className=''>Learn more</a></Button>
          </div>

        </article>
   </Container>
    </section>
  )
}

export default Services