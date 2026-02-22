import FadeIn from "@/components/FadeIn";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroCTA from "./HeroCTA";

export default function HeroSection() {
  return (
    <div className="space-y-5">
      <FadeIn>
        <HeroBadge />
      </FadeIn>
      <FadeIn delay={0.04}>
        <HeroHeading />
      </FadeIn>
      <FadeIn delay={0.12}>
        <HeroCTA />
      </FadeIn>
    </div>
  );
}
