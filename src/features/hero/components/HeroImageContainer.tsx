import { type ReactNode } from "react";

type HeroImageContainerProps = {
  children: ReactNode;
};

function HeroImageContainer({ children }: HeroImageContainerProps) {
  return (
    <div className="w-48 h-64  rounded-t-full overflow-hidden border-2 md:border-4 border-foreground">{children}</div>
  );
}

export default HeroImageContainer;
