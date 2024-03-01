import React from "react";
import prescriptionImage from "../assests/Medical prescription-bro.svg";
import backgroundImg from "../assests/AboutPageTilt.svg";
import { HashLink as Link } from "react-router-hash-link";
import { MdPermContactCalendar } from "react-icons/md";
import magnifine from "../assests/Magnifier.svg"
const About = () => {
  return (
    <div className="w-full relative mt-[4rem] h-[754px] overflow-hidden  ">
     
      <div className="z-100  absolute  flex flex-row w-full  justify-evenly">
        <div className="flex flex-col items-start">
          <div className="bg-white -ml-[1.8rem] mt-[10rem] w-[364px] h-[60px] rounded-r-full">
            <div className="flex flex-row-reverse mr-[2rem] items-end text-[#0529BB] font-medium ">
              <p className=" font-poppins text-[38px]">About Us</p>
            </div>
          </div>
          <div className="" >
            <div className="flex flex-col mt-[3rem]  gap-[7rem] ml-[6rem] max-w-[628px]">
              <div className="flex my-auto gap-x-3">
                <p className="text-justify w-1/2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley oand more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum
                </p>
                <p className="text-justify w-1/2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrf type
                  and scrambled it to make a type specimen book. It has survived
                  not onally versions of Lorem Ipsum
                </p>
              </div>

              <div className="flex bg-[#FA0808] items-center gap-[10px] hover:scale-105 transition-all cursor-pointer duration-300 h-[46px] w-[169px]  rounded-[8px] py-[8px] px-[12px] justify-between drop-shadow-md">
                <button className=" font-poppins text-[20px]  text-white">
                  <Link to="#Contact" smooth>
                    {" "}
                    Contact us{" "}
                  </Link>
                </button>
                <MdPermContactCalendar color="white" size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="h-[45.5rem] w-[44.5rem] " src={prescriptionImage} />
        </div>
      </div>
      <div className="">
        <img className="-z-10 right-0 w-full h-[754px] absolute" src={backgroundImg} />
      </div>
      <img src={magnifine} className=" absolute w-[14rem] h-[13rem] left-[35rem] " />

      
    </div>
  );
};

export default About;
