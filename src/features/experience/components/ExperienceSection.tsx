import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "./TimelineItem";
import { timeline } from "../data/experienceData";

export default function ExperienceSection() {
  return (
    <div>
      <FadeIn>
        <SectionHeader label="Journey" title="Experience & Education" />
      </FadeIn>

      <FadeIn delay={0.03}>
        <div className="flex items-center gap-4 mb-7">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 6px var(--accent-glow)" }}
            />
            <span className="text-xs text-muted-foreground">Work</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-timeline-edu"
              style={{ boxShadow: "0 0 6px var(--timeline-edu-glow)" }}
            />
            <span className="text-xs text-muted-foreground">Education</span>
          </span>
        </div>
      </FadeIn>

      <div className="relative">
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px opacity-20"
          style={{
            background: "linear-gradient(to bottom, var(--primary), var(--timeline-edu), transparent)",
          }}
        />

        <div className="flex flex-col gap-1.5">
          {timeline.map((entry, index) => (
            <FadeIn key={`${entry.title}-${entry.dateRange}`} delay={0.04 + index * 0.05}>
              <TimelineItem entry={entry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
