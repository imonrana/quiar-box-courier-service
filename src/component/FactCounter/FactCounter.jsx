import React from 'react'
import CountUp from 'react-countup';
import Container from '../Container/Container'
import { GrTrophy, GrUserManager  } from "react-icons/gr";
import { CiMap } from "react-icons/ci";
import { FaTruckField } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";

const FactCounter = () => {
  return (
    <section className=' bg-sectionBg pt-[172px] pb-[162px]'>
       <Container>
        <div className='flex justify-between'>
            <div>
            <GrTrophy className='text-[67px] font-extralight mx-auto mb-[19px]' />
            <p className='font-primary font-extrabold text-[39px] leading-[110%] text-primary text-center mb-[6px]'><CountUp end={26} duration={5} /> +</p>
            <p className='font-primary font-bold text-xl text-[#464558] text-center'>
            Awards  won
            </p>
            </div>
            
            <div>
            <CiMap className='text-[67px] font-extralight mx-auto mb-[19px]' />
            <p className='font-primary font-extrabold text-[39px] leading-[110%] text-primary text-center mb-[6px]'><CountUp end={65} duration={5} className='font-primary' /> +</p>
            <p className='font-primary font-bold text-xl text-[#464558] text-center'>
            States covered
            </p>
            </div>

            <div>
            <GrUserManager className='text-[67px] font-extralight mx-auto mb-[19px]' />
            <p className='font-primary font-extrabold text-[39px] leading-[110%] text-primary text-center mb-[6px]'><CountUp end={689} duration={5} className='font-primary' /> k+</p>
            <p className='font-primary font-bold text-xl text-[#464558] text-center'>
            Happy clients
            </p>
            </div>

            <div>
            <FaTruckField className='text-[67px] font-extralight mx-auto mb-[19px]' />
            <p className='font-primary font-extrabold text-[39px] leading-[110%] text-primary text-center mb-[6px]'><CountUp end={130} duration={5} className='font-primary' /> M+</p>
            <p className='font-primary font-bold text-xl text-[#464558] text-center'>
            Goods delivered
            </p>
            </div>
            <div>
            <IoBriefcaseOutline className='text-[67px] font-extralight mx-auto mb-[19px]' />
            <p className='font-primary font-extrabold text-[39px] leading-[110%] text-primary text-center mb-[6px]'><CountUp end={130} duration={5} className='font-primary' /> M+</p>
            <p className='font-primary font-bold text-xl text-[#464558] text-center'>
            Business hours
            </p>
            </div>
        </div>
       </Container>
    </section>
  )
}

export default FactCounter