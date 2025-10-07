import EducationTimeline from "@/features/education/components/EducationTimeline";
import WorkHistoryTimeline from "@/features/work-history/components/WorkHistoryTimeline";
import { createFileRoute } from "@tanstack/react-router";
import AboutMe from "@/features/about/components/AboutMe";
import TechnologyToolbelt from "@/features/tools/components/TechnologyToolbelt";
import Projects from "@/features/projects/components/Projects";
import Hero from "@/features/hero/components/Hero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Socials from "@/features/socials/components/Socials";
import HeroImage from "@/features/hero/components/HeroImage";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <AnimateOnScroll delay={100}>
          <Hero />
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
