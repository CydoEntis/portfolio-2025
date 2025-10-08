import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-px h-8 bg-primary/20 mx-auto"></div>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
