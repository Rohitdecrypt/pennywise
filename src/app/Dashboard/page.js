"use client";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import logo from "../assets/PW_Logo.png";
import Pawan from "../assets/My Pawn Icon Logo 1.png";
import shose from "../assets/shose1.jpg";
import arrow from "../assets/arrow.jpg";
import settings from "../assets/settings.jpg";
import Vector from "../assets/Vector.png";
import { BiMenu } from "react-icons/bi";
import { BiUserCircle, BiCreditCard } from "react-icons/bi";
import { PiFoldersFill } from "react-icons/pi";
import Searchbar from "../Components/DashSearchBar/page";

import {
  PiCalculatorFill,
  PiPrinterFill,
  PiCaretCircleUpDownBold,
} from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";
import { PiMoneyFill } from "react-icons/pi";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineLocalPolice } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import SideUser from "../Components/SideUser/page";

export default function () {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="container max-w-full mt-3 flex mx-auto px-5">
      <div className="relative">
        <div className="flex items-center  ">
          {sidebar ? (
            <div
              style={{ width: isOpen ? "291px" : "88px" }}
              className=" bg-[#369EA4] transition-all duration-300 ease-in rounded-[24px] h-screen"
            >
              <div className="flex justify-center">
                <Image className="" alt="/" src={logo} />
              </div>
              <div className="menu">
                <div className="text-[#ffffff]">
                  <div className="flex items-center  gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BiMenu
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      {" "}
                      Main Menu
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BiUserCircle
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      New Customer
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <BiCreditCard
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    {/* <Image alt="/" src={CreditCard} className="img-fluid w-[24px]" style={{ margin: isOpen ? "0" : "auto" }} /> */}
                    <Link
                      href="/NewSale"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Retail Menu
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3  hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiFoldersFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Loan Bays & Locations
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiPrinterFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />

                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Reprint Receipts
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiCalculatorFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Till Balancing
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    {/* <Image alt="/" src={CaretCircle} className="img-fluid img w-[24px]" style={{ margin: isOpen ? "0" : "auto" }} /> */}
                    <PiCaretCircleUpDownBold
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer rotate-90"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Cash Till Transfer
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white  hover:text-[#369EA4] h-[48px] px-3">
                    <BsBarChartFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Loans To Retail
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiCalculatorFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Reporting
                    </Link>
                  </div>
                  <div className="flex items-center   gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <PiMoneyFill
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Todays Transactions
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-white hover:text-[#369EA4] h-[48px] px-3">
                    <MdOutlineLocalPolice
                      style={{ margin: isOpen ? "0" : "auto" }}
                      className="text-[28px] w-[30px] cursor-pointer"
                    />
                    <Link
                      href="//"
                      style={{ display: isOpen ? "block" : "none" }}
                      className="text-[14px] font-normal"
                    >
                      Police Centre
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
            {isOpen ? (
              <AiOutlineLeft color="#369EA4" />
            ) : (
              <AiOutlineRight color="#369EA4" />
            )}
          </div>
        </div>

        <div
          style={{
            width: isOpen ? "291px" : "88px",
            background: isOpen ? "#ffffff" : "none",
          }}
          className={`side_footer ${
            isOpen ? "w-[291px] bg-[#ffffff]" : "w-[88px]"
          } absolute bottom-0 rounded-[24px] `}
        >
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="footer-main"
          >
            <div className="flex justify-between">

            <div className="h-2 w-[96px] mt-2 bg-[#369ea465] ml-4  rounded-full"></div>
            <div className="h-2 w-[96px] mt-2 bg-[#369ea465] mr-4 rounded-full"></div>

            </div>
            <details className="">

              <summary className="list-none bg-[#ffffff] p-2 rounded-full absolute top-[-25px] left-[42%] group ">
                <Image
                  alt="/"
                  src={shose}
                  className="img-fluid border-[#369EA4] cursor-pointer "
                />
              </summary>
              <div className="pt-4 text-center text-[#369EA4] text-[18px] font-[700] leading-[1.2rem]">
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
              style={{ display: isOpen ? "block" : "none" }}
            />
            <div
              style={{
                display: isOpen ? "block" : "none",
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
                display: isOpen ? "block" : "none",
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
      <Searchbar />
      <SideUser />
    </div>
  );
}
