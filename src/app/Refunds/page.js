"use client"
import React, { useState } from 'react'
import Delete from '../assets/delete.png'
import Hash2 from '../assets/hash.png'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image';
import WithPageLayout from '../hoc/WithPageLayout';
import Link from 'next/link';
const RefundCancellation = () => {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    return (
        <>
            <div className="modal relative h-full w-full">
                <div className={`p-3 w-full ${modal || modal2 === true ? "blur-sm" : ""}`}>
                    <div className='flex justify-between items-center px-5 '>
                        <p className='font-bold text-[20px] text-black'>REFUNDS & CANCELLATIONS</p>
                        <div className=' w-[76%] h-[1px] bg-[#BFBFBF] '></div>
                        <div className='flex'>
<Link href='/Refunds/refundDelete'>

                        <Image src={Delete} width={34} height={34} alt='/' className='cursor-pointer me-2' />
</Link>
                        <Image src={Hash2}  width={34} height={34} alt='/' className='cursor-pointer'/>
                        </div>
                    </div>
                    <div className='flex h-[800px] justify-between mt-10'>
                        <div className='refunds h-full me-5'>

                            <div className='refunds_Details border border-[#000000] rounded-2xl max-w-[499px] h-full flex justify-between flex-col'>
                                <div className='p-4'>
                                    <div className=''>
                                        <label className='ml-4 font-light text-[14px]'>Stock No:</label>
                                        <input className="border border-[#000000] rounded-full w-[448px] p-2" />
                                    </div>
                                    <div className='mt-2'>
                                        <label className='ml-4 font-light text-[14px]'>Description:</label>
                                        <textarea className="border border-[#000000]  w-[448px] rounded-[8px]" />
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className=''>
                                            <label className='ml-4 font-light text-[14px]'>Qty Sold:</label>
                                            <input className="border border-[#000000] rounded-full w-[156px] p-2" />
                                        </div>
                                        <div className=''>
                                            <label className='ml-4 font-light text-[14px]'>Sale Amount:</label>
                                            <input className="border border-[#000000] rounded-full w-[271px] p-2" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ml-4 font-light text-[14px]'>Sold To:</label>
                                        <input className="border border-[#000000] rounded-full w-[308px] p-2" />
                                    </div>
                                </div>
                                <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                                <div className='p-4 mb-20'>
                                    <div className='flex mb-2'>
                                        <div className=''>
                                            <label className='ml-4 font-light text-[14px]'>Refund Qty:</label>
                                            <input className="border border-[#000000] rounded-full w-[156px] p-2" />
                                        </div>
                                        <div className=''>
                                            <label className='ml-4 font-light text-[14px]'>Refund Amount:</label>
                                            <input className="border bg-[#EFEFEF] rounded-full w-[271px] p-2" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='ml-4 font-light text-[14px]'>Refund Reason:</label>
                                        <input className="border border-[#000000] rounded-full w-[308px] p-2" />
                                    </div>
                                </div>
                                <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                                <div className='flex justify-between px-4 -mt-6 pb-2 items-center'>
                                    <h6 className='text-[12px] font-light'>Total Payable To Customer</h6>
                                    <h5 className='text-[20px] font-bold'>$0.00</h5>
                                </div>

                            </div>
                            <button className='border border-[#000000] rounded-[4px] text-[16px] font-[500] mt-4 w-[206px] h-[48px]'>Layby Cancellations</button>
                        </div>

                        <div className=''>
                            <div className="border border-black rounded-2xl py-3 px-2 h-full">
                                <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[300px] ">
                                    <table className=" min-w-full text-[#000000] ">
                                        <thead className="sticky top-0 bg-[#fff] py-2">
                                            <tr className="border-b border-[#BFBFBF]  text-sm">
                                                <th className="  text-start py-3 font-normal min-w-[104px]">

                                                    <div className='flex justify-start items-center'> Sale No.<span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                        <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                                    </div>

                                                </th>

                                                <th className=" text-start py-3 font-normal min-w-[108px]">
                                                    <div className='flex justify-start items-center'> Stock No.<span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                        <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                                    </div>
                                                </th>
                                                <th className="text-start py-3 font-normal w-[104px]">
                                                    <div className='flex justify-start items-center'> Qty<span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                        <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                                    </div>
                                                </th>

                                                <th className="text-start py-3 font-normal ">
                                                    Description
                                                </th>
                                                <th className="text-right py-3 font-normal min-w-[130px]">
                                                    <div className='flex justify-center items-center'> Refund Amount<span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                        <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                                    </div>
                                                </th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                                <td className="py-3 w-[100px]">000000</td>
                                                <td className="py-3 w-[100px]">0000000 </td>


                                                <td>
                                                    <div className="h-7 border w-12  bg-[#a5a5a577] rounded-full flex items-center justify-center text-black text-[13px]">
                                                        0
                                                    </div>
                                                </td>
                                                <td className="py-3  w-[700px] pr-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel urna quis tellus interdum semper.
                                                </td>
                                                <td className='text-center '>$0.00</td>

                                            </tr>




                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className='text-end'>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#ffffff] font-[500] mt-4 w-[206px] h-[48px] bg-black' onClick={() => {
                                    setModal(true);
                                }}>Save</button>
                            </div>
                        </div>

                    </div>
                </div>

                {modal && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <div className="modal-body w-[732px] bg-[#fff]  relative border-[2px] blur-none text-black h-[525px] border-[#000000] rounded-md">

                            <div className='absolute right-5 top-5'><RxCross1 onClick={() => { setModal(false); }} /></div>
                            <h1 className='text-center  font-bold text-[20px] py-6'>No Stock Number</h1>
                            <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                            <div className='py-5 px-10'>

                                <div className='mb-2 mt-4'>
                                    <label className='font-bold text-[14px] mr-12'>Refund Qty:</label>
                                    <input className="border-[2px] border-[#000000] rounded-full max-w-[144px] px-12 h-[40px] placeholder-black" type='text'
                                     placeholder='0.00'/>
                                </div>

                                <div className='flex justify-start items-start mb-2'>
                                    <label className=' font-bold text-[14px] mr-3'>Item Description:</label>
                                    <textarea className="border-[2px] border-[#000000]  w-[451px] rounded-[8px] h-[122px]" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className=''>
                                        <label className='font-bold text-[14px] mr-5'>Refund Amount:</label>
                                        <input className="border-[2px] border-[#000000] rounded-full max-w-[144px] h-[40px]" type='text' />
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[12px] font-light mr-2'>Amount Includes GST</p>
                                        <input type="checkbox" className="bg-[#ffffff] border-[2px] border-green absolute" id='check' />
                                    </div>
                                </div>

                                <div className='flex items-center mt-2 mb-5'>
                                    <label className="font-bold text-[14px] mr-5" for="username">
                                        Refund Reason:
                                    </label>
                                    <div className="inline-block relative w-[451px] bg-custom-white border-[#000000] border-[2px] rounded-[50px] py-2 text-xl focus:border-none focus:outline-none">
                                        <select className="bg-transparent rounded-[50px] py- px-12 w-full  text-custom text-xl focus:border-none focus:outline-none appearance-none">
                                            <option className='pt-1'></option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-1 h-full flex items-center px-4 text-custom">
                                            <svg className="fill-current h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                            <div className='text-end py-2'>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#000000] font-[500]  w-[144px] h-[48px] bg-[#F1F1F1] border-none mr-3'>Cancel</button>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#ffffff] font-[500] mt-4 w-[144px] h-[48px] bg-black mr-5'
                                onClick={() => { setModal2(true); setModal(false)}}>Save</button>
                            </div>


                        </div>
                    </div>
                )}

      {modal2 && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <div className="modal-body w-[422px] bg-[#fff]  relative  blur-none text-black h-[443px] border border-[#000000] rounded-md">

                            <div className='absolute right-5 top-5'><RxCross1 onClick={() => { setModal2(false); }} /></div>
                            <h1 className='text-center  font-bold text-[20px] py-6'>Layby Refund</h1>
                            <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                            <div className='py-5 px-10'>

                                <div className='mb-2 mt-4 flex justify-center items-center'>
                                    <label className='font-bold text-[14px] mr-[52px]'>Layby No:</label>
                                    <input className="border border-[#000000] rounded-full max-w-[144px] p-2 h-[40px] px-8 
                                    placeholder-[black]" type='text' placeholder='0000000' />
                                </div>

                                <div className='mb-2 mt-4 flex justify-center items-center'>
                                    <label className='font-bold text-[14px] mr-3'>Refund Amount:</label>
                                    <input className="border border-[#000000] rounded-full max-w-[144px] p-2 h-[40px] px-12
                                    placeholder-[black]" type='text' placeholder='0.00'/>
                                </div>

                                <div className='mb-2 mt-4 flex justify-center items-center'>
                                    <label className='font-bold text-[14px] mr-[88px]'>(Paid)</label>
                                    <input className=" rounded-full max-w-[144px] p-2 h-[40px] bg-[#EAEAEA] focus:outline-none" type='text' />
                                </div>

                                <div className='mb-2 mt-4 flex justify-center items-center'>
                                    <label className='font-bold text-[14px] mr-4'>Forfit Percentage:</label>
                                    <input className="border border-[#000000] rounded-full max-w-[144px] p-2 h-[40px] " type='text' />
                                </div>


                               
                                
                                
                            </div>
                            <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                            <div className='text-center py-2'>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#000000] font-[500]  w-[144px] h-[48px] bg-[#F1F1F1] border-none mr-3'>Cancel</button>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#ffffff] font-[500] mt-4 w-[144px] h-[48px] bg-black mr-5'>Save</button>
                            </div>


                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WithPageLayout(RefundCancellation)