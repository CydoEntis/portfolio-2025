import { heroContent } from "../data/heroData";

export default function HeroBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[20px]"
      style={{
        background: "var(--accent-glow)",
        border: "1px solid var(--accent-glow)",
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full bg-primary"
        style={{ boxShadow: "0 0 8px var(--primary)" }}
      />
      <span className="font-mono text-xs font-medium text-primary">
        {heroContent.badge}
      </span>
    </div>
  );
}
