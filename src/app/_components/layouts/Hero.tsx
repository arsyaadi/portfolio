"use client";
import { IconBackground } from "@/app/_assets/icons";
import { IUser } from "@/app/_interfaces";
import { decodeHtml } from "@/app/_utils/helper";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const monserat = Montserrat({ subsets: ["latin"], weight: "600" });

const Hero = ({ user }: { user: IUser }) => {
  const decodeDescription = decodeHtml(user?.description);

  return (
    <div
      className="text-start w-full flex flex-col gap-y-4 pt-60 md:pt-80 px-5 pb-56"
      id="#"
    >
      <h4 className="font-SF-mono text-3xl text-black">Hi I&apos;am</h4>
      <h1
        className={`text-3xl min-h-[80px] md:min-h-0 md:text-5xl tracking-tighter text-black ${monserat.className}`}
      >
        <TypeAnimation
          sequence={[user?.name, 1000, "Software Engineer", 1000]}
          repeat={Infinity}
          speed={25}
          deletionSpeed={5}
        />
      </h1>
      <IconBackground />
      <p className="max-w-xl md:text-xl text-regent-gray font-Calibre">
        {decodeDescription}
      </p>

      <motion.div
        whileHover={{ y: -10, x: -5 }}
        transition={{ stiffness: 100 }}
        className="w-1/2 my-8 md:w-max"
      >
        <a href={`mailto:${user?.email}`} className="button">
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
