import React from "react";
import Check from "../assets/check.png";
import Search from "../assets/search.png";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import Image from "next/image";
import withPageLayout from "../hoc/withPageLayout";
const Stockenquiry = () => {
  return (
   
      <div className="pr-5 w-full h-full mt-5">
        <div className="flex items-center ">
          <h5 className="text-[20px] font-[700] text-black">Stock Enquiry</h5>
          <div className=" flex-1 1 mx-3">
            {" "}
            <div className=" border-1 border-[#BFBFBF]"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[17px]">
          <div className="flex items-center">
            <label class="relative block w-[642px]">
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
                placeholder="Stock No. / Ref No. / Status / Description"
                type="text"
                name="search"
              />
            </label>
            <div className="flex  justify-center ml-5">
              <Image alt="/" src={Check} className="w-4 h-4" />
              <h6 className="text-[12px] font-[400] text-black">On Hand Stock Only</h6>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <h5 className="text-[16px] font-[800] mr-2 text-black">Locality:</h5>
              <button className="border-1 border-[#000000] px-[33px] text-[14px] font-[500] py-[8px] text-black rounded-full">
                MR
              </button>
            </div>
            <div className="flex items-center">
              <h5 className="text-[16px] font-[800] mr-2 text-black">Origin:</h5>
              <button className="border-1 border-[#000000] px-[33px] text-[14px] text-black font-[500] py-[8px] rounded-full">
                MR
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[28px] border border-black rounded-2xl py-3 px-2 h-[610px]">
          <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
            <table className=" min-w-full text-[#000000]">
              <thead className="sticky top-0 bg-[#fff] py-2">
                <tr className="border-b border-[#BFBFBF]  text-sm">
                  <th className="  text-start py-3 font-normal min-w-[20px] ">
                    <div className="">Locality</div>
                  </th>
                  <th className="  text-start py-3  min-w-[20px]  text-[14px] font-normal">
                    <div className="">Origin</div>
                  </th>
                  <th className="text-start py-3 font-normal  min-w-[20px] ">
                    <div className="flex justify-start items-center">
                      Stock No.
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                  <th className="  text-start py-3 font-normal min-w-[20px] ">
                    <div className="">On Hand</div>
                  </th>
                  <th className=" py-3 font-normal text-start">Description</th>
                  <th className="text-start py-3 font-normal w-[20px]">
                    <div className="flex justify-center items-center">
                      Cost Price
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                  <th className="text-start py-3 font-normal min-w-[20px]">
                    <div className="flex justify-center items-center">
                      Retail Price
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[20px]  ">
                    <div className="flex justify-center items-center">
                      Date Aquired
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[20px]  ">
                    <div className="flex justify-center items-center">
                      Supplier Ref
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-3 font-normal min-w-[20px]  ">
                    <div className="flex justify-center items-center">
                      Item Status
                      <span>
                        <BiSolidUpArrow className="text-[8px] ml-1" />
                        <BiSolidDownArrow className="text-[8px] ml-1" />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                  <td className="py-3 text-start w-[70px]">
                    <button className="bg-[#D4D4D4] py-[1px] px-[15px] rounded-full text-[14px] font-[400] text-[#000000]">
                      MR
                    </button>
                  </td>
                  <td className="py-3 text-start w-[70px]">
                    <button className="bg-[#D4D4D4] py-[1px] px-[15px] rounded-full text-[14px] font-[400] text-[#000000]">
                      MR
                    </button>
                  </td>
                  <td className="py-3  w-[88px] text-start">0000000</td>

                  <td className="py-3  w-[75px] pr-3">
                    <td className="py-3 text-start w-[10px]">
                      <button className="bg-[#D4D4D4] py-[4px] px-[19px] rounded-full ">
                        <BsCheck2 className="w-[16px] h-[14px] fill-[#000000]" />
                      </button>
                    </td>
                  </td>
                  <td className="py-3 text-start w-[300px]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                     Integer vel urna quis tellus interdum semper.
                    </p>
                  </td>
                  <td className="py-3 text-center w-[90px]">$0000.00 </td>
                  <td className="py-3 text-center w-[90px]">$0000.00 </td>
                  <td className="py-3 text-center w-[95px]">00/00/0000</td>
                  <td className="py-3 text-center w-[90px]">0000000</td>
                  <td className="py-3 text-center w-[90px]">
                    <button className="bg-[#D4D4D4] py-[2px] px-[20px] rounded-full text-[14px] font-[400] text-[#000000]">
                      In Store
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

  );
}
export default withPageLayout(Stockenquiry)
