"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IProject } from "@/app/_interfaces";

const isEven = (num: number) => {
  return num % 2 === 0;
};

const Projects = ({ projects }: { projects: IProject[] }) => {
  const [showAll, setShowAll] = useState(false);
  const visbleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="md:py-52 py-20 px-6 text-start w-full">
      <div className="flex items-center gap-x-2 mb-5">
        <h2 className="font-Calibre text-black md:text-3xl text-xl min-w-max">
          <span className="font-SF-mono text-black">03.</span>
          Projects Showcase
        </h2>
        <div className="divider" />
      </div>
      {/* desktop */}
      <div className="mt-20 hidden md:block">
        <ul>
          {visbleProjects.map((project, index) => {
            return (
              <li
                key={index}
                className={`my-28 transition-opacity duration-500 ${
                  showAll || index < 5 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full grid grid-cols-2">
                  <div
                    className={`relative mt-10 z-40 ${
                      isEven(index) ? "order-2 right-10" : "order-1 left-20"
                    }`}
                  >
                    <p
                      className={`text-black font-SF-mono text-sm ${
                        isEven(index) ? "text-right" : "text-left"
                      }`}
                    >
                      Featured Project
                    </p>
                    <h3
                      className={`${
                        isEven(index) ? "text-right" : "text-left"
                      }`}
                    >
                      <a
                        href={project.url}
                        className="text-xl font-Calibre font-bold text-medium-grey hover:text-black"
                      >
                        {project?.name}
                      </a>
                    </h3>
                    <div
                      className={`w-full ${
                        isEven(index) && "flex justify-end"
                      }`}
                    >
                      <div className="max-w-lg mt-5 w-full p-6 bg-blue-zodiac rounded-md">
                        <p className="text-white">{project?.description}</p>
                      </div>
                    </div>
                    <ul
                      className={`flex gap-x-4 text-regent-gray mt-5 text-sm ${
                        isEven(index) ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {project?.techStack.map((stack, index) => {
                        return <li key={index}>{stack}</li>;
                      })}
                    </ul>
                  </div>
                  <div
                    className={`relative rounded-sm transition duration-500  max-w-max ${
                      isEven(index) ? "order-1 left-20" : "order-2 right-10"
                    }`}
                  >
                    {project.url ? (
                      <a href={project?.url} className="max-w-max">
                        <Image
                          className="rounded-sm bg-transparent transition duration-500 cursor-pointer contrast-100"
                          src={project?.imageUrl}
                          alt={project.name}
                          width={600}
                          height={500}
                        />
                      </a>
                    ) : (
                      <Image
                        className="rounded-sm bg-transparent transition duration-500 contrast-100"
                        src={project?.imageUrl}
                        alt={project.name}
                        width={600}
                        height={500}
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {!showAll ? (
          <div className="w-full flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="button transition-opacity duration-500"
            >
              See More
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="button transition-opacity duration-500"
            >
              See Less
            </button>
          </div>
        )}
      </div>
      {/* mobile */}
      <div className="mx-auto md:hidden">
        <ul className="flex w-full flex-col items-center">
          {visbleProjects.map((project, index) => {
            return (
              <li key={index} className="my-3 bg-medium-grey rounded-lg">
                <div className="w-full h-full relative grid grid-cols-1">
                  <div className="z-40 flex p-5 flex-col gap-y-2 h-full">
                    <p className="text-white font-SF-mono text-sm">
                      Featured Project
                    </p>
                    <h3>
                      <a
                        href={project?.url}
                        className="text-base font-Calibre font-bold text-white hover:text-black"
                      >
                        {project?.name}
                      </a>
                    </h3>
                    <div className="mt-5 w-full">
                      <p className="text-white text-sm">{project?.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-y-2 gap-x-4 text-white mt-5 text-xs">
                      {project?.techStack?.map((stack, index) => {
                        return <li key={index}>{stack}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="absolute h-full rounded-sm bg-white-smoke opacity-10 transition duration-500 w-full">
                    {project.url ? (
                      <a href={project.url} className="w-full h-full absolute">
                        <Image
                          className="rounded-sm bg-transparent transition h-full w-full object-cover"
                          src={project?.imageUrl}
                          alt={project.name}
                          layout="fill"
                          fill
                        />
                      </a>
                    ) : (
                      <Image
                        className="rounded-sm bg-transparent h-full w-full object-cover"
                        src={project?.imageUrl}
                        alt={project.name}
                        layout="fill"
                        fill
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {!showAll ? (
          <div className="w-full mt-2 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="button transition-opacity duration-500"
            >
              See More
            </button>
          </div>
        ) : (
          <div className="w-full mt-2 flex justify-center">
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
