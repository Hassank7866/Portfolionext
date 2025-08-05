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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform cursor-pointer z-50">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <a href={link}>
             <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </a>
       
        <p className="mt-2 text-gray-300">{description}</p>
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
