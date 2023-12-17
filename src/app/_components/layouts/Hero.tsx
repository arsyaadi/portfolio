"use client";
import React, { useEffect, useRef } from "react";
import { Oswald } from "next/font/google"
import { config } from "@/app/config";
import gsap from "gsap";
import { BackgroundAnimation } from "@/app/_assets/icons";

const oswald = Oswald({ subsets: ['latin'] })

const Hero = () => {
  


  return (
    <div className="text-start w-full flex flex-col gap-y-4 pt-80 pb-56" id="#">
      <h4 className="font-SF-mono text-aquamarine">Hi I&apos;am</h4>
      <h1 className={`${oswald.className} text-7xl text-titan-white`}>
        Arsya Adi Setiawan Putra
      </h1>
      <BackgroundAnimation />
      <p className="max-w-xl text-lg text-regent-gray font-Calibre">
        I&apos;m a software engineer based in Yogyakarta, specializing in
        building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </p>
      <a href={`mailto:${config.email}`} className='button w-max' >Contact Me</a>
    </div>
  );
};

export default Hero;
