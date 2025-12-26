import TimelineItem from "../../../components/TimeLineItem";
import { timelineData } from "../data/timelineData";

function Timeline() {
  return (
    <div className="relative px-4 md:px-0">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2"></div>

      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Timeline;
