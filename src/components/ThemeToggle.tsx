import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    const root = document.getElementById("root");

    if (root && document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);

        root.dataset.theme = nextTheme;
      });
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="transition-colors !bg-primary/10 !border-primary/20"
    >
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
