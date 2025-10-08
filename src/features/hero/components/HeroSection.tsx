import Socials from "@/features/socials/components/Socials";
import ProfilePic from "../../../../public/portfolio-pic.png";
import HeroImage from "./HeroImage";
import Timeline from "@/components/TimeLineItem";
import GridBackground from "@/components/GridBackground";
import RadialFadeOverlay from "@/components/RadialFadeOverlay";
import HeroImageContainer from "./HeroImageContainer";
import HeroActions from "./HeroActions";

function HeroSection() {
  return (
    <div className=" relative  flex flex-col items-center justify-center px-4 py-20">
      <GridBackground />
      <RadialFadeOverlay />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <HeroImageContainer>
          <HeroImage img={ProfilePic} />
        </HeroImageContainer>
        <div className="relative -top-25">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center  drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Hey, It's <span className="text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">Cody Stine</span>.
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Full stack Developer
          </h2>

          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-4">
            I'm a <strong>Developer</strong> crafting <strong>minimal</strong>, effortless web{" "}
            <strong>experiences</strong> that just <strong>work</strong>.
          </p>

          <div className="space-y-8">
            <HeroActions />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
