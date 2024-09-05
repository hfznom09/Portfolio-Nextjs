import React from "react";
import SocialIcon from "@/components/Socail icons";

import { FaPhone } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div  style={{ backgroundImage:"url(bg-3.jpg)" }}
    id="Contact" className="bg-center  text-center bg-cover h-screen w-screen  ">
      <h1 className="heading text-5xl text-white font-semibold pt-20 md:pt-32 text-left md:text-center pl-8 md:pl-0 ">
        Contact
        <span className="text-yellow-500  ">Us</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-14 md:pt-36 w-[80%] mx-auto gap-[2rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-yellow-500">
            <FaPhone className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-white" />
          </div>
          
          <div>
            <h1 className="text-[20px] font-semibold text-yellow-500">
              Phone
            </h1>
            <p className="text-[14px] text-white">+923312505735</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-yellow-500">
            <IoLogoWhatsapp className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-white" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-yellow-500">
              WhatsApp
            </h1>
            <p className="text-[14px] text-white ">+923312505735</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-yellow-500">
            <IoIosMail className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-white" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-yellow-500 ">
              Send Us
            </h1>
            <p className="text-[14px] text-white ">
              hfznoman9@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-auto my-[4rem] border-t-[2px] border-b-[2px] border-yellow-500 ">
        <SocialIcon />
      </div>
      <div className="w-[80%] border-t-[2px] border-yellow-500 mt-[2rem] mx-auto grid grid-cols-1 items-center text-center">
        <div className="text-[12px] md:text-[14px]    text-white ">
          <p>
            <a>
              © Noman Anwar 
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
