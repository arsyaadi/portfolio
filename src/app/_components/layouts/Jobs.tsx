import React from "react";
import { IWorkExperience } from "@/app/_interfaces";
import { formatDateRange } from "@/app/_utils/helper";
import { Timeline } from "../common";

const Jobs = ({ workExperiences }: { workExperiences: IWorkExperience[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div
      id="jobs"
      className="lg:ml-72 px-6 md:py-20 py-24 min-h-max text-start w-full"
      style={{ overflowY: "auto" }}
    >
      <div className="flex text-black items-center gap-x-2 mb-5">
        <h2 className="font-Calibre font-semibold md:text-3xl min-w-max text-xl">
          <span className="font-SF-mono text-black">02.</span>
          Career Journey
        </h2>
        <div className="divider" />
      </div>

      <Timeline workExperiences={workExperiences} />
    </div>
  );
};

export default Jobs;
