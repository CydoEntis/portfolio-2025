import type { Project } from "@/features/projects/types";

export const projects: Project[] = [
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
  // {
  //   name: "AuthForge",
  //   description:
  //     "A multi-tenant authentication and authorization service designed for developers to secure their apps with ease. Built with a clean architecture in .NET and React, featuring API key management, tenant isolation, and advanced role-based access control.",
  //   image: "",
  //   liveUrl: "https://authforge.dev",
  //   githubLinks: [
  //     { label: "Frontend", url: "https://github.com/me/frontend" },
  //     { label: "Backend", url: "https://github.com/me/backend" },
  //   ],
  //   tech: ["C#", ".NET", "Entity Framework Core", "React", "Zod", "Shadcn UI", "Tailwind CSS"],
  // },
  // {
  //   name: "QuestBound",
  //   description:
  //     "A gamified project management platform that transforms teamwork into adventure. Manage tasks, track progress, and level up your team’s productivity through achievements and collaborative quests.",
  //   image: "",
  //   liveUrl: "https://questbound.io",
  //   githubLinks: [
  //     { label: "Frontend", url: "https://github.com/me/frontend" },
  //     { label: "Backend", url: "https://github.com/me/backend" },
  //   ],
  //   tech: ["TypeScript", "React", "Express", "PostgreSQL", "Mantine UI", "Zustand", "Tailwind CSS"],
  // },
];
