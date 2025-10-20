"use client";

import Image from "next/image";

import Navbar from "../navbar/navbar";
import ProfileInfo from "./profile-info";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Profile() {
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef<number>(0);

  const yProfile = useTransform(scrollY, [0, 400], [0, -100]);
  const opcacityProfile = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const unsubcribe = scrollY.on("change", (currentY) => {
      setShowNavbar(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (lastScrollY.current === currentY) {
          setShowNavbar(false);
        }
      }, 3000);

      lastScrollY.current = currentY;
    });

    return () => {
      unsubcribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scrollY]);

  return (
    <>
      <AnimatePresence>{showNavbar && <Navbar />}</AnimatePresence>
      <div
        id="about"
        className="relative w-full h-[822px] object-cover overflow-hidden"
      >
        <Image
          src="/images/bg-image.png"
          alt="Background Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <ProfileInfo y={yProfile} opacity={opcacityProfile} />
      </div>
    </>
  );
}

export default Profile;
