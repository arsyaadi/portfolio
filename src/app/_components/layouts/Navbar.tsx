"use client";
import { IUser } from "@/app/_interfaces";
import { config } from "@/app/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgFormatJustify, CgClose } from "react-icons/cg";


interface IProps {
  setBlur: (value: boolean) => void;
  user: IUser;
}

const Navbar = ({ setBlur, user }: IProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const body = document.body;

    if (mobileMenuOpen) {
      body.style.overflow = "hidden";
      setBlur(true);
    } else {
      body.style.overflow = "visible";
      setBlur(false);
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [mobileMenuOpen, setBlur]);

  const handleOpenMenuMobile = (value: boolean) => {
    setMobileMenuOpen(value);
  };

  return (
    <nav>
      <div
        className={`w-full hidden md:flex items-center justify-between fixed md:px-16 ${
          visible ? "top-0" : "-top-52"
        }  navbar px-2 py-5 z-50 bg-transparent font-SF-mono mb-3 transition-all duration-500 ease-in-out`}
      >
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-medium-grey hover:text-black transition duration-300 font-SF-mono"
            href="#"
          >
            <span className="font-SF-mono font-bold">Ars_</span>
          </a>
        </div>

        <div className="flex flex-grow items-center gap-x-4 w-max">
          <ul className="flex flex-row list-none lg:ml-auto">
            {config.navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-medium-grey hover:text-black transition duration-300"
                  href={link.url}
                >
                  <span className="text-black text-sm">
                    <span className="font-SF-mono">0</span>
                    {index + 1}.
                  </span>
                  <span className="ml-2">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={user?.resumeUrl}
            download={"Arsya-adi-setiawan-resume"}
            className="button !py-2"
          >
            Resume
          </a>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`w-full z-50 fixed bg-transparent md:hidden font-SF-mono mb-3 transition-all duration-500 ease-in-out ${
          visible ? "top-0" : "-top-52"
        }`}
      >
        <div className="my-5 w-full md:hidden">
          <div className="flex justify-between px-6">
            <button
              className="text-medium-grey cursor-pointer focus:outline-none"
              onClick={() => handleOpenMenuMobile(!mobileMenuOpen)}
              aria-label="Open Menu"
            >
              <CgFormatJustify size={24} />
            </button>
            <a
              className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-medium-grey hover:text-black transition duration-300 font-SF-mono"
              href="#"
            >
              <span className="font-SF-mono font-bold ">Ars_</span>
            </a>
          </div>

          <div
            className={`transition-all z-50 duration-500 absolute h-screen ease-in-out ${
              mobileMenuOpen ? "left-0" : "-left-[450px]"
            }`}
          >
            <div className="w-screen absolute -top-16">
              <div className="h-screen relative z-50 w-max px-5 bg-[#DBD8E3]">
                <ul className="flex flex-col py-36 h-screen max-w-max px-5 ">
                  {config.navLinks.map((link, index) => (
                    <li className="my-5" key={index}>
                      <Link
                        className="px-3 py-2 flex items-center text-sm opacity-100 font-bold leading-snug text-white hover:text-black transition duration-300"
                        href={link.url}
                        onClick={() => handleOpenMenuMobile(!mobileMenuOpen)}
                      >
                        <span className="text-black text-sm">
                          <span className="font-SF-mono">0</span>
                          {index + 1}.
                        </span>
                        <span className="ml-2 text-black">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="my-5 px-2">
                    <a
                      href={user?.resumeUrl}
                      download={"Arsya-adi-setiawan-resume"}
                      className="button !py-2 text-center mt-5"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={`w-screen top-0 absolute h-screen ${
                  !mobileMenuOpen && "hidden"
                }`}
                onClick={() => handleOpenMenuMobile(false)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
