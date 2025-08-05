import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
     

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Portfolio for CEO"
          description="Crafted a highly customized portfolio for the CEO of a startup. The design captured the essence of his brand and business. I also assisted with bug fixes and new feature development across his web apps."
        />

        <ProjectCard
          src="/project.png"
          title="SAAS MVP for a Startup"
          description="Designed and built a Next.js-based MVP for a startup focused on event discovery. Their goal was to promote real-world social interaction among youth through local physical events."
          link="https://www.bewhoop.com"
        />

        <ProjectCard
          src="/shoemap.png"
          title="Sneaker Store"
          description="Developed an e-commerce site for a sneaker client. The frontend was built with Next.js and the backend with Node.js."
       
        />
      </div>
    
    </div>
    
    
  );
};

export default Projects;
