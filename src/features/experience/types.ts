export type TimelineEntry = {
  type: "work" | "education";
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
};
