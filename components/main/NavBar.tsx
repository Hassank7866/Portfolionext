"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto w-full px-4 sm:px-6 md:px-3">

        {/* LEFT: WhatsApp Icon */}
       <div className="flex-shrink-0">
  <a
    href="https://wa.me/923004765333"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center group"
  >
    <FaWhatsapp className="text-purple-500 text-[20px]" />
    <span className="text-[15px]  ml-2 hidden sm:block text-gray-300  group-hover:text-purple-500 transition-colors duration-300">
      +92-3004765333
    </span>
  </a>
</div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex gap-30 border border-[#7042f861] bg-[#0300145e] px-6 py-3 rounded-full text-gray-200 text-sm mr-11">
          <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors duration-300">
            About me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-purple-400 transition-colors duration-300">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors duration-300">
            Projects
          </a>
        </div>

        {/* RIGHT: Social Icons + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-8">
            {Socials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="hover:opacity-80 hover:scale-110 transition duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden mr-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-white text-xl" />
              ) : (
                <FaBars className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-[#030014] text-white px-4 py-3 rounded-md shadow-md mt-1 space-y-2">
          <a
            href="#about-me"
            className="w-full border-b border-gray-600 py-2 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="w-full border-b border-gray-600 py-2 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="w-full py-2 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>

          {/* Mobile Social Icons */}
          <div className="flex mt-4 gap-4">
            {Socials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="hover:opacity-80 hover:scale-110 transition duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
