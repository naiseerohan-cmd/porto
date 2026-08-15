import { content } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 font-mono text-xs uppercase tracking-widest text-chalk-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>
          © {year} {content.name}
        </span>
        <span>
          Built with Next.js, deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
