import Socials from "@/features/socials/components/Socials";
import ProfilePic from "../../../../public/portfolio-pic.png";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <HeroImage img={ProfilePic}/>
      <h1 className="text-3xl font-semibold text-foreground">I'm Cody Stine</h1>
      <Socials />
    </div>
  );
}

export default Hero;
