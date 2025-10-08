import { type ReactNode } from "react";

type HeroImageContainerProps = {
  children: ReactNode;
};

function HeroImageContainer({ children }: HeroImageContainerProps) {
  return (
    <div className="w-48 h-56 sm:w-60 sm:h-72 md:w-74 md:h-92 mb-8 rounded-t-full overflow-hidden border-2 md:border-4 border-foreground shadow-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
      {children}
    </div>
  );
}

export default HeroImageContainer;
