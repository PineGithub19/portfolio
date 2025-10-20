import Projects from "../../components/projects/projects";
import WorkExperience from "../../components/work-experience/work-experience";
import Contact from "../../components/contact/contact";
import Profile from "../../components/profile/profile";
import ThemeButton from "../../components/theme-button/theme-button";
import Education from "../../components/education/education";

export default function Home() {
  return (
    <div>
      <Profile />
      <div className="px-64">
        <Education />
        <Projects />
        <WorkExperience />
        <Contact />
      </div>
      <div className="mt-24 pt-16 pb-16 w-full bg-[#CBACF9]">
        <p className="text-center text-black">
          Copyright © 2025 Thái Huyễn Tùng - Powered by Next.js
        </p>
      </div>
      <ThemeButton />
    </div>
  );
}
