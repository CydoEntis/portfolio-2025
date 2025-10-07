import { Timeline } from "@/components/TimeLineOld";
import SectionTitle from "@/components/SectionTitle";
import { University } from "lucide-react";
import { education } from "../data/education";

type EducationTimeLineProps = {
  className?: string;
};

function EducationTimeline({ className }: EducationTimeLineProps) {
  return (
    <section className={`space-y-8  ${className}`}>
      <SectionTitle icon={<University size={20}/>} title="Education" />
      <Timeline items={education} />
    </section>
  );
}

export default EducationTimeline;
