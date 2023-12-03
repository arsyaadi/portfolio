"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { config } from "@/app/config";
import { Fira_Mono } from "next/font/google";
import { Button } from "../common";

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const nav = navbarRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    // Set initial state (hidden)
    tl.set(nav, { y: '-100%', opacity: 0 });

    // Fade in the entire navbar and move it to its current position
    tl.to(nav, { y: '0%', opacity: 1, duration: 1.0 });

    // Select all text elements inside the navbar
    const textElements = nav?.querySelectorAll("a, span, div");

    // Set initial state (invisible)
    if (textElements) {
      gsap.set(textElements, { opacity: 0 });
      // Animate each text element to appear one by one
      tl.to(textElements, 0.5, { opacity: 1 }, 1.1);
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav
      className={`fixed w-full ${
        visible ? "top-0" : "-top-52"
      } navbar px-2 py-5 z-50 bg-transparent font-SF-mono mb-3 transition-all duration-500 ease-in-out`} >
      <div className="container w-full px-4 mx-auto flex flex-wrap items-center justify-between" ref={navbarRef}>
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={`text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:text-aquamarine transition duration-300 ${firaMono.className}`}
            href="#"
          >
            <span className="font-SF-mono font-bold">Ars_</span>
          </a>
        </div>
        <div className="hidden lg:flex flex-grow items-center gap-x-4">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {config.navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:text-aquamarine transition duration-300"
                  href={link.url}
                >
                  <span className="text-aquamarine text-sm">
                    <span className={firaMono.className}>0</span>
                    {index + 1}.
                  </span>
                  <span className="ml-2">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href="/resume/Arsya Adi Setiawan Putra.pdf" download={'Arsya-adi-setiawan-resume'} className="button !py-2">Resume</a>
        </div>

        {/* mobile navbar */}
        <div className="lg:hidden">
            <ul className="flex flex-row" >
              {config.navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:text-aquamarine transition duration-300"
                    href={link.url}
                  >
                    <span className="text-aquamarine text-sm">
                      <span className={firaMono.className}>0</span>
                      {index + 1}.
                    </span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
