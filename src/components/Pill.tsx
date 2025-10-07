import { cn } from "@/lib/utils"; 

type PillSize = "sm" | "md" | "lg";
type PillVariant = "default" | "primary" | "secondary" | "outline";

type PillProps = {
  text: string;
  size?: PillSize;
  variant?: PillVariant;
  className?: string;
};

export default function Pill({ text, size = "md", variant = "default", className }: PillProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-5 py-2 text-base",
  }[size];

  const variantClasses = {
    default: "bg-primary/10 border border-primary/20 text-white",
    primary: "bg-primary text-primary-foreground border border-primary/30",
    secondary: "bg-secondary text-secondary-foreground border border-secondary/20",
    outline: "border border-primary/40 text-primary bg-transparent",
  }[variant];

  return (
    <span
      className={cn(
        "rounded shadow-md font-semibold whitespace-nowrap  cursor-default",
        sizeClasses,
        variantClasses,
        className
      )}
    >
      {text}
    </span>
  );
}
