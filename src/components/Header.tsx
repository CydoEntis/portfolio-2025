import { Link } from "@tanstack/react-router";


export default function Header() {
  return (
    <>
      <header className="py-4 flex justify-between items-center bg-background text-foreground w-full">
        <div>
          <h1 className="font-semibold">
            <Link to="/" className="flex  text-2xl">
              Cody Stine
            </Link>
          </h1>
        </div>

      </header>
    </>
  );
}
