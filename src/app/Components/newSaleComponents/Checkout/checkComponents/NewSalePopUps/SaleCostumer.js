"use client"
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
const SaleCostumer = (props) => {
    const [btnToggle, setBtnTogle] = useState(true);
    return (
        <>
            <div className='modal-body max-w-[795px] w-[795px] bg-[#fff]  relative border-[2px] blur-none text-black min-h-[853px] border-[#000000] rounded-md ml-5'>
                <div className='absolute right-5 top-5 '><RxCross1 className='w-[23px] h-[23px]'
                 onClick={(e) => { e.preventDefault(); props.handleModal5(false);} } /></div>
                <h1 className='text-center font-bold text-[20px] py-4'>Sales Customer</h1>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className="flex justify-center align-middle m-auto md:flex-row flex-col mt-5">
                    <button
                        className={
                            btnToggle
                                ? "bg-custom-grey  text-custom-greenlight  text-xl py-3 px-20 sm:mb-0 mb-4"
                                : "bg-custom-green  text-white text-xl py-3 px-20 sm:mb-0 mb-4"
                        }
                        onClick={() => {
                            setBtnTogle(true);
                        }}
                    >
                        Search
                    </button>
                    <button
                        className={
                            btnToggle == false
                                ? "bg-custom-grey  text-custom-greenlight text-xl py-3 px-12"
                                : "bg-custom-green text-white text-xl py-3 px-12"
                        }
                        onClick={() => {
                            setBtnTogle(false);
                        }}
                    >
                        New Customer
                    </button>
                </div>
                <div className='px-10 py-10'>
                    

                    <div className='flex justify-start items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>Surname:</label>
                        <input className="border border-[#000000] rounded-full w-[40%] p-2 placeholder-[#000000]" ></input>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] '>Given Name(s):</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>Street No:</label>
                        <input className="border border-[#000000] rounded-full w-[25%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px]'>Street Name:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px]'>Street Type:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>Suburb:</label>
                        <input className="border border-[#000000] rounded-full w-[40%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>State/Postcode:</label>
                        <input className="border border-[#000000] rounded-full w-[25%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>Phone No:</label>
                        <input className="border border-[#000000] rounded-full w-[40%] p-2 placeholder-[#000000] " ></input>
                     
                    </div>

                    <div className='flex justify-start items-center mb-3 relative'>
                        <label className='ml-4 font-bold text-[14px] w-[28%]'>Mobile No:</label>
                        <div>
                        <input className="border border-[#000000] rounded-full w-[85%] p-2 placeholder-[#000000] " ></input>
                        <p className='text-[#6A6A6A] text-[11px] font-normal pt-2'>Check the box to opt out of receiving SMS marketing</p>
                        </div>
                       <div className='sales'>
                       <input type="checkbox" className="bg-[#ffffff] border-2 border-green -ml-7 absolute  -top-[10px] "  id='check' />
                       </div>
                        
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <label className='ml-4 font-bold text-[14px]'>Email:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>
                    
                </div>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className='w-full text-right my-8 px-10'>
                    <div className='ml-auto max-w-[350px]'>
                        <button className='min-w-[48%] h-[48px] bg-[#000000] text-[#ffffff] mr-2 rounded-md'>Cancel</button>
                        <button className='min-w-[48%] h-[48px] bg-[#F1F1F1] '>Accept</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SaleCostumer