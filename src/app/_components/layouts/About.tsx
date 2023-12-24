import { Fira_Code } from "next/font/google";
import { config } from "@/app/config";
import Image from "next/image";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div id="about" className="md:py-52 py-28 px-6 text-start w-full">
      <div className="flex items-center gap-x-2 mb-5">
        <h2 className="font-Calibre md:text-3xl min-w-max text-xl">
          <span className={`${firaCode.className} text-aquamarine`}>01.</span>
          About Me
        </h2>
        <div className="divider" />
      </div>

      <div className="flex flex-col md:flex-row gap-x-20">
        <div>
          <div className="max-w-2xl text-regent-gray my-5 font-Calibre flex flex-col gap-y-4">
            <p>
              Hello! My name is Arsya Adi Setiawan Putra, a software engineer
              based in Yogyakarta. I enjoy the process of building things on the
              internet, particularly in the development of exceptional websites,
              web applications.
            </p>
            <p>
              I started pursuing my interest in software development in 2021.
              Shortly after that, I joined the engineering team at{" "}
              <a href="https://refactory.id/" className="text-aquamarine">
                Refactory.id
              </a>
              &nbsp; where I got involved in various interesting and meaningful
              projects every day.
            </p>
            <p>
              I believe that software development is an art that requires
              creativity, perseverance, and precision. I am committed to
              continuous learning and expanding my knowledge in this
              ever-evolving field. I am ready to take on new challenges and
              contribute to the fullest in every project I participate in.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="grid grid-cols-2 max-w-xs">
            {config.skils.map((skill, index) => {
              return (
                <li key={index} className="skill-list">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>

        {/* desktop */}
        <div className="hidden md:block wrapper-img md:relative md:w-max mt-16 w-full mx-auto md:mt-10 bg-aquamarine hover:-translate-x-2 -translate-y-3 duration-250 transition">
          <Image
            className="img-headshot md:relative w-full h-full"
            src="/Me.jpg"
            alt="Headshot"
            width={400}
            height={350}
          />
        </div>

        {/* mobile */}
        <div className="px-5 md:hidden max-w-[400px] mx-auto">
          <div className="wrapper-img sm:relative md:w-max mt-16 w-full mx-auto md:mt-10 bg-aquamarine hover:-translate-x-2 -translate-y-3 duration-250 transition">
            <Image
              className="img-headshot md:relative sm:w-full h-full "
              src="/Me.jpg"
              alt="Headshot"
              width={400}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
