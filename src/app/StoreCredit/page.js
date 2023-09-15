"use client";
import React, { useState } from "react";
import search from "../assets/search.png";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StatefulPinInput } from "react-input-pin-code";
import blackman from "../assets/blackman.png"
import Retailboard from "../Components/RetailDashboard/page";
import withPageLayout from "../hoc/withPageLayout";




const StoreCredit = () => {
  const [modal, setModal] = useState(false);
  const [International, setInternational] = useState(true);
  const [radioLoan, setRadioLoan] = useState(false);
  const [radioBuy, setRadioBuy] = useState(false);
  console.log("inside store page")

  return (
    <>
    <div className="flex w-full">

    <div>
      {/* <Retailboard/> */}
    </div>
      <div className="modal relative h-full w-full">
        <div className={`pr-5 w-full ${modal == true ? "blur-sm" : ""}`}>
          <div className="flex mt-5 w-full items-center">
            <div className="text-center text-[#000000] font-bold">
              VOUCHERS & STORE CREDITS
            </div>
            <div className="border-t w-[80%] mx-auto"></div>
          </div>
          <div className="relative">
            <input
              className="border border-custom-border-green rounded-full w-[40%] py-2 mt-5 px-12 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
              id="username"
              type="text"
              placeholder="Search"
            />
            <Image
              src={search}
              alt="Profile Image"
              className=" absolute w-5 bottom-2 left-4"
            />
          </div>
          <div className="mt-10 border border-black rounded-2xl py-3 px-2">
            <div className="  px-10 overflow-x-auto  overflow-y-auto max-h-[700px] ">
              <table className=" min-w-full text-[#000000] ">
                <thead className="sticky top-0 bg-[#fff] py-2">
                  <tr className="border-b border-[#BFBFBF]  text-sm">
                    <th className="  text-start py-3 font-normal min-w-[90px]">
                      Voucher
                    </th>
                    <th className=" text-start py-3 font-normal min-w-[90px]">
                      Credit
                    </th>
                    <th className="text-start py-3 font-normal w-[220px]">
                      Customer
                    </th>
                    <th className=" py-3 font-normal text-center">Type</th>
                    <th className="text-start py-3 font-normal w-[190px]">
                      Comment
                    </th>
                    <th className="text-start py-3 font-normal min-w-[90px]">
                      Total Amount
                    </th>
                    <th className="text-start py-3 font-normal min-w-[80px]">
                      Total Used
                    </th>
                    <th className="text-start py-3 font-normal min-w-[100px]">
                      Total Remaining
                    </th>
                    <th className="text-start py-3 font-normal min-w-[80px]">
                      Issued Date
                    </th>
                    <th className="text-start py-3 font-normal min-w-[80px]">
                      Expiry Date
                    </th>
                    <th className="text-center py-3 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#BFBFBF] text-sm text-[#A5A5A5] font-light">
                    <td className="py-3 ">000000</td>
                    <td className="py-3 ">dfergrg </td>
                    <td className="py-3  w-[220px] pr-3">
                      https://www.dhhdumcjkc.udcuhdho
                    </td>
                    <td className="py-3  w-[130px]">
                      <div className="h-7 border w-24 bg-[#a5a5a577] mx-auto rounded-full flex items-center justify-center text-black text-[13px]">
                        Store Credit
                      </div>
                    </td>
                    <td className="py-3  w-[190px] pr-3">
                      https://www.dhhdumcjkc.comments rfegrg dnabj jkfahgdfhg
                      jhfawuhhgh
                    </td>
                    <td>aa</td>
                    <td>aa</td>
                    <td>aa</td>
                    <td>aa</td>
                    <td>aa</td>
                    <td>
                      <div className="h-7 border w-24 mx-auto bg-[#a5a5a577] rounded-full flex items-center justify-center text-black text-[13px]">
                        Expired
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div
              className="w-[155px] h-[48px] border-black border rounded-md flex items-center justify-center text-[#000000] cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            >
              <AiOutlinePlus size={20} /> <span className="px-3">Add</span>
            </div>
            <div className="flex">
              <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center mr-4 text-[#fff]">
                Reprint
              </div>
              <div className="w-[155px] h-[48px] border-black border rounded-md bg-[#000] flex items-center justify-center text-[#fff]">
                Delete
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <div className="modal-container absolute h-screen w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="modal-body w-[732px] bg-[#fff] border rounded-md border-black relative  blur-none text-black">
              <RxCross2
                size={22}
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => {
                  setModal(false);
                }}
              />
              <div className="w-full h-20 border-b flex items-center justify-center ">
                <h2>New Voucher</h2>
              </div>
              <div className="flex justify-center align-middle m-auto md:flex-row flex-col mt-5">
                <button
                  className={
                    International
                      ? "bg-custom-green  text-white text-xl py-3 px-10 sm:mb-0 mb-4"
                      : "bg-custom-grey  text-custom-greenlight  text-xl py-3 px-10 sm:mb-0 mb-4"
                  }
                  onClick={() => {
                    setInternational(true);
                  }}
                >
                  New Voucher
                </button>
                <button
                  className={
                    International == false
                      ? "bg-custom-green text-white text-xl py-3 px-12"
                      : "bg-custom-grey  text-custom-greenlight text-xl py-3 px-12"
                  }
                  onClick={() => {
                    setInternational(false);
                  }}
                >
                  Store Credit
                </button>
              </div>
              <div>
                <div className="flex w-[84%] mx-auto items-center mt-8">
                  <div className="font-bold">Issued by</div>
                  <div>
                    <div className="flex ml-16">
                      <div className="flex">
                        <input
                          type="radio"
                          name="issuedBy"
                          id="expired"
                          className=" hidden"
                        />
                        <label htmlFor="expired">
                          <div
                            className={`mr-6 w-[155px] h-[42px] border border-black rounded-md text-sm flex items-center justify-center cursor-pointer ${
                              radioLoan == true
                                ? "bg-custom-green text-white"
                                : ""
                            }`}
                            onClick={() => {
                              setRadioLoan(true), setRadioBuy(false);
                            }}
                          >
                            Expired loan
                          </div>
                        </label>
                      </div>
                      <div>
                        {" "}
                        <input
                          type="radio"
                          name="issuedBy"
                          id="buy"
                          className="hidden"
                        />
                        <label htmlFor="buy">
                          <div
                            className={`w-[155px] h-[42px] border border-black rounded-md text-sm flex items-center justify-center cursor-pointer ${
                              radioBuy == true
                                ? "bg-custom-green text-white"
                                : ""
                            }`}
                            onClick={() => {
                              setRadioLoan(false), setRadioBuy(true);
                            }}
                          >
                            Buy
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border w-[451px] ml-48 relative">

                <Image src={blackman} alt="/" className="w-[30px] h-[30px] absolute right-[4px] top-[29px]"/>
                <input type='text' className="w-[451px] h-10 border  rounded-full mt-6 border-black " />
                </div>

            
                <div className="flex w-[84%] mx-auto items-center mt-6">
                  <div className="font-bold">Total Amount</div>
                  <div>
                    <div className="flex" style={{ marginLeft: "34px" }}>
                      <div className="flex">
                        <input
                          type="text"
                          id="price"
                          placeholder="$1000"
                          className="pl-6 border border-black h-10 rounded-full w-[140px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84%] mx-auto items-center mt-6">
                  <div className="font-bold">Voucher</div>
                  <div>
                    <div className="flex" style={{ marginLeft: "72px" }}>
                      <div className="flex">
                        <input
                          type="text"
                          id="Voucher"
                          placeholder=""
                          className="pl-6 border border-black h-10 rounded-full w-[302px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84%] mx-auto  mt-6">
                  <div className="font-bold">Comments</div>
                  <div>
                    <div className="flex" style={{ marginLeft: "53px" }}>
                      <div className="flex">
                        <textarea
                          id="Comments"
                          placeholder="Comments"
                          className="pl-3 border border-black  rounded-md w-[451px] h-[122px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84%] mx-auto  mt-4 items-center">
                  <div className="font-bold">Expiry Date</div>
                  <div>
                    <div className="flex" style={{ marginLeft: "47px" }}>
                      <div className="flex">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84%] mx-auto  mt-6 mb-5 items-center">
                  <div className="font-bold">Operator Pin</div>
                  <div>
                    <div className="flex" style={{ marginLeft: "28px" }}>
                      <div className="flex">
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
                    </div>
                  </div>
                </div>
                <div className="w-full h-24 border-t flex items-center justify-end ">
                <button className="h-10 border  w-[125px] rounded-md bg-[#F1F1F1] mr-4" onClick={()=>{setModal(false)}}>Cancel</button>
                <button className="h-10 border  w-[125px] rounded-md bg-[#000] text-[#fff] mr-8">Save</button>

              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default withPageLayout(StoreCredit);
