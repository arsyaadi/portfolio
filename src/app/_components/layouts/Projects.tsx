import React from "react";
import { Fira_Code } from "next/font/google";
import { config } from "@/app/config";
import Image from "next/image";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
});

const isEven = (num: number) => {
  return num % 2 === 0;
};

const Projects = () => {
  return (
    <div id="projects" className="w-full text-start py-36">
      <div className="flex items-center gap-x-2 mb-5">
        <h2 className="font-Calibre text-3xl">
          <span className={`${firaCode.className} text-aquamarine`}>03.</span>
          Some Things I’ve Built
        </h2>
        <div className="divider" />
      </div>
      <div className="mt-20">
        <ul className="">
          {config.projects.map((project, index) => {
            return (
              <li key={index} className="my-28">
                <div className="w-full grid grid-cols-2">
                  <div
                    className={`relative mt-10 z-40 ${
                      isEven(index) ? "order-2 right-10" : "order-1 left-20"
                    }`}
                  >
                    <p
                      className={`text-aquamarine font-SF-mono text-sm ${
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
                        className="text-xl font-Calibre font-bold text-fog hover:text-aquamarine"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <div className={`w-full ${isEven(index) && 'flex justify-end'}`}>
                      <div className="max-w-lg mt-5 w-full p-6 bg-blue-zodiac rounded-md">
                        <p className="text-regent-gray">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <ul
                      className={`flex gap-x-4 text-regent-gray mt-5 text-sm ${
                        isEven(index) ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {project.stack.map((stack, index) => {
                        return <li key={index}>{stack}</li>;
                      })}
                    </ul>
                  </div>
                  <div
                    className={`bg-aquamarine relative rounded-sm transition duration-500  max-w-max ${
                      isEven(index) ? "order-1 left-20" : "order-2 right-10"
                    }`}
                  >
                    <a href={project.url} className="max-w-max">
                      <Image
                        className="rounded-sm bg-transparent transition duration-500 cursor-pointer mix-blend-multiply contrast-100 hover:mix-blend-normal"
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={500}
                      />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
