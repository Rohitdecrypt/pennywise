"use client"
import React, { useState } from 'react';
import circlearrow from '../assets/circleArr.png'
import Percentages from '../assets/piechart.png'
import Graph from '../assets/graph.png'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx'
// import Delete from '../assets/delete_img.png';
import Image from 'next/image';
import WithPageLayout from '../hoc/WithPageLayout';
const Todaysale=()=> {
    const [popup, setPopup] = useState(false);
    return (
        <div className='p-2 relative h-full w-full text-black'>
            <div className={`p-3 w-full ${popup == true ? "blur-sm" : ""}`}>
                <div className='flex items-center p-2'>
                    <h5 className='text-[20px] font-[700] '>TODAYS SALES</h5>
                    <div className=' flex-1 1 mx-3'> <div className='border-[1px] border-[#BFBFBF'></div></div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='w-[407px]'>
                        <div className='TotalSales p-[27px] max-w-[407px] '>
                            <h5 className='text-[16px] font-[700]'>Total Sales</h5>
                            <h2 className='text-[42px] font-[300] mt-[12px]'>17,902K</h2>
                        </div>
                        <div className='Topsales mt-[17px] p-2 max-w-[407px] border border-black '>
                            <div className='ml-[11px] pt-2 '>
                                <h5 className='text-[16px] font-[700]'>Top Sales</h5>
                                <h4 className='text-[21px] font-[700] mt-[1px]'>VICTORIA FINE</h4>
                                <div className='text-[16px] font-[300]  leading-6 mt-2'>
                                    <span className=''>Items: 120</span><br></br>
                                    <span>Total: $6,820.66</span>
                                </div>
                            </div>
                            <div className='bg-[#F1F1F1] flex items-center justify-between rounded-[8px]  py-[12px] px-[10px] mt-3'>
                                <h5 className='text-[20px] font-[700] ml-[8px]'>Staff Totals</h5>
                                <div className=''>
                                    <Image alt="/" src={circlearrow} className='max-h-[48px] max-w-[48px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center  '>
                        <Image alt="/" src={Percentages} className='max-h-[354px] max-w-[354px] w-full h-full' />
                        <h5 className='text-[16px] font-[700] '>Staff Percentages</h5>
                    </div>
                    <div className=''>
                        <Image alt="/" src={Graph} className='max-w-[661px] max-h-[354px] w-full h-full' />
                    </div>
                </div>
                <div className="mt-10 border border-black rounded-2xl py-3 ">
                    <div className=" overflow-x-auto overflow-y-auto max-h-[300px]">
                        <table className=" min-w-full text-[#000000] ">
                            <thead className="sticky top-0 bg-[#fff] py-2 ">
                                <tr className="border-b border-[#BFBFBF]  text-sm">
                                    <th className="  text-start py-3 font-normal min-w-[10px] pl-10">

                                        <div className='flex justify-start items-center'>Staff
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>

                                    </th>

                                    <th className=" text-start py-3 font-normal min-w-[90px]">
                                        <div className='flex justify-start items-center'> Customer
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[90px]">
                                        <div className='flex justify-start items-center'> Sale No
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[90px]">
                                        <div className='flex justify-start items-center'> Stock No
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>

                                    <th className=" text-start py-3 font-normal min-w-[70px]">
                                        <div className='flex justify-start items-center'>Type
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>
                                    <th className="text-start py-3 font-normal min-w-[300px]">
                                        Item Description
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[80px]">
                                        <div className='flex justify-start items-center'>Time
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[80px]">
                                        <div className='flex justify-start items-center'>Total
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[95px]">
                                        <div className='flex justify-start items-center'>Pay Type
                                            <span><BiSolidUpArrow className='text-[8px] ml-1' />
                                                <BiSolidDownArrow className='text-[8px] ml-1' /></span>
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[90px]">
                                        <div className='flex justify-start items-center'>Discount

                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[60px]">
                                        <div className='flex justify-start items-center'>NFT
                                        </div>
                                    </th>
                                    <th className=" text-start py-3 font-normal min-w-[60px]">
                                        <div className='flex justify-start items-center'>GST
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                                    <td className="px-10 py-3 w-[20px]"><p className='"h-10 w-14 py-1 px-2 bg-[#a5a5a577] 
                                rounded-full flex items-center justify-center text-black text-[13px]  '>A A</p></td>
                                    <td className="py-3 w-[20px]">First Name<br></br>
                                        Last Name </td>


                                    <td>
                                        <div className="py-3 w-[20px]">
                                            0000000
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 w-[20px]">
                                            0000000
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 w-[20px]">
                                            0000000
                                        </div>
                                    </td>
                                    <td className="py-3 w-[1100px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel urna quis tellus interdum semper.
                                    </td>
                                    <td>
                                        <div className="py-3 w-[20px]">
                                            7:34am
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 w-[10px]">
                                            $0000.00
                                        </div>
                                    </td>
                                    <td className="py-3 w-[20px]"><p className='"h-10 w-20 py-1 px-2 bg-[#a5a5a577] 
                                rounded-full flex items-center justify-center text-black text-[13px]'>Eftpos</p></td>

                                    <td className='text-start py-3 w-[10px]'>$0.00</td>
                                    <td className='text-start py-3 w-[10px]'>$0.00</td>
                                    <td className='text-start py-3 w-[10px]'>$0.00</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=' flex justify-end'>
                    <button className='w-[155px] h-[48px]  bg-[#000000] text-[#ffffff] text-[16px] font-[500px] rounded-[4px] mt-4' onClick={() => {
                        setPopup(true);
                    }}>Print Receipts</button>
                </div>

            </div>

            {popup && (
                <div className='Todaysale bg-[#ffffff] drop-shadow-md max-w-[812px] min-w-[500px]  px-5 py-3 absolute  top-0 bottom-0  transform translate-x-[60%] translate-y-[20%]'>
                    <div className='flex items-center p-2 mb-[17px] '>
                        <h5 className='text-[20px] font-[700] '>Staff Sale Totals</h5>
                        <div className=' flex-1 1 mx-3'> <div className=' border border-[#BFBFBF]'></div></div>
                        <button className=''  onClick={() => {
                   setPopup(false);
                  }}>
                            {/* <Image alt="/" src={Delete} className='' /> */}
                            <RxCross2 size={25} />
                        </button>
                    </div>
                    <div className='overflow-x-auto overflow-y-auto max-h-[600px] px-1'>
                        <div className='Topsales  p-2 max-w-[700px] m-[auto] rounded-[8px] mx-2 border border-black' >
                            <div className='ml-[11px] pt-2 flex  justify-between'>
                                <h4 className='text-[21px] font-[700] mt-[1px]'>Victoria Fine</h4>
                                <div className='text-end'>
                                    <h5 className='text-[16px] font-[700]'>Items: 120</h5>
                                    <div className='mt-3'>
                                        <p className=''>Discount: $0.00</p>
                                        <p>Net: $0.00</p>
                                        <p>GST: $0.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#F1F1F1] flex items-center justify-between rounded-[8px]  py-[18px] px-[14px] mt-3'>
                                <h5 className='text-[20px] font-[300] ml-[8px]'>Amount</h5>
                                <div className=''>
                                    <h5 className='text-[25px] font-[700] ml-[8px]'>$10,168.33</h5>
                                </div>
                            </div>
                        </div>
                        <div className='Elliot mt-[17px] p-2 max-w-[700px] border border-[#000000] m-[auto] rounded-[8px] mx-2'>
                            <div className='ml-[11px] pt-2 flex  justify-between'>

                                <h4 className='text-[21px] font-[700] mt-[1px]'>Elliot Watts</h4>
                                <div className='text-end'>
                                    <h5 className='text-[16px] font-[700]'>Items: 120</h5>
                                    <div className='mt-3'>
                                        <p className=''>Discount: $0.00</p>
                                        <p>Net: $0.00</p>
                                        <p>GST: $0.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#F1F1F1] flex items-center justify-between rounded-[8px]  py-[18px] px-[14px] mt-3'>
                                <h5 className='text-[20px] font-[300] ml-[8px]'>Amount</h5>
                                <div className=''>
                                    <h5 className='text-[25px] font-[700] ml-[8px]'>$3,580.40</h5>
                                </div>
                            </div>
                        </div>
                        <div className='Elliot mt-[17px] p-2 max-w-[700px] border border-[#000000] m-[auto] rounded-[8px]  mx-2'>
                            <div className='ml-[11px] pt-2 flex  justify-between'>

                                <h4 className='text-[21px] font-[700] mt-[1px]'>Jane Holloway</h4>
                                <div className='text-end'>
                                    <h5 className='text-[16px] font-[700]'>Items: 120</h5>
                                    <div className='mt-3'>
                                        <p className=''>Discount: $0.00</p>
                                        <p>Net: $0.00</p>
                                        <p>GST: $0.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#F1F1F1] flex items-center justify-between rounded-[8px]  py-[18px] px-[14px] mt-3'>
                                <h5 className='text-[20px] font-[300] ml-[8px]'>Amount</h5>
                                <div className=''>
                                    <h5 className='text-[25px] font-[700] ml-[8px]'>$3,580.40</h5>
                                </div>
                            </div>
                        </div>
                        <div className='Elliot mt-[17px] p-2 max-w-[700px] border border-[#000000] m-[auto] rounded-[8px]  mx-2'>
                            <div className='ml-[11px] pt-2 flex  justify-between'>

                                <h4 className='text-[21px] font-[700] mt-[1px]'>Zahra Riggs</h4>
                                <div className='text-end'>
                                    <h5 className='text-[16px] font-[700]'>Items: 120</h5>
                                    <div className='mt-3'>
                                        <p className=''>Discount: $0.00</p>
                                        <p>Net: $0.00</p>
                                        <p>GST: $0.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#F1F1F1] flex items-center justify-between rounded-[8px]  py-[18px] px-[14px] mt-3'>
                                <h5 className='text-[20px] font-[300] ml-[8px]'>Amount</h5>
                                <div className=''>
                                    <h5 className='text-[25px] font-[700] ml-[8px]'>$3,580.40</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
            }
        </div>

    )
}
export default WithPageLayout(Todaysale)
