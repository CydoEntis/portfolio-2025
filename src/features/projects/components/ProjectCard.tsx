import { ExternalLink } from "lucide-react";
import type { ProjectItem } from "../types";

type ProjectCardProps = {
  project: ProjectItem;
  variant: "apps" | "packages";
};

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  const isApp = variant === "apps";

  return (
    <div className="border border-glass-border rounded-xl bg-glass backdrop-blur-[12px] shadow transition-all hover:border-[var(--glass-hover)] hover:bg-glass-hover hover:shadow-lg flex flex-col"
      style={{ padding: isApp ? "26px 28px" : "22px 24px" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-sm text-primary">
          {isApp ? "▸" : "⬡"}
        </span>
        <h3 className={`font-semibold text-foreground ${isApp ? "text-[17px]" : "text-[15px]"}`}>
          {project.name}
        </h3>
      </div>

      <p className="text-[13.5px] leading-relaxed text-mid mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-code-text bg-code-bg px-2.5 py-1 rounded-[5px]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {isApp && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-medium text-white transition-all"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--primary))",
              boxShadow: "0 2px 8px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 16px var(--accent-glow-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px var(--accent-glow)";
            }}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
        {project.githubLinks?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-medium text-mid border border-glass-border bg-glass backdrop-blur-[8px] transition-all hover:border-[var(--glass-hover)] hover:text-foreground hover:bg-glass-hover"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
