import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { technologies } from "../data/technologies";

interface FloatingTech {
  name: string;
  x: number;
  y: number;
  delay: number;
}

function FloatingTech() {
  const [techs, setTechs] = useState<FloatingTech[]>([]);

  useEffect(() => {
    // Generate random positions for each tech
    const floatingTechs = technologies.map((tech, index) => ({
      name: tech,
      x: Math.random() * 80 + 10, // 10-90% from left
      y: Math.random() * 70 + 15, // 15-85% from top
      delay: index * 0.2, // Stagger the appearance
    }));
    setTechs(floatingTechs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="absolute animate-float-up"
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
            animationDelay: `${tech.delay}s`,
          }}
        >
          <Badge
            variant="secondary"
            className="
              bg-zinc-900/80 backdrop-blur-sm text-zinc-300 
              border border-zinc-700/50 shadow-lg 
              animate-gentle-bounce
              pointer-events-auto hover:scale-110 transition-transform
              text-base md:text-lg px-4 py-2 font-semibold
            "
            style={{
              animationDelay: `${tech.delay + 1.5}s`, // Start bouncing after float-up finishes
            }}
          >
            {tech.name}
          </Badge>
        </div>
      ))}
    </div>
  );
}

export default FloatingTech;
