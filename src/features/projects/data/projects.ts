import type { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    name: "PupDrive",
    description:
      "A cloud storage application built on PupStack with bucket-like \"Crates\" for file organization, role-based permissions, and subscription-based quotas. Integrates Pawthorize, StashPup, ErrorHound, and SuccessHound — demonstrating the full Pup ecosystem working together.",
    tech: ["React 19", "TypeScript", ".NET 8", "PostgreSQL", "TanStack Router", "Zustand", "Tailwind CSS v4"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/CydoEntis/PupDrive" },
    ],
    liveUrl: "https://pupdrive.codystine.com/",
  },
  {
    name: "ShipHound",
    description:
      "A free, open-source CLI tool that automates the entire deployment pipeline for full-stack apps. Handles local builds, SSH uploads, Caddy reverse proxy with auto-HTTPS, systemd service management, and zero-downtime deployments — all without Docker or cloud vendor lock-in.",
    tech: ["C#", ".NET 8", "SSH/SFTP", "Caddy", "systemd", "YAML"],
    liveUrl: "https://shiphound.codystine.com/",
    githubLinks: [
      { label: "GitHub", url: "https://github.com/CydoEntis/ShipHound" },
    ],
  },
  {
    name: "PupStack",
    description:
      "A full-stack app generator that scaffolds production-ready applications with Pawthorize-powered auth, an admin dashboard, OAuth support, multiple landing pages, two app shell layouts, 12 color palettes with light/dark mode, and deployment-ready scripts.",
    tech: ["React 19", "TypeScript", ".NET 8", "TanStack Router", "TanStack Query", "Zustand", "shadcn/ui", "Tailwind CSS v4"],
    liveUrl: "https://pupstack.codystine.com/",
    githubLinks: [
      { label: "GitHub", url: "https://github.com/CydoEntis/PupStack" },
    ],
  },
  {
    name: "Pawprint",
    description:
      "Automated screenshot generation for web apps across themes, palettes, and viewports. Uses Playwright to capture every combination of route, theme mode, color palette, and viewport size — perfect for visual regression testing and design documentation.",
    tech: ["TypeScript", "Node.js", "Playwright", "Commander"],
    liveUrl: "https://pawprint.codystine.com/",
    githubLinks: [
      { label: "GitHub", url: "https://github.com/CydoEntis/Pawprint" },
    ],
  },
];

export const packages: ProjectItem[] = [
  {
    name: "Pawthorize",
    description:
      "Complete authentication library for ASP.NET Core handling registration, JWT access + refresh tokens with auto-rotation, OAuth 2.0 social login (Google, Discord, GitHub), session management, CSRF protection, account lockout, rate limiting, and email verification — all out of the box.",
    tech: ["C#", ".NET 8", "JWT", "OAuth 2.0", "BCrypt", "FluentValidation"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/CydoEntis/Pawthorize" }],
  },
  {
    name: "ErrorHound",
    description:
      "Lightweight error-handling middleware for ASP.NET Core providing consistent, standardized API error responses. Includes 11 built-in error types, field-level validation errors, automatic exception logging, and fully customizable response formatting with zero dependencies.",
    tech: ["C#", ".NET 8", "ASP.NET Core", "xUnit"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/CydoEntis/ErrorHound" }],
  },
  {
    name: "SuccessHound",
    description:
      "Consistent, strongly-typed API success response envelopes for .NET. Provides fluent extension methods (.Ok(), .Created(), .Updated(), .Deleted()), full Swagger/OpenAPI schema generation, and optional EF Core pagination — designed to pair with ErrorHound.",
    tech: ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/CydoEntis/SuccessHound" }],
  },
  {
    name: "StashPup",
    description:
      "A flexible, provider-agnostic file storage library for .NET with a unified interface across Local filesystem, AWS S3, and Azure Blob Storage. Features railway-oriented error handling, thumbnail generation, signed URLs, advanced search with pagination, and pre-built Minimal API endpoints.",
    tech: ["C#", ".NET 8", "AWS S3 SDK", "Azure Blob SDK", "ImageSharp"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/CydoEntis/StashPup" }],
  },
];
