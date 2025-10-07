import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineItem {
  year?: string;
  title: string;
  description: string;
  dates?: string;
  side: "left" | "right";
  expandedContent?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "Aug 2024",
    title: "Fullstack Developer",
    description: "DriveSmart",
    dates: "Apr 2024 - Aug 2024",
    side: "left",
    // expandedContent: "Additional details about Lychee v3...",
  },
  {
    title: "B.S Software Engineering",
    description: "Western Govenors University",
    dates: "May 2024 - Aug 2024",
    side: "left",
  },
  {
    year: "Apr 2024",
    title: "Frontend Developer",
    description: "DriveSmart",
    dates: "Apr 2023 - Apr 2024",
    side: "right",
  },
  {
    year: "May 2022",
    title: "Fullstack Developer",
    description: "BayMaster",
    dates: "Apr 2023 - Apr 2024",
    side: "left",
  },
  {
    year: "Dec 2021",
    title: "Computer Sci Tutor",
    description: "Ocean County College",
    dates: "Sep 2019 - Dec 2021",
    side: "right",
    // expandedContent: "More info about basicContext...",
  },
  {
    title: "A.S Computer Science",
    description: "Ocean County College",
    dates: "Sep 2019 - Dec 2021",
    side: "right",
  },
];

function TimelineItem({ item }: { item: TimelineItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExpandedContent = !!item.expandedContent;

  return (
    <div className="relative flex items-start mb-8 transition-all duration-300 ease-in-out">
      {/* Left content */}
      <div className={`w-5/12 ${item.side === "left" ? "pr-8 text-right" : ""}`}>
        {item.side === "left" && (
          <div className="transition-all duration-300 ease-in-out">
            <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            {hasExpandedContent && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                {isExpanded ? (
                  <>
                    Less <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    More <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-sm text-muted-foreground">{item.expandedContent}</div>
            </div>
          </div>
        )}
      </div>

      <div className="w-2/12 flex flex-col items-center z-10 pt-1">
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
        </div>
        <span className="text-xs text-muted-foreground mt-1">{item.year}</span>
      </div>

      {/* Right content */}
      <div className={`w-5/12 ${item.side === "right" ? "pl-8 text-left" : ""}`}>
        {item.side === "right" && (
          <div className="transition-all duration-300 ease-in-out">
            <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            {hasExpandedContent && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                {isExpanded ? (
                  <>
                    Less <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    More <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-sm text-muted-foreground">{item.expandedContent}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wider text-muted-foreground">About</h2>
        <div className="w-16 h-px bg-border mx-auto mb-8"></div>

        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          I build <strong>full-stack</strong> applications with <strong>clean</strong>, <strong>clean</strong> code and
          <strong>thoughtful architecture</strong>, prioritizing <strong>clarity</strong> and{" "}
          <strong>functionality</strong> over design. When I’m not coding, I explore new frameworks, side projects, or
          find ways to simplify workflows.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
