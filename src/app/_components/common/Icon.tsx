import React from "react";
import {
  IconGithub,
  IconLinkedIn,
  IconStackoverflow,
} from "@/app/_assets/icons";

interface IProps {
  name: string;
}

const Icon = ({ name }: IProps) => {
  switch (name) {
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedIn />;
    case "stackoverflow":
      return <IconStackoverflow />;
    default:
      return <IconGithub />;
  }
};

export default Icon;
