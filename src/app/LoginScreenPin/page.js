"use client";
import React, { useState } from "react";
import leftIcon from "../assets/ques.png";
import leftArrow from "../assets/leftarrow.png";
import logo from "../assets/logo.png";
import powered from "../assets/master.png";
import { StatefulPinInput } from "react-input-pin-code";
import Image from "next/image";
import Link from "next/link";
function PinLogIn() {
  const [values, setValues] = useState(["", "", ""]);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between pt-5 px-5">
          <Link href="/LoginScreenPassword">
            <Image
              alt="/"
              src={leftArrow}
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            />
          </Link>

          <Link href="/HelpCenter">
            <Image src={leftIcon} className="w-[2.5rem] h-[2.5rem]" />
          </Link>
        </div>

        <div className="flex justify-center items-center flex-col  mt-10">
          <form className="bg-[#FFFFFF] shadow-xl shadow-[#369EA4] w-[487px] h-[647px] flex flex-col items-center justify-center">
            <Image alt="/" src={logo} className="w-[410px] mx-auto mb-10" />
            <p className="text-center text-[#000000] mb-3">
              Please Enter Your Staff{" "}
              <span className="text-[#369EA4]">PIN</span>
            </p>
            <div className="flex justify-center">
              <StatefulPinInput
                length={6}
                size="lg"
                inputStyle={{
                  // border: "1px solid #369EA4",
                  borderRadius: "0px solid transparent",
                  background: "#EEF2F6",
                  boxShadow: "none",
                  margin: "0px 10px",
                }}
              />
            </div>

            <div className="mt-8">
              <Link href="/Dashboard">
                <button className="bg-custom-green text-white center flex justify-center hover:font-bold hover:bg-gradient-radial from-[#ffffff49] to-[#339FA4] m-auto text-xl py-3 px-7 mt-10 rounded-sm">
                  Login
                </button>
              </Link>
            </div>
          </form>
          <div className="mt-28 text-center">
            <div className="flex justify-center items-center mb-1">
              <p className="text-[#339FA4] mr-3">Powered By</p>
              <Image alt="/" src={powered} className="w-[40px] " />
            </div>
            <p className="text-[#339FA4]">
              For Pawnbrokers & Secondhand Dealers
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PinLogIn;
