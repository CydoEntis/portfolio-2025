function TimelineItem({ item }: { item: TimelineItem }) {
  return (
    <div className="relative flex items-start mb-8 transition-all duration-300 ease-in-out">
      {/* Left content */}
      <div className="w-5/12 pr-8 text-right">
        <div className="space-y-6">
          {item.entries
            .filter((entry) => entry.side === "left")
            .map((entry, index) => (
              <div key={index}>
                <div className="transition-all duration-300 ease-in-out">
                  <p className="text-[.60rem] text-muted-foreground">{entry.dates}</p>
                  <h3 className="font-bold text-lg text-primary">{entry.title}</h3>
                  <p className="text-sm text-foreground">{entry.location}</p>
                </div>
                {/* Separator line between multiple entries */}
                {index < item.entries.filter((e) => e.side === "left").length - 1 && (
                  <div className="w-1/4 h-px bg-primary/20 mt-4 ml-auto" />
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Center timeline dot */}
      <div className="w-2/12 flex flex-col items-center z-10 pt-1">
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
        </div>
        <span className="text-xs text-muted-foreground mt-1 whitespace-nowrap">{item.year}</span>
      </div>

      {/* Right content */}
      <div className="w-5/12 pl-8 text-left">
        <div className="space-y-6">
          {item.entries
            .filter((entry) => entry.side === "right")
            .map((entry, index) => (
              <div key={index}>
                <div className="transition-all duration-300 ease-in-out">
                  <p className="text-[.60rem] text-muted-foreground">{entry.dates}</p>
                  <h3 className="font-bold text-lg text-primary">{entry.title}</h3>
                  <p className="text-sm text-foreground">{entry.location}</p>
                </div>
                {/* Separator line between multiple entries */}
                {index < item.entries.filter((e) => e.side === "right").length - 1 && (
                  <div className="w-1/4 h-px bg-primary/20 mt-4" />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
