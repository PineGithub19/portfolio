import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="
        fixed top-0 right-0 sm:right-auto 
        w-10 sm:w-full 
        h-20 
        z-50 
        bg-transparent
      "
      initial={{ opacity: 0, y: -50 }}
      exit={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul
        className="
        
          absolute 
          
          top-0 right-0
          sm:top-1/2 sm:left-1/2 
          sm:translate-x-[-50%] sm:translate-y-[-50%]

          w-fit

          flex flex-col
          sm:flex-row gap-12 py-4 px-4 sm:px-12
          text-center sm:text-left
          mt-2 mr-2 sm:mt-0 sm:mr-0

          bg-white/80
          dark:bg-transparent
          dark:bg-gradient-to-r from-[#04071d]/80 to-[#0c0e23]/80
          border-1 border-[#6971A2]
          rounded-2xl
          backdrop-blur-md
        "
      >
        <li>
          <Link
            href="#about"
            className="text-nowrap text-black dark:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="text-nowrap text-black dark:text-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#work-experience"
            className="text-wrap sm:text-nowrap text-black dark:text-white"
          >
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-nowrap text-black dark:text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
