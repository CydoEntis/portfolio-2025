import type { ReactElement } from "react";

type SectionTitleProps = {
  icon: ReactElement;
  title: string;
};

function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="border border-primary/20 bg-primary/10 p-1.5 rounded-sm">
        {icon}
      </div>
      <h3 className="font-semibold text-xl ">{title}</h3>
    </div>
  );
}

export default SectionTitle;
