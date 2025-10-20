"use client";

import Image from "next/image";

const TechIcon: React.FC<{ url: string; className?: string }> = (props) => {
  return (
    <div
      className={`flex-shrink-0 p-3 rounded-full border-1 border-[#6971A2] dark:border-[#23253D] bg-[var(--background)] ${props.className}`}
    >
      <div className="p-1 bg-white rounded-md">
        <Image src={props.url} alt="tech-icon" width={30} height={30} />
      </div>
    </div>
  );
};

export default TechIcon;
