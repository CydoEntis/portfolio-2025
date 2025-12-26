type HeroImageProps = {
  img: string;
};

function HeroImage({ img }: HeroImageProps) {
  return <img src={img} alt="Cody Stine" className="w-full h-full object-cover" />;
}

export default HeroImage;
