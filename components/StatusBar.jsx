"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";

const AVAILABILITY_COPY = {
  open: { dot: "bg-neon", text: "Open to work", live: true },
  booked: { dot: "bg-amber-400", text: "Booked through Q3", live: false },
  closed: { dot: "bg-chalk-dim", text: "Not currently taking work", live: false },
};

export default function StatusBar() {
  const [time, setTime] = useState("");
  const status = AVAILABILITY_COPY[content.availability] ?? AVAILABILITY_COPY.open;

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: content.timezone,
          }).format(new Date())
        );
      } catch {
        setTime(new Date().toISOString().slice(11, 16));
      }
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 font-mono text-[11px] uppercase tracking-widest text-chalk-muted sm:px-6">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${status.dot} ${
              status.live ? "animate-pulse-soft" : ""
            }`}
            aria-hidden="true"
          />
          <span className="text-chalk">{status.text}</span>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <span>{content.location}</span>
          <span aria-hidden="true">·</span>
          <span suppressHydrationWarning>{time || "--:--"} local</span>
        </div>
        <div className="flex items-center sm:hidden">
          <span suppressHydrationWarning>{time || "--:--"}</span>
        </div>
      </div>
    </div>
  );
}
