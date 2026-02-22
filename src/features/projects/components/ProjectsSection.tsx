import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects, packages } from "../data/projects";

type Tab = "apps" | "packages";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("apps");
  const items = activeTab === "apps" ? projects : packages;

  return (
    <div>
      <FadeIn>
        <SectionHeader label="Projects" title="What I've built" />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div
          className="inline-flex rounded-[10px] overflow-hidden border border-glass-border bg-glass backdrop-blur-[8px] mb-5"
        >
          {([
            { key: "apps" as Tab, label: "Applications", count: projects.length },
            { key: "packages" as Tab, label: "Packages", count: packages.length },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer text-[13px] font-medium px-5 py-2.5 transition-all border-b-2 ${
                activeTab === tab.key
                  ? "text-primary bg-tab-active border-tab-border"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className="font-mono text-[11px] ml-1.5 opacity-60">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </FadeIn>

      <div
        className={`grid gap-3 ${
          activeTab === "apps" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {items.map((project, i) => (
          <FadeIn key={project.name + activeTab} delay={i * 0.04}>
            <ProjectCard
              project={project}
              variant={activeTab}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
