import { content } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Stack() {
  return (
    <section className="border-b border-ink-700/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="C" label="Toolkit" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.stack.map((group, groupIdx) => (
            <Reveal key={group.group} delay={groupIdx * 100}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-chalk-dim">
                {group.group}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-lg text-chalk transition-colors hover:text-neon"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
