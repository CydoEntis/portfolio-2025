function AvailableToWork() {
  return (
    <div className="flex gap-2 items-center justify-center my-4 px-2 py-1 border border-primary/20 bg-primary/10  rounded-full mx-auto text-xs">
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
      <p>Available for work</p>
    </div>
  );
}

export default AvailableToWork;
