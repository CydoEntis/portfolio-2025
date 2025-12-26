import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ExperienceItem } from "../data/experienceData";

type ExperienceCardProps = {
  item: ExperienceItem;
};

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8 hover:bg-primary/5 -mx-4 p-4 rounded-lg transition-colors">
      <div className="sm:col-span-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {item.dateRange}
      </div>
      <div className="sm:col-span-6 space-y-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.title} ·{" "}
          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary"
            >
              {item.company}
              <ArrowUpRight
                size={14}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          ) : (
            item.company
          )}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
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

export default ExperienceCard;
