import Image from "next/image";
import { content } from "@/data/content";

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
              <p key={i} className={i === 0 ? "text-chalk" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6 self-start">
            {content.profileImage && (
              <div className="flex justify-center md:justify-start">
                <div className="profile-frame group relative w-full max-w-[220px] overflow-hidden rounded-lg border border-ink-700 bg-ink-900">
                  <Image
                    src={content.profileImage}
                    alt={`Portrait of ${content.name}`}
                    width={472}
                    height={709}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Subtle top-to-bottom fade so the portrait sits in the dark palette */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-widest text-chalk">
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-neon align-middle" />
                    {content.name}
                  </div>
                </div>
              </div>
            )}

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
          </div>
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
