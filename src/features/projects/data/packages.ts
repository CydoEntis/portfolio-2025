export type Package = {
  name: string;
  description: string;
  githubUrl: string;
  tech: string[];
  stars?: number;
  image?: string;
};

export const packages: Package[] = [
  {
    name: "ErrorHound",
    description:
      "A lightweight .NET library that standardizes API error handling across applications. Provides consistent error responses with proper HTTP status codes, validation error formatting, and customizable error messages.",
    githubUrl: "https://github.com/CydoEntis/ErrorHound",
    tech: ["C#", ".NET", "ASP.NET Core"],
    image: "/ErrorHound.png",
  },
  {
    name: "SuccessHound",
    description:
      "Provide a clean, consistent, low-boilerplate way to return successful API responses with proper HTTP status codes. Includes pagination support for both EF Core and in-memory collections with fluent API for common operations.",
    githubUrl: "https://github.com/CydoEntis/SuccessHound",
    tech: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core"],
    image: "/SuccessHound.png",
  },
  {
    name: "Pawthorize",
    description:
      "Modern, secure authentication library for ASP.NET Core. Provides complete auth flows including JWT token management, password handling, session management, CSRF protection, role-based authorization, email verification, and password reset out of the box. Designed to get you up and running quickly with Minimal APIs.",
    githubUrl: "https://github.com/CydoEntis/Pawthorize",
    tech: ["C#", ".NET", "ASP.NET Core", "JWT", "BCrypt", "FluentValidation"],
    image: "/Pawthorize.png",
  },
];
