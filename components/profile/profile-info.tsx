"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

const ProfileInfo: React.FC<{
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}> = (props) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col md:flex-row"
      style={{ y: props.y, opacity: props.opacity }}
    >
      <div className="relative w-80 h-64 sm:w-64 sm:h-64 ">
        <Image
          src="/images/portrait.jpg"
          alt="Avatar"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="sm:ml-8 text-white">
        <h1 className="sm:mt-0 text-4xl xl:text-5xl">Thái Huyễn Tùng</h1>
        <p className="my-4 text-2xl font-light">Fullstack Developer</p>
        <p className="text-lg sm:w-64 md:w-100 lg:w-120 xl:w-170 xl:text-xl font-light">
          Motivated final-year Information Technology student specializing in
          full-stack web development. Experienced in building responsive
          websites using both frontend and backend technologies. Seeking an
          internship opportunity to apply my skills, gain hands-on experience,
          and grow toward a future full-time role in web development.
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileInfo;
