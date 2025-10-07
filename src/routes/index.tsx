import { createFileRoute } from "@tanstack/react-router";

import HeroSection from "@/features/hero/components/HeroSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <AnimateOnScroll delay={100}>
        <HeroSection />
      </AnimateOnScroll>

      {/* <AnimateOnScroll delay={100}>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:sticky lg:top-0 p-2 md:p-4">
            <Hero />
          </div>
          <div className="p-2 md:p-4">
            <AboutMe />
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-2 md:p-4">
            <WorkHistoryTimeline />
          </div>
          <div className="p-2 md:p-4">
            <EducationTimeline />
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={300}>
        <section className="p-2 md:p-4 space-y-8">
          <TechnologyToolbelt />
          <Projects />
        </section>
      </AnimateOnScroll> */}
    </main>
  );
}
