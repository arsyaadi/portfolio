"use client";
import { useState } from "react";
import { Mail, Social } from "@/app/_components/common";

import { IProject, IUser, IWorkExperience } from "./_interfaces";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/layouts/Hero"));
const Jobs = dynamic(() => import("./_components/layouts/Jobs"));
const Navbar = dynamic(() => import("./_components/layouts/Navbar"));
const Contact = dynamic(() => import("./_components/layouts/Contact"));
const Projects = dynamic(() => import("./_components/layouts/Projects"));
const About = dynamic(() => import("./_components/layouts/About"));
const ClientAbout = dynamic(() => import("./_components/layouts/ClientAbout"));

interface IProps {
  user: IUser | unknown;
  workExperiences: IWorkExperience[] | unknown;
  projects: IProject[] | unknown;
}

export default function Home({ user, workExperiences, projects }: IProps) {
  const [isBlur, setBlur] = useState(false);

  return (
    <>
      <div>
        <Navbar setBlur={setBlur} user={user as IUser} />
        <Social />
        <main
          className={`flex overflow-x-hidden relative min-h-screen flex-col items-center justify-between lg:px-60 ${
            isBlur && "blur-sm"
          }`}
        >
          <Hero user={user as IUser} />
          <ClientAbout user={user as IUser} />
          <Jobs workExperiences={workExperiences as IWorkExperience[]} />
          <Projects projects={projects as IProject[]} />
        </main>
      </div>
    </>
  );
}
