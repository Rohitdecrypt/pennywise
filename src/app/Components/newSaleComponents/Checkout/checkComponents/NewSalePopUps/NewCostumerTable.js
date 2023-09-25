"use client"
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
const NewCostumerTable = (props) => {
    const [btnToggle, setBtnTogle] = useState(true);
    return (
        <>

            <div className='modal-body max-w-[795px] w-[795px]: bg-[#fff]  relative border-[2px] blur-none text-black min-h-[722px] border-[#000000] rounded-md ml-5'>
                <div className='absolute right-5 top-5 '><RxCross1 className='w-[23px] h-[23px]'
                /></div>
                <h1 className='text-center font-bold text-[20px] py-4'>Sales Customer</h1>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className="flex justify-center align-middle m-auto md:flex-row flex-col mt-5">
                    <button
                        className={
                            btnToggle
                                ? "bg-custom-green  text-white text-xl py-3 px-20 sm:mb-0 mb-4"
                                : "bg-custom-grey  text-custom-greenlight  text-xl py-3 px-20 sm:mb-0 mb-4"
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
                                ? "bg-custom-green text-white text-xl py-3 px-12"
                                : "bg-custom-grey  text-custom-greenlight text-xl py-3 px-12"
                        }
                        onClick={() => {
                            setBtnTogle(false);
                            props.handleModal5(true)
                            props.handleModal4(false)
                        }}
                    >
                        New Customer
                    </button>
                </div>
                <div className='px-14 py-3'>
                    <div className="relative w-full">
                        <input
                            className="border border-custom-border-green rounded-full w-[100%] py-3 mt-5 px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                            id="username"
                            type="text"
                            placeholder="Search"
                        />
                        <image
                            // src={searchImg}
                            alt="Profile Image"
                            className=" absolute w-5 bottom-0 left-0"
                        />
                    </div>
                    <div className='w-full min-h-[324px] '>
                        <div className="my-5 border border-black rounded-2xl py-3 px-2">
                            <div className="overflow-x-auto overflow-y-auto max-h-[300px] h-[324px]">
                                <table className=" min-w-full text-[#000000] ">
                                    <thead className="sticky top-0 bg-[#fff] py-2">
                                        <tr className="border-b border-[#BFBFBF]  text-sm">
                                            <th className="text-center py-3 font-normal min-w-[200px] pl-10">
                                                <div className='flex justify-start items-center '> Customer Name</div>
                                            </th>
                                            <th className="text-center py-3 font-normal min-w-[252px]">
                                                <div className='flex justify-start items-center '> Address</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                            <td className="py-3 pl-10">
                                            First Last Name
                                            </td>
                                            <td className='text-left pr-8'>
                                            00 Address St, Suburb, STATE 0000
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

export default NewCostumerTable