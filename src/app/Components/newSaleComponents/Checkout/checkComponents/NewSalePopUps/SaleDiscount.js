"use client"
import React from 'react'
import { RxCross1 } from 'react-icons/rx';
const SaleDiscount = (props) => {
  return (
    <>
    <div className='modal-body max-w-[518px] bg-[#fff]  relative border-[2px] blur-none text-black h-[394px] border-[#000000] rounded-md ml-5'>
                <div className='absolute right-5 top-5 '><RxCross1 className='w-[23px] h-[23px]' 
                 onClick={(e) => { e.preventDefault(); props.handleModal3(false) }}/></div>
                <h1 className='text-center font-bold text-[20px] py-4'>Sale Discount</h1>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>

                <div className='px-10 py-10'>
                    <div className='flex justify-between items-center mb-3 px-8'>
                        <label className='font-bold text-[14px] '>Sale Amount Ea:</label>
                        <input className="border border-[#000000] rounded-full w-[50%] p-2 placeholder-[#000000] text-center" placeholder='0.00' ></input>
                    </div>

                    <div className='flex justify-between items-center px-8'>
                        <label className=' font-bold text-[14px] '>Cost Amount:</label>
                        <input className="border border-[#000000] rounded-full w-[50%] p-2 placeholder-[#000000] text-center" placeholder='0.00'></input>
                    </div>

                </div>

                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className='w-full text-right my-8 px-10'>
                    <div className='m-auto max-w-[400px]'>
                        <button className='min-w-[48%] h-[48px] bg-[#000000] text-[#ffffff] mr-2 rounded-md'>Cancel</button>
                        <button className='min-w-[48%] h-[48px] bg-[#F1F1F1] rounded-md'>Accept</button>
                    </div>
                </div>


            </div>

    
    </>
  )
}

export default SaleDiscount