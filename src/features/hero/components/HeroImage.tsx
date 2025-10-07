type HeroImageProps = {
  img: string;
};

function HeroImage({ img }: HeroImageProps) {
  return (
    <div className="w-64 h-64 rounded  overflow-hidden">
      <img src={img} alt="Cody Stine" className="w-full h-full object-cover" />
    </div>
  );
}

export default HeroImage;
