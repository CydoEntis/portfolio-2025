import { Timeline } from "@/components/TimeLine";
import { workHistoryData } from "../data/workHistory";
import SectionTitle from "@/components/SectionTitle";
import { BriefcaseBusiness } from "lucide-react";

type WorkHistoryTimeLineProps = {
  className?: string;
};

function WorkHistoryTimeline({ className }: WorkHistoryTimeLineProps) {
  return (
    <section className={`space-y-8 pb-8 ${className}`}>
      <SectionTitle icon={<BriefcaseBusiness size={20}/>} title="Experience" />
      <Timeline items={workHistoryData} />
    </section>
  );
}

export default WorkHistoryTimeline;
