
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoHash } from 'react-icons/go';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import VectorS from "../../assets/VectorS.png";
import Hash from "../../assets/Hash.png";
import Image from 'next/image';

export default function Newsearchbar() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const [count5, setCount5] = useState(0)
    const [count6, setCount6] = useState(0)
    return (
        <div className='w-full'>
            <div className=' flex items-center justify-between '>
                <div className=' relative '>
                    <input
                        type="email"
                        className=" border-[#369EA4] border-[2px] rounded-full placeholder-[#369EA4] pl-[38px] ps-4 py-2 flex-1 w-[642px]"
                        id="exampleFormControlInput1"
                        placeholder="Search Stock No."
                    />
                    <div className='absolute top-1/2 transform -translate-y-1/2 left-2.5  '>
                        <AiOutlineSearch className='fill-[#369EA4] w-[16px] h-[16px]' />
                    </div>
                </div>

                <div className="flex">
                    <div className='bg-[#000000] me-2 p-2 rounded-full'>
                        <Image alt="/" src={Hash} className="img-fluid" />
                    </div>

                    <div className='bg-[#000000] p-2.5 rounded-full'>
                        <Image alt="/" src={VectorS} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className='search_items mt-5'>
                <div className="grid  grid-cols-2 gap-4">
                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount(count - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                    onClick={() => setCount(count + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount1(count1 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count1}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount1(count1 + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount2(count2 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count2}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount2(count2 + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount3(count3 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count3}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount3(count3 + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount4(count4 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count4}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount4(count4 + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount5(count5 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count5}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount5(count5 + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='search_box border border-[#000000] rounded-[15px] py-2 px-3 text-[#000000] max-w-[558px]'>
                        <span className=' text-[12px] font-[300]'>#0123456789</span>
                        <div className='flex items-center justify-between text-[16px] mb-2'>
                            <h5 className='  font-[800]'>Product Name Here</h5>
                            <span className='font-[400]'>$000.00</span>
                        </div>
                        <hr></hr>
                        <div className='flex items-center justify-between'>
                            <div className='text-[#9F9F9F] text-[10px] font-[400] mt-1 mb-2'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur in mi posuere ante dignissim tincidunt at eget.
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <AiFillMinusCircle className='text-[26px]'
                                    onClick={() => setCount6(count6 - 1)} />
                                <p className='px-1 text-[20px] font-small'>{count6}</p>
                                <BsFillPlusCircleFill className='text-[26px]'
                                 onClick={() => setCount6(count6 + 1)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

