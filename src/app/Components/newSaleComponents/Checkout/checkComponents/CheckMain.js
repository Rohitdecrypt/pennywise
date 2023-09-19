import React from "react";
import eftpos from "../../../../assets/eftpos.png";
import Credit from "../../../../assets/Credit.png";
import paypal from "../../../../assets/PayPal 1.png";
import Gift from "../../../../assets/gitfram.png";
import { GrRotateLeft } from "react-icons/gr";
import Image from "next/image";
export default function CheckMain() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="checkout m-2 ">
        <div className="text-center p-4 mt-[0px]">
          <h4 className="text-[35px] font-[700]">CHECKOUT</h4>
          <p className="text-[18px] font-[400]">Complete Your Purchase</p>
        </div>
        <div className="flex justify-center">
          <div className="border-2 relative min-h-[230px] w-[420px]  p-3 text-[#369EA4]">
            <div className="text-center text-[#000000]">
              <h5 className="text-[20px] font-[400]">Total Payable</h5>
              <h4 className="text-[38px] font-[700]">$740.00</h4>
            </div>

            <div className="h-14 w-5 rounded-r-lg border-t border-r border-b border-gray-300 absolute bg-white -left-[2px] top-[87px]"></div>
            <div className="h-14 w-5 rounded-l-lg border-t border-l border-b border-gray-300 absolute bg-white -right-[2px] top-[87px]"></div>
            <div className="h-2 absolute top-[110px] -left-[0px] w-[100%] py-2 bg-white">
              <div class="border-dashed border-2 border-black "></div>
              <div className="flex justify-between mx-3 mt-4 text-[#000000] text-[15px] font-[400] p-4">
                <div className="">
                  <h5 className="mb-1">Cash Rounding</h5>
                  <h5>Cash Total</h5>
                </div>
                <div className="">
                  <h5 className="mb-1">$0.00</h5>
                  <h5>$0.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            filter: "drop-shadow(0 3px 5px rgba(54, 158, 164, 0.7411764706))",
          }}
          className="bg-[#ffffff] w-full mx-auto px-10 py-6 mt-20"
        >
          <div className="button_group flex justify-center text-[#369EA4] pt-4 text-[16px] font-[400]">
            <button className="me-[1px] bg-[#EEF2F6] rounded-l-lg py-2.5 px-5 hover:bg-[#369EA4] hover:text-[#ffffff]">
              Single Payment
            </button>
            <button className="me-[1px] bg-[#EEF2F6]  py-2.5 px-5 hover:bg-[#369EA4] hover:text-[#ffffff]">
              Single Payment
            </button>
            <button className="me-[1px] bg-[#EEF2F6] rounded-r-lg py-2.5 px-5 hover:bg-[#369EA4] hover:text-[#ffffff]">
              Single Payment
            </button>
          </div>

          <div className="paymet_method mb-4">
            <p className="text-[18px] font-[700] text-center mt-6 mb-4">
              Select Payment Method
            </p>
            <div className="flex justify-center">
              <div className="border-[1px] rounded-[12px] border-[#000000] p-3 me-4 w-[149px] h-[84px]">
                <Image src={eftpos} />
              </div>
              <div className="border-[1px] rounded-[12px] border-[#000000]  p-3 me-4 w-[149px] h-[84px] flex items-center">
                <Image src={Credit} />
              </div>
              <div className="border-[1px] rounded-[12px] border-[#000000]  p-3  me-4 w-[149px] h-[84px] flex items-center">
                <Image src={paypal} />
              </div>
              <div className="border-[1px] rounded-[12px] border-[#000000]  p-3  me-4 w-[149px] h-[84px]">
                <Image src={Gift} />
              </div>
            </div>
          </div>
          <div className="border-b-2"></div>
          <div className="flex justify-center py-4 text-[25px] font-[400]">
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px] me-5">
              $5
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  me-5">
              $10
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  me-5">
              $15
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  me-5">
              $20
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  me-5">
              $50
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  me-5">
              $10
            </button>
            <button className="border-[1px] rounded-[12px] border-[#000000] w-[90px] h-[90px]  ">
              <GrRotateLeft className="m-[auto]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
