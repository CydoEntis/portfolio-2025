import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[760px] px-7 py-6 flex items-center justify-between">
        <span className="font-mono text-xs text-dim">&copy; 2025 Cody Stine</span>
        <div className="flex items-center gap-4">
          {[SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dim hover:text-mid transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
