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
import { IconAnimation } from "./_assets/icons";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  // TODO: handle when mobile is already :)
  const [isMobile, setIsMobile] = useState(false);

  // TODO: handle when mobile is already
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };

  },[])

  return (
    <>
      {isMobile ? (
        <>
          <Mobile />
        </>
      ) : (
        <>
        <IconAnimation setIsShow={setIsShow} />
        {isShow && (
          <>
            <Navbar />
            <Social />
            <Mail />
            <main className="flex overflow-x-hidden relative min-h-screen flex-col items-center justify-between lg:px-60">
              <Hero />
              <About />
              <Jobs />
              <Projects />
              <Contact />
            </main>
          </>
        )}
      </>
      )}

    </>
  );
}
