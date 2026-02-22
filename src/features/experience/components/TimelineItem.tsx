import type { TimelineEntry } from "../types";

type TimelineItemProps = {
  entry: TimelineEntry;
};

export default function TimelineItem({ entry }: TimelineItemProps) {
  const isWork = entry.type === "work";

  return (
    <div className="grid grid-cols-[30px_1fr] items-center">
      <div className="flex justify-center relative z-[2]">
        <div
          className={`w-2.5 h-2.5 rounded-full ${isWork ? "bg-primary" : "bg-timeline-edu"}`}
          style={{
            boxShadow: isWork
              ? "0 0 8px var(--accent-glow), 0 0 16px var(--accent-glow)"
              : "0 0 8px var(--timeline-edu-glow), 0 0 16px var(--timeline-edu-glow)",
          }}
        />
      </div>

      <div className="border border-glass-border rounded-xl bg-glass backdrop-blur-[12px] shadow transition-all hover:border-[var(--glass-hover)] hover:bg-glass-hover hover:shadow-lg px-5 py-4">
        <div className="flex justify-between items-center flex-wrap gap-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm text-foreground">
              {entry.title}
            </span>
            <span className="text-[13px] text-muted-foreground">
              {isWork ? "at" : "—"}{" "}
              {entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium hover:underline ${isWork ? "text-primary" : "text-timeline-edu"}`}
                >
                  {entry.company}
                </a>
              ) : (
                <span className={`font-medium ${isWork ? "text-primary" : "text-timeline-edu"}`}>
                  {entry.company}
                </span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[10px] font-medium tracking-[0.06em] uppercase px-2 py-0.5 rounded ${
                isWork
                  ? "text-code-text bg-code-bg"
                  : "text-timeline-edu bg-timeline-edu-soft"
              }`}
            >
              {isWork ? "work" : "edu"}
            </span>
            <span className="font-mono text-xs text-dim">
              {entry.dateRange}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
