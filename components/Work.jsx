import { content } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Work() {
  return (
    <section
      id="work"
      className="border-b border-ink-700/50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="B" label="Selected work" />

        <ul className="mt-12 divide-y divide-ink-700/70 border-y border-ink-700/70">
          {content.projects.map((project, i) => (
            <Reveal key={project.title} as="li" delay={i * 120}>
              <a
                href={project.link}
                className="project-row group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-3 py-8 pl-4 transition-colors hover:bg-ink-900/60 sm:grid-cols-[80px_1fr_auto] sm:gap-x-8 sm:py-10 sm:pl-6"
              >
                <div className="col-start-1 row-start-1 font-mono text-xs uppercase tracking-widest text-chalk-dim">
                  {project.year}
                </div>

                <div className="col-start-2 row-start-1 min-w-0">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-neon">
                    {project.client}
                  </div>
                  <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-chalk transition-colors group-hover:text-neon sm:text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-chalk-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink-600 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-chalk-muted transition-colors group-hover:border-neon/40 group-hover:text-chalk"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="col-start-3 row-start-1 self-center font-mono text-xl text-chalk-dim transition-all duration-300 group-hover:translate-x-2 group-hover:text-neon"
                  aria-hidden="true"
                >
                  →
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
