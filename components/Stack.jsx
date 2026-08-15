import { content } from "@/data/content";

export default function Stack() {
  return (
    <section className="border-b border-ink-700/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="C" label="Toolkit" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.stack.map((group) => (
            <div key={group.group}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-chalk-dim">
                {group.group}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-lg text-chalk"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-chalk-muted">
      <span className="text-neon">[{index}]</span>
      <span>{label}</span>
      <span className="h-px flex-1 bg-ink-700" aria-hidden="true" />
    </div>
  );
}
