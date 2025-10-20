import ProjectItem from "./project-item";

function Projects() {
  return (
    <div id="projects">
      <p className="text-6xl text-center text-white font-bold mt-48 mb-24">
        <span className="text-black dark:text-white">A small selection of</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">
          recent projects
        </span>
      </p>
      <div className="flex flex-wrap justify-between gap-y-24">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
