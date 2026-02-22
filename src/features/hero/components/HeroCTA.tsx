import { Download, Github, Linkedin } from "lucide-react";
import { heroContent } from "../data/heroData";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function HeroCTA() {
  const handleClick = () => {
    const el = document.getElementById(heroContent.ctaTarget);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={handleClick}
          className="cursor-pointer inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[13.5px] font-medium text-white transition-all"
          style={{
            background: "var(--primary)",
            boxShadow: "0 2px 12px var(--accent-glow)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow-strong)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 12px var(--accent-glow)";
          }}
        >
          {heroContent.ctaText} →
        </button>
        <a
          href="/resume.pdf"
          download
          className="cursor-pointer inline-flex items-center gap-2 px-[22px] py-[11px] rounded-lg text-[13.5px] text-mid border border-glass-border bg-glass backdrop-blur-[8px] transition-all hover:border-[var(--glass-hover)] hover:text-foreground hover:bg-glass-hover"
        >
          <Download size={14} />
          Resume
        </a>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <a
          href={SOCIAL_LINKS.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-dim transition-colors hover:text-mid"
          aria-label="GitHub"
        >
          <Github size={15} />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-dim transition-colors hover:text-mid"
          aria-label="LinkedIn"
        >
          <Linkedin size={15} />
        </a>
      </div>
    </div>
  );
}
