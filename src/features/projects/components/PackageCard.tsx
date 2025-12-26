import { ArrowUpRight, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Package } from "../data/packages";

type PackageCardProps = {
  package: Package;
};

function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8 hover:bg-primary/5 -mx-4 p-4 rounded-lg transition-colors">
      <div className="sm:col-span-3">
        <a href={pkg.githubUrl} target="_blank" rel="noopener noreferrer" className="block rounded overflow-hidden">
          {pkg.image ? (
            <div className="w-full h-32 flex items-center justify-center">
              <img
                src={pkg.image}
                alt={`${pkg.name} logo`}
                className="max-w-full max-h-full object-contain rounded-sm"
              />
            </div>
          ) : (
            <div className="w-full h-32 flex items-center justify-center text-muted-foreground border border-primary/20 rounded-sm bg-primary/5">
              <Code2 size={48} className="opacity-20" />
            </div>
          )}
        </a>
      </div>

      <div className="sm:col-span-5 space-y-3">
        <div>
          <a
            href={pkg.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            {pkg.name}
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={pkg.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Code2 size={14} />
            View on GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {pkg.tech.map((tech) => (
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

export default PackageCard;
