"use client"
import Image from "next/image";
import React, { useState } from "react";
import Hash2 from "../../assets/pencillll.png";
import Search from "../../assets/search.png";
import {AiOutlinePlus} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import Link from "next/link";


const page = () => {
  const [selectedRadio, setSelectedRadio] = useState("")

  return (
    <div className="w-full p-6">
     
      <div className="flex w-full justify-between items-center px-5 ">
        <p className="font-bold text-[20px] text-black">
          New Repair
        </p>
        <div className=" w-[88%] h-[1px] bg-[#BFBFBF] "></div>
        <div>
          <Image
            src={Hash2}
            width={34}
            height={34}
            alt="/"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full flex mt-8">
        <div className="w-full ">
            <div className="min-w-[60%]   max-w-[62%] ml-5">
            <label class="relative block w-full">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image
                  alt="/"
                  src={Search}
                  className="pl-2 w-[24px] h-[18px]"
                />
              </span>
              <input
                class="w-full flex-1 placeholder:text-[14px]  placeholder:font-[400] block placeholder:text-[#369EA4] border 
                    border-[#369EA4] rounded-full py-2 pl-12 pr-3 "
                placeholder="Customer"
                type="text"
                name="search"
              />
            </label>
            <label className="flex ml-8 mt-6" htmlFor="Internal">
            <input
              type="radio"
              className="hidden"
              id="Internal"
              name="Repairer"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="Internal"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                // setIsChecked(true);
              }}
            >
              {selectedRadio === "Internal" && (
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
            Internal Repairer
            </div>
          </label>
          <label className="flex mt-2 ml-8" htmlFor="External">
            <input
              type="radio"
              className="hidden"
              id="External"
              name="Repairer"
            />
            <div
              className="w-[14px] h-[14px] mt-[5px] me-3 border cursor-pointer border-[#6750A4] rounded-full flex items-center justify-center transition-all duration-300"
              id="External"
              onClick={(e) => {
                setSelectedRadio(e.target.id)
                // setIsChecked(true);
              }}
            >
              {selectedRadio === "External" && (
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
             External Repairer
              
            </div>
          </label>
          <label class="relative block mt-6 w-full">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image
                  alt="/"
                  src={Search}
                  className="pl-2 w-[24px] h-[18px]"
                />
              </span>
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
        <div className="w-full  flex justify-end" >
        <div className="min-w-[60%]   max-w-[62%] mr-5">
            <textarea placeholder="Sales Comments" className="w-full h-[320px] rounded-md p-2 border border-black" />
        </div>
        </div>
      </div>

        <div className="mt-10 border border-black rounded-2xl py-3 px-2 overflow-x-auto">
            <div className="  px-10 overflow-x-auto overflow-y-auto max-h-[400px] ">
              <table className=" min-w-full text-[#000000] ">
                <thead className="sticky top-0 bg-[#fff] py-2">
                  <tr className="border-b border-[#BFBFBF]  text-sm">
                    <th className="w-[10%]  text-start py-3 font-normal">
                      Stock No.
                    </th>
                    <th className="w-[30%]  text-start py-3 font-normal">
                      Description
                    </th>
                    <th className="text-start py-3 font-normal">
                      Item fault
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                  <tr className="border-b border-[#BFBFBF] text-sm">
                    <td className="py-3 font-light">000000</td>
                    <td className="py-3 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </td>
                    <td className="py-3 font-light">
                      https://www.examplewebsitename.com.au/Lorem-Ipsum-Dolor-Sit-Amet-Consectetur-Adipiscing-Elit.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between mt-5">
    <div className='flex'>


<div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] me-2">
              <AiOutlinePlus size={25} /> <span className="pl-3">Add</span>
            </div>
            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#fff] flex items-center justify-center text-[#000] me-2">
            <RxCross2 size={25} /> <span className="pl-3">Remove</span>
            </div>
    </div>
    <div className='flex'>

   
            
<Link href='/Repairs'>
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

export default page;
