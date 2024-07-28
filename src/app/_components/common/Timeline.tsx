import React from "react";
import { IWorkExperience } from "@/app/_interfaces";
import { formatDateRange } from "@/app/_utils/helper";

interface TimelineProps {
  workExperiences: IWorkExperience[];
}

const Timeline: React.FC<TimelineProps> = ({ workExperiences }) => {
  return (
    <ol className="relative border-s border-gray-700">
      {workExperiences.map((experience, index) => (
        <li key={index} className="mb-5 ms-4 max-w-2xl">
          <div className="absolute left-0">
            {!experience.endDate && (
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 animate-ping"></div>
            )}
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
            {formatDateRange(experience.startDate, experience.endDate as Date)}
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            <a href={experience.url}>{experience.companyName}</a>
          </h3>
          <p className="text-base font-normal text-gray-500">
            {experience.position}
          </p>
          <ul className="list-disc pl-5 mt-2">
            {experience.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
