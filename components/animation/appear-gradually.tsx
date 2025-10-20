"use client";

import { motion, MotionProps, useInView } from "framer-motion";
import { useRef } from "react";

import { cardVariants } from "../../constants/constants";

type AppearGraduallyProps = {
  className?: string;
  children: React.ReactNode;
} & MotionProps;

export const AppearGradually: React.FC<AppearGraduallyProps> = ({
  className,
  children,
  ...motionProps
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
