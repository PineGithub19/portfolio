"use client";

import Link from "next/link";
import Image from "next/image";

import TechIcon from "./tech-icon";
import { AppearGradually } from "../animation/appear-gradually";
import { techs } from "../../constants/constants";

function ProjectItem() {
  return (
    <AppearGradually className="flex flex-col justify-center items-center border-1 border-[#23253D] rounded-2xl py-8 px-8 w-[600px] min-h-[650]">
      <div className="bg-red-50 w-full flex justify-center pt-12">
        <Image src="/vercel.svg" alt="project" width={400} height={300} />
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <p className="text-4xl my-2 text-black dark:text-white">title</p>
        <p className="text-xl text:black dark:text-white">description</p>
      </div>
      <div className="mt-auto w-full flex items-center justify-between">
        <div className="flex">
          <TechIcon url={techs.reactjs.url} />
          <TechIcon url={techs.nextjs.url} className="-ml-2 z-1" />
          <TechIcon url={techs.typescript.url} className="-ml-2 z-2" />
        </div>
        <Link href="/" className="text-xl text-[#9857D3] dark:text-[#CBACF9]">
          Check Github
        </Link>
      </div>
    </AppearGradually>
  );
}

export default ProjectItem;
