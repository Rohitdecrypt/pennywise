"use client"
import React, { useRef, useState } from "react";
import regbg from "../assets/Ellipse.png";
import Image from "next/image";
import dp from "../assets/profile.png";
import dpIcon from "../assets/profileIcon.png";
import changeIcon from "../assets/changeIcon.png";
import nextArr from "../assets/leftarrow.png";
import house from "../assets/Vectorhouse.png";
import lineIcon from "../assets/FAB _ Regularline.png";
import hutIcon from "../assets/FAB _ Regularhut.png";
import tableIcon from "../assets/FAB _ Regulartable.png";
import msgIcon from "../assets/FAB _ Regularmsg.png";
import Link from "next/link";

export default function RegisterScreen1() {
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [formData, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    email_newsletter: 0,
    phone: "",
    phone_newsletter: 0,
    day: "",
    month: "",
    year: "",
    notes: "",
  });

  const profilePicUploader = useRef(null);
  const getAllowedDocumentFormats = () => {
    return ["image/jpg", "image/jpeg", "image/png"];
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (getAllowedDocumentFormats().includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            console.log("reader.result.toString()",reader.result.toString())
            setSelectedProfileImage(reader.result.toString());
            setFormdata({
              ...formData,
              image: file,
            });
          }
        };
        reader.readAsDataURL(file);
      } else {
        if (profilePicUploader.current) {
          profilePicUploader.current.value = "";
        }
        console.log("Please upload a valid document");
      }
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className=" container mt-5 mx-auto">
        <div className="w-[4rem] h-[4rem] rounded-full bg-[#369EA4] flex justify-center items-center">
          <Image className="w-[2rem] h-[2rem] " alt="/" src={house} />
        </div>
        <div className="container mx-auto relative">
          <div className="h-[3rem]  w-[64%] mx-auto  flex items-center">
            <div className="h-[5px] border w-[100%] mx-auto ">
              <div className="h-[3px] w-[0] bg-[#369EA4]"></div>
            </div>
            <div className="absolute w-[65%] left-[17.5%]">
              <div className="icons  flex justify-between">
                <Image
                  src={lineIcon}
                  alt="/"
                  className="w-[2.8rem] h-[2.8rem]"
                />
                <Image
                  src={hutIcon}
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

      <div className="w-full mt-10 flex flex-wrap justify-center items-center container  mx-auto">
        <form>
          <div className="shadow-xl col-span-10 shadow-[#A1D2D5] max-w-[65rem] flex-wrap lg:flex-nowrap  flex justify-center content-center mx-auto pb-10 sm:pl-10  ">
            {/* left side */}
            <div className=" w-full sm:w-[30rem] h-auto">
              <div className="profile-left">
                <div
                  className="w-full md:w-[29rem] bg-no-repeat h-[16rem] flex justify-center bg-contain mx-auto"
                  style={{ backgroundImage: `url(${regbg.src})` }}
                ></div>
                <div className="h-[30rem] rounded-md bg-white w-[20rem] mx-auto mt-[-10rem] shadow-md shadow-[#A1D2D5] p-2">
                  <div className="rounded-md w-[full] h-[24rem]  relative">
                    <Image src={  selectedProfileImage ? selectedProfileImage : dp } alt="dp"  className="w-full h-[22rem]" height={100} width={100}/>
                    <div className="w-[4rem] h-[4rem] absolute left-[7.56rem] bottom-[.5rem]">
                      <Image
                        src={dpIcon}
                        alt="dpIcon"
                        className="w-full h-full "
                      />
                    </div>
                  </div>
                  <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-[#369EA4] mx-auto flex justify-center items-center">
                  <input
                          type="file"
                          id="profile_pic"
                          className="hidden"
                          ref={profilePicUploader}
                          onChange={handleProfileUpload}
                          onKeyDown={handleKeyDown}
                        />
                    <Image
                      className="h-[1.5rem] w-[1.8rem] cursor-pointer"
                      alt="/"
                      src={changeIcon}
                      onClick={(e) => {
                        e.preventDefault();
                        if (profilePicUploader.current) {
                          profilePicUploader.current.click();
                        }
                      }}
                    />
                  </div>
                  <p className="text-center mt-2">Change picture</p>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-full col-span-2 h-auto pt-5 pl-5 pr-3 ">
              <h1 className="text-center"> REGISTER</h1>
              <input
                type="text"
                placeholder="first name"
                className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[90%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
              <input
                type="text"
                placeholder="last name"
                className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[90%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
              <input
                type="text"
                placeholder="01"
                minLength={1}
                maxLength={2}
                className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[24%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
              <input
                type="text"
                placeholder="01"
                minLength={1}
                maxLength={2}
                className="bg-[#EEF2F6] mx-11 p-3 pl-5 placeholder-[#369EA4] rounded-full w-[24%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
              <input
                type="text"
                placeholder="1900"
                minLength={1}
                maxLength={4}
                className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[24%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
              <span className="pl-2 text-sm">29 yrs</span>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="email"
                  placeholder="abc@def.com"
                  className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[90%]  focus-visible:outline-[#A1D2D5]"
                />
                <input
                  type="checkbox"
                  id="email-notification"
                  className="w-5 h-5 mx-3"
                />
              </div>
              <p className="text-[#6A6A6A] text-[12px] px-4 pt-1">
                Check the box to opt out of receiving marketing emails.
              </p>

              <div className="flex justify-center items-center mt-4">
                <input
                  type="text"
                  placeholder="123-456-7890"
                  className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-full w-[90%]  focus-visible:outline-[#A1D2D5]"
                />
                <input
                  type="checkbox"
                  id="phone-notification"
                  className="w-5 h-5 mx-3"
                />
              </div>
              <p className="text-[#6A6A6A] text-[12px] px-4 pt-1">
                Check the box to opt out of receiving marketing emails.
              </p>

              <textarea
                rows={5}
                placeholder="comments"
                className="bg-[#EEF2F6] p-3 pl-5 placeholder-[#369EA4] rounded-xl w-[90%] mt-4 focus-visible:outline-[#A1D2D5]"
              />
            </div>
          </div>
        </form>
        {/* arrow btn */}
    
        <div className="my-5">
        <Link href='/RegisterScreen2'>
          <Image
            src={nextArr}
            alt="/"
            className="w-[3rem] h-[3rem] rotate-180 mx-auto md:ml-4  cursor-pointer"
          />
          </Link>
        </div>
        
      </div>
    </>
  );
}
