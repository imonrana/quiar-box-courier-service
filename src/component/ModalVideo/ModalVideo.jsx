import React, { useState } from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import Container from '../Container/Container'


const ModalVideo = () => {

    //  modal

    const [isModal, setIsModal] = useState(false);

// open & close modal
const handelClick = ()=>{
    setIsModal(!isModal)
    
}



  return (
    <section className='bg-sectionBg'>
        <Container>
            <div className='bg-modalbg bg-cover bg-center bg-no-repeat relative'>
                <div className='bg-[rgba(0,0,0,0.80)] h-full w-full   py-[147px] px-[336px]'>
                    <div>
                        <button onClick={handelClick} className=' animate-bounce	 relative after:absolute after:content-[" "] after:top-1/2 after:left-[50%] after:-translate-y-1/2 after:-translate-x-1/2 after:h-10 after:w-10 after:bg-white z-[2] w-full'  >
                        <IoIosPlayCircle className='text-[116px] text-primary mx-auto cursor-pointer relative z-[3]' />
                        </button>
                    <h3 className='font-secondary font-bold text-[31px] text-primary text-center'>FASTEST DELIVERY</h3>
                    <p className='font-primary font-normal text-[25px] text-white leading-[120%] w-[625px] text-center'>You can get your valuable item in the fastest period of
                        time with safety. Because your emergency <br />
                        is our first priority.</p>
                    </div>
                </div>
                {/* modal body */}
                {isModal && (
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] transition-all duration-700 ease-in'>
                    <iframe className='w-[560px] h-[315px]' src="https://www.youtube.com/embed/cNOKQIw81SE?autoplay=1&mute=1&si=yU7y7NMadbPCtiEv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" >
                    </iframe>
                    <button onClick={handelClick} className=' w-7 h-7 text-center bg-primary rounded-full absolute top-0 right-0 text-xl text-white'>x</button>
                    </div>
                )}
            </div>
        </Container>
    </section>
  )
}

export default ModalVideo