import React from "react";
import search from "../assets/search.png";
import Image from "next/image";

export default function () {
  return (
    <div className="container mx-auto border">
      <div className="flex mt-5 w-full items-center">
        <div className="text-center text-[#000000] font-bold">
          WEBSTORE FUNCTIONS
        </div>
        <div className="border-t w-[80%] mx-auto"></div>
      </div>
      <div className="relative">
        <input
          className="border border-custom-border-green rounded-full w-[40%] py-2 mt-5 px-16 text-custom leading-tight focus:outline-none focus:shadow-outline text-md placeholder-[#369EA4]"
          id="username"
          type="text"
          placeholder="Search"
        />
        <Image
          src={search}
          alt="Profile Image"
          className="w-auto absolute bottom-3 left-4"
        />
      </div>
    </div>
  );
}
