import { Badge } from "@/components/ui/badge";
import { technologies } from "../data/technologies";

function ToolsSection() {
  return (
    <section id="tools" className="space-y-8 px-4 pb-12">
      <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto px-4">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary/10 text-foreground border border-primary/20 text-sm lg:text-lg"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
