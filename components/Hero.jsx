"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("pointermove", handle);
    return () => el.removeEventListener("pointermove", handle);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="dot-grid relative overflow-hidden border-b border-ink-700/50"
    >
      {/* Ambient drifting orb */}
      <div
        className="hero-orb"
        style={{ top: "20%", right: "-10%" }}
        aria-hidden="true"
      />
      <div
        className="hero-orb"
        style={{
          bottom: "-15%",
          left: "-5%",
          animationDelay: "-11s",
          animationDuration: "26s",
          opacity: 0.7,
        }}
        aria-hidden="true"
      />

      {/* Cursor spotlight on top of everything */}
      <div className="spotlight pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 md:pb-40 md:pt-40">
        <div className="hero-item d1 mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-chalk-muted">
          <span className="h-px w-8 bg-neon" aria-hidden="true" />
          <span>{content.role}</span>
        </div>

        <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tighter text-chalk sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="hero-item d2 block">{content.headline.lead}</span>
          <span className="hero-item d3 block text-neon">
            {content.headline.accent}
          </span>
        </h1>

        <p className="hero-item d4 mt-8 max-w-xl text-lg leading-relaxed text-chalk-muted sm:text-xl">
          {content.tagline}
        </p>

        <div className="hero-item d5 mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-chalk-dim">
          <a
            href="#work"
            className="neon-link text-chalk transition-colors hover:text-neon"
          >
            → See selected work
          </a>
          <a
            href={`mailto:${content.email}`}
            className="neon-link text-chalk transition-colors hover:text-neon"
          >
            → Send me a note
          </a>
        </div>
      </div>
    </section>
  );
}
