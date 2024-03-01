import React, { useState } from 'react'
import backgroundImg from "../assests/backgroundFooter.png"
import FooterIcon from "../assests/footerImage.png"
import { FaPaperPlane } from 'react-icons/fa';
import zorway from "../assests/zorway.png"
import wheelchair from "../assests/wheelchair.png"


const Footer = () => {
  const [message,setMessage] =useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(message);
  };
  const changeHandler = (event) => {
    setMessage((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(message)
  return (
    <div className='relative justify-center items-center '>
      <img className='mt-[10rem]  hidden lg:flex lg:ml-2 lg:scale-[101%] lg:h-[31rem] h-[26rem] w-full' src={backgroundImg}/>
      <img className='absolute top-0 right-[20%]' src={wheelchair} />
      <div className='flex top-[13rem] h-[420px] pb-4 lg:pb-0  bg-[#0529BB] lg:bg-inherit  justify-center lg:ml-[10rem] items-start flex-col absolute lg:top-0 '>
        <div className=' -mt-10 lg:mt-[20rem] lg:ml-[12.84px]'>
          <img className='w-[168px]  lg:-ml-6' src={FooterIcon}/>
        </div>
        <div className='flex lg:flex-row flex-col gap-x-[4rem]'>
          <div className='lg:w-[425px] w-full px-4 lg:px-0 text-black'>
            <p className='text-[14px] opacity-80 text-black font-poppins leading-5 text-justify'>Welcome to our platform! We're dedicated to simplifying your healthcare journey. With just a few clicks, access quality consultations and appointments effortlessly.</p>
            <p className='mt-5 font-medium text-[1rem] text-black font-poppins leading-5 text-justify'>Join us and experience healthcare made easy.</p>
          </div>
          <div className='flex lg:w-[252px] justify-evenly text-black font-poppins'>
            <div className='  '>
              <p className='cursor-pointer opacity-80  hover:opacity-100'>Home</p>
              <p className='cursor-pointer opacity-80  hover:opacity-100'>About Us</p>
              <p className='cursor-pointer opacity-80  hover:opacity-100'>Contact Us</p>
            </div>
            <div>
              <p className='cursor-pointer opacity-80  hover:opacity-100'>Careers</p>
              <p className='cursor-pointer opacity-80  hover:opacity-100'>Blogs</p>
            </div>
          </div>
          <div className='flex ml-10 relative items-center cursor-pointer h-[44px] rounded-lg'>
            <form className=' ' >
              <span className='absolute font-poppins text-[#535252] text-[12px] top-[.75rem] left-[2rem]'>Send Message</span>
              <span className='absolute right-[1.3rem] top-[.45rem]'>
                <FaPaperPlane color='white' size={24}/>
              </span>
              <input
                type='text'
                name="message"
                onChange={changeHandler}
                className='w-[220px] h-[40px] rounded-l-lg  border-none cursor-pointer '
              />
            </form>
            <div className='bg-[#FA0808] h-[42px]  lg:h-[40px] w-[62px] rounded-r-lg'>

            </div>
          </div>
        </div>
      </div>
      <div className='flex text-white   w-[10rem]  opacity-80 absolute lg:w-full top-[36rem] lg:top-[36rem]  lg:gap-x-[17.6rem] '>
        <div className='flex items-center  gap-x-5'>
          <div className='lg:w-[146px]  w-[40px] bg-white h-[.1rem]'></div>
          <p>Melrose Place,90120</p>
          <p>USA</p>
        </div>
        <div className='flex items-center gap-x-2 lg:gap-x-3'>
        powered by 
        <span className='flex flex-col items-center'>
          <img className='lg:w-[24px] ' src={zorway}/>
          <p className='text-[6px]'> ZORWAY</p>
        </span>
        ZORWAY
        </div>
        <div className='flex items-center gap-x-5'>
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <div className='lg:w-[146px] w-[40px] bg-white h-[.1rem]'></div>
        </div>
      </div>

      
    </div>
  )
}

export default Footer