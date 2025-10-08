import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const links = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
  ];

  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background shadow-sm px-4 py-4 flex justify-between items-center max-w-7xl mx-auto">
      <button onClick={() => handleNavClick("hero")} className="font-semibold flex flex-col text-sm">
        <span>Cody</span>
        <span className="ml-4">Stine</span>
      </button>

      <div className="hidden md:flex items-center gap-4">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="hover:text-primary transition-colors"
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick("contact")}
          className="ml-6 px-4 py-2 bg-primary/10 border border-primary/20 text-foreground rounded-sm justify-center flex items-center gap-2 hover:bg-primary/90 transition"
        >
          Get In Touch <Send size={16} />
        </button>
        
        <ThemeToggle />
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

          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-primary transition text-left"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("tools")}
              className="hover:text-primary transition text-left md:hidden"
            >
              Tools
            </button>

            <ThemeToggle />

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-6 px-4 py-2 bg-primary/10 border border-primary/20 text-foreground rounded-sm justify-center flex items-center gap-2 hover:bg-primary/90 transition"
            >
              Get In Touch <Send size={16} />
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
