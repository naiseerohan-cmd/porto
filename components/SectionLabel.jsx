import Reveal from "./Reveal";

export default function SectionLabel({ index, label }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-chalk-muted">
        <span className="text-neon">[{index}]</span>
        <span>{label}</span>
        <span
          className="section-line h-px flex-1 origin-left bg-ink-700"
          aria-hidden="true"
        />
      </div>
    </Reveal>
  );
}
