import { useTheme } from "./ThemeProvider";

export default function GridBackground() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const color = isDark ? "255,255,255" : "0,0,0";

  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(${color},0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(${color},0.2) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
}
