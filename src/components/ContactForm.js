import React, { useState } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdLocalPhone, MdMessage } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
const ContactForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    isDoctor: false,
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(FormData);
  };
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(FormData);
  return (
    <div className="w-[335px] h-[264px] mx-auto mt-8 p-6rounded-md bg-transparent  ">
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-4 z-10 relative ">
          <div className=" absolute top-[23%]">
            {FormData.name === "" ? (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdOutlinePersonOutline size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Full Name{" "}
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <input
            type="text"
            className=" opacity-25 bg-white py-[.90rem] h-[44px]  drop-shadow-md px-[.65rem] w-full border rounded-md"
            value={FormData.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
       
        <div className="mb-4 relative">
          <div className=" absolute top-[23%]">
            {FormData.email === "" ? (
              <div className=" px-2 flex gap-x-[2rem] items-center">
                <RxEnvelopeClosed size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Email
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <input
            type="email"
            className=" opacity-25 bg-white py-[.90rem] h-[44px]  drop-shadow-md px-[.65rem] w-full border rounded-md"
            value={FormData.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-4 relative">
          <div className=" absolute top-[23%]">
            {FormData.phoneNumber === "" ? (
              <div className=" px-2 flex gap-x-[2rem] items-center">
                <MdLocalPhone size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Phone Number
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <input
            type="tel"
            className=" opacity-25 bg-white py-[.90rem] h-[44px]  drop-shadow-md px-[.65rem] w-full border rounded-md"
            value={FormData.phoneNumber}
            name="phoneNumber"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div className="block font-poppins text-[16px] text-sm font-medium text-gray-600">
            Are you a doctor?
          </div>

          <div className="flex pr-2  items-center">
            <label className="mr-4 font-medium text-[#229649] cursor-pointer">
              <input
                type="radio"
                value="yes"
                // checked={FormData.isDoctor}
                 className=" cursor-pointer"
                name="isDoctor"
                color="#535252"
                onChange={changeHandler}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className=" font-medium text-[#FA0808] cursor-pointer">
              <input
                type="radio"
                value="no"
                // checked={!FormData.isDoctor} 
                className="  cursor-pointer"
                color="#535252"
                onChange={changeHandler}
                name="isDoctor"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="mb-4 z-10 relative ">
          <div className=" absolute top-[23%]">
            {FormData.message === "" ? (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdMessage size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Message{" "}
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* <span className="absloute top-[24%]">
            Full name
          </span> */}

          <input
            type="text"
            className=" opacity-25 bg-white py-[.90rem] h-[44px]  drop-shadow-md px-[.65rem] w-full border rounded-md"
            value={FormData.message}
            name="message"
            onChange={changeHandler}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-[#229649] drop-shadow-lg mb-[4rem] text-white py-2 px-4 rounded-md hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
