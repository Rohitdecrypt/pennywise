"use client"
import React from "react";
import search from "../assets/search.png";
import Image from "next/image";
import { PiPencil } from "react-icons/pi";
import withPageLayout from "../hoc/withPageLayout";

const Webstore = () => {
  return (
    <>
    
        <div className="pr-5 w-full ">
          <div className="flex mt-5 w-full items-center">
            <div className="text-center text-[#000000] font-bold">
              WEBSTORE FUNCTIONS
            </div>
            <div className="border-t w-[80%] mx-auto"></div>
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
          <div className="mt-10 border border-black rounded-2xl py-3 px-2 overflow-x-auto">
            <div className="  px-10 overflow-x-auto overflow-y-auto max-h-[700px] ">
              <table className=" min-w-full text-[#000000] ">
                <thead className="sticky top-0 bg-[#fff] py-2">
                  <tr className="border-b border-[#BFBFBF]  text-sm">
                    <th className="w-[10%]  text-start py-3 font-normal">
                      Stock No.
                    </th>
                    <th className="w-[30%]  text-start py-3 font-normal">
                      Item Description
                    </th>
                    <th className="text-start py-3 font-normal">
                      Webstore Item URL
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
            <div className="w-[155px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000]">
              <PiPencil size={25} /> <span className="pl-3">Edit Items</span>
            </div>
            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
              Stock Details
            </div>
          </div>
        </div>

    </>
  );
}

export default Webstore
