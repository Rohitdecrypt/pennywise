"use client"
import React, { useState } from "react";
import search from "../assets/search.png";
import Image from "next/image";
import { PiPencil } from "react-icons/pi";
import updown from "../assets/updown.png";
import WithPageLayout from "../hoc/WithPageLayout";

const Page = () => {
    const [International, setInternational] = useState(true);
  return (
    <>
    
        <div className="pr-5 w-full ">
          <div className="flex mt-5 w-full items-center">
            <div className="text-center text-[#000000] font-bold">
              STOCK TRANSFER
            </div>
            <div className="border-t w-[82%] mx-auto"></div>
          </div>
          <div className="flex items-center justify-between mt-5">

          <div className="relative flex items-center">
            <input
              className="border me-4 border-custom-border-green rounded-full w-full min-w-[650px] py-2  px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
              id="username"
              type="text"
              placeholder="Search"
            />
            <Image
              src={search}
              alt="Profile Image"
              className=" absolute w-5 bottom-2 left-4"
            />
          <div className="text-black text-[12px] underline w-[200px] cursor-pointer">Load transfer stock</div>
          </div>
          <div>
          <div className="flex justify-center align-middle m-auto ">
                <button
                  className={
                    International
                      ? "bg-custom-green  text-white text-md py-2 w-[125px] "
                      : "bg-custom-grey  text-custom-greenlight  text-md py-2 w-[125px] "
                  }
                  onClick={() => {
                    setInternational(true);
                  }}
                >
                  Stock In
                </button>
                <button
                  className={
                    International == false
                      ? "bg-custom-green text-white text-md py-2 w-[125px]"
                      : "bg-custom-grey  text-custom-greenlight text-md py-2 w-[125px]"
                  }
                  onClick={() => {
                    setInternational(false);
                  }}
                >
                  Stock Out
                </button>
              </div>
          </div>
          </div>
          {/* middle */}
         { International ? <div className="mt-10 border border-black rounded-2xl py-3 px-2 overflow-x-auto">
          <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
          <table className=" min-w-full text-[#000000] overflow-x-auto  overflow-y-auto max-h-[700px]">
            <thead className="sticky top-0 bg-[#fff] py-2">
              <tr className="border-b border-[#BFBFBF]  text-sm">
                <th className="  text-center py-3 font-normal flex items-center px-2 justify-center ">
                  item No.
                  <div>
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                 <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Stock No.
                    <div>
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
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
                    Cost Price
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
                <td className="py-3 text-center w-[130px]">
                  <div className="h-7 border w-12 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                    D
                  </div>
                </td>

                <td className="py-3  w-[190px] text-start pr-3">
                  https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                  jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg fjifgjar
                  h
                </td>
                
               
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
                
              </tr>
            </tbody>
          </table>
        </div>
          </div> :   <div className="flex mt-10">
        <div className="border min-w-[330px] border-black rounded-2xl h-[760px] mr-4 pt-6 px-5 text-black">
          <div className="text-md text-black font-bold">Transfer Details</div>

      <div className="mt-3">
<div>Destination Site</div>
<input type="text" className="rounded-full mt-2 py-2 w-full pl-5 border border-black "/>
      </div>

      <div className="mt-3">
<div>Item stock no.</div>
<input type="text" placeholder="00000000" className="rounded-full mt-2 py-2 w-[125px] pl-5 border border-black " maxLength={8}/>
      </div>
          
      <div className="mt-3">
<div>Item Count</div>
<input type="text" placeholder="00000000" className="rounded-full mt-2 py-2 w-[125px] pl-5 border border-black " maxLength={8}/>
      </div>

      <div className="mt-3">
<div>Transfer Total</div>
<input type="text" placeholder="$0.000000" className="rounded-full mt-2 py-2 w-[125px] pl-5 border border-black " maxLength={8}/>
      </div>

   
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
      </div>}
          {/* middle end*/}
          <div className="flex justify-between mt-5">
            <div className="w-[155px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000]">
              Accept Transfer
            </div>
            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
              Save
            </div>
          </div>
        </div>

    </>
  );
}

export default WithPageLayout(Page)
