import React from "react";
import { IWorkExperience } from "@/app/_interfaces";
import { formatDateRange } from "@/app/_utils/helper";

const Jobs = ({ workExperiences }: { workExperiences: IWorkExperience[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div
      id="jobs"
      className="lg:ml-96 px-6 md:py-36 py-24 min-h-max text-start w-full"
      style={{ overflowY: "auto" }}
    >
      <div className="flex text-black items-center gap-x-2 mb-5">
        <h2 className="font-Calibre md:text-3xl min-w-max text-xl">
          <span className="font-SF-mono text-black">02.</span>
          Career Journey
        </h2>
        <div className="divider" />
      </div>
      {/* desktop */}
      <div className="hidden md:flex gap-x-10">
        <div>
          {workExperiences.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center w-max px-10 h-11 py-5 pl-2 text-sm border-l-2 bg-transparent text-left whitespace-nowrap transition duration-500 hover:text-white hover:bg-blue-zodiac ${
                  activeTab == index
                    ? "active-link"
                    : "border-l-regent-gray text-regent-gray"
                }`}
              >
                <span className="mx-3 font-SF-mono">
                  {job?.companyName}
                </span>
              </button>
            );
          })}
        </div>
        <div>
          {workExperiences.map((job, index) => {
            return (
              <div
                className={`my-2 transition duration-500 ${
                  activeTab != index && "hidden"
                }`}
                key={index}
              >
                <h3 className="text-black font-Calibre">
                  <span>{job.position}</span>
                  &nbsp;at&nbsp;
                  <a href={job?.url} className="text-black">
                    {job?.companyName}
                  </a>
                </h3>
                <p className="text-sm font-SF-mono text-regent-gray">
                  {formatDateRange(job?.startDate, job?.endDate as Date)}
                </p>

                <ul className="max-w-xl mt-2" style={{ maxHeight: "10rem" }}>
                  {job?.description?.map((description, index) => {
                    return (
                      <li
                        key={index}
                        className="font-Calibre pl-10 my-2 text-regent-gray relative before:absolute before:left-0 before:text-black before:mx-4 before:content-['▹']"
                      >
                        {description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* mobile */}
      <div className="flex gap-x-10 my-5 overflow-auto md:hidden w-full">
        {workExperiences?.map((job, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center w-max px-10 h-11 py-5 pl-2 text-sm bg-transparent text-left whitespace-nowrap transition duration-500 hover:text-white hover:bg-blue-zodiac ${
                activeTab == index
                  ? "active-link border-b-black border-b-2"
                  : "text-regent-gray"
              }`}
            >
              <span className="mx-3 font-SF-mono">
                {job?.companyName}
              </span>
            </button>
          );
        })}
      </div>
      <div className="my-5 md:hidden">
        {workExperiences.map((job, index) => {
          return (
            <div
              className={`my-2 transition duration-500 ${
                activeTab != index && "hidden"
              }`}
              key={index}
              style={{ overflowY: "auto" }}
            >
              <h3 className="text-black font-Calibre">
                <span>{job.position}</span>
                &nbsp;at&nbsp;
                <a href={job.url} className="text-black">
                  {job?.companyName}
                </a>
              </h3>
              <p className="text-sm font-SF-mono text-regent-gray">
                {formatDateRange(job?.startDate, job?.endDate as Date)}
              </p>

              <ul className="max-w-xl mt-2">
                {job?.description?.map((description, index) => {
                  return (
                    <li
                      key={index}
                      className="font-Calibre pl-10 my-2 text-regent-gray relative before:absolute before:left-0 before:text-black before:mx-4 before:content-['▹']"
                    >
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
