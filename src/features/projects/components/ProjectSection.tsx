import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left md:text-center mb-4 uppercase tracking-wider text-primary">
          My Work
        </h2>
        <div className="w-16 h-px bg-primary/20 md:!mx-auto mb-8"></div>

        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
