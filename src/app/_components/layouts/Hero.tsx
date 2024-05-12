"use client";
import { IconBackground } from "@/app/_assets/icons";
import { IUser } from "@/app/_interfaces";
import { decodeHtml } from "@/app/_utils/helper";


const Hero = ({ user }: { user: IUser }) => {
  const decodeDescription = decodeHtml(user?.description);

  return (
    <div
      className="text-start w-full md:px-11 flex flex-col gap-y-4 pt-60 md:pt-80 px-6 md:pb-56 pb-32"
      id="#"
    >
      <h4 className="font-SF-mono text-black">Hi I&apos;am</h4>
      <h1
        className="font-Humane tracking-wide text-6xl md:text-8xl text-black"
      >
        {user?.name}
      </h1>
      <IconBackground />
      <p className="max-w-xl md:text-xl text-regent-gray font-Calibre">
        {decodeDescription}
      </p>
      <div className="w-1/2 my-8 md:w-max">
        <a href={`mailto:${user?.email}`} className="button">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
