"use client"
import React from 'react'
import { RxCross1 } from 'react-icons/rx';
const NoStockNum = (props) => {
    return (
        <>
            <div className='modal-body max-w-[732px] w-[732px] bg-[#fff]  relative border-[2px] blur-none text-black h-[603px] border-[#000000] rounded-md'>
                <div className='absolute right-5 top-5 '><RxCross1 className='w-[23px] h-[23px]'
                onClick={(e) => { e.preventDefault(); props.handleModal2(false) }}/></div>
                <h1 className='text-center font-bold text-[20px] py-4'>No Stock Number</h1>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>

                <div className='px-10 py-10'>
                    <div className='flex justify-between items-center mb-3'>
                        <label className='font-bold text-[14px]'>Stock Origin:</label>
                        <div className='flex justify-around max-w-[500px] w-[80%]'>
                            <button className="border border-[#000000] rounded-md  w-[32%] py-3 placeholder-[#000000] text-center" placeholder='00' >Expired Loan</button>
                            <button className="border border-[#000000]  rounded-md  w-[32%] py-3 placeholder-[#000000] text-center" placeholder='00' >Buy</button>
                            <button className="border border-[#000000] rounded-md  w-[32%] py-3 placeholder-[#000000] text-center" placeholder='00' >New Stock</button>
                        </div>
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='font-bold text-[14px] w-[23%]'>Quantity:</label>
                        <input className="border border-[#000000] rounded-full w-[30%] p-2 placeholder-[#000000] text-center" placeholder='1'></input>
                    </div>
                    <div className='flex mb-3 justify-between'>
                        <label className=' font-bold text-[14px] '>Item Description:</label>
                        <textarea className="border border-[#000000]  w-[77%] rounded-[8px] min-h-[122px]" />
                    </div>

                    <div className='flex justify-start items-center mb-3'>
                        <label className='font-bold text-[14px] w-[23%]'>Sale Amount Ea:</label>
                        <input className="border border-[#000000] rounded-full w-[30%] p-2 placeholder-[#000000] text-center" placeholder='1' ></input>
                    </div>

                    <div className='flex justify-start items-center'>
                        <label className=' font-bold text-[14px] w-[23%]'>Cost Amount:</label>
                        <input className="border border-[#000000] rounded-full w-[30%] p-2 placeholder-[#000000] text-center" placeholder='1'></input>
                    </div>

                </div>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className='w-full text-right my-8 px-10'>
                    <div className='ml-auto max-w-[350px]'>
                        <button className='min-w-[48%] h-[48px] bg-[#000000] text-[#ffffff] mr-2 rounded-md'>Cancel</button>
                        <button className='min-w-[48%] h-[48px] bg-[#F1F1F1] rounded-md'
                        onClick={(e) => { e.preventDefault(); props.handleModal2(false) 
                        props.handleModal3(true)}}>Accept</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoStockNum