import React from 'react'
import { RxCross1 } from 'react-icons/rx';
const AuctionDetails = (props) => {
    return (
        <>
            <div className='modal-body max-w-[732px] bg-[#fff]  relative border-[2px] blur-none text-black h-[476px] border-[#000000] rounded-md ml-5'>
                <div className='absolute right-5 top-5 '><RxCross1 className='w-[23px] h-[23px]'
                onClick={(e) => { e.preventDefault(); props.handleModal(false) }} /></div>
                <h1 className='text-center font-bold text-[20px] py-4'>Auction Details</h1>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>

                <div className='px-10 py-10'>
                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px] w-[32%]'>Refund Qty:</label>
                        <div className='flex gap-3'>
                            <input className="border border-[#000000] rounded-full max-w-[144px] w-[31%] p-2 placeholder-[#000000] text-center" placeholder='00' />
                            <input className="border border-[#000000] rounded-full max-w-[144px] w-[31%] p-2 placeholder-[#000000] text-center" placeholder='00' />
                            <input className="border border-[#000000] rounded-full max-w-[144px] w-[31%] p-2 placeholder-[#000000] text-center" placeholder='00' />
                        </div>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px]'>Auction House:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000]" ></input>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <label className='ml-4 font-bold text-[14px]'>Address Line 1:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>

                    <div className='flex justify-between items-center'>
                        <label className='ml-4 font-bold text-[14px]'>Address Line 2:</label>
                        <input className="border border-[#000000] rounded-full w-[70%] p-2 placeholder-[#000000] " ></input>
                    </div>

                </div>
                <div className='w-full'> <div className=' border-[1px] border-[#BFBFBF]'></div></div>
                <div className='w-full text-right my-8 px-10'>
                    <div className='ml-auto max-w-[350px]'>
                        <button className='min-w-[48%] h-[48px] bg-[#000000] text-[#ffffff] mr-2 rounded-md'
                        onClick={(e) => { e.preventDefault(); props.handleModal(false) }}>Cancel</button>
                        <button className='min-w-[48%] h-[48px] bg-[#F1F1F1] '>Accept</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AuctionDetails