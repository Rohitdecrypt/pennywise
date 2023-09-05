import Image from "next/image";
import React from "react";
import house from "../assets/Vectorhouse.png";
import tickIcon from "../assets/FAB _ RegularTick.png";
import hutIcon from "../assets/FAB _ Regularhut.png";
import tableIcon from "../assets/FAB _ Regulartable.png";
import msgIcon from "../assets/FAB _ Regularmsg.png";
import empty from "../assets/profile.png";
import tick from "../assets/greentick.png";

export default function RegisterScreen3() {
  return (
    <div>
      <div className=" container mt-5 mx-auto">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#369EA4] flex justify-center items-center">
          <Image className="w-[2rem] h-[2rem] " alt="/" src={house} />
        </div>
        <div className="container mx-auto relative">
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
      <div className="container mt-10 border mx-auto">
        <div className="flex items-center justify-center flex-col md:flex-row border border-red-500">
          <div className="columns-3 border">11</div>
          <div className="border shadow-md flex justify-center flex-col lg:flex-row items-center bg-[#369EA4]">
            <div className="w-auto bg-[#fff] pt-10 pb-10">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="md:p-5 p-2">
                  <div>
                    <Image
                      className=" "
                      alt="/"
                      width={200}
                      height={200}
                      src={empty}
                    />
                  </div>
                </div>
                <div className="md:p-5 p-2">
                  <div>
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
              <div className="flex flex-col sm:flex-row items-center">
                <div className="md:p-5  p-2">
                  <div>
                    <Image
                      className=" "
                      width={200}
                      height={200}
                      alt="/"
                      src={empty}
                    />
                  </div>
                </div>
                <div className="md:p-5 p-2">
                  <div>
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
            <div className="p-5">
              <div className="bg-[#fff] p-5 rounded-md">
                <select className="bg-custom-grey rounded-full pl-6 mt-5 py-4 w-[280px] mx-auto text-custom text-md">
                  <option>ID Type</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="p-2 shadow-md mt-4">
                  <div>
                    <input
                      type="text"
                      placeholder="first name"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="first name"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="first name"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="first name"
                      className="bg-[#EEF2F6] py-3 pl-5 placeholder-[#369EA4] rounded-full mx-auto w-full  focus-visible:outline-[#A1D2D5]"
                    />
                  </div>
                  <p className="text-center text-md mt-5 font-semibold">
                    Visible on ID
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm">Address</p>
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
                        <p className="text-sm">Address</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-4 flex items-center">
                      <div>
                        <Image
                          src={tick}
                          alt="/"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm">Address</p>
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
                        <p className="text-sm">Address</p>
                      </div>
                    </div>
                  </div>
                  <button class="bg-custom-green rounded-sm  text-white center flex justify-center m-auto text-md py-3 px-7 mt-8 mb-4">
                Save
              </button>
                </div>
              </div>
            </div>
          </div>
          <div className="columns-3 border">11</div>
        </div>
      </div>
    </div>
  );
}
