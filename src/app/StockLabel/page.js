

"use client";
import React, { useState } from "react";
import WithPageLayout from "../hoc/WithPageLayout";
import Image from "next/image";
import search from "../assets/search.png";
import { PiPencil, PiBookOpenText } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import updown from "../assets/updown.png";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Label = () => {

 

  return (
    <div className="w-full pr-5 relative max-w-screen overflow-x-hidden">
      <div className="flex mt-5 w-full items-center ">
        <div className="text-center text-[#000000] font-bold">STOCK LABEL PRINTING</div>
        <div className="border-t w-[75%] mx-auto"></div>
        <div>
          <div
            className="w-[195px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000] cursor-pointer"
            
          >
            <AiOutlineReload size={25} />{" "}
            <span className="pl-3">Clear List</span>
          </div>
        </div>
      </div>
   
      <div className="mt-10 border border-black rounded-2xl py-3 px-2 ">
        <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
          <table className=" min-w-full text-[#000000] overflow-x-auto  overflow-y-auto max-h-[700px]">
            <thead className="sticky top-0 bg-[#fff] py-2">
              <tr className="border-b border-[#BFBFBF]  text-sm">
                <th className="  text-center py-3 font-normal flex items-center px-2 justify-center min-w-[130px]">
                  Stock No.
                  <div>
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
              
                {/* <th className=" py-3 font-normal text-center min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Status
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th> */}

                <th className="text-start py-3 font-normal w-[50%]">
                  Label Description
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    G/j
                  
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Sale Amount
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Retail Price
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                <td className="py-3 text-center">000000</td>
                <td className="py-3  w-[190px] text-start pr-3">
                  https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                  jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg fjifgjar
                  h
                </td>
                <td className="py-3 text-center w-[130px]">
                  <div className="h-7 border w-12 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                    D
                  </div>
                </td>

               
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
         <div className="text-lg font-bold text-black me-2">Add Range:</div>
         <div>
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[133px] pl-5 border border-black " maxLength={9}/>
         </div>
         <div className="w-[12px] h-[1px] border mx-3 border-black"></div>
         <div>
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[135px] pl-5 border border-black " maxLength={9}/>
         </div>
         
        </div>
        <div className="w-[175px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] cursor-pointer">
          Print Labels
        </div>
      </div>
     
    </div>
  )
}

export default WithPageLayout(Label)
