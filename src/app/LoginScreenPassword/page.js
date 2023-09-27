import React from "react";
import leftIcon from "../assets/ques.png";
import logo from "../assets/logo.png";
import location from "../assets/shose.png";
import password from "../assets/key.png";
import powered from "../assets/master.png";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end pt-5 pr-6">
          <Link href="/HelpCenter">
            <Image src={leftIcon} className="w-[2.5rem] h-[2.5rem]" />
          </Link>
        </div>

        <div className="flex justify-center items-center flex-col px-5 mt-12">
          <form className="bg-[#FFFFFF] shadow-xl shadow-[#369EA4] w-[487px]  sm:px-6 py-24">
            <Image src={logo} className="w-[410px] mx-auto" />
            <div className="w-[345px] mx-auto">
              <div className="mb-5 mt-5 ">
                <label
                  className="block text-custom text-md  mb-1 pl-4 font-semibold"
                  for="username"
                >
                  Location
                </label>
                <div className="inline-block relative mx-auto bg-custom-grey rounded-[50px] py-3  focus:border-none focus:outline-none">
                  <select className="bg-transparent rounded-[50px] w-[345px] px-12   text-custom  focus:border-none focus:outline-none appearance-none">
                    <option className="pt-1 text-sm">Select</option>
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
                <Image
                  src={location}
                  className="w-[42px] -mt-[39px] pl-3 relative"
                />
              </div>
            </div>
            <div className="w-[345px] mx-auto">
              <div className="mb-4 mt-10">
                <label
                  className="block text-custom text-md mb-1 pl-4 font-semibold"
                  for="username"
                >
                  Password
                </label>
                <input
                  className="bg-custom-grey rounded-[50px] 0 w-[345px] py-3 px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md  placeholder-[#369EA4]"
                  id="username"
                  type="password"
                 
                />
                <Image src={password} className="w-[42px] -mt-[37px] pl-3" />
              </div>
            </div>
            <Link href="/LoginScreenPin">
              <p className="text-[12px] flex justify-end mr-12 underline cursor-pointer">
                Login with Pin?
              </p>
            </Link>
            <div className="mt-6">
              <button className="bg-custom-green hover:font-bold hover:bg-gradient-radial from-[#ffffff49] to-[#339FA4] text-white center flex justify-center m-auto text-xl py-3 px-7 mt-20 rounded-sm">
                Login
              </button>
            </div>
          </form>
          <div className="mt-28 text-center">
            <div className="flex justify-center items-center mb-1">
              <p className="text-[#339FA4] mr-3">Powered By</p>
              <Image src={powered} className="w-[40px] " />
            </div>
            <p className="text-[#339FA4]">
              For Pawnbrokers & Secondhand Dealers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
