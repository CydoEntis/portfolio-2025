import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  isReversed: boolean;
  index: number;
}

function ProjectCard({ project, isReversed, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-16 md:mb-24 
        transition-all duration-700 ease-out
        ${isReversed ? "md:grid-flow-dense" : ""}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <div className={`space-y-4 ${isReversed ? "md:col-start-2" : ""}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden border border-accent">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>
        {project.codeImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden border border-accent">
            <img src={project.codeImage} alt={`${project.name} code`} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className={isReversed ? "md:col-start-1 md:row-start-1" : ""}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">{project.name}</h3>

        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
          {project.tech.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-foreground border border-primary/20 text-xs md:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">{project.description}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          {project.githubUrl && (
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary/10 border border-primary/20 hover:bg-primary/20 text-foreground"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
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

export default ProjectCard;
