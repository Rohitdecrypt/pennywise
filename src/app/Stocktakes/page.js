"use client"
import React, { useState } from "react";
import withPageLayout from "../hoc/withPageLayout";
import Image from "next/image";
import search from "../assets/search.png";
import { PiPencil, PiBookOpenText } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropUpFill } from "react-icons/ri";
import updown from "../assets/updown.png";
import { RxCross2 } from "react-icons/rx";


const stocktakes = () => {
  const [isChecked,setIsChecked]=useState(false)
  const [sideOpen,setsideOpen]=useState(false)

  
  

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-full pr-5 relative max-w-screen overflow-x-hidden">

      <div className="flex mt-5 w-full items-center ">
        <div className="text-center text-[#000000] font-bold">STOCKTAKES</div>
        <div className="border-t w-[75%] mx-auto"></div>
        <div>
          <div className="w-[195px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000] cursor-pointer" onClick={()=>{setsideOpen(true)}}>
            <PiBookOpenText size={25} />{" "}
            <span className="pl-3">Variance Report</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          className="border border-custom-border-green rounded-full w-[40%] py-2 mt-5 px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
          id="username"
          type="text"
          placeholder="Search"
        />
        <Image
          src={search}
          alt="Profile Image"
          className=" absolute w-5 bottom-2 left-4"
        />
      </div>
      <div className="mt-10 border border-black rounded-2xl py-3 px-2 ">
        <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
          <table className=" min-w-full text-[#000000] overflow-x-auto  overflow-y-auto max-h-[700px]">
            <thead className="sticky top-0 bg-[#fff] py-2">
              <tr className="border-b border-[#BFBFBF]  text-sm">
                <th className="  text-center py-3 font-normal flex items-center px-2 justify-center min-w-[130px]">
                  Stocktake No.
                  <div>
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className=" text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Create Date
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className=" py-3 font-normal text-center min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Status
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>

                <th className="text-start py-3 font-normal w-[50%]">
                  Categories
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Items
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Scanned
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Remain
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
                <td className="py-3 text-center">dfergrg </td>
                <td className="py-3 text-center w-[130px]">
                  <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                    In progress
                  </div>
                </td>

                <td className="py-3  w-[190px] text-start pr-3">
                  https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                  jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg fjifgjar
                  h
                </td>
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <div className="w-[195px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000] cursor-pointer">
            <AiOutlinePlus size={25} />{" "}
            <span className="pl-3">New Stocktake</span>
          </div>
          <div className="w-[195px] h-[48px] border-black border ml-3 rounded-md flex items-center justify-center text-[#000000] cursor-pointer">
            <PiPencil size={25} /> <span className="pl-3">Stocktake Entry</span>
          </div>
        </div>
        <div className="w-[175px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] cursor-pointer">
          Mark as Complete
        </div>
      </div>
      <div className={sideOpen ? "variance-side h-screen absolute w-[456px] top-0 z-10 bg-[#fff] right-0  p-10 shadow-xl overflow-x-hidden transition-all duration-300" : "transition-all duration-300 variance-side h-screen absolute w-[406px] max-w-full overflow-x-hidden top-0 z-10 bg-[#fff] right-[-406px]  p-10 shadow-xl"}>
<div className="text-[#000000] flex justify-between items-center">
  <div className="text-xl font-extrabold">Select Categories</div>
  <div className="border-t w-[30%] mx-auto "></div>
  <div>
    <RxCross2 size={25} className="cursor-pointer" onClick={()=>{setsideOpen(false)}}/>
  </div>
</div>
<div className="flex mt-3">
<div className="rounded-full w-16 py-1 bg-black text-white text-sm text-center">A-Z</div>
<div className="rounded-full w-16 py-1 mx-2 text-black text-sm border border-[#A5A5A5] text-center">Z-A</div>
<div className="rounded-full w-24 py-1  text-black text-sm border border-[#A5A5A5] text-center">Select All</div>

</div>
<div className="mt-8 h-[88%] overflow-x-hidden">
  <div>

  <h2 className="text-[#A5A5A5] mb-3">A</h2>
  <hr></hr>
  <div className="flex justify-between w-[90%] mx-auto mt-2 text-[#000000]">
   
    <div>Automotive</div>
    <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      id="letter_A"
                      onChange={toggleCheckbox}
                    />
                    <div className="w-5 h-5 mx-2 border border-[#369EA4] rounded-md flex items-center justify-center transition-all duration-300">
                      {isChecked  && (
                        <svg
                          className="w-3 h-3 text-[#369EA4] fill-current opacity-100"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        </svg>
                      )}
                    </div>
                  </label>
  </div>
  </div>

  <div className="mt-6">

  <h2 className="text-[#A5A5A5] mb-3">B</h2>
  <hr></hr>
  <div className="flex justify-between w-[90%] mx-auto mt-2 text-[#000000]">
   
    <div>Automotive</div>
    <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      id="letter_B"
                      onChange={toggleCheckbox}
                    />
                    <div className="w-5 h-5 mx-2 border border-[#369EA4] rounded-md flex items-center justify-center transition-all duration-300">
                      {isChecked  && (
                        <svg
                          className="w-3 h-3 text-[#369EA4] fill-current opacity-100"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        </svg>
                      )}
                    </div>
                  </label>
  </div>
  </div>


  <div className="rounded-md px-3 py-3  bg-[#000000] text-white max-w-[130px] text-center mt-4 ml-44 sticky top-[100%]">
Save
  
  </div>
  
</div>
      </div>
    </div>
  );
};

export default withPageLayout(stocktakes);
