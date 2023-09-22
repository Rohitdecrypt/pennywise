"use client"
import React ,{useState}from 'react'


import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import deleteimg from '../../assets/delete.png'
import hash from '../../assets/hash.png'
import deleteColor from '../../assets/clrdel.png'
import Image from 'next/image';
import WithPageLayout from '@/app/hoc/WithPageLayout';
const Poprefund = () => {
    const [modal, setModal] = useState(false);
   
  return (
  <>
   <div className="modal relative h-full w-full">
        <div className={`p-3 w-full ${modal == true ? "blur-sm" : ""}`}>
        <div className='flex justify-around items-center px-5'>
           <div className=''>
           <p className='font-bold text-[20px]' >REFUNDS & CANCELLATIONS</p>
           </div>
            <div className=' w-[78%] h-[1px] bg-[#BFBFBF] flex-1 mx-3'></div>
            <div className='flex'>
            <Image src={deleteimg} className='w-[40px] h-[40px] me-2' alt='/'/> 
            <Image src={hash} className='w-[40px] h-[40px]' alt='/'/> 
            </div>
        </div>
        <div className="mt-10 border border-black rounded-2xl py-3 px-2">
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
          <div className='text-right mt-3'>
        <button className='text-[16px] border-2 border-[#000000] py-3 px-14 bg-black text-[#ffff] rounded-md'
        onClick={() => {
          setModal(true);
        }}
        >Delete</button>
        
        </div>
          
        </div>
        {modal && (
          <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="modal-body w-[422px] bg-[#fff]  relative  blur-none text-black">
                   
             <div className='bg-[#F53648] w-full relative min-h-[100px] flex justify-center items-center rounded-t-xl'>
                <Image src={deleteColor} className=' absolute -top-10 w-[77px] h-[77px]'/>
                <h1 className='font-bold text-[20px] text-[#FFFFFF] mt-8'>Delete Items?</h1>
             </div>

             <div className='w-full min-h-[300px] border-l-2 border-b-2 border-r-2 border-[#000000] rounded-b-md'>
                 <p className='text-center pt-14 text-[#000000] text-[20px] font-bold'>Are You Sure?</p>
                 <p className='text-center pb-2 text-[#000000] text-[16px] font-light'>You’re about to delete the <br/>following:</p>
                 <p className='text-center pb-5 text-[#000000] text-[16px] font-bold'>You have <span className='text-[#F53648]'>4 item(s)</span> selected</p>

                 <div className='flex justify-center items-center pb-4 relative'>
                 <p className='text-center  text-[#A9A9A9] text-[16px] font-light'>Don’t ask again  </p>
                 <input type="checkbox" className="bg-[#ffffff] border-2 border-green ml-2 absolute"  id='check' />
                 </div>
                 
                 <div className='h-[2px] w-full bg-[#F1F1F1]'></div>
                 <div className='flex justify-around mt-4'>
                    <button className='bg-[#F1F1F1] px-10 py-2 rounded-md text-[#000000] text-[14px]'
                   onClick={() => {
                    setModal(false);
                  }}>Cancel</button>
                    <button className='bg-[#F53648] px-6 py-2 rounded-md text-[#ffff] text-[14px]'>Yes, I’m Sure.</button>
                 </div>
                
             </div>
              
              
            </div>
          </div>
        )}
      </div>
  


                                            





  </>
  )
}

export default WithPageLayout(Poprefund)