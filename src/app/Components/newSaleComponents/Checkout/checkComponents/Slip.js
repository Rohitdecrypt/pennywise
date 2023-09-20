"use client"

import React, { useState, useEffect } from 'react'
// import slip from '../../../../assets/slip.png'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import Image from 'next/image';
function SaleDashboard() {
    const [sidebar, setSidebar] = useState(true);




    const handleClick = () => {

        setSidebar(!sidebar)
    }
    return (

        <>
            <div className="flex py-5 px-5">
                <div className='container-wrapper bg-[white] w-[100%] flex'>
                  
                    <div className='w-full pl-5 relative'>
                        <div className='flex'>
                            <div className='w-[30%] px-10'>
                                <div className='border-2 border-[#CBCBCB] rounded-md'>
                                    <div className='py-3 flex justify-center flex-col items-center'>
                                        <p className='text-[#000000] font-bold text-[35px] p-0'>SALE</p>
                                        <p className='text-[#000000]  text-[18px] p-0'> 94966 - Complete/Layby Closed</p>
                                        <p className='text-[#000000] font-light text-[14px] py-1'>Staff Code: AA</p>
                                    </div>
                                </div>
                                <div className='my-10'>
                                    {/* <Image src={slip} className='w-auto' /> */}
                                </div>
                                <div className='flex justify-between items-center mb-0 px-6'>
                                    <button className='border-2 border-[#000000] rounded-md text-[16px] px-5 py-3'>Remove GST</button>
                                    <a href='/' className='text-[16px] border-b border-[#000000] p-0 m-0'>Enable Auction Sale</a>
                                </div>
                            </div>
                            <div className='w-[70%]'>
                                <div className='flex gap-5'>
                                    <div className='w-[50%]'>
                                        <p className='text-[20px] font-semibold text-[#000000] pb-1 px-2'>Payments Made</p>
                                        <div className='max-h-[387px]'>
                                            <div className=''>
                                            <div className="  overflow-y-auto max-h-[378px] p-2">
                                                <table className=" min-w-full text-[#000000] border-2 border-[#CBCBCB] rounded-md">
                                                    <thead className="sticky top-0 bg-[#fff] box">
                                                        <tr className="border-b border-[#BFBFBF] px-3 text-sm">
                                                            <th className="  text-start py-4 font-normal min-w-[90px] pl-5">
                                                                <div className='flex justify-start items-center'>Date<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                            <th className=" text-start py-4 font-normal min-w-[90px]">
                                                                <div className='flex justify-start items-center'>Amount<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                            <th className="text-start py-4 font-normal w-[126px]">
                                                                Type
                                                            </th>
                                                            <th className=" py-4 font-normal text-center">
                                                                <div className='flex justify-center items-center'>Staff<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>


                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className=' w-[50%] max-h-[378px] ' >
                                    <div className='max-h-[387px] overflow-y-auto '>
                                     <div className='p-2 min-w-full text-[#000000]  '>
                                     <table className=" min-w-full text-[#000000] border-2 border-[#CBCBCB] rounded-md">
                                                    <thead className="sticky -top-4 bg-[#fff]">
                                                        <tr className="border-b border-[#BFBFBF] px-3 text-sm">
                                                            <th className="  text-start py-4 font-normal min-w-[90px] pl-5">
                                                                <div className='flex justify-start items-center'>Date<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                            <th className=" text-start py-4 font-normal min-w-[90px]">
                                                                <div className='flex justify-start items-center'>Amount<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                            <th className="text-start py-4 font-normal w-[126px]">
                                                                Type
                                                            </th>
                                                            <th className=" py-4 font-normal text-center">
                                                                <div className='flex justify-center items-center'>Staff<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                    className='text-[8px] ml-1' /></span></div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>


                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                            <td className="py-2 pl-5 pr-6">00/00/0000</td>
                                                            <td className="py-2 ">$0.00 </td>
                                                            <td className="py-2  w-[200px] pr-3">
                                                                Payment
                                                            </td>
                                                            <td className="py-2  w-[130px]">
                                                                <div className="h-7 border w-16 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">
                                                                    VF
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                     </div>
                                    </div>
                                    </div> */}
                                    <div className='w-[50%] max-h-[375px] bg-white border-2 border-[#CBCBCB] rounded-md mt-10'>

                                        <div className='w-full border-b border-[#BFBFBF] py-3 px-6'>
                                            Sales Notes
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-[20px] font-semibold text-[#000000] py-3 px-2'>Stock Items Sold</p>
                                    <div className='min-h-[430px] '>
                                        <div className="  overflow-y-auto max-h-[430px] p-3">
                                            <table className=" min-w-full text-[#000000] border-2 border-[#CBCBCB] rounded-md ">
                                                <thead className="sticky -top-3 bg-[#fff] box">
                                                    <tr className="border-b border-[#BFBFBF]  text-sm">
                                                        <th className="  text-start py-4 font-normal min-w-[50px] pl-5 ">
                                                            <div className='flex justify-start items-center'>No.<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                className='text-[8px] ml-1' /></span></div>
                                                        </th>
                                                        <th className="  text-start py-4 font-normal min-w-[50px] ">
                                                            <div className='flex justify-start items-center'>Stock No.<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                className='text-[8px] ml-1' /></span></div>
                                                        </th>
                                                        <th className="  text-start py-4 font-normal min-w-[233px] ">
                                                            Item Description
                                                        </th>
                                                        <th className="  text-start py-4 font-normal min-w-[50px]">
                                                            <div className='flex justify-start items-center'>Qty<span><BiSolidUpArrow className='text-[8px] ml-1' /><BiSolidDownArrow
                                                                className='text-[8px] ml-1' /></span></div>
                                                        </th>
                                                        <th className="  text-start py-4 font-normal min-w-[50px]">
                                                            Sale Amount
                                                        </th>
                                                        <th className="  text-start py-4 font-normal min-w-[50px] ">
                                                            Retail Price
                                                        </th>
                                                        <th className=" text-start py-4 font-normal min-w-[50px]">
                                                            Discount
                                                        </th>
                                                        <th className="text-start py-4 font-normal w-[100px]">
                                                            NET Amount
                                                        </th>
                                                        <th className=" py-4 font-normal text-center pr-3">
                                                            GST
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                    <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                        <td className="mt-2 ml-5
                                                            h-6 border w-10 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 ">0000000</td>
                                                        <td className="py-2  text-[12px] font-light">
                                                            2 Dollar Collectible Coin Coins Tested
                                                        </td>
                                                        <td className="mt-2
                                                            h-6 border w-10 bg-[#a5a5a577]  rounded-full flex items-center justify-center text-black text-[13px] font-bold">1</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-4">$0.00</td>
                                                        <td className="py-2 pl-5">$0.00</td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-center gap-4 mt-7'>
                                        <a href='/' className='text-[16px] border-b border-[#000000] p-0 m-0'>Undo Last Payment</a>
                                        <button className='text-[16px] border-2 border-[#000000] py-3 px-14 rounded-md'>Close</button>
                                        <button className='text-[16px] border-2 border-[#000000] py-3 px-14 bg-black text-[#ffff] rounded-md'>Close</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default SaleDashboard