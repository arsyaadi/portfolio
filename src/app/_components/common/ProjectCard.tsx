import React from "react";
import Card from "./Card";
import Image from "./Image";
import Tooltip from "./Tooltip";
import { STACKS } from "@/app/_commons/constant/stacks";
import { IProject } from "@/app/_interfaces";

const ProjectCard = ({ project }: { project: IProject }) => {
  const cardContent = (
    <>
      <Image
        src={project.imageUrl}
        alt={project.name}
        width={800}
        height={300}
        className="rounded-t-xl object-cover object-left"
      />
      <div className="space-y-2 p-5 flex flex-col justify-between min-h-[240px]">
        <div className="font-Calibre cursor-pointer text-lg font-bold text-neutral-700 transition-all duration-300 lg:hover:text-teal-800">
          {project.name}
        </div>
        <p className="text-sm leading-relaxed text-neutral-700">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project?.techStack.map((stack, index) => (
            <div key={index} className="w-6">
              <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return project.url ? (
    <a href={project.url}>
      <Card>{cardContent}</Card>
    </a>
  ) : (
    <Card>{cardContent}</Card>
  );
};

export default ProjectCard;
