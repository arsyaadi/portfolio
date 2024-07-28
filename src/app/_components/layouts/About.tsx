import Image from "next/image";
import { IUser } from "@/app/_interfaces";
import parse from 'html-react-parser';

const About = ({ user }: { user: IUser }) => {

  return (
    <div id="about" className="md:py-52 py-28 px-6 text-start w-full">
      <div className="flex items-center gap-x-2">
        <h2 className="font-Calibre font-semibold text-black md:text-3xl min-w-max text-xl">
          <span className="font-SF-mono text-black">01.</span>
          About Me
        </h2>
        <div className="divider" />
      </div>

      <div className="flex flex-col relative md:flex-row gap-x-20">
        <div>
          <div className="max-w-2xl text-lg lg:text-xl text-regent-gray my-5 font-Calibre flex flex-col gap-y-4">
            <div>{parse(user?.aboutMe)}</div>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="grid grid-cols-2 max-w-xs">
            {user?.stacks?.map((stack, index) => {
              return (
                <li key={index} className="skill-list">
                  {stack}
                </li>
              );
            })}
          </ul>
        </div>

        {/* desktop */}
        <div className="hidden md:block wrapper-img md:absolute right-0  md:w-max mt-16 w-full mx-auto md:mt-10 hover:-translate-x-2 -translate-y-3 duration-250 transition">
          <Image
            className="img-headshot md:relative"
            src={user?.imageUrl}
            alt="Headshot"
            width={400}
            height={400}
          />
        </div>

        {/* mobile */}
        <div className="px-5 md:hidden max-w-[400px] mx-auto">
          <div className="wrapper-img sm:relative md:w-max mt-16 w-full mx-auto md:mt-10 bg-black hover:-translate-x-2 -translate-y-3 duration-250 transition">
            <Image
              className="img-headshot md:relative"
              src={user?.imageUrl}
              alt="Headshot"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
