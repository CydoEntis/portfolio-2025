import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

function AboutMe() {
  return (
    <section className="space-y-8 pb-8">
      <SectionTitle icon={<User size={20} />} title="Who Am I?" />
      <div className="space-y-3 text-muted-foreground text-lg">
        <p className="text-lg text-muted-foreground">
          I'm Cody a Developer crafting minimal, effortless web experiences that just work.
        </p>
        <p>
          I build full-stack applications with clean, maintainable code and thoughtful architecture, prioritizing
          clarity and functionality over design. When I’m not coding, I explore new frameworks, side projects, or find
          ways to simplify workflows.
        </p>
      </div>

      <div>
        <Button className="px-6 py-3 rounded-sm bg-primary/10 border border-primary/20 text-white">
          Download Resume
        </Button>
      </div>
    </section>
  );
}

export default AboutMe;
