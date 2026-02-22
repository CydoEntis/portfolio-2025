import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      onClick={toggle}
      className="w-[34px] h-[34px] rounded-lg border border-glass-border bg-glass backdrop-blur-[8px] cursor-pointer flex items-center justify-center transition-all text-mid text-[15px] hover:border-[var(--border-hover,var(--glass-border))] hover:bg-glass-hover"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
