import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  rightContent?: ReactNode;
};

function SectionHeader({ label, title, subtitle, rightContent }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-[1.5px] bg-primary rounded-sm" />
          <span className="font-mono text-[11px] font-medium text-primary tracking-[0.1em] uppercase">
            {label}
          </span>
        </div>
        {rightContent && (
          <span className="text-xs text-muted-foreground">{rightContent}</span>
        )}
      </div>
      <h2 className="text-[26px] font-semibold text-foreground tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-[14.5px] text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
