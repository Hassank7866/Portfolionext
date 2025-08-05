import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaLinkedin, FaWhatsapp, FaYahoo, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://www.linkedin.com/in/hassaan-khan-7758b1272z/" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </p>
                    </a>
                    <a href="https://github.com/Hassank7866?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    </a>
                    <a href="https://discord.gg/APZbHuQS" target="_blank" rel="noopener noreferrer">
                         <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                    </a>
                   
                </div>
              
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50 mb-16">
                    <div className="font-bold text-[16px]">Contact</div>
                   
                           <a
  href="https://wa.me/923004765333"
  target="_blank"
  rel="noopener noreferrer"
  className="h-auto w-auto flex flex-row items-center"
>
     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaWhatsapp />
                        <span className="text-[15px] ml-[6px]">+92-3004765333</span>    
                    </p>
</a>

<a
  href="mailto:hk7866@yahoo.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-row items-center my-[15px] cursor-pointer ml-5"
>
  <FaYahoo />
  <span className="text-[15px] ml-[6px]">hk7866@yahoo.com</span>
</a>
                    
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Hassaan Khan Portfolio Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer