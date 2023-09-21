"use client"
import React, { useState } from 'react'
import Delete from '../assets/delete.png'


import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { RxCross1 } from 'react-icons/rx';
import withPageLayout from '../hoc/withPageLayout';
import Image from 'next/image';
import Link from 'next/link';
const NewStockStep1 = () => {
  

    return (
        <>
            <div className="modal relative h-full w-full">
                <div className='p-3 w-full '>
                    <div className='flex justify-around items-center px-5'>
                        <div className=''>
                            <p className='font-bold text-[20px]' >REFUNDS & CANCELLATIONS</p>
                        </div>
                        <div className=' w-[78%] h-[1px] bg-[#BFBFBF] flex-1 mx-3'></div>
                        <div className='flex'>
                           <Image src={Delete} className='w-[40px] h-[40px] me-2' alt='/' />
                            
                        </div>
                    </div>
                    <div className='flex h-[800px] justify-between p-6 '>
                        <div className='refunds h-full max-w-[30%] mr-2'>

                            <div className='refunds_Details border border-[#000000] rounded-2xl max-w-[499px] h-full flex justify-between flex-col min-w-[310px]'>
                                <div className=''>
                                    <div className='px-4 py-4'>
                                        <label className='ml-4 font-light text-[14px]'>Supplier</label>
                                        <input className="border border-[#000000] rounded-full w-[100%] p-2" />
                                    </div>
                                    <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                                        <div className='max-w-[158px] mr-4 pl-4'>
                                            <label className='ml-4 font-light text-[14px]'>Qty Sold:</label>
                                            <input className="border border-[#000000] rounded-full w-[100%] p-2" />
                                        </div>
                                    <div className='flex justify-between mb-2 pl-4'>
                                        <div className='max-w-[271px]'>
                                            <label className='ml-4 font-light text-[14px]'>Sale Amount:</label>
                                            <input className="border border-[#000000] rounded-full w-[100%] p-2" />
                                        </div>
                                    </div>
                                    <div className='mt-2 px-4'>
                                        <label className='ml-4 font-light text-[14px]'>Description:</label>
                                        <textarea className="border border-[#000000]  w-[100%] rounded-[8px] min-h-[70px]" />
                                    </div>
                                    
                                </div>
                                <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                                <div className='p-4'>
                                    <div className='flex mb-2 w-full justify-between'>
                                        <div className='flex flex-col max-w-[156px] mr-4'>
                                            <label className='ml-4 font-light text-[14px]'>Item Qty</label>
                                            <input className="border border-[#000000] rounded-full w-[100%] py-2 px-4 placeholder-black" placeholder='1'/>
                                        </div>
                                        <div className='flex flex-col max-w-[223px]'>
                                            <label className='ml-4 font-light text-[14px]'>Cost Amount</label>
                                            <input className="border border-[#000000] bg-[#ffffff] rounded-full w-[100%] py-2 px-4 placeholder-black" placeholder='$0.00' />
                                        </div>
                                    </div>

                                    <div className='flex mb-2 w-full justify-between'>
                                        <div className='flex flex-col max-w-[156px] mr-4'>
                                            <label className='ml-4 font-light text-[14px]'>Item Qty</label>
                                            <input className="border border-[#000000] rounded-full w-[100%] py-2 px-4 placeholder-black" placeholder='1'/>
                                        </div>
                                        <div className='flex flex-col max-w-[223px]'>
                                            <label className='ml-4 font-light text-[14px]'>Cost Amount</label>
                                            <input className="border border-[#000000] bg-[#ffffff] rounded-full w-[100%] py-2 px-4 placeholder-black" placeholder='$0.00'/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='w-full'> <div className=' border border-[#BFBFBF]'></div></div>
                                <div className='flex justify-between px-4  items-center'>
                                    <h6 className='text-[12px] font-light'>Total Payable To Customer</h6>
                                    <h5 className='text-[20px] font-bold'>$0.00</h5>
                                </div>
                                <div className='h-[167px] w-full bg-[#616161] px-4 py-5 rounded-b-2xl'>
                                    <p className='text-[#FFFFFF] font-bold text-[20px] pb-6'>Replenish Item</p>
                                    <div className='flex justify-between'>
                                    <div className='flex flex-col mr-3'>
                                        <label className='ml-4 font-light text-[14px] text-[#ffffff]'>Refund Qty:</label>
                                        <input className="border border-[#FFFFFF] rounded-full max-w-[156px] px-8 py-2 bg-[#616161] text-[#FFFFFF] placeholder-white " placeholder='0000000' />
                                    </div>
                                    <button className='bg-[#FFFFFF] rounded-[4px] text-[16px]  mt-4 w-[206px] h-[48px]'>Save</button>
                                    </div>
                                </div>

                            </div>
                            {/* <button className='border-2 border-[#000000] rounded-[4px] text-[16px] font-[500] mt-4 w-[206px] h-[48px]'>Layby Cancellations</button> */}
                        </div>

                        <div className='max-w-[70%]'>
                        <div className="border border-black rounded-2xl py-3 px-2">
            <div className="px-10 overflow-x-auto overflow-y-auto max-h-[300px]">
              <table className=" min-w-full text-[#000000] ">
                <thead className="sticky top-0 bg-[#fff] py-2">
                  <tr className="border-b border-[#BFBFBF]  text-sm">
                    <th className="  text-start py-3 font-normal min-w-[110px]">
                   
                    <div className='flex justify-start items-center'> Sale No.<span><BiSolidUpArrow className='text-[8px] ml-1' />
                    <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                    </div>

                    </th>

                    <th className=" text-start py-3 font-normal min-w-[110px]">
                    <div className='flex justify-start items-center'> Stock No.<span><BiSolidUpArrow className='text-[8px] ml-1' />
                    <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                    </div>
                    </th>
                    <th className="text-start py-3 font-normal min-w-[66px]">
                    <div className='flex justify-start items-center'> Qty<span><BiSolidUpArrow className='text-[8px] ml-1' />
                    <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                    </div>
                    </th>
                 
                    <th className="text-start py-3 font-normal min-w-[500px]">
                          Description
                    </th>
                    <th className="text-center py-3 font-normal min-w-[150px]">
                    <div className='flex justify-end items-center '> Refund Amount<span><BiSolidUpArrow className='text-[8px] ml-1' />
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
                    <td className="py-3  w-[]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel urna quis tellus interdum semper.
                    </td>
                    <td className='text-right pr-8'>$0.00</td>
                    
                  </tr>

             

                  
                </tbody>
              </table>
            </div>
          </div>
                            <div className='text-end'>
                                <Link href='/NewStockPurchase/FullList'>
                                <button className='border-2 border-[#000000] rounded-[4px] text-[16px] text-[#ffffff] font-[500] mt-4 w-[206px] h-[48px] bg-black'>Save</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

               

                
            </div>
        </>
    )
}

export default withPageLayout(NewStockStep1)