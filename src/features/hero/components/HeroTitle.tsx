import { useTheme } from "next-themes";

function HeroTitle() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const shadow = isDark ? "0 4px 12px rgba(255,255,255,0.3)" : "0 4px 12px rgba(0,0,0,0.5)";

  return (
    <h1
      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground"
      style={{ textShadow: shadow }}
    >
      Hey, I'm Cody Stine.
    </h1>
  );
}

export default HeroTitle;
