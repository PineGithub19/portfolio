"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProjectSkills from "../projects/project-skills";
import { techs } from "../../constants/constants";
import { AppearGradually } from "../animation/appear-gradually";

function Education() {
  return (
    <div>
      <p className="text-6xl text-center text-white font-bold mt-36 lg:mt-48 mb-24">
        <span className="text-black dark:text-white">My</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">education</span>
      </p>
      <AppearGradually className="flex flex-col lg:flex-row lg:justify-around lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="relative flex items-center justify-center p-8 rounded-2xl bg-[#EDEADE] overflow-hidden">
            {/* Sheen effect covering full padding area */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              //   initial={{ x: "-100%" }}
              //   animate={{ x: "300%" }}
              //   transition={{
              //     duration: 2,
              //     repeat: Infinity,
              //     ease: "linear",
              //   }}
              className="absolute -top-1/3 left-0 w-1/3 h-[150%] pointer-events-none bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-12 mix-blend-screen z-10"
            />

            {/* Logo box */}
            <div className="relative w-[200px] h-[200px] rounded-md">
              <Image
                className="object-contain"
                src="/images/hcmus.png"
                alt="HCMUS"
                fill
                sizes="200px"
              />
            </div>
          </div>

          <ul className="mt-8 text-lg text-[#3E4160] dark:text-[#BEC1DD] flex flex-col gap-4">
            <li>
              <p>University of Science - VNUHCM</p>
            </li>
            <li>
              <p>Bachelor&apos;s Degree in Software Engineer</p>
            </li>
            <li>
              <p>Expected Graduation: 2026</p>
            </li>
            <li>
              <p>CGPA: 3.62 / 4.0</p>
            </li>
          </ul>
        </div>
        <div className="text-2xl text-[#3E4160] dark:text-[#BEC1DD] text-center mt-16 lg:text-left lg:mt-0">
          <div className="mb-16 lg:mb-12">
            <p className="font-bold mb-4">Relevant Coursework</p>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <p>Data Structures & Algorithms</p>
              </li>
              <li>
                <p>Introduction to Software Engineering</p>
              </li>
              <li>
                <p>Web Application Development</p>
              </li>
              <li>
                <p>Software Design</p>
              </li>
              <li>
                <p>Software Architecture</p>
              </li>
              <li>
                <p>Software Testing</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4">Online Courses & Certifications</p>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <p>React - The complete guide (Udemy)</p>
              </li>
              <li>
                <p>
                  Supervised Machine Learning: Regression and Classification
                  (Coursera)
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-2xl text-[#3E4160] dark:text-[#BEC1DD] text-center mt-16 lg:text-left lg:mt-0">
          <div className="mb-8">
            <p className="font-bold mb-4">Languages</p>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <p>English (IELTS 6.5 - IDP)</p>
              </li>
              <li>
                <p>Vietnamese (Native)</p>
              </li>
            </ul>
          </div>
        </div>
      </AppearGradually>
      <div className="mt-12">
        <ProjectSkills
          skills={[
            techs.javascript,
            techs.typescript,
            techs.java,
            techs.python,
          ]}
          title="Programming Languages"
        />
        <ProjectSkills
          skills={[
            techs.reactjs,
            techs.nextjs,
            techs.nestjs,
            techs.expressjs,
            techs.fastapi,
            techs.springboot,
          ]}
          title="Frameworks & Libraries"
        />
        <ProjectSkills
          skills={[
            techs.mysql,
            techs.postgresql,
            techs.mongodb,
            techs.firebase,
            techs.prisma,
          ]}
          title="Database & ORM"
        />
        <ProjectSkills
          skills={[
            techs.git,
            techs.github,
            techs.postman,
            techs.figma,
            techs.vscode,
            techs.webstorm,
            techs.docker,
          ]}
          title="Tools & Platforms"
        />
      </div>
    </div>
  );
}

export default Education;
