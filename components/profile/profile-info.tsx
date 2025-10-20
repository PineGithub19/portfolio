"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

const ProfileInfo: React.FC<{
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}> = (props) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex"
      style={{ y: props.y, opacity: props.opacity }}
    >
      <Image src="/vercel.svg" alt="Avatar" width={300} height={400} />
      <div className="ml-8 text-white">
        <h1 className="text-4xl">Thái Huyễn Tùng</h1>
        <p className="mt-6 text-lg max-w-120">
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
