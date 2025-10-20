"use client";

import { AppearGradually } from "../animation/appear-gradually";

function WorkExperience() {
  return (
    <div id="work-experience">
      <p className="text-6xl text-center text-white font-bold mt-36 sm:mt-48 mb-24">
        <span className="text-black dark:text-white">My</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">
          work experience
        </span>
      </p>
      <AppearGradually>
        <div className="grid grid-cols-2 gap-24"></div>
        <p className="text-2xl text-center w-full mx-auto text-[#3E4160] dark:text-[#BEC1DD]">
          As an aspiring full-stack web developer eager to gain hands-on
          experience, I&apos;m actively seeking my first opportunity to apply my
          skills in a real-world environment — which is why my experience
          section is currently empty. ;))
        </p>
      </AppearGradually>
    </div>
  );
}

export default WorkExperience;
