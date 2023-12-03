import React from "react";
import { config } from "@/app/config";
import Icon from "./Icon";

const Social = () => {
  return (
    <div className="w-min mx-10 fixed bottom-0">
      <ul className="flex flex-col gap-y-8">
        {config.socialMedia.map((link, index) => {
          return (
            <li key={index} className="w-6 h-6 cursor-pointer transition duration-300 hover:-translate-y-1">
              <a href={link.url} target="_blank" rel="noreferrer">
                <Icon name={link.name} />
              </a>
            </li>
          )
        })}
      </ul>
      <div className="block w-0.5 h-24 mx-auto bg-rock-blue mt-8" />
    </div>
  );
};

export default Social;
