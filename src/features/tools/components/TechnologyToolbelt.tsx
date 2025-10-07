import Pill from "@/components/Pill";
import { technologies } from "../data/technologies";
import { ToolCase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function TechnologyToolbelt() {
  return (
    <section className={`space-y-8 pb-8 `}>
      <SectionTitle icon={<ToolCase size={20} />} title="Tools" />

      <div className="overflow-hidden">
        <div className="flex flex-wrap  gap-1">
          {technologies.map((tech) => (
            <Pill key={tech} text={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
