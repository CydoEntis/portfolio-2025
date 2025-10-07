function RadialFadeOverlay() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 40%, transparent 0%, rgba(18,17,19,0.8) 70%, #121113 100%)",
      }}
    />
  );
}

export default RadialFadeOverlay;
