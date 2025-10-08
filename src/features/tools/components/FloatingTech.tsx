import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { technologies } from "../data/technologies";

interface FloatingTech {
  name: string;
  x: number;
  y: number;
  delay: number;
}

const techPositions = [
  { x: 25, y: 10 }, // Top left
  { x: 15, y: 30 }, // Mid left upper
  { x: 10, y: 50 }, // Mid left lower
  { x: 10, y: 65 }, // Bottom left
  { x: 20, y: 85 }, // Bottom left corner
  { x: 75, y: 10 }, // Top right
  { x: 85, y: 30 }, // Mid right upper
  { x: 90, y: 50 }, // Mid right lower
  { x: 90, y: 65 }, // Bottom right
  { x: 80, y: 85 }, // Bottom right corner
];

function FloatingTech() {
  const [techs, setTechs] = useState<FloatingTech[]>([]);

  useEffect(() => {
    const floatingTechs = technologies.map((tech, index) => ({
      name: tech,
      x: techPositions[index % techPositions.length].x,
      y: techPositions[index % techPositions.length].y,
      delay: index * 0.2,
    }));
    setTechs(floatingTechs);
  }, []);

  return (
    // Hide on mobile, show on tablet and up
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="absolute animate-float-up opacity-0"
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
            animationDelay: `${tech.delay}s`,
          }}
        >
          <Badge
            variant="secondary"
            className="
              bg-primary/10 backdrop-blur-sm text-foreground 
              border border-primary/20 shadow-lg 
              animate-gentle-bounce
              pointer-events-auto hover:scale-110 transition-transform
              text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 font-semibold
            "
            style={{
              animationDelay: `${tech.delay + 1.5}s`,
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
