import { ArrowUpRight, Star, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PortfolioProject } from "../data/portfolioProjects";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
};

function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8 hover:bg-primary/5 -mx-4 p-4 rounded-lg transition-colors">
      <div className="sm:col-span-3">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block rounded overflow-hidden">
          {project.image ? (
            <div className="w-full h-64 flex items-start justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="max-w-full max-h-full object-contain rounded-sm group-hover:opacity-80 transition-opacity"
              />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-muted-foreground border border-primary/20 rounded-sm bg-primary/5">
              No preview available
            </div>
          )}
        </a>
      </div>

      <div className="sm:col-span-5 space-y-3">
        <div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              {project.name}
              <ArrowUpRight
                size={14}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          ) : (
            <h3 className="font-semibold text-foreground">{project.name}</h3>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {project.githubLinks && project.githubLinks.length > 0 && (
          <div className="flex flex-wrap gap-3 text-sm">
            {project.githubLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Code2 size={14} />
                {link.label}
              </a>
            ))}
          </div>
        )}

        {project.stars && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Star size={14} />
              {project.stars.toLocaleString()}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-foreground border border-primary/20 text-sm rounded-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjectCard;
