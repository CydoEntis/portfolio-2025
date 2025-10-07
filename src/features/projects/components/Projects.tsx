import SectionTitle from "@/components/SectionTitle";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Keyboard } from "lucide-react";

export default function Projects() {
  return (
    <section className="space-y-8 py-8 ">
      <SectionTitle icon={<Keyboard size={20} />} title="My Work" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
