"use client";
import { useEffect, useState } from "react";
import { Mail, Social } from "@/app/_components/common";
import {
  About,
  Hero,
  Jobs,
  Navbar,
  Mobile,
  Contact,
  Projects,
} from "@/app/_components/layouts/index";

export default function Home() {
  const [isBlur, setBlur] = useState(false);

  return (
    <>
      <div>
        <Navbar setBlur={setBlur} />
        <Social />
        <Mail />
        <main className={`flex overflow-x-hidden relative min-h-screen flex-col items-center justify-between lg:px-60 ${isBlur && 'blur-sm'}`}>
          <Hero />
          <About />
          <Jobs />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
