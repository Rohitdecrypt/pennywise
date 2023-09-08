"use client";
import React, { useState } from "react";
import rightIcon from "../assets/leftarrow.png";
import leftIcon from "../assets/aarow.png";
import search from "../assets/search.png";
import Image from "next/image";
import Link from "next/link";
import house from "../assets/Vectorhouse.png";
import tickIcon from "../assets/FAB _ RegularTick.png";
import hutIcon from "../assets/FAB _ Regularhut.png";
import tableIcon from "../assets/FAB _ Regulartable.png";
import msgIcon from "../assets/FAB _ Regularmsg.png";

export default function RegisterScreen2() {
  const [International, setInternational] = useState(true);
  return (
    <>
      <div className=" container mt-5 mx-auto">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#369EA4] flex justify-center items-center">
          <Image className="w-[2rem] h-[2rem] " alt="/" src={house} />
        </div>
        <div className="container mx-auto relative">
          <div className="h-[3rem]  w-[64%] mx-auto  flex items-center">
            <div className="h-[5px] border w-[100%] mx-auto ">
              <div className="h-[3px] w-[33.33%] bg-[#369EA4]"></div>
            </div>
            <div className="absolute w-[65%] left-[17.5%]">
              <div className="icons  flex justify-between">
                <Image
                  src={tickIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={hutIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={tableIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={msgIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-1/12 flex items-center justify-center">
            <Link href="/RegisterScreen1">
              <Image src={rightIcon} alt="previos button" className="w-auto" />
            </Link>
          </div>
          <div className="w-[1140px] mx-auto">
            <div className="bg-white shadow-md rounded px-8 pt-8 pb-10 mt-5">
              <div className="flex justify-center align-middle m-auto md:flex-row flex-col">
                <button
                  className={
                    International
                      ? "bg-custom-green  text-white text-2xl py-3 px-12 sm:mb-0 mb-4"
                      : "bg-custom-grey  text-custom-greenlight  text-2xl py-3 px-12 sm:mb-0 mb-4"
                  }
                  onClick={() => {
                    setInternational(true);
                  }}
                >
                  National
                </button>
                <button
                  className={
                    International == false
                      ? "bg-custom-green text-white text-2xl py-3 px-12"
                      : "bg-custom-grey  text-custom-greenlight text-2xl py-3 px-12"
                  }
                  onClick={() => {
                    setInternational(false);
                  }}
                >
                  International
                </button>
              </div>
              {International ? (
                <form className="w-[90%] mx-auto">
                  <div className="relative w-[90%] mx-auto mb-5">
                    <input
                      className="border border-custom-border-green rounded-full w-full py-3 mt-10 px-16 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                      id="username"
                      type="text"
                      placeholder="Search"
                    />
                    <Image
                      src={search}
                      alt="Profile Image"
                      className="w-auto absolute bottom-3 left-4"
                    />
                  </div>

                  <div className=" [w-80%]">
                    <div className="mb-5 w-full mx-auto">
                      <div className="w-[90%] mx-auto">
                        <input
                          className="bg-custom-grey rounded-full w-full max-w-[667px] py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#369EA4]"
                          id="username"
                          type="text"
                          placeholder="Property Name"
                        />
                      </div>
                    </div>

                    <div className=" flex w-[90%] mx-auto align-middle m-auto md:flex-row flex-col">
                      <input
                        className="bg-custom-grey rounded-full  w-full max-w-[212px] py-3 mr-3 px-6 mb-5 md:mb-0 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                        id="username"
                        type="text"
                        placeholder="Street No."
                      />
                      <input
                        className="bg-custom-grey rounded-full w-full max-w-[440px] py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                        id="username"
                        type="text"
                        placeholder="Street Name"
                      />
                    </div>

                    <div className=" flex w-[90%] mx-auto align-middle relative md:flex-row flex-col">
                      <select className="bg-custom-grey rounded-full  pl-6 mt-5 mr-3   py-3 w-full max-w-[212px] text-custom text-md appearance-none">
                        <option>Street Type</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      
                    <svg
                      className="fill-current h-5 w-6 absolute top-[35px] left-[170px] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  

                 

                      <input
                        className="bg-custom-grey rounded-full mt-5  w-full max-w-[440px] py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                        id="username"
                        type="text"
                        placeholder="Suburb"
                      />
                    </div>

                    <div className="mb-5 mt-5 flex w-[90%] mx-auto">
                      <input
                        className="bg-custom-grey rounded-full  w-full max-w-[212px]  py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                        id="username"
                        type="text"
                        placeholder="State"
                      />
                    </div>

                    <div className="mb-6 flex w-[90%] mx-auto">
                      <input
                        className="bg-custom-grey min-w-[200px] rounded-full w-full max-w-[212px] py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                        id="username"
                        type="text"
                        placeholder="Postcode"
                      />
                    </div>
                    <button className="bg-custom-green rounded-sm hover:font-bold hover:bg-gradient-radial from-[#ffffff49] to-[#339FA4] text-white center flex justify-center m-auto text-xl py-3 px-7 mt-20">
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <form className="w-[90%] mx-auto">
                  <div className="relative w-[90%] mx-auto mb-5">
                    <input
                      className="border border-custom-border-green rounded-full w-full py-3 mt-10 px-16 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
                      id="username"
                      type="text"
                      placeholder="Search"
                    />
                    <Image
                      src={search}
                      alt="Profile Image"
                      className="w-auto absolute bottom-3 left-4"
                    />
                  </div>

                  <div className=" [w-80%]">
                    <div className="mb-5 w-full mx-auto">
                      <div className="w-[90%] mx-auto">
                        <input
                          className="bg-custom-grey rounded-full w-full py-3 px-6 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#369EA4]"
                          id="username"
                          type="text"
                          placeholder="Full Address"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="w-1/12 flex items-center justify-center">
            <Link href="RegisterScreen3">
              <Image src={leftIcon} alt="previos button" className="w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
2;
