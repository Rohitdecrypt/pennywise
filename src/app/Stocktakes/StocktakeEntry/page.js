"use client";
import React, { useState } from "react";

import Image from "next/image";
import search from "../../assets/search.png";
import { PiPencil, PiBookOpenText } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropUpFill } from "react-icons/ri";
import updown from "../../assets/updown.png";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [sideOpen, setsideOpen] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" w-full p-5">
      <div className="w-full  relative max-w-screen h-full">
        <div className="flex mt-5 w-full items-center ">
          <div className="text-center text-[#000000] text-xl font-bold">
            STOCKTAKE ENTRY
          </div>
          <div className="border-t w-[65%]  mx-auto"></div>
          <div>
            <div className="relative">
              <input
                className="border border-custom-border-green rounded-full  py-2 px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                id="username"
                type="text"
                placeholder="Scan/Enter stock item"
              />
              <Image
                src={search}
                alt="Profile Image"
                className=" absolute w-5 bottom-2 left-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">

        <div className="w-[48%]">
          <div className="mt-8 flex items-center text-[#000]">
            <div className="border rounded-full px-5  py-2 me-3">949</div>
            <div className="text-md font-bold ">Items To Be Stocktaked</div>
          </div>
          <div className="mt-3 border border-black rounded-2xl py-3 px-2 ">
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
                    <th className=" text-center py-3 font-normal min-w-[110px]">
                      <div className="flex items-center justify-center">
                        Qty
                        <Image
                          alt="/"
                          src={updown}
                          className="h-[8px] w-[6px] ml-2"
                        />
                      </div>
                    </th>
                    <th className=" py-3 font-normal text-center min-w-[110px]">
                      <div className="flex items-center justify-center">
                        Category
                        <Image
                          alt="/"
                          src={updown}
                          className="h-[8px] w-[6px] ml-2"
                        />
                      </div>
                    </th>

                    <th className="text-start py-3 font-normal w-[50%]">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-[48%]">
          <div className="mt-8 flex items-center text-[#000]">
            <div className="border rounded-full px-5  py-2 me-3">249</div>
            <div className="text-md font-bold ">Items Added To Stocktake</div>
          </div>
          <div className="mt-3 border border-black rounded-2xl py-3 px-2 ">
            <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
              <table className=" min-w-full text-[#000000] overflow-x-auto  overflow-y-scroll max-h-[700px]">
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
                    <th className=" text-center py-3 font-normal min-w-[110px]">
                      <div className="flex items-center justify-center">
                        Qty
                        <Image
                          alt="/"
                          src={updown}
                          className="h-[8px] w-[6px] ml-2"
                        />
                      </div>
                    </th>
                    <th className=" py-3 font-normal text-center min-w-[110px]">
                      <div className="flex items-center justify-center">
                        Category
                        <Image
                          alt="/"
                          src={updown}
                          className="h-[8px] w-[6px] ml-2"
                        />
                      </div>
                    </th>

                    <th className="text-start py-3 font-normal w-[50%]">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 text-center">000000</td>
                    <td className="py-3 text-center w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        0
                      </div>
                    </td>
                    <td className="py-3 text-center">dfergrg </td>

                    <td className="py-3  w-[190px] text-start pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                      fjifgjar h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        <div className="flex  justify-end mt-5">
            <Link href='/Stocktakes'>

          <div className="w-[135px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] cursor-pointer">
            Close
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
