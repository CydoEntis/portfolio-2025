import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggle} className="transition-colors">
      {isDark ? <Moon className="w-5 h-5 text-blue-500" /> : <Sun className="w-5 h-5 text-yellow-500" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
