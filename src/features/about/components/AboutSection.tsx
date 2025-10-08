import Timeline from "@/features/about/components/Timeline";

function AboutSection() {
  return (
    <section className="space-y-8 pb-8 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 uppercase tracking-wider text-primary">
        About
      </h2>
      <div className="w-16 h-px bg-primary/20 mx-auto mb-8"></div>

      <p className="text-center text-base md:text-lg text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto px-4">
        I build full-stack applications with clean code and thoughtful architecture, prioritizing clarity and
        functionality over design. When I'm not coding, I explore new frameworks, side projects, or find ways to
        simplify workflows.
      </p>

      <Timeline />
    </section>
  );
}

export default AboutSection;
