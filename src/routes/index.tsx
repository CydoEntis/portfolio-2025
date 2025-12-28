import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import Socials from "@/features/socials/components/Socials";
import Header from "@/components/Header";
import HeroImage from "@/features/hero/components/HeroImage";
import HeroImageContainer from "@/features/hero/components/HeroImageContainer";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/features/about/components/ExperienceCard";
import PortfolioProjectCard from "@/features/projects/components/PortfolioProjectCard";
import PackageCard from "@/features/projects/components/PackageCard";
import { experienceData } from "@/features/about/data/experienceData";
import { portfolioProjects } from "@/features/projects/data/portfolioProjects";
import { packages } from "@/features/projects/data/packages";
import { ContactForm } from "@/features/contact/components/ContactForm";
import ProfilePic from "../../public/portfolio-pic.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="min-h-screen">
      {/* Mobile Header  */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-primary/20">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">Cody Stine</h1>
          <Header />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 min-h-screen px-4 lg:px-0 pt-20 lg:pt-0">
        {/* Left Sidebar  */}
        <div className="lg:col-span-2 w-full lg:p-8 lg:sticky lg:top-0 lg:h-screen">
          <div className="flex h-full flex-col lg:justify-between">
            <div className="space-y-6">
              <div className="flex flex-col items-center lg:items-start">
                <HeroImageContainer>
                  <HeroImage img={ProfilePic} />
                </HeroImageContainer>
              </div>

              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Cody Stine</h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Software Engineer</h2>
                <p className="text-base text-muted-foreground max-w-sm">
                  I build developer tools and web experiences that just work — robust, reusable, and precise.
                </p>
              </div>

              <div className="hidden lg:block pt-6">
                <Header />
              </div>
            </div>

            <div className="mt-8 lg:mt-auto flex justify-center lg:justify-start">
              <Socials />
            </div>
          </div>
        </div>

        {/* Right Content Area - Scrollable */}
        <div className="lg:col-span-3 w-full lg:p-8 space-y-24">
          {/* About Section */}
          <section id="about" className="scroll-mt-16">
            <SectionHeader title="About" />

            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                I’m an engineer who builds tools and experiences that save time, reduce friction, and just work. Whether
                that’s a developer library, an API, or a polished web interface. I thrive at the crossroads of backend
                logic and frontend polish, creating software that’s robust under the hood and seamless for the user.
              </p>

              <div className="space-y-3">
                <p className="font-medium text-muted-foreground uppercase tracking-wide text-sm">
                  &mdash; Current Focus &mdash;
                </p>
                <p>
                  I currently work in the .NET ecosystem, building infrastructure, libraries, and platforms for
                  authentication, role management, error handling, and consistent API patterns. Projects include{" "}
                  <span className="font-bold text-primary">Cloud Crate</span>, a Google Storage–like application, and{" "}
                  <span className="font-bold text-primary">Pawthorize</span>, a standalone, self-hostable user and auth
                  management platform. I’ve also released standalone packages like{" "}
                  <span className="font-bold text-primary">ErrorHound</span> and{" "}
                  <span className="font-bold text-primary">SuccessHound</span>, designed to make complex workflows
                  simple and reusable.
                </p>
              </div>

              <p className="text-muted-foreground">
                I enjoy experimenting with new ideas and shipping things fast, building software that’s not just
                functional, but thoughtfully designed for developers and end users alike.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-16">
            <SectionHeader title="Experience" showResumeLink={true} />
            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <ExperienceCard key={index} item={item} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-16">
            <SectionHeader title="Projects" />
            <div className="space-y-12">
              {portfolioProjects.map((project, index) => (
                <PortfolioProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Packages Subsection */}
            <div className="mt-16">
              <h3 className="text-lg font-bold tracking-widest text-primary uppercase mb-8">Packages</h3>
              <div className="space-y-12">
                {packages.map((pkg, index) => (
                  <PackageCard key={index} package={pkg} />
                ))}
              </div>
            </div>

            {/* View Full Archive Link */}
            <div className="mt-12">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group"
              >
                View Full Project Archive
                <ArrowUpRight
                  size={16}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-16 pb-24">
            <SectionHeader title="Contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Have a project?</h3>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Let's talk!</h3>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
              <p>© 2025 — Made by Cody Stine</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
