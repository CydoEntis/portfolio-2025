import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  isReversed: boolean;
}

export function ProjectCard({ project, isReversed }: ProjectCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center mb-24 ${isReversed ? "md:grid-flow-dense" : ""}`}>
      <div className={`space-y-4 ${isReversed ? "md:col-start-2" : ""}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden border border-accent">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>
        {project.codeImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden  border border-accent">
            <img src={project.codeImage} alt={`${project.name} code`} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className={isReversed ? "md:col-start-1 md:row-start-1" : ""}>
        <h3 className="text-3xl font-bold text-foreground mb-4">{project.name}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-foreground border border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        <div className="flex gap-3">
          {project.githubUrl && (
            <Button
              asChild
              size="lg"
              className="bg-primary/10 border border-primary/20 hover:bg-primary/20 text-foreground"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="lg" variant="outline">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
