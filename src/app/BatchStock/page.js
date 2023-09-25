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
 
const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("")

  return (
    <div className="w-full pr-5 relative max-w-screen overflow-x-hidden">
      <div className="flex mt-5 w-full items-center ">
        <div className="text-center text-[#000000] font-bold">
          BATCH STOCK PRICING
        </div>
        <div className="border-t w-[82%] mx-auto"></div>
        <div></div>
      </div>

      {/* middle sec */}
      <div className="flex mt-10">
        <div className="border min-w-[330px] border-black rounded-2xl h-[800px] mr-4 pt-6 px-5">
          <div className="text-md text-black font-bold">Pricing Options</div>

          <label className="flex mt-2" htmlFor="Unpriced_stock">
            <input
              type="radio"
              className="hidden"
              id="Unpriced_stock"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="stock"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                // setIsChecked(true);
              }}
            >
              {selectedRadio === "stock" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
              All Unpriced Stock
              <div className="text-[12px]">(Last 200)</div>
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_Buys">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_Buys"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="buy"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                // setIsChecked(true);
              }}
            >
              {selectedRadio === "buy" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
              Unpriced Buys
              <div className="text-[12px]">(Last 200)</div>
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_loans">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_loans"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="loans"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                // setIsChecked(true);
              }}
            >
              {selectedRadio === "loans" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
              Unpriced Loans to Retail
              <div className="text-[12px]">(Last 200)</div>
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_no">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_no"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="no"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                setIsChecked(true);
              }}
            >
              {selectedRadio === "no" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
             By Stock No.
            {isChecked && selectedRadio === "no" && (<div className="mt-2">
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[133px] pl-5 border border-black " maxLength={9}/>
         </div>)}
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_range">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_range"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="range"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                setIsChecked(true);
              }}
            >
              {selectedRadio === "range" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
             By Stock No. Range
            {isChecked && selectedRadio === "range" && ( <div className="flex items-center mt-2">
         
         <div>
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[110px] pl-[10px] border border-black " maxLength={9}/>
         </div>
         <div className="w-[12px] h-[1px] border mx-1 border-black"></div>
         <div>
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[110px] pl-[10px] border border-black " maxLength={9}/>
         </div>
         
        </div>)}
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_Origin">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_Origin"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="Origin"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                setIsChecked(true);
              }}
            >
              {selectedRadio === "no" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
             By Origin No.
            {isChecked && selectedRadio === "Origin" && (<div className="mt-2">
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[133px] pl-5 border border-black " maxLength={9}/>
         </div>)}
            </div>
          </label>

          <label className="flex mt-3" htmlFor="Unpriced_Transfer">
            <input
              type="radio"
              className="hidden"
             
              id="Unpriced_Transfer"
              name="search-price"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="Transfer"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                setIsChecked(true);
              }}
            >
              {selectedRadio === "Transfer" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="5" fill="#6750A4" />
                </svg>
              )}
            </div>
            <div className="text-black">
             By Transfer No.
            {isChecked && selectedRadio === "Transfer" && (<div className="mt-2">
            <input type='text' placeholder="000000000" className="rounded-full py-2 w-[133px] pl-5 border border-black " maxLength={9}/>
         </div>)}
            </div>
          </label>
        </div>

        <div className=" w-full border border-black rounded-2xl py-3 px-2 ">
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
                  <th className="  text-center py-3 font-normal px-2 justify-center min-w-[130px]">
                    <div className=" flex items-center justify-center">
                      Supplier Ref.
                      <div>
                        <Image
                          alt="/"
                          src={updown}
                          className="h-[8px] w-[6px] ml-2"
                        />
                      </div>
                    </div>
                  </th>

                  <th className="text-start py-3 font-normal w-[50%]">
                    Label Description
                  </th>
                  <th className="text-center py-3 font-normal min-w-[110px]">
                    <div className="flex items-center justify-center">
                      Qty
                      <Image
                        alt="/"
                        src={updown}
                        className="h-[8px] w-[6px] ml-2"
                      />
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[110px]">
                    <div className="flex items-center justify-center">
                      Cost Price
                      {/* <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    /> */}
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[110px]">
                    <div className="flex items-center justify-center">
                      Retail Price
                      {/* <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    /> */}
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[110px]">
                    <div className="flex items-center justify-center">
                      Min Sale
                      {/* <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    /> */}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                  <td className="py-3 text-center">000000</td>
                  <td className="py-3 text-center">MDGTBHJHJ</td>

                  <td className="py-3  w-[190px] text-start pr-3">
                    https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                    jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg
                    fjifgjar h
                  </td>
                  <td className="py-3 text-center w-[130px]">
                    <div className="h-7 border w-12 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                      0
                    </div>
                  </td>

                  <td className="text-center">aa</td>
                  <td className="text-center">aa</td>
                  <td className="text-center">aa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* middle sec ends*/}

      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <div className="w-[175px] h-[48px] border-black border rounded-md bg-[#fff] mr-2 flex items-center justify-center text-[#000] cursor-pointer">
            Collect Stock
          </div>
        </div>
        <div className="flex">
          <div className="w-[175px] h-[48px] border-black border rounded-md bg-[#fff] mr-2 flex items-center justify-center text-[#000] cursor-pointer">
            Save Only
          </div>
          <div className="w-[175px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] cursor-pointer">
            Print Labels
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithPageLayout(Page);
