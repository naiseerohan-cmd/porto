import { content } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="D" label="Say hello" />

        <div className="mt-12">
          <Reveal delay={100}>
            <p className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-chalk-muted sm:text-4xl md:text-5xl">
              Working on something interesting? I'd love to hear about it.
              The best way to reach me is by email.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href={`mailto:${content.email}`}
              className="email-hero mt-10 inline-flex items-baseline gap-3 break-all font-display text-3xl font-medium tracking-tighter text-neon transition-opacity hover:opacity-90 sm:text-4xl md:text-5xl"
            >
              {content.email}
              <span aria-hidden="true" className="text-2xl">
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delay={500}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
