"use client";

import Link from "next/link";
import Image from "next/image";

import TechIcon from "./tech-icon";
import { AppearGradually } from "../animation/appear-gradually";

const ProjectItem: React.FC<{
  techs: { name: string; url: string }[];
  image: string;
  title: string;
  description: string;
  linkRepo: string;
}> = (props) => {
  return (
    <AppearGradually className="flex flex-col justify-center items-center border-1 border-[#23253D] rounded-2xl py-8 px-4 w-[650px] min-h-[650] sm:px-8">
      <div className="bg-[#FFE6EA] dark:bg-[#11071F] w-full h-[400px] flex justify-center pt-8 overflow-hidden rounded-t-xl">
        <Image
          src={props.image || "/vercel.svg"}
          alt="project"
          width={450}
          height={300}
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="mt-4 flex flex-col justify-center items-center text-[#3E4160] dark:text-[#BEC1DD]">
        <p className="text-4xl mt-4 font-bold min-h-30">{props.title}</p>
        <p className="text-xl mb-8 mt-8 md:mt-0">{props.description}</p>
      </div>
      <div className="mt-auto w-full flex items-center justify-between">
        <div className="relative flex max-w-[224px] overflow-y-scroll no-scrollbar sm:max-w-none sm:overflow-visible">
          {props.techs.map((tech, index) => (
            <TechIcon
              key={tech.name}
              url={tech.url}
              className={`${index > 0 ? `-ml-2 z-${index}` : ""}`}
            />
          ))}
        </div>

        <Link
          target="_blank"
          href={props.linkRepo}
          className="text-xl text-[#9857D3] dark:text-[#CBACF9]"
        >
          Check Github
        </Link>
      </div>
    </AppearGradually>
  );
};

export default ProjectItem;
