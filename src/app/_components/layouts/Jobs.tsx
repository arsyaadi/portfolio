import React from "react";
import { Fira_Code } from "next/font/google";
import { config } from "@/app/config";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
});

const Jobs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div id="jobs" className="lg:ml-96 px-6 md:py-36 py-28 max-h-max text-start w-full">
      <div className="flex text-titan-white items-center gap-x-2 mb-5">
        <h2 className="font-Calibre md:text-3xl min-w-max text-xl">
          <span className={`${firaCode.className} text-aquamarine`}>02.</span>
          Where I’ve Worked
        </h2>
        <div className="divider" />
      </div>

      {/* desktop */}
      <div className="hidden md:flex gap-x-10">
        <div>
          {config.jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center w-max px-10 h-11 py-5 pl-2 text-sm border-l-2 bg-transparent text-left whitespace-nowrap transition duration-500 hover:text-aquamarine hover:bg-blue-zodiac ${
                  activeTab == index
                    ? "active-link"
                    : "border-l-regent-gray text-regent-gray"
                }`}
              >
                <span className={`mx-3 ${firaCode.className}`}>{job.company}</span>
              </button>
            );
          })}
        </div>
        <div>
          {config.jobs.map((job, index) => {
            return (
              <div className={`my-2 transition duration-500 ${activeTab != index && 'hidden'}`} key={index}>
                <h3 className="text-fog font-Calibre">
                  <span>{job.position}</span>
                  &nbsp;at&nbsp;
                  <a href={job.url} className="text-aquamarine">
                    {job.company}
                  </a>
                </h3>
                <p className="text-sm font-SF-mono text-regent-gray">
                  {job.range}
                </p>

                <ul className="max-w-xl mt-2">
                  {job.description_jobs.map((description, index) => {
                    return (
                      <li
                        key={index}
                        className="font-Calibre pl-10 my-2 text-regent-gray relative before:absolute before:left-0 before:text-aquamarine before:mx-4 before:content-['▹']"
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
        <div className="flex gap-x-10 overflow-auto my-5 md:hidden">
          {config.jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center w-max px-10 h-11 py-5 pl-2 text-sm bg-transparent text-left whitespace-nowrap transition duration-500 hover:text-aquamarine hover:bg-blue-zodiac ${
                  activeTab == index
                    ? "active-link border-b-aquamarine border-b-2"
                    : "text-regent-gray"
                }`}
              >
                <span className={`mx-3 ${firaCode.className}`}>{job.company}</span>
              </button>
            );
          })}
        </div>


        <div className="my-5 md:hidden">
          {config.jobs.map((job, index) => {
            return (
              <div className={`my-2 transition duration-500 ${activeTab != index && 'hidden'}`} key={index}>
                <h3 className="text-fog font-Calibre">
                  <span>{job.position}</span>
                  &nbsp;at&nbsp;
                  <a href={job.url} className="text-aquamarine">
                    {job.company}
                  </a>
                </h3>
                <p className="text-sm font-SF-mono text-regent-gray">
                  {job.range}
                </p>

                <ul className="max-w-xl mt-2">
                  {job.description_jobs.map((description, index) => {
                    return (
                      <li
                        key={index}
                        className="font-Calibre pl-10 my-2 text-regent-gray relative before:absolute before:left-0 before:text-aquamarine before:mx-4 before:content-['▹']"
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
