import Image from "next/image";
import { AppearGradually } from "../animation/appear-gradually";

const ProjectSkills: React.FC<{
  skills: { name: string; url: string }[];
  title: string;
}> = (props) => {
  return (
    <AppearGradually>
      <div className="mb-24 border-1 border-[#23253D] rounded-2xl py-8">
        <p className="text-center text-3xl text-[#3E4160] dark:text-[#BEC1DD] mb-12">
          {props.title}
        </p>
        <ul className="flex items-center justify-center gap-12">
          {props.skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-center "
            >
              <div className="w-[64px] h-[64px] p-2 bg-white rounded-md overflow-hidden">
                <Image
                  src={skill.url}
                  alt={skill.name}
                  height={64}
                  width={64}
                  className="object-contain"
                />
              </div>
              <p className="text-center text-[#3E4160] dark:text-[#BEC1DD] uppercase mt-4">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </AppearGradually>
  );
};

export default ProjectSkills;
