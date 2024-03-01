import React from "react";
import surf from "../assests/surf.svg"

const TopDeals = () => {
  return (
    <div id="top" className=" overflow-hidden flex flex-col mx-auto mt-[60px] items-center gap-[30px]">
      <h1 className="w-[198px] h-[60px] left-[657px] text-[40px] leading-[60px] text-[#0529BB] font-medium">
        Top Deals
      </h1>
      <img width="1193px" height="327px" src={surf}/>
    </div>
  );
};

export default TopDeals;
