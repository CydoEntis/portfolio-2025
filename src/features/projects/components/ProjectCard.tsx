import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ name, description, image, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card
      className="
        relative group overflow-hidden rounded-xl border border-primary/20
        bg-primary/5 hover:bg-primary/20
        transition-all duration-500 ease-in-out
        h-64 flex items-center justify-center text-center
      "
    >
      <h3
        className="
          text-2xl font-semibold text-white z-10
          transition-opacity duration-300
          group-hover:opacity-0
        "
      >
        {name}
      </h3>

      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center text-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          z-10 px-4
        "
      >
        <p className="text-sm text-white/90 mb-4 max-w-sm">{description}</p>
        <div className="flex gap-2">
          {liveUrl && (
            <Button asChild className="bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-sm">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild className="bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-sm">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
