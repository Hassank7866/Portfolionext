"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const content = (
    <div className="px-8">
       <div className="w-[300px] h-[400px] flex flex-col justify-between bg-[#0D0B1F] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform cursor-pointer z-50 ">
      <div className="h-[200px] w-full relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
    </div>
   
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default ProjectCard;
