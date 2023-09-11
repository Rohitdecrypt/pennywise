"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/plogo.png";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function page() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="container max-w-[1800px] mx-auto border px-5">
      <div className="w-[900px]">
        <div className="flex items-center">
          {sidebar ? (
            <div className="w-[291px]  h-screen bg-[#369EA4] transition-all duration-300">
              <div className="flex justify-center">
                <Image className="w-[113px] h-[113px]" alt="/" src={logo} />
              </div>
              <div className="menu mt-4">
                <div className="">
                  <ul className="text-white font-semibold">
                    <li className="flex items-center px-5 hover:bg-[white] transition-all duration-100 hover:text-[#369EA4] p-2">
                      {" "}
                      <BiMenu size={30} />
                      <span className="pl-3">
                        <Link href="/">Main Menu</Link>
                      </span>{" "}
                    </li>
                  </ul>
                  <ul className="text-white font-semibold">
                    <li className="flex items-center px-5 hover:bg-[white] transition-all duration-100 hover:text-[#369EA4] p-2">
                      {" "}
                      <BiMenu size={30} />
                      <span className="pl-3">
                        <Link href="/">Main Menu</Link>
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[90px] transition-all duration-300"></div>
          )}

          <div
            className="side-btn w-[16px] h-[60px]  bg-[#369ea45e] rounded-r-lg flex items-center cursor-pointer"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <AiOutlineRight color="#369EA4" className="rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
}
