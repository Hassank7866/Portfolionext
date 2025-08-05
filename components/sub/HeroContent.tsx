"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 mt-24 md:mt-40 w-full z-50"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[12px] px-[20px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2"
        >
          <SparklesIcon className="text-violet-500 h-5 w-5" />
          <h1 className="welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            Software
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in AI Powered Web and Mobile App
          Development. Check out my projects and skills.
        </motion.p>

        {/* ⬇️ Original Download Button Preserved */}
        <motion.a
          href="/CVhk.pdf"
          download
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-50"
        >
          Download CV

        </motion.a>
      </div>

      {/* Right Image + Quote */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0"
      >
        <Image
          src="/final.png"
          alt="work icons"
          height={350}
          width={350}
          className="object-contain"
        />

        <motion.p className="text-sm sm:text-base italic font-serif tracking-wide text-gray-400 text-center mt-6 px-4 max-w-md">
          “Simple can be harder than complex; you have to work hard to get your thinking clean to
          make it simple.”
          <br />
          <span className="block mt-2">– Steve Jobs</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
