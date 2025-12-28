import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const links = [
    { label: "ABOUT", href: "about" },
    { label: "EXPERIENCE", href: "experience" },
    { label: "PROJECTS", href: "projects" },
    { label: "CONTACT", href: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href);

      // Check if we're near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      // If near bottom, always show contact as active
      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the section that's currently most visible in the viewport
      let currentSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Calculate distance from top of viewport
          const distance = Math.abs(rect.top);

          // For contact section, trigger much earlier (when it enters viewport)
          // For other sections, trigger at 50%
          const threshold = section === "contact" ? window.innerHeight * 0.9 : window.innerHeight / 2;

          // If this section is in view and closer to the top, update current section
          if (rect.top <= threshold && distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Immediately update active section when clicking
      setActiveSection(id);
    }
    setOpen(false);
  };

  return (
    <header className="">
      <div className="hidden md:flex md:flex-col gap-6 cursor-pointer">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`flex items-center gap-3 group transition-all duration-300 ${
              activeSection === link.href ? "text-foreground" : "text-muted-foreground/80"
            }`}
          >
            <span
              className={`h-[1px] transition-all duration-300 ${
                activeSection === link.href
                  ? "w-16 bg-primary"
                  : "w-8 bg-muted-foreground/80 group-hover:w-12 group-hover:bg-primary/80"
              }`}
            />
            <span className="text-xs font-medium tracking-wider group-hover:text-foreground/80">{link.label}</span>
          </button>
        ))}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden p-2 rounded hover:bg-muted transition">
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent side="right" className="w-64 p-8 bg-background shadow-xl border-l border-primary/20">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-xl">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-muted transition">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 ">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center gap-3 group transition-all duration-300 ${
                  activeSection === link.href ? "text-foreground" : "text-muted-foreground/40"
                }`}
              >
                <span
                  className={`h-[1px] transition-all duration-300 ${
                    activeSection === link.href
                      ? "w-16 bg-primary"
                      : "w-8 bg-muted-foreground/40 group-hover:w-12 group-hover:bg-primary/60"
                  }`}
                />
                <span className="text-xs font-medium tracking-wider group-hover:text-foreground/80">{link.label}</span>
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
