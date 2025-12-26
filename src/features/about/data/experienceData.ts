export type ExperienceItem = {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    dateRange: "Apr 2024 — Aug 2024",
    title: "Full Stack Developer",
    company: "Drive Smart",
    companyUrl: "https://www.drivesmart.auto",
    description:
      "Developed responsive, user-friendly interfaces for the Line 5 online portal, reducing vehicle rating and loan proposal processing time by 30%. Maintained and optimized the company WordPress website, enhancing performance and increasing visitor engagement by 10%. Built a customer account portal with an intuitive UI, adopted by 80% of users, resulting in a 20% reduction in support inquiries.",
    technologies: ["TypeScript", "React", "TailwindCSS", "Flask", "Python"],
  },
  {
    dateRange: "Apr 2023 — Apr 2024",
    title: "Full Stack Developer",
    company: "Drive Smart",
    companyUrl: "https://www.drivesmart.auto",
    description:
      "Developed responsive, user-friendly interfaces for the Line 5 online portal, reducing vehicle rating and loan proposal processing time by 30%. Maintained and optimized the company WordPress website, enhancing performance and increasing visitor engagement by 10%. Built a customer account portal with an intuitive UI, adopted by 80% of users, resulting in a 20% reduction in support inquiries.",
    technologies: ["JavaScript", "WordPress", "PHP", "CSS", "HTML"],
  },
  {
    dateRange: "Jan 2021 - May 2022",
    title: "Software Engineer Intern",
    company: "Bay Master",
    companyUrl: "https://www.bay-master.com/",
    description:
      "Developed an interactive sales data dashboard using Kendo UI and jQuery, increasing reporting efficiency by 40% and enabling more informed decision-making for a team of five. Created a real-time text messaging dashboard with .NET and SignalR, boosting customer response rates by 15% and supporting promotional campaigns that generated over $75K in revenue. Optimized vehicle lookup functionality, reducing load times by 40% and improving user satisfaction and retention among key clients. Integrated a VIN scanning API, cutting manual entry errors by 70% and saving staff more than three hours per week in data processing.",
    technologies: ["C#", ".NET", "SignalR", "JQuery", "Kendo UI", "WordPress"],
  },
];
