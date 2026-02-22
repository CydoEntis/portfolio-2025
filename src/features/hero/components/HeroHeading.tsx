import { heroContent } from "../data/heroData";

export default function HeroHeading() {
  return (
    <div className="space-y-4">
      <h1 className="text-[clamp(36px,5.5vw,54px)] font-bold text-foreground tracking-tight leading-[1.1]">
        {heroContent.name}
      </h1>
      <p className="text-[17px] leading-[1.7] text-mid max-w-[520px]">
        {heroContent.description}{" "}
        <span className="font-medium text-foreground">.NET</span> and{" "}
        <span className="font-medium text-foreground">React</span>.
      </p>
      <p className="text-sm leading-[1.7] text-muted-foreground font-mono max-w-[520px]">
        {heroContent.tagline}
      </p>
    </div>
  );
}
