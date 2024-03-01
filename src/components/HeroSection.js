import React from "react";
import Navbar from "./Navbar";
import Image1 from "../assests/Image1.svg";
import { MdPermContactCalendar } from "react-icons/md";
import tilt from "../assests/Tilt.svg"
import TopDeals from "./TopDeals";
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <div className="bg-[#0032FF]  w-screen min-h-screen flex flex-col font-inter  overflow-hidden">
      <Navbar />
      <div className="flex z-10 flex-row w-[1343px] overflow-y-hidden ml-[10px] mt-[123px] gap-[140px]  h-[500px]">
        <img src={Image1} width={750} height={500} />
        <div className="flex flex-col gap-[72px] w-[415px] h-[348px] my-auto">
          <div>
            <div className="w-[196px] h-[35px] flex font-poppins rounded-3xl items-center  bg-white text-[#2300FF]">
              <p className="w-[166px]   items-center mx-auto text-[22px] font-bold leading-8">
                Find your clinic
              </p>
            </div>

            <h1 className="text-[40px] h-[88px] text-white leading-[60px]">
              Connecting Patients with Nearby Doctors
            </h1>
          </div>

          <div className="h-[51px] text-[24px] text-white font-poppins">
            Effortlessly book consultations with nearby doctors through{" "}
            <span className=" italic leading-[36px] font-bold text-yellow-400 ">
              {" "}
              Clinic Khojo{" "}
            </span>
          </div>
          <div className="flex bg-[#FA0808] items-center gap-[10px] hover:scale-105 transition-all cursor-pointer duration-300 h-[46px] w-[169px]  rounded-[8px] py-[8px] px-[12px] justify-between drop-shadow-md">
            <button className=" font-poppins text-[20px]  text-white">
            <Link to="#Contact" smooth> Contact us </Link> 
            </button>
            <MdPermContactCalendar color="white" size={24} />
          </div>

        </div>
      </div>
      <div className=" ">
        <img className="w-[1534px] -mt-[10rem] " src={tilt}  />
      </div>
    </div>
  );
  
};

export default HeroSection;
