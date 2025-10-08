import { Button } from "@/components/ui/button";
import { Download, Folder } from "lucide-react";

function HeroActions() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <Button className="bg-primary/10 border border-primary/30 hover:bg-primary/30 text-foreground font-semibold px-8 py-3 rounded-md transition-colors">
        <Download /> Resume
      </Button>
      <Button onClick={() => handleNavClick("projects")} className="bg-primary/10 border border-primary/30 hover:bg-primary/30 text-foreground font-semibold px-8 py-3 rounded-md transition-colors">
        <Folder /> View Work
      </Button>
    </div>
  );
}

export default HeroActions;
