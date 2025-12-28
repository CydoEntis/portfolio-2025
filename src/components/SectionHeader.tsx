type SectionHeaderProps = {
  title: string;
  showResumeLink?: boolean;
};

function SectionHeader({ title, showResumeLink = false }: SectionHeaderProps) {
  return (
    <>
      <div className="lg:flex items-center justify-between mb-8 hidden">
        <h2 className="text-lg font-bold tracking-widest text-primary uppercase">
          {title}
        </h2>
        {showResumeLink && (
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group transition-all duration-300 text-muted-foreground/80"
          >
            <span className="text-xs font-medium tracking-wider group-hover:text-foreground transition-colors">
              View Resume
            </span>
            <span className="h-[1px] w-8 bg-muted-foreground/80 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
          </a>
        )}
      </div>
      <h2 className="lg:hidden text-sm font-bold tracking-widest text-foreground mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur py-4 -mx-4 px-4">
        {title.toUpperCase()}
      </h2>
    </>
  );
}

export default SectionHeader;
