type SectionHeaderProps = {
  title: string;
};

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-lg font-bold tracking-widest text-primary uppercase mb-8 lg:block hidden">
        {title}
      </h2>
      <h2 className="lg:hidden text-sm font-bold tracking-widest text-foreground mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur py-4 -mx-4 px-4">
        {title.toUpperCase()}
      </h2>
    </>
  );
}

export default SectionHeader;
