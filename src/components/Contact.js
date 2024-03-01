import React, { useState } from "react";
import ContactForm from "./ContactForm";
import MedicineBro from "../assests/Medicine-bro 1.svg";
import socialLink from "../assests/social links.svg";
import ContactDetails from "../assests/contact details.png";
import { MdLocalPhone, MdMessage } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import number from "../assests/number.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import backgroundImg from "../assests/ContactUsBackground.svg";

const ContactUs = () => {
 
  return (
    <div
      id="ContactUs"
      className="lg:flex justify-center relative bg-[#E1E0E0] lg:bg-white   w-full gap-x-[4rem] items-center"
    >
      <img className="z-20   " src={MedicineBro} />

      <div className="flex mt-10 lg:mt-0  border-l-2 z-20  border-[#7C7B7B] flex-col w-full items-start">
        <div className="lg:bg-white lg:flex hidden    lg:w-[20rem] h-[3.8rem] rounded-r-full">
          <div className="flex flex-row-reverse mr-[2rem] items-end ml-10  text-[#0529BB] font-medium ">
            <p className=" font-poppins font-medium lg:text-[38px]">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full bg-[#E1E0E0] lg:bg-none  lg:w-[48rem]  items-center">
          <div className="bg-white  lg:hidden -ml-[9rem] mt-  lg:w-[20rem] h-[3.8rem] rounded-r-full">
            <div className="flex flex-row-reverse mr-[2rem] ml-[5rem] lg:ml-0 items-end text-[#0529BB] font-medium ">
              <p className=" font-poppins font-medium w-[12rem] text-[2rem] lg:text-[38px]">
                Contact Us
              </p>
            </div>
          </div>

          <ContactForm />
          {/* static info */}
          <div className="flex flex-col    mt-[5rem] lg:mt-0">
            <div className=" flex  flex-col lg:gap-y-[1.5rem] gap-y-[1rem] w-full h-[10rem]   lg:w-[14rem] lg:h-[14rem]">
              <div className="flex items-center justify-evenly font-poppins w-[12rem] text-justify">
                <MdLocalPhone size={20} color="#535252" />
                <p className="text-[1.1rem] text-[#535252]">+91 629 938 0114</p>
              </div>
              <div className="flex items-center justify-evenly  font-poppins w-[14.5rem]">
                <MdMessage color="#535252" size={20} />
                <p className="text-[1.2rem]  text-[#535252]">
                  info@clinickhojo.com
                </p>
              </div>
              <div className="flex  items-center justify-evenly  font-poppins w-[13rem]">
                <IoLocationSharp color="#535252" size={20} />
                <p className="text-[1.2rem] text-[#535252]">
                  abc, 123456, India
                </p>
              </div>
            </div>
            {/* social links */}
            <div className="flex -mt-7 lg:-mt-10 py-10 gap-x-6 items-center justify-center">
              <FaFacebook className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer" color="red" size={30} />
              <FaInstagram className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer" color="red" size={30} />
              <IoLogoLinkedin className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer" color="red" size={30} />
              <IoLogoWhatsapp className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer"   color="red" size={30} />
            </div>
          </div>
        </div>
      </div>
      {/* background image */}

      <img
        className="hidden lg:flex lg:absolute   -z-60 lg:-top-[12rem]   overflow-hidden left-1 scale-105"
        src={backgroundImg}
        color=""
      />
    </div>
  );
};

export default ContactUs;
