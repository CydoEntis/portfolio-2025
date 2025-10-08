interface TimelineEntry {
  title: string;
  location: string;
  dates: string;
  side: "left" | "right";
}

interface TimelineItem {
  year: string;
  entries: TimelineEntry[];
}
