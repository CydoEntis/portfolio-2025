import { createFileRoute } from "@tanstack/react-router";

import HeroSection from "@/features/hero/components/HeroSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AboutSection from "@/features/about/components/AboutSection";
import ProjectSection from "@/features/projects/components/ProjectSection";
import ContactSection from "@/features/contact/components/ContactSection";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <AnimateOnScroll delay={100}>
        <HeroSection />
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <AboutSection />
      </AnimateOnScroll>

      <AnimateOnScroll delay={300}>
        <ProjectSection />
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <ContactSection />
      </AnimateOnScroll>
    </main>
  );
}
