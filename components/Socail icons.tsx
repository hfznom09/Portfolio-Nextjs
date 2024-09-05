import { TbBrandFiverr, TbBrandGithub } from "react-icons/tb";
import { SiUpwork, SiFreelancer } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import React from 'react'

function SocialIcon() {
  return (
    <div className="mt-[2rem] flex flex-raw space-x-4 justify-evenly items-center">
    <a
      href="https://www.linkedin.com/in/noman-anwar-746a06304/"
      title="Linkdin"
      className="space-x-2"
    >
      <SlSocialLinkedin className="w-[1.8rem] md:w-[2.7rem] h-[1.8rem] md:h-[2.7rem] hover:text-white transition-all duration-200 text-yellow-500 scale-100 hover:scale-110" />
    </a>
    <a
      href="https://github.com/hfznom09"
      title="GitHub"
      className="space-x-2"
    >
      <TbBrandGithub className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:text-white transition-all duration-200 text-yellow-500 scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.facebook.com/"
      title="Facebook"
      className="space-x-2"
    >
      <FiFacebook className="w-[2rem] md:w-[3rem] h-[1.9rem] md:h-[2.8rem] hover:text-white transition-all duration-200 text-yellow-500 scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.upwork.com/ "
      title="Upwork"
      className="space-x-2"
    >
      <SiUpwork className="w-[2.1rem] md:w-[3.1rem] h-[2.1rem] md:h-[3.1rem] hover:text-white transition-all duration-200 text-yellow-500 scale-100 hover:scale-110" />
    </a>
  </div>
  )
}

export default SocialIcon;