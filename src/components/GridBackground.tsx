function GridBackground() {
  return (
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
  );
}

export default GridBackground;
