import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden" id="about-me">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-240px]  h-full w-full left-0 z-[1] object-cover  "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Overlay (optional, adds dark layer for text contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]" />

      {/* Hero content above the video */}
      <div className="relative z-[3] w-full px-4 sm:px-6 md:px-12">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
