import { content } from "@/data/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-9 z-40 border-b border-ink-700/40 bg-ink-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm text-chalk transition-colors hover:text-neon"
          aria-label="Back to top"
        >
          {content.name.split(" ").map((w) => w[0]).join("").slice(0, 3).toLowerCase()}
          <span className="text-chalk-dim">/portfolio</span>
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-chalk-muted transition-colors hover:bg-ink-800 hover:text-chalk"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
