import Timeline from "./Timeline";

function AboutSection() {
  return (
    <section id="about" className="space-y-8 pb-8 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left md:text-center mb-4 uppercase tracking-wider text-primary">
        About
      </h2>
      <div className="w-16 h-px bg-primary/20 md:!mx-auto mb-8"></div>

      <p className="text-left md:text-center text-base md:text-lg text-muted-foreground mb-8 md:mb-16 max-w-2xl mx-auto px-4">
        I build full-stack applications with clean code and thoughtful architecture, prioritizing clarity and
        functionality over design. When I'm not coding, I explore new frameworks, side projects, or find ways to
        simplify workflows.
      </p>

      <Timeline />
    </section>
  );
}

export default AboutSection;
