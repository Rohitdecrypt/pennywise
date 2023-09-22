"use client"
import React, { useRef, useState } from "react";
import house from "../assets/Vectorhouse.png";
import tickIcon from "../assets/FAB _ RegularTick.png";
import msgIcon from "../assets/FAB _ Regularmsg.png";
import Image from "next/image";
import Link from "next/link";
import left from "../assets/leftarrow.png";
import success from "../assets/sucess.png"

export default function Page() {

  return (
    <div>
      <div className=" container mt-5 mx-auto">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#369EA4] flex justify-center items-center ml-2">
          <Image className="w-[2rem] h-[2rem] " alt="/" src={house} />
        </div>
        <div className="container mx-auto max-w-[1140px] relative">
          <div className="h-[3rem]  w-[64%] mx-auto  flex items-center">
            <div className="h-[5px] border w-[100%] mx-auto ">
              <div className="h-[3px] w-[99.99%] bg-[#369EA4]"></div>
            </div>
            <div className="absolute w-[65%] left-[17.5%]">
              <div className="icons  flex justify-between">
                <Image
                  src={tickIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={tickIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={tickIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={tickIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 mx-auto">
        <div className="flex items-center justify-center flex-col md:flex-row ">
          <div className="columns-3 flex justify-center ">
            <Link href="/RegisterScreen3">
              <Image
                src={left}
                alt="/"
                className="w-[3rem] h-[3rem]  cursor-pointer mx-5 my-4"
              />
            </Link>
          </div>
          <div className="border shadow-md rounded-sm flex items-center justify-center flex-col lg:flex-row">
            <div className="bg-[#369EA4] sm:p-8 p-3 ">
              <div className="sm:p-4 p-2 bg-[#fff] h-[35rem]">
                <p className="text-3xl text-center mt-4 font-bold">SURVEY</p>
                <p className="text-center">How did you hear about us?</p>
                <div className="inline-block relative bg-custom-grey rounded-full mt-10 w-[260px] sm:w-[310px] py-3  focus:border-none focus:outline-none">
                  <select className="bg-transparent rounded-[50px] py- px-5 w-full  text-custom  focus:border-none focus:outline-none appearance-none">
                    <option className="pt-1 text-sm ">Select</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-1 h-full flex items-center px-4 text-custom">
                    <svg
                      className="fill-current h-5 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <button className="bg-custom-green rounded-sm hover:font-bold hover:bg-gradient-radial from-[#ffffff49] to-[#339FA4] text-white center flex justify-center m-auto text-md py-3 px-7 mt-64">
                Continue
              </button>
              </div>
            </div>
            <div className="sm:px-20 my-10 flex flex-col justify-center items-center">
                <div className="h-[10rem] w-[10rem] sm:w-[13rem] sm:h-[13rem] flex justify-center items-center ">
                <Image src={success}  alt="/" className=""/>

                </div>
                <p className="text-3xl text-center mt-4 font-bold">Success</p>
                <p className="text-center">How did you hear about us?</p>
            </div>
          </div>
          <div className="columns-3  flex ">
            <Link href="LoginScreenPassword">
              <Image
                src={left}
                alt="/"
                className="w-[3rem] h-[3rem] rotate-180 cursor-pointer mx-5 my-4"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Link href='/LoginScreenPassword'>

        <p className="underline text-center mt-8 cursor-pointer">skip</p>
        </Link>
      </div>
    </div>
  );
}
