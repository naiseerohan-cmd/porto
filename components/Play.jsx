import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import SnakeGame from "./SnakeGame";

export default function Play() {
  return (
    <section
      id="play"
      className="border-b border-ink-700/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel index="E" label="Take a break" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          <Reveal>
            <div className="max-w-md space-y-4">
              <h2 className="font-display text-3xl font-medium tracking-tight text-chalk sm:text-4xl">
                A little snake game, because portfolio sites shouldn't be all business.
              </h2>
              <p className="text-base leading-relaxed text-chalk-muted">
                Grow the snake by eating the pulsing dot. It speeds up as you go. Your best score is saved locally on your device.
              </p>
              <div className="pt-2 font-mono text-xs uppercase tracking-widest text-chalk-dim">
                <span className="text-chalk">Controls: </span>
                <span className="hidden sm:inline">Arrow keys or WASD</span>
                <span className="sm:hidden">Swipe on the board</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <SnakeGame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
