import ProfilePic from "../../../../public/portfolio-pic.png";
import GridBackground from "@/components/GridBackground";
import RadialFadeOverlay from "@/components/RadialFadeOverlay";
import HeroActions from "./HeroActions";
import HeroTitle from "./HeroTitle";
import HeroImageContainer from "@/features/hero/components/HeroImageContainer";
import HeroImage from "@/features/hero/components/HeroImage";

function HeroSection() {
  return (
    <section id="hero" className="relative  flex flex-col items-center justify-center px-4 pt-28  ">
      <GridBackground />
      <RadialFadeOverlay />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <HeroImageContainer>
          <HeroImage img={ProfilePic} />
        </HeroImageContainer>

        <div className="relative -top-12 md:-top-25 w-full px-4">
          <HeroTitle />

          <h2 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 md:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Full stack Developer
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-left md:text-center text-muted-foreground max-w-2xl mb-6 md:mb-8 mx-auto">
            .NET · React · New Jersey
          </p>

          <HeroActions />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
