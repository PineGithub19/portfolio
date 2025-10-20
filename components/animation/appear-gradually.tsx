"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cardVariants } from "../../constants/constants";

export const AppearGradually: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = (props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};
