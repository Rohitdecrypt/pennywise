"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";
import Vector2 from "../../assets/Vector2.png";
import Image from "next/image";
function Searchbar() {
  const [inputVisible, setInputVisible] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);
  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);

    setIconRotation(iconRotation === 0 ? 180 : 0);
  };
  return (
    <div className=" Searchbar relative h-screen ms-2 w-full">
      <div className=" flex items-center  ">
        <div className=" relative w-full max-w-[600px]">
          <input
            type="email"
            className="form-control border-[#369EA4] border-[2px] rounded-full placeholder-[#369EA4] pl-[33px] ps-4 flex-1 max-w-[600px] w-full"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2.5  ">
            <AiOutlineSearch
              style={{ fill: "#369EA4", width: "1em", height: "1em" }}
              className=""
            />
          </div>
        </div>
        <Image alt="/" src={Vector2} className="img-fluid ms-2" />
      </div>

      <div className=" Search_footer  absolute bottom-[50px] max-[1100px]:hidden w-full ">
        <div className="text-[#369EA4] mb-2">
          <h4 className="text-[16px] font-[500] ">Last Transaction</h4>
        </div>
        <div className="flex text-[#086F76] text-[12px] font-[500]">
          <div className="mr-3">
            <label htmlFor="type" className="">
              Type
            </label>
            <input
              type="text"
              className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
              id="type"
              placeholder=""
            />
          </div>
          <div className="mr-3">
            <label htmlFor="Time" className="">
              Time
            </label>
            <input
              type="text"
              className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
              id="Time"
              placeholder=""
            />
          </div>
          <div className="mr-3">
            <label htmlFor="Amount" className="">
              Amount
            </label>
            <input
              type="text"
              className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
              id="Amount"
              placeholder=""
            />
          </div>
          <div className="mr-3">
            <label htmlFor="Name" className="">
              Name
            </label>
            <input
              type="text"
              className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
              id="Name"
              placeholder=""
            />
          </div>
          <div className="mr-3 w-full">
            <label htmlFor="Reference" className="">
              Reference
            </label>
            <input
              type="text"
              className=" bg-[#edeeee] h-8 mt-2 px-3 w-full rounded-full"
              id="Reference"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div
        className={`hidden max-[1100px]:block absolute bottom-[20px] pb-3 flex-1 w-[100%] `}
      >
        <div className="">
          <button
            className="bg-[#369EA4] py-2 px-3 rounded-lg text-[#ffffff] flex items-center"
            onClick={toggleInputVisibility}
          >
            <div className={`me-2`}>Last Transaction</div>
            <div className="rotate-icon">
              <BsChevronUp
                style={{ transform: `rotate(${iconRotation}deg)` }}
              />
            </div>
          </button>
        </div>
        {inputVisible && (
          <div className="mt-4" >
            <div className="flex text-[#8E8F8F] text-[12px] font-[500] ">
              <div className="mr-3 flex flex-col">
                <label htmlFor="type" className="">
                  Type
                </label>
                <input
                  type="text"
                  className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
                  id="type"
                  placeholder=""
                />
              </div>
              <div className="mr-3 flex flex-col">
                <label htmlFor="Time" className="">
                  Time
                </label>
                <input
                  type="text"
                  className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
                  id="Time"
                  placeholder=""
                />
              </div>
              <div className="mr-3 flex flex-col">
                <label htmlFor="Amount" className="">
                  Amount
                </label>
                <input
                  type="text"
                  className=" bg-[#edeeee] h-8 mt-2 px-3 max-w-[136px] rounded-full"
                  id="Amount"
                  placeholder=""
                />
              </div>
              <div className=" flex flex-col w-full">
                <label htmlFor="Name" className="">
                  Name
                </label>
                <input
                  type="text"
                  className=" bg-[#edeeee] h-8 mt-2 px-3 w-full rounded-full"
                  id="Name"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mr-3 flex flex-col w-full">
              <label
                htmlFor="Reference"
                className="text-[#8E8F8F] text-[12px] font-[500]"
              >
                Reference
              </label>
              <input
                type="text"
                className=" bg-[#edeeee] h-8 mt-2 px-3 w-full rounded-full"
                id="Reference"
                placeholder=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
