"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hash2 from "../../assets/pencillll.png";
import Search from "../../assets/search.png";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import WithPageLayout from "@/app/hoc/WithPageLayout";
import {BiSolidUpArrow , BiSolidDownArrow} from "react-icons/bi"

const Page = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <div className="w-full p-6">
      <div className="flex w-full justify-between items-center px-5 ">
        <p className="font-bold text-[20px] text-black">Return Repair</p>
        <div className=" w-[88%] h-[1px] bg-[#BFBFBF] "></div>
     
      </div>

      <div className="w-full flex mt-8">
        <div className="w-full ">
          <div className="min-w-[60%] flex  max-w-[65%] ml-5">
            <label class="relative block w-full me-4">
              <span class="sr-only">Search</span>
         
              <input
                class="w-full flex-1 placeholder:text-[14px]  placeholder:font-[400] block placeholder:text-[#369EA4] border 
                    border-[#369EA4] rounded-full py-2 pl-12 pr-3 "
                placeholder="Customer"
                type="text"
                name="search"
              />
            </label>
         
        
            <label class="relative block  w-full">
              <span class="sr-only">Search</span>
           
              <input
                class="w-full flex-1 placeholder:text-[14px]  placeholder:font-[400] block placeholder:text-[#369EA4] border 
                    border-[#369EA4] rounded-full py-2 pl-12 pr-3 "
                placeholder="Repairer Name"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
      
      </div>
      <div className="w-full  flex ">
          <div className="min-w-[65%]   max-w-[65%] ml-5 mt-5">
            <textarea
              placeholder="Sales Comments"
              className="w-full h-[320px] rounded-md p-2 border border-black"
            />
          </div>
        </div>

      <div className="mt-10 border border-black rounded-2xl py-3 px-2 overflow-x-auto">
        <div className="  px-10 overflow-x-auto overflow-y-auto max-h-[400px] ">
          <table className=" min-w-full text-[#000000] ">
            <thead className="sticky top-0 bg-[#fff] py-2">
              <tr className="border-b border-[#BFBFBF]  text-sm">
              <th className="w-[10%]  text-start py-3 font-normal">
                 <div className="flex items-center">
                 Return
                  <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                 </div>
                </th>
                <th className="w-[10%]  text-start py-3 font-normal">
                 <div className="flex items-center">
                 Stock No.
                  <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                 </div>
                </th>
                <th className="w-[30%]  text-start py-3 font-normal">
                  Description
                </th>
                <th className="w-[10%]  text-start py-3 font-normal">
                 <div className="flex items-center">
                 Date Returned
                  <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                 </div>
                </th>
                
                <th className="text-start py-3 font-normal">Work Performed</th>
                <th className=" text-start py-3 font-normal">
                 <div className="flex items-center">
                 fixed
                  <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                 </div>
                

                </th>
                <th className="text-start py-3 font-normal px-5">Cost</th>
                   <th className="  text-start py-3 font-normal">
                 <div className="flex items-center min-w-[90px]">
                Reciept No.
                  <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                 </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5]">
                <td className="py-3 font-light">000000</td>
                <td className="py-3 font-light">
                  123
                </td>
                <td className="py-3 font-light">
                  https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet.
                </td>
                <td className="py-3 font-light">
                  1/2/3
                </td>
                <td className="py-3 font-light pr-3">
                  https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet.
                </td>
                <td className="py-3 font-light">
                  00
                </td>
                  <td className="py-3 font-light">
                  00
                </td>  <td className="py-3 font-light">
                  00
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex">
          <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] me-2">
            <AiOutlinePlus size={25} /> <span className="pl-3">Add</span>
          </div>
          <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#fff] flex items-center justify-center text-[#000] me-2">
            <RxCross2 size={25} /> <span className="pl-3">Remove</span>
          </div>
        </div>
        <div className="flex">
          <Link href="/Repairs">
            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#fff] flex items-center justify-center text-[#000] me-2">
              Close
            </div>
          </Link>
          <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithPageLayout(Page);
