import { type ReactNode } from "react";

type HeroImageContainerProps = {
  children: ReactNode;
};

function HeroImageContainer({ children }: HeroImageContainerProps) {
  return (
    <div className="w-74 h-92 mb-8 rounded-t-full overflow-hidden border-4 border-white shadow-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
      {children}
    </div>
  );
}

export default HeroImageContainer;
