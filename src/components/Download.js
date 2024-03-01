import React from "react";
import injection from "../assests/injection.svg";
import { MdDownload } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Download = () => {
  return (
    <div id="Download" className="relative h-[400.47px] -mt-[3rem]  w-[1300.73px]">
      <img src={injection} className="z-10 absolute top-0 left-60 h-full w-full" />
      <div className="absolute inset-0 z-30 left-60 flex items-center justify-center">
        <div className="text-white text-center flex gap-x-5">
          <p className="italic font-poppins font-medium text-4xl leading-10">
            Get instant access with a click
          </p>
          <div className="flex bg-white items-center border-2 rounded-lg  py-2 px-4 justify-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <button className="text-red-500 text-xl font-poppins">
              <Link to="" smooth>
                Download App
              </Link>
            </button>
            <MdDownload size={24} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
