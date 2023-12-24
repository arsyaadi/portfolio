import React from "react";
import { config } from "@/app/config";

function Mail() {
  return (
    <div className="rotate-90 z-50 hidden md:block fixed top-28 -right-20">
      <div className="flex w-max items-center gap-x-10 lg:gap-x-16 font-SF-mono">
        <div className="rotate-90 w-full">
          <div className="w-0.5 h-24 bg-rock-blue mt-8" />
        </div>
        <a href={`mailto:${config.email}`} className="transition duration-300 hover:text-aquamarine hover:translate-x-1">{config.email}</a>
      </div>
    </div>
  );
}

export default Mail;
