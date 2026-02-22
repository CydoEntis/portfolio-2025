import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { skillCategories } from "../data/skillsData";

export default function SkillsSection() {
  return (
    <div>
      <FadeIn>
        <SectionHeader label="Stack" title="Technologies I work with" />
      </FadeIn>
      <div className="flex flex-col gap-4">
        {skillCategories.map((category, i) => (
          <FadeIn key={category.title} delay={0.04 + i * 0.04}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] font-medium text-primary tracking-[0.08em] uppercase w-24 shrink-0">
                {category.title}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] text-code-text bg-code-bg px-2.5 py-1 rounded-[5px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
