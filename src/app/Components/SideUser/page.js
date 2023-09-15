import React from 'react'
import { PiUserCircleFill } from 'react-icons/pi';
import { LuListChecks } from 'react-icons/lu';
import { BiLogoTelegram } from 'react-icons/bi';
function SideUser() {
    
    return (
        <div>
            <div className='sidebar w-[250px]'>
                <div className='bg-[#CDE7E8] rounded-[17px] text-[#369EA4] flex justify-center py-2 px-3  items-center  '>
                    <div className='bg-[#CDE7E8] rounded-[50px] p-1 '
                        style={{ filter: 'drop-shadow(0 3px 5px rgba(54, 158, 164, 0.368627451)' }}
                    >
                        <PiUserCircleFill className='w-[40px] h-[40px]' />
                    </div>
                    <h5 className='ms-2 text-[16px] font-[600]  font-["Poppins", sans-serif]'>Welcome Back!</h5>
                </div>
                <div className='bg-[#fbfcfc] h-[553px] rounded-b-[17px] mb-3'>
                    <div className='bg-[#369EA4]  rounded-t-[17px]  py-4 px-3 flex justify-center items-center mt-3 max-[992px]:flex-col'>
                        <div className='bg-[#ffffff] rounded-full p-2.5'>
                            <LuListChecks className='stroke-[#369EA4] w-[16px] h-[16px] m-0.5' />
                        </div>
                        <h5 className='ms-3 text-[#ffffff] max-[992px]:pt-2'>Actions To Complete</h5>
                    </div>
                </div>

                <div className='bg-[#fbfcfc]  rounded-b-[17px]'>
                    <div className='bg-[#369EA4]  rounded-t-[17px]  py-4 px-3 flex justify-center items-center mt-3 max-[992px]:flex-col'>
                        <div className='bg-[#ffffff] rounded-full p-2.5'>
                            <BiLogoTelegram className='fill-[#369EA4] w-[16px] h-[16px] m-0.5' />
                        </div>
                        <h5 className='ms-3 text-[#ffffff] max-[992px]:pt-2'>Frequent Flyers</h5>
                    </div>
                    <div className='py-4 px-3'>
                        <li className='list-none p-1'>
                            <div className='bg-[#ffffff] rounded-full p-2.5 m-0 w-[43px]' 
                            style={{ filter: 'drop-shadow(0 3px 5px rgba(54, 158, 164, 0.368627451) ' }}>
                                <PiUserCircleFill  className='w-[25px] h-[25px] fill-[#369EA4]' />
                            </div>
                        </li>
                        <li className='list-none p-1'>
                            <div className='bg-[#ffffff] rounded-full p-2.5 m-0 w-[43px]' 
                            style={{ filter: 'drop-shadow(0 3px 5px rgba(54, 158, 164, 0.368627451) ' }}>
                                <PiUserCircleFill  className='w-[25px] h-[25px] fill-[#369EA4]' />
                            </div>
                        </li>
                        <li className='list-none p-1'>
                            <div className='bg-[#ffffff] rounded-full p-2.5 m-0 w-[43px]' 
                            style={{ filter: 'drop-shadow(0 3px 5px rgba(54, 158, 164, 0.368627451) ' }}>
                                <PiUserCircleFill  className='w-[25px] h-[25px] fill-[#369EA4]' />
                            </div>
                        </li>
                        <li className='list-none p-1'>
                            <div className='bg-[#ffffff] rounded-full p-2.5 m-0 w-[43px]' 
                            style={{ filter: 'drop-shadow(0 3px 5px rgba(54, 158, 164, 0.368627451) ' }}>
                                <PiUserCircleFill  className='w-[25px] h-[25px] fill-[#369EA4]' />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideUser
