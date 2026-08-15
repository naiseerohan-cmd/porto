import { content } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="D" label="Say hello" />

        <div className="mt-12">
          <p className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-chalk-muted sm:text-4xl md:text-5xl">
            Working on something interesting? I'd love to hear about it.
            The best way to reach me is by email.
          </p>

          <a
            href={`mailto:${content.email}`}
            className="mt-10 inline-flex items-baseline gap-3 font-display text-3xl font-medium tracking-tighter text-neon transition-opacity hover:opacity-80 sm:text-4xl md:text-5xl"
          >
            {content.email}
            <span aria-hidden="true" className="text-2xl">↗</span>
          </a>

          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
            {content.socials.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="neon-link text-chalk-muted transition-colors hover:text-chalk"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
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
