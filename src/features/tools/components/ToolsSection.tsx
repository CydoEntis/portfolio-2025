import { Badge } from "@/components/ui/badge";
import { technologies } from "../data/technologies";

function ToolsSection() {
  return (
    <section className="space-y-8 pb-8 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left md:text-center mb-4 uppercase tracking-wider text-primary">
        Tech Stack
      </h2>
      <div className="w-16 h-px bg-primary/20 md:!mx-auto mb-8"></div>

      <p className="text-left md:text-center text-base md:text-lg text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto px-4">
        I like using the right tool for the right job. Here are a few technologies I specialize in and love working
        with.
      </p>

      <div className="flex flex-wrap gap-2  max-w-2xl mx-auto px-4">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary/10 text-foreground border border-primary/20 text-sm"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
