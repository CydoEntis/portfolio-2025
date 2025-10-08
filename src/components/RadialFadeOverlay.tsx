import { useTheme } from "./ThemeProvider";

export default function RadialFadeOverlay() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const background = isDark
    ? "radial-gradient(ellipse 80% 50% at 50% 40%, transparent 0%, rgba(18,17,19,0.8) 70%, #121113 100%)"
    : "radial-gradient(ellipse 80% 50% at 50% 40%, transparent 0%, rgba(255,255,255,0.6) 70%, #ffffff 100%)";

  return <div className="absolute inset-0" style={{ background }} />;
}
