import { technologies } from "../data/technologies";
import { Badge } from "@/components/ui/badge";

export default function Tools() {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-primary/10 text-foreground border border-primary/20 rounded-sm text-base"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}
