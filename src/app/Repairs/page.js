import Image from 'next/image'
import React from 'react'
import search from "../assets/search.png";
import withPageLayout from '../hoc/withPageLayout';
import updown from "../assets/updown.png";
import {AiOutlineReload} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {MdDone} from 'react-icons/md'
import Link from 'next/link';




const page = () => {
  return (
   
          <div className="pr-5 w-full ">
          <div className="flex mt-5 w-full items-center">
            <div className="text-center text-[#000000] font-bold">
              Repairs
            </div>
            <div className="border-t w-[90%] mx-auto"></div>
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
          <div className="text-black text-[12px] underline w-[200px] cursor-pointer">All Repairs</div>
          </div>
          <div>
          <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
               Repair Report
              </div>
          </div>
          </div>

{/* middle */}
<div className="mt-10 border border-black rounded-2xl py-3 px-2 ">
        <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
          <table className=" min-w-full text-[#000000] overflow-x-auto  overflow-y-auto max-h-[700px]">
            <thead className="sticky top-0 bg-[#fff] py-2">
              <tr className="border-b border-[#BFBFBF]  text-sm">
                <th className="  text-center py-3 font-normal  px-2 min-w-[130px]">
                <div className="flex items-center justify-center">
                    Repair No.
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
                    Stock No.
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
                <th className="text-start py-3 font-normal min-w-[110px]">
                  Customer Name
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Type
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  <div className="flex items-center justify-center">
                    Status
                    <Image
                      alt="/"
                      src={updown}
                      className="h-[8px] w-[6px] ml-2"
                    />
                  </div>
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  Repairer
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  Collected On
                </th>
                <th className="text-start py-3 font-normal min-w-[110px]">
                  Notes
                </th>
                <th className="text-center py-3 font-normal min-w-[110px]">
                  Retail Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                <td className="py-3 text-center">000000</td>
                <td className="py-3 text-center">dfergrg </td>
                <td className="py-3 text-center">000000</td>
               

                <td className="py-3  w-[190px] text-start pr-3">
                  https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                  jhfawuhhgh sdf hifcjjdj hnaijfjR OPJIfeifj fnaoriujrg fjifgjar
                  h
                </td>
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
                <td className="py-3 text-center w-[130px]">
                  <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                    In progress
                  </div>
                </td>
                <td className="text-center">aa</td>
                <td className="text-center">aa</td>
                <td className="">aa</td>
                <td className="text-center">aa</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
{/* middle ends */}

<div className="flex justify-between mt-5">
    <div className='flex'>

<div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
              <MdDone size={25} /> <span className="pl-3">Collected</span>
            </div>
<div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] mx-2">
              <RxCross2 size={25} /> <span className="pl-3">Cancel</span>
            </div>
<div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff] me-2">
              <AiOutlineReload size={25} /> <span className="pl-3">Return</span>
            </div>
            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#fff] flex items-center justify-center text-[#000] me-2">
              Return Other
            </div>
    </div>
    <div className='flex'>

    <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#fff] flex items-center justify-center text-[#000] me-2">
              Add Repairer
            </div>
            <Link href='./Repairs/NewRepair'>

            <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
            New Repairer
            </div>
            </Link>
    </div>
          </div>
          </div>
    
  )
}

export default withPageLayout(page)