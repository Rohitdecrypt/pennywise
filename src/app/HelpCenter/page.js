import React from 'react'
import leftIcon from '../assets/leftarrow.png'
import suport from '../assets/Support1.png'
import remote from '../assets/Groupsprt.png'
import passowrd from '../assets/grpsprt.png'
import Image from 'next/image'
import Link from 'next/link'
const HelpCenter = () => {
  return (
  <>

  <div className='h-screen bg-[#EEF2F6] w-full'>
    <div className='bg-[#FFFFFF]  w-[320px]  h-full overflow-hidden'>
        <Link href='/LoginScreenPassword'>

    <Image alt="/" src={leftIcon} className='w-[75px] pt-5 pl-8' />
        </Link>
    <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-[#339FA4] text-xl font-bold mb-10'>How Can We Help?</h1>
        <div className='mt-5 mb-5 relative w-[100%] px-1 flex justify-center items-center group' >
        <Image alt="/" src={suport} className='w-[40px]  absolute -top-6 z-10'/>
        <button className='bg-[#CDE7E8] font-bold group-hover:text-white group-hover:bg-[#4ECED6] group-hover:drop-shadow-lg filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); text-[#369EA4] center w-[80%] flex justify-center m-auto text-nd py-3  h-[50px] rounded-[15px]
        leading-8  transition all delay-100'>Support Desk</button>
        </div>

        <div className='mt-5 mb-5 relative w-[100%] px-1 flex justify-center items-center group' >
        <Image alt="/" src={remote} className='w-[40px]  absolute -top-6 z-10'/>
        <button className='bg-[#CDE7E8] font-bold group-hover:text-white group-hover:bg-[#4ECED6] group-hover:drop-shadow-lg filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); text-[#369EA4] center w-[80%] flex justify-center m-auto text-nd py-3  h-[50px] rounded-[15px]
        leading-8  transition all delay-100'>Remote Support</button>
        </div>

        <div className='mt-5 mb-5 relative w-[100%] px-1 flex justify-center items-center group' >
        <Image alt="/" src={passowrd} className='w-[40px]  absolute -top-6 z-10'/>
        <button className='bg-[#CDE7E8] font-bold group-hover:text-white group-hover:bg-[#4ECED6] group-hover:drop-shadow-lg filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); text-[#369EA4] center w-[80%] flex justify-center m-auto text-nd py-3  h-[50px] rounded-[15px]
        leading-8  transition all delay-100'>Forgot Password?</button>
        </div>
    </div>
    </div>
  </div>
  
  </>
  )
}

export default HelpCenter
