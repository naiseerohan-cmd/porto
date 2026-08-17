import Image from "next/image";
import { content } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-ink-700/50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="A" label="About" />

        <div className="mt-12 grid gap-16 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-chalk-muted sm:text-xl">
            {content.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className={i === 0 ? "text-chalk" : ""}>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8 self-start">
            {content.profileImage && (
              <Reveal delay={200}>
                <div className="flex flex-col items-center gap-4 md:items-start">
                  <div className="profile-frame group relative h-36 w-36 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
                    <Image
                      src={content.profileImage}
                      alt={`Portrait of ${content.name}`}
                      width={472}
                      height={709}
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-chalk-muted">
                    <span
                      className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon"
                      aria-hidden="true"
                    />
                    <span className="text-chalk">{content.name}</span>
                    <span aria-hidden="true">·</span>
                    <span>{content.location.split(",")[0]}</span>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={350}>
              <dl className="space-y-4 rounded-lg border border-ink-700 bg-ink-900/60 p-6 font-mono text-sm">
                {content.meta.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-ink-700/60 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-xs uppercase tracking-widest text-chalk-dim">
                      {row.label}
                    </dt>
                    <dd className="text-right text-chalk">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
