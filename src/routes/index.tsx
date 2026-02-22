import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/features/hero/components/HeroSection";
import SkillsSection from "@/features/skills/components/SkillsSection";
import ExperienceSection from "@/features/experience/components/ExperienceSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import ContactSection from "@/features/contact/components/ContactSection";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="pb-20">
      <section id="home" className="pt-[116px] pb-[60px]">
        <HeroSection />
      </section>

      <section id="stack" className="py-16">
        <SkillsSection />
      </section>

      <section id="journey" className="py-16">
        <ExperienceSection />
      </section>

      <section id="projects" className="py-16">
        <ProjectsSection />
      </section>

      <section id="contact" className="py-16">
        <ContactSection />
      </section>
    </div>
  );
}
