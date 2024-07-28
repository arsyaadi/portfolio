"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IProject } from "@/app/_interfaces";
import { motion } from "framer-motion";
import ProjectCard from "../common/ProjectCard";

const isEven = (num: number) => {
  return num % 2 === 0;
};

const Projects = ({ projects }: { projects: IProject[] }) => {
  const [showAll, setShowAll] = useState(false);
  const visbleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div id="projects" className="md:py-52 py-20 px-6 text-start w-full">
      <div className="flex items-center gap-x-2 mb-5">
        <h2 className="font-Calibre font-semibold text-black md:text-3xl text-xl min-w-max">
          <span className="font-SF-mono text-black">03.</span>
          Projects Showcase
        </h2>
        <div className="divider" />
      </div>
      <div>
        <div className="grid gap-5 pt-2 sm:grid-cols-2">
          {visbleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        {!showAll ? (
          <div className="w-full pt-5 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="button transition-opacity duration-500"
            >
              See More
            </button>
          </div>
        ) : (
          <div className="w-full pt-5 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="button transition-opacity duration-500"
            >
              See Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
