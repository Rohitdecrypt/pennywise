"use client";
import React, { useState } from "react";
import logo from "../../assets/hut.png";
import { AiOutlineShoppingCart, AiOutlineStock } from "react-icons/ai";
import { BsFillTagFill, BsBarChartFill } from "react-icons/bs";
import { BiSolidLayer, BiSolidBinoculars,BiDesktop } from "react-icons/bi";
import { MdOutlineSpaceBar } from "react-icons/md";
import { IoMdHammer } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { PiTicketFill } from "react-icons/pi";
// import { FaComputer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import shose from "../../assets/shose1.jpg";
import Pawan from "../../assets/My Pawn Icon Logo 1.png";
import arrow from "../../assets/arrow.jpg";
import settings from "../../assets/settings.jpg";
import Vector from "../../assets/Vector.png";

const Retailboard = () => {
  const [IsOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!IsOpen);
  const [Sidebar, setSidebar] = useState(true);
  return (
    <div className="mt-3 flex px-5">
      <div className="relative">
        <div className="flex items-center  ">
          {Sidebar ? (
            <div
              style={{ width: IsOpen ? "291px" : "88px" }}
              className=" bg-[#369EA4] transition-all duration-300 ease-in rounded-[24px] h-screen"
            >
              <div className="flex justify-center mt-5">
                <Image className="cursor-pointer w-[76px] h-[76px]" alt="/" src={logo} />
              </div>
              <div className="menu mt-5">
                <div className="text-[#ffffff]">
                  <div className="flex items-center  gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <AiOutlineShoppingCart
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/NewSale"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      {" "}
                      New Sale
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BsFillTagFill
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Stock Label Printing
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BiSolidLayer
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />

                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Batch Stock Pricing
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3  hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <MdOutlineSpaceBar
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Stock Transfer
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <IoMdHammer
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />

                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Repairs
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BsBarChartFill
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Todays Sale
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <GiReceiveMoney
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer "
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Refunds and Cancellations
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white  hover:text-[#369EA4] h-[48px] px-3">
                    <BiSolidBinoculars
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Stock Enquiry
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <AiOutlineStock
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      New Stock Purchase
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <TbReportAnalytics
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/hello"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Stocktakes
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiTicketFill
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/StoreCredit"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Voucher and Store Credits
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BiDesktop
                      style={{ margin: IsOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                       href="/Webstore"
                      style={{ display: IsOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Webstore Functions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" transition-all duration-400"></div>
          )}

          <div
            onClick={toggle}
            className="side-btn w-[16px] h-[60px]  bg-[#369ea45e] rounded-r-lg flex items-center cursor-pointer"
          >
            {IsOpen ? (
              <AiOutlineLeft color="#369EA4" />
            ) : (
              <AiOutlineRight color="#369EA4" />
            )}
          </div>
        </div>

        <div
          style={{
            width: IsOpen ? "291px" : "88px",
            background: IsOpen ? "#ffffff" : "none",
          }}
          className={`side_footer ${
            IsOpen ? "w-[291px] bg-[#ffffff]" : "w-[88px]"
          } absolute bottom-0 rounded-[24px] `}
        >
          <div
            style={{ display: IsOpen ? "block" : "none" }}
            className="footer-main"
          >
            <div className="flex justify-between">
              <div className="h-2 w-[96px] mt-2 bg-[#369ea465] ml-4  rounded-full"></div>
              <div className="h-2 w-[96px] mt-2 bg-[#369ea465] mr-4 rounded-full"></div>
            </div>
            <details class="">
              <summary class="list-none bg-[#ffffff] p-2 rounded-full absolute top-[-25px] left-[42%] group ">
                <Image
                  alt="/"
                  src={shose}
                  className="img-fluid border-[#369EA4] cursor-pointer "
                />
              </summary>
              <div class="pt-4 text-center text-[#369EA4] text-[18px] font-[700] leading-[1.2rem]">
                <p className=" ">
                  Cash Convenience <br />
                  Macquarie Fields
                </p>
              </div>
            </details>
          </div>
          <div className="Side_icon flex items-center justify-center mb-5 mt-8">
            <Image
              alt="/"
              src={Pawan}
              className="img-fluid mr-1 cursor-pointer"
              style={{ display: IsOpen ? "block" : "none" }}
            />
            <div
              style={{
                display: IsOpen ? "block" : "none",
                filter:
                  "drop-shadow(0 3px 5px rgba(54, 158, 164, 0.7411764706))",
              }}
              className="bg-[#ffffff] cursor-pointer p-2 rounded-full "
            >
              <Image alt="/" src={arrow} className="img-fluid " />
            </div>
            <div
              style={{
                filter:
                  "drop-shadow(0 3px 5px rgba(54, 158, 164, 0.7411764706))",
              }}
              className="bg-[#ffffff] p-2 cursor-pointer rounded-full mx-2"
            >
              <Image alt="/" src={settings} className="img-fluid" />
            </div>
            <div
              style={{
                display: IsOpen ? "block" : "none",
                filter:
                  "drop-shadow(0 3px 5px rgba(54, 158, 164, 0.7411764706))",
              }}
              className="bg-[#ffffff] cursor-pointer p-2 rounded-full "
            >
              <Image alt="/" src={Vector} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Retailboard;
