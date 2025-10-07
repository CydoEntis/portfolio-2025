import Socials from "@/features/socials/components/Socials";
import ProfilePic from "../../../../public/portfolio-pic.png";
import HeroImage from "./HeroImage";
import Timeline from "@/components/TimeLineItem";

function Hero() {
  return (
    <div className="min-h-screen relative bg-[#121113] flex flex-col items-center justify-center px-4 py-20">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, transparent 0%, rgba(18,17,19,0.8) 70%, #121113 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-74 h-92 mb-8 rounded-t-full overflow-hidden border-4 border-white shadow-xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
          <HeroImage img={ProfilePic} />
        </div>

        <div className="relative -top-25">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center  drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Hey, It's <span className="text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">Cody Stine</span>.
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Full stack Developer
          </h2>

          <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-4">
            I've been working as a full stack <span className="font-semibold text-foreground">web developer</span> for X
            years.
          </p>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-8">
            I am based in <span className="font-semibold text-foreground">Your Location</span>.
          </p>

          <div className="flex flex-col justify-center items-center">
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-md transition-colors">
              Hire me
            </button>

            <div className="mt-8">
              <Socials />
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  );
}

export default Hero;
