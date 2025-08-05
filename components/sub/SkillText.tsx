"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      
      <motion.div
        variants={slideInFromTop}
        className="welcome-box py-[10px] px-[15px] border border-[#7042f88b] opacity-[0.9] mb-[0px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="welcome-text text-[13px]">
          Made with the best
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[30px] text-gray-200 mb-10 mt-[20px] text-center z-0"
      >
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#ffffff]"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Latest Technologies
        </a>
      </motion.div>

    </div>
  );
};

export default SkillText;
