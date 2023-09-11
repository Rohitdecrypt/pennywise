import Image from "next/image";
import React from "react";
import house from "../assets/Vectorhouse.png";
import tickIcon from "../assets/FAB _ RegularTick.png";
import left from "../assets/leftarrow.png";
import tableIcon from "../assets/FAB _ Regulartable.png";
import msgIcon from "../assets/FAB _ Regularmsg.png";
import empty from "../assets/profile.png";
import tick from "../assets/greentick.png";
import Link from "next/link";

export default function RegisterScreen3() {
  return (
    <div>
      <div className=" container mt-5  mx-auto">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#369EA4] flex justify-center items-center">
          <Image className="w-[2rem] h-[2rem] " alt="/" src={house} />
        </div>
        <div className="container mx-auto max-w-[1140px] relative">
          <div className="h-[3rem]  w-[64%] mx-auto  flex items-center">
            <div className="h-[5px] border w-[100%] mx-auto ">
              <div className="h-[3px] w-[66.66%] bg-[#369EA4]"></div>
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
      <div className="container  mt-10 mx-auto">
        <div className="flex items-center justify-center flex-col md:flex-row ">
          <div className="columns-3 flex justify-center ">
            <Link href="/RegisterScreen2">
            <Image src={left} alt='/' className="w-[3rem] h-[3rem]  cursor-pointer mx-5 my-4" />
            </Link>
  
          </div>
          <div className=" shadow-md flex justify-center flex-col lg:flex-row items-center ">
            <div className="w-auto bg-[#fff] pt-10 pb-10">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="">
                  <div className="pl-5 pb-5">
                    <Image
                      
                      alt="/"
                      width={200}
                      height={200}
                      src={empty}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="pl-5 pb-5 pr-5">
                    <Image
                     
                      width={200}
                      height={200}
                      alt="/"
                      src={empty}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center">
                <div className="">
                  <div className="pl-5 pb-5 ">
                    <Image
                      className=" "
                      width={200}
                      height={200}
                      alt="/"
                      src={empty}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="pl-5 pb-5 pr-5">
                    <Image
                      className=" "
                      width={200}
                      height={200}
                      alt="/"
                      src={empty}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 pb-8 pl-10 pr-10 bg-[#369EA4]">
              <div className="bg-[#fff] p-5 rounded-md">
              <div className="inline-block relative bg-custom-grey rounded-full mt-10 w-[260px] sm:w-[310px] py-3  focus:border-none focus:outline-none">
                  <select className="bg-transparent rounded-[50px] py- px-5 w-full  text-custom  focus:border-none focus:outline-none appearance-none">
                    <option className="pt-1 text-sm ">Id Type</option>
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
                <div className="p-3 shadow-custom-box-shadow mt-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Issued By :"
                      className="bg-[#EEF2F6]  py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="ID Name:"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="ID Number:"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="ID Expiry:"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <p className="text-center text-md mt-5 font-semibold">
                    Visible on ID
                  </p>

                  <div className="flex items-center w-[90%] mx-auto justify-between">
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm w-[64px]">Address</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm w-[64px]">Photo</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center w-[90%] mx-auto justify-between">
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm w-[64px]">Signature</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm w-[64px]" >Birthdate</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-custom-green rounded-sm hover:font-bold hover:bg-gradient-radial from-[#ffffff49] to-[#339FA4] text-white center flex justify-center m-auto text-md py-3 px-7 mt-8 mb-4">
                Save
              </button>
                </div>
              </div>
            </div>
          </div>
          <div className="columns-3  flex ">
            <Link href="RegisterScreen4">

          <Image src={left} alt='/' className="w-[3rem] h-[3rem] rotate-180 cursor-pointer mx-5 my-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <Link href='/RegisterScreen4'>

        <p className="underline text-center mt-8 cursor-pointer">skip</p>
        </Link>
      </div>
    </div>
  );
}
