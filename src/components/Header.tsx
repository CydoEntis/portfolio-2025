import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <>
      <header className="py-4 flex  bg-background text-foreground ">
        <h1 className="font-semibold">
          <Link to="/" className="flex  text-2xl">
            Cody Stine
          </Link>
        </h1>
      </header>
    </>
  );
}
