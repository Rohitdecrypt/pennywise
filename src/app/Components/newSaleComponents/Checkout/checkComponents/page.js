
"use client"
import React, { useState, useEffect } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import AuctionDetails from './NewSalePopUps/AuctionDetails';
import NoStockNum from './NewSalePopUps/N0StockNum';
import SaleDiscount from './NewSalePopUps/SaleDiscount';
import NewCostumerTable from './NewSalePopUps/NewCostumerTable';
import SaleCostumer from './NewSalePopUps/SaleCostumer';
import Link from 'next/link';
import WithPageLayout from '@/app/hoc/WithPageLayout';


function SaleDashboard() {
    const [sidebar, setSidebar] = useState(true);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);


    const handleClick = () => {

        setSidebar(!sidebar)
    }


    const handleModal = (_value) => {
        setModal(_value)
    }

    const handleModal2 = (_value) => {
        setModal2(_value)
    }
    const handleModal3 = (_value) => {
        setModal3(_value)
    }

    const handleModal4 = (_value) => {
        setModal4(_value)
    }
    const handleModal5 = (_value) => {
        setModal5(_value)
    }


    return (


        <>
            <div className="modal relative h-full w-full">
                <div className={`p-3 w-full ${modal || modal2 || modal3 || modal4 || modal5 == true ? "blur-sm" : ""}`}>
                    <div className="flex py-0 px-0 xl:px-5 xl:py:5">
                        <div className='container-wrapper bg-[white] w-[100%] flex max-h-[900px] ' >

                            <div className='w-full pl-0 relative'>
                                <div className='flex'>
                                    <div className='w-[30%] px-0 xl:px-10'>
                                        <div className='border-2 border-[#CBCBCB] rounded-md'>
                                            <div className='py-3 flex justify-center flex-col items-center'>
                                                <p className='text-[#000000] font-bold text-[35px] p-0'>SALE</p>
                                                <p className='text-[#000000]  text-[14px] px-5 text-center lg:text-[18px]'> 94966 - Complete/Layby Closed</p>
                                                <p className='text-[#000000] font-light text-[14px] py-1'>Staff Code: AA</p>
                                            </div>
                                        </div>
                                        <div className='my-5'>
                                            <div className='newsold max-w-[419px] min-h-[722px] text-black'>
                                                <div className='pl-[50px] pr-[50px]'>
                                                    <div className='text-center pt-[50px] '>
                                                        <h5 className='text-[25px] font-bold mb-1'>SOLD TO</h5>
                                                        <p className='text-[18px] font-normal mb-1' >Kimberly Margaret Laura</p>
                                                        <p className='text-[14px] font-light'>6 Appleton Av, Lurnea, NSW 2170</p>
                                                    </div>
                                                    <div className='border-dashed border-[1px] border-[#000000] my-6'></div>
                                                    <div className='data text-center'>
                                                        <div className=' flex items-center justify-between text-[14] font-[400] my-2 md-4'>
                                                            <div className=''>
                                                                <p className='font-light text-[14px] pb-2px'>Sale Date</p>
                                                                <p className='font-light text-[14px] pb-2px'>Sale Time</p>
                                                                <p className='font-light text-[14px] pb-2px'>Sale Total</p>
                                                                <p className='font-light text-[14px] pb-2px'>Total GST</p>
                                                                <p className='font-light text-[14px] pb-2px'>Sub Total</p>
                                                                <p className='font-light text-[14px]'>Rounding</p>
                                                            </div>
                                                            <div className='text-end '>
                                                                <p className='font-light text-[14px] pb-2px'>00/00/0000</p>
                                                                <p className='font-light text-[14px] pb-2px'>00:00</p>
                                                                <p className='font-light text-[14px] pb-2px'>$0.00</p>
                                                                <p className='font-light text-[14px] pb-2px'>$0.00</p>
                                                                <p className='font-light text-[14px] pb-2px'>$0.00</p>
                                                                <p className='font-light text-[14px]'>$0.00</p>
                                                            </div>
                                                        </div>
                                                        <p className='font-light text-[16px]'>Total</p>
                                                        <h5 className='text-[20px] font-bold'>$0.00</h5>
                                                    </div>
                                                    <div className='border-dashed border-[1px] border-[#000000] my-6'></div>
                                                    <div className=' flex items-center justify-between text-[14] font-[400] mt-2 '>
                                                        <div className=''>
                                                            <p className='font-light text-[14px] pb-2px'>Tendered</p>
                                                            <p className='font-light text-[14px] pb-2px'>Payment Type</p>
                                                            <p className='font-light text-[14px] '>Layby No.</p>
                                                        </div>
                                                        <div className='text-end '>
                                                            <p className='font-light text-[14px] pb-2px'>00/00/0000</p>
                                                            <p className='font-light text-[14px] pb-2px'>00:00</p>
                                                            <p className='font-light text-[14px] '>$0.00</p>
                                                        </div>
                                                    </div>
                                                    <div className='border-dashed border-[1px] border-[#000000] my-6'></div>
                                                    <div className='data text-center'>
                                                        <div className=' flex items-center justify-between text-[14] font-[400] my-2'>
                                                            <div className='text-start'>
                                                                <p className='font-light text-[14px] pb-2px'>Due Date</p>
                                                                <p className='font-light text-[14px] pb-2px'>Change Due</p>
                                                                <p className='font-light text-[14px] '>Amount Due</p>
                                                            </div>
                                                            <div className='text-end '>
                                                                <p className='font-light text-[14px] pb-2px'>00/00/0000</p>
                                                                <p className='font-light text-[14px] pb-2px'>00:00</p>
                                                                <p className='font-light text-[14px]'>$0.00</p>

                                                            </div>
                                                        </div>
                                                        <p className='text-[16px] font-light'>Total</p>
                                                        <h5 className='text-[30px] font-bold'>$0.00</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex justify-center flex-wrap items-center mb-0 px-6 2xl:justify-between 2xl:items-center'>
                                            <button className='border-2 border-[#000000] rounded-md text-[16px] px-5 py-3 2xl:mb-0 mb-2 text-black'
                                                onClick={(e) => { e.preventDefault(); handleModal2(true); }}>Remove GST</button>
                                            <Link href='/' onClick={(e) => { e.preventDefault(); handleModal(true); }} className='text-[16px] border-b border-[#000000] p-0 m-0 text-black'>Enable Auction Sale</Link>
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

                                            <div className='w-[50%] max-h-[375px] bg-white border-2 border-[#CBCBCB] rounded-md mt-10'>

                                                <div className='w-full border-b border-[#BFBFBF] py-3 px-6 text-black'>
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
                                            <div className='flex justify-end items-center gap-4 mt-7 mb-4'>
                                                <Link href='/' className='text-[16px] border-b border-[#000000] p-0 m-0 text-black'>Undo Last Payment</Link>
                                                <button className='text-[16px] border-2 border-[#000000] py-3 px-14 rounded-md text-black' >Close</button>
                                                <button className='text-[16px] border-2 border-[#000000] py-3 px-14 bg-black text-[#ffff] rounded-md'
                                                    onClick={(e) => { e.preventDefault(); handleModal4(true); }}>Print Sale</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>





                </div>
                {modal && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <AuctionDetails handleModal={handleModal} />
                    </div>
                )}
                {modal2 && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <NoStockNum handleModal2={handleModal2} handleModal3={handleModal3} />
                    </div>
                )}

                {modal3 && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <SaleDiscount handleModal3={handleModal3} />
                    </div>
                )}


                {modal4 && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <NewCostumerTable handleModal4={handleModal4} handleModal5={handleModal5} />
                    </div>
                )}


                {modal5 && (
                    <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <SaleCostumer handleModal5={handleModal5} />
                    </div>
                )}

            </div>
        </>
    )
}

export default WithPageLayout(SaleDashboard)