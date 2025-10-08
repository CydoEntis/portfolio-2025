import ProfilePic from "../../../../public/portfolio-pic.png";
import HeroImage from "./HeroImage";
import GridBackground from "@/components/GridBackground";
import RadialFadeOverlay from "@/components/RadialFadeOverlay";
import HeroImageContainer from "./HeroImageContainer";
import HeroActions from "./HeroActions";
import FloatingTech from "@/features/tools/components/FloatingTech";

function HeroSection() {
  return (
    <div className=" relative  flex flex-col items-center justify-center px-4 py-20">
      <GridBackground />
      <RadialFadeOverlay />
      <FloatingTech />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <HeroImageContainer>
          <HeroImage img={ProfilePic} />
        </HeroImageContainer>
        <div className="relative -top-25">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center  drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Hey, I'm Cody Stine .
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Full stack Developer
          </h2>

          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-4">
            I'm a Developer crafting minimal, effortless web experiences that just work .
          </p>

          <div className="space-y-8">
            <HeroActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
