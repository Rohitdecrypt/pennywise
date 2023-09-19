"use client"
import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import cart from '../../assets/CartUser.jpg'
import Vector from "../../assets/vectorgroup.png"
import Pen from "../../assets/Pen.png"
import Image from 'next/image';
const NewCart = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    return (
        <>

            <div className='w-[400px] bg-[#FFFFFF] h-screen shadow-xl'>
                <div className='flex flex-col items-baseline justify-between h-full px-5 py-6'>
                    <div className='flex justify-between w-full  items-start'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={cart} className='w-auto' />
                            <p className='text-[#000000] font-bold mt-2'>Cart</p>
                        </div>
                        <div className='flex'>
                            <Image src={Vector} className='w-auto' />
                            <Image src={Pen} className='w-auto ml-4' />
                        </div>
                    </div>
                    <div className='  w-full border-2 border-[#000000]  rounded-md p-[10px]'>
                        <p className='font-light text-[15px] text-[#000000]'>#0123456789</p>
                        <p className='font-bold text-[18px] text-[#000000] pb-2'>Product Name Here</p>
                        <div className='flex justify-between'>
                            <p className='font-light text-[20px] text-[#000000]'>$000.00</p>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount(count - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count}</p>
                                <AiFillPlusCircle className='text-[26px]'
                                    onClick={() => setCount(count + 1)} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#9F9F9F] mb-1'></div>
                        <p className='text-[#818181] font-light text-[12px]'>Lorem ipsum dolor sit amet, consectet dipiscing...</p>
                    </div>
                    <div className='  w-full border-2 border-[#000000]  rounded-md p-[10px]'>
                        <p className='font-light text-[15px] text-[#000000]'>#0123456789</p>
                        <p className='font-bold text-[18px] text-[#000000] pb-2'>Product Name Here</p>
                        <div className='flex justify-between'>
                            <p className='font-light text-[20px] text-[#000000]'>$000.00</p>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount1(count1 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count1}</p>
                                <AiFillPlusCircle className='text-[26px]'
                                 onClick={() => setCount1(count1 + 1)} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#9F9F9F] mb-1'></div>
                        <p className='text-[#818181] font-light text-[12px]'>Lorem ipsum dolor sit amet, consectet dipiscing...</p>
                    </div>


                    <div className='border-2 w-full relative  px-3 py-3'>
                        <div className='h-14 w-5 rounded-r-lg border-t border-r border-b border-gray-300 absolute bg-white -left-[2px] top-[87px]'></div>
                        <div className='h-14 w-5 rounded-l-lg border-t border-l border-b border-gray-300 absolute bg-white -right-[2px] top-[87px]'></div>
                        
                        <div className='flex w-full justify-between pb-[10px]'>
                        <div>
                            <p className='text-[15px] font-light'>Amount</p>
                            <p className='text-[15px] font-light'>Discount</p>
                            <p className='text-[15px] font-light'>GST</p>
                        </div>
                        <div>
                            <p className='text-[15px] font-light'>$0000.00</p>
                            <p className='text-[15px] font-light'>-$0.00</p>
                            <p className='text-[15px] font-light'>$0.00</p>
                        </div>
                    </div>
                        
                        
                        <div className='h-2 absolute top-[110px] -left-[0px] w-[100%] py-2 bg-white'>
                            <div class="border-dashed border-2 border-black "></div>
                        </div>
                        <div className='flex justify-between mt-[50px]'>
                            <div className='me-[0px]'>
                                <p className='text-[15px] font-light'>Total:</p>
                                <p className='text-[20px] font-bold'>$0000.00</p>

                            </div>
                            <div>
                                <button class="rounded bg-[#000000] py-2 px-4 text-[16px] text-[#ffffff]">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewCart