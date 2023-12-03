/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef } from "react";
import { Oswald } from "next/font/google"
import { config } from "@/app/config";
import gsap from "gsap";
import { BackgroundAnimation } from "@/app/_assets/icons";

const oswald = Oswald({ subsets: ['latin'] })

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = React.useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        setIsShow(true);
      }
    });

    // Set initial state (hidden)
    tl.set(hero, { opacity: 0 });

    // Fade in the entire hero
    tl.to(hero, { opacity: 1, duration: 1.0 });

    // Select all text elements inside the hero
    const textElements = hero?.querySelectorAll('h4, h1, p, a, div');

    // Set initial state (invisible)
    if (textElements) {
      gsap.set(textElements, { opacity: 0 });
      // Animate each text element to appear one by one
      tl.staggerTo(textElements, 0.5, { opacity: 1 }, 0.2);
    }

    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className="text-start w-full flex flex-col gap-y-4 pt-80 pb-56" id="#" ref={heroRef}>
      <h4 className="font-SF-mono text-aquamarine">Hi I'am</h4>
      <h1 className={`${oswald.className} text-7xl text-titan-white`}>
        Arsya Adi Setiawan Putra
      </h1>
      <BackgroundAnimation />
      <p className="max-w-xl text-lg text-regent-gray font-Calibre">
        I'm a software engineer based in Yogyakarta, specializing in
        building (and occasionally designing) exceptional websites,
        applications, and everything in between.
      </p>
      <a href={`mailto:${config.email}`} className={`button w-max ${!isShow && 'hidden'}`} >Contact Me</a>
    </div>
  );
};

export default Hero;
