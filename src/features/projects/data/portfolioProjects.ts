export type PortfolioProject = {
  name: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubLinks?: { label: string; url: string }[];
  tech: string[];
  stars?: number;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Cloud Crate",
    description:
      "A secure, private cloud storage platform for managing, sharing, and collaborating on files. Built with .NET, React, and PostgreSQL, it features user access control, folder sharing, and seamless real-time collaboration.",
    image: "/images/cloudcrate.png",
    liveUrl: "https://cloudcrate.codystine.com/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/CydoEntis/cloud-crate-client" },
      { label: "Backend", url: "https://github.com/CydoEntis/cloud-crate" },
    ],
    tech: ["C#", ".NET Core", "React", "PostgreSQL", "Tailwind CSS", "Zustand", "TanStack Query"],
  },
];
