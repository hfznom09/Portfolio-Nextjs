// import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed  z-[8] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 sm:px-2">
      <div className="flex flex-row gap-3 items-center justify-between pr-6">
        <h1 className="text-white text-[30px] font-semibold">
          Noman{" "}
          <span className="text-transparent bg-clip-text text-yellow-500">
            Anwar
          </span>
        </h1>
      </div>

      {/* <div className="flex flex-row gap-5 mb-2  ">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;
