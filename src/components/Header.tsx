import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Stack", href: "stack" },
  { label: "Journey", href: "journey" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);

      const allSections = ["home", ...links.map((link) => link.href)];
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = allSections[0];
      let minDistance = Infinity;

      allSections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          const threshold =
            section === "contact" ? window.innerHeight * 0.9 : window.innerHeight / 2;

          if (rect.top <= threshold && distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[760px] px-7 flex items-center justify-between h-14">
        <button
          onClick={() => handleNavClick("home")}
          className="cursor-pointer font-mono text-sm font-semibold"
        >
          <span className="text-muted-foreground">~/</span>
          <span className="text-primary">cody-stine</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`cursor-pointer text-[13px] transition-colors ${
                  activeSection === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="cursor-pointer p-1.5 rounded hover:bg-glass transition">
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-8 bg-background border-l border-border">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded hover:bg-glass transition"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-sm transition-colors ${
                      activeSection === link.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
