"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GRID = 15;
const INITIAL_SNAKE = [
  { x: 7, y: 8 },
  { x: 6, y: 8 },
  { x: 5, y: 8 },
];
const INITIAL_DIR = { x: 1, y: 0 };

function randomFood(snake) {
  while (true) {
    const f = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
    if (!snake.some((s) => s.x === f.x && s.y === f.y)) return f;
  }
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [dir, setDir] = useState(INITIAL_DIR);
  const [food, setFood] = useState({ x: 11, y: 8 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [state, setState] = useState("idle"); // idle | playing | over

  const dirRef = useRef(dir);
  const queuedDir = useRef(null);
  const touchStart = useRef(null);
  const boardRef = useRef(null);

  useEffect(() => {
    dirRef.current = dir;
  }, [dir]);

  // Load persisted high score
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("rs-snake-hs");
      if (saved) setHighScore(parseInt(saved, 10) || 0);
    } catch {}
  }, []);

  // Persist high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      try {
        window.localStorage.setItem("rs-snake-hs", String(score));
      } catch {}
    }
  }, [score, highScore]);

  const start = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDir(INITIAL_DIR);
    dirRef.current = INITIAL_DIR;
    queuedDir.current = null;
    setFood(randomFood(INITIAL_SNAKE));
    setScore(0);
    setState("playing");
  }, []);

  const tryTurn = useCallback((next) => {
    const current = dirRef.current;
    // Prevent 180° reversal
    if (next.x === -current.x && next.y === -current.y) return;
    if (next.x === current.x && next.y === current.y) return;
    queuedDir.current = next;
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;
      if ((state === "idle" || state === "over") && (key === " " || key === "Enter")) {
        e.preventDefault();
        start();
        return;
      }
      if (state !== "playing") return;
      const map = {
        ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
      };
      if (map[key]) {
        e.preventDefault();
        tryTurn(map[key]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [state, start, tryTurn]);

  // Touch controls (swipe on the board)
  const handleTouchStart = (e) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    if (state === "idle" || state === "over") {
      start();
      touchStart.current = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);
    if (Math.max(adx, ady) < 20) {
      touchStart.current = null;
      return;
    }
    if (adx > ady) {
      tryTurn({ x: dx > 0 ? 1 : -1, y: 0 });
    } else {
      tryTurn({ x: 0, y: dy > 0 ? 1 : -1 });
    }
    touchStart.current = null;
  };

  // Game loop
  useEffect(() => {
    if (state !== "playing") return;
    const speed = Math.max(70, 180 - score * 5);
    const id = setInterval(() => {
      if (queuedDir.current) {
        setDir(queuedDir.current);
        dirRef.current = queuedDir.current;
        queuedDir.current = null;
      }
      setSnake((prev) => {
        const head = prev[0];
        const next = {
          x: head.x + dirRef.current.x,
          y: head.y + dirRef.current.y,
        };
        // Wall collision
        if (next.x < 0 || next.x >= GRID || next.y < 0 || next.y >= GRID) {
          setState("over");
          return prev;
        }
        // Self collision
        if (prev.some((s) => s.x === next.x && s.y === next.y)) {
          setState("over");
          return prev;
        }
        const grew = next.x === food.x && next.y === food.y;
        const newSnake = grew ? [next, ...prev] : [next, ...prev.slice(0, -1)];
        if (grew) {
          setScore((s) => s + 1);
          setFood(randomFood(newSnake));
        }
        return newSnake;
      });
    }, speed);
    return () => clearInterval(id);
  }, [state, score, food]);

  const isOverlay = state === "idle" || state === "over";

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Scoreboard */}
      <div className="flex w-full max-w-[360px] items-center justify-between font-mono text-xs uppercase tracking-widest">
        <div className="text-chalk-dim">
          Score <span className="ml-2 text-chalk">{String(score).padStart(3, "0")}</span>
        </div>
        <div className="text-chalk-dim">
          Best <span className="ml-2 text-neon">{String(highScore).padStart(3, "0")}</span>
        </div>
      </div>

      {/* Board */}
      <div
        ref={boardRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="dot-grid relative aspect-square w-full max-w-[360px] overflow-hidden rounded-lg border border-ink-700 bg-ink-900"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID}, 1fr)`,
          gridTemplateRows: `repeat(${GRID}, 1fr)`,
          touchAction: "none",
        }}
        role="application"
        aria-label="Snake game"
      >
        {snake.map((cell, i) => (
          <div
            key={`${cell.x}-${cell.y}-${i}`}
            className={`m-[2px] rounded-[3px] ${
              i === 0
                ? "bg-neon shadow-[0_0_10px_rgba(198,255,61,0.6)]"
                : "bg-neon/70"
            }`}
            style={{
              gridColumnStart: cell.x + 1,
              gridRowStart: cell.y + 1,
            }}
          />
        ))}
        <div
          className="m-[3px] animate-pulse-soft rounded-full bg-neon shadow-[0_0_14px_rgba(198,255,61,0.7)]"
          style={{
            gridColumnStart: food.x + 1,
            gridRowStart: food.y + 1,
          }}
        />

        {/* Overlay */}
        {isOverlay && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-ink-950/85 backdrop-blur-sm">
            <div className="font-display text-3xl font-medium tracking-tight text-chalk sm:text-4xl">
              {state === "over" ? "Game over" : "Snake"}
            </div>
            {state === "over" && (
              <div className="font-mono text-xs uppercase tracking-widest text-chalk-muted">
                You scored {score}
                {score > 0 && score === highScore && (
                  <span className="ml-2 text-neon">· new best</span>
                )}
              </div>
            )}
            <button
              onClick={start}
              className="mt-2 rounded-md border border-neon bg-neon/10 px-5 py-2 font-mono text-xs uppercase tracking-widest text-neon transition-colors hover:bg-neon hover:text-ink-950"
            >
              {state === "over" ? "Play again" : "Start"}
            </button>
            <div className="font-mono text-[10px] uppercase tracking-widest text-chalk-dim">
              <span className="hidden sm:inline">Space to start · Arrows / WASD to move</span>
              <span className="sm:hidden">Tap to start · Swipe to move</span>
            </div>
          </div>
        )}
      </div>

      {/* Hint */}
      <div className="max-w-[360px] text-center font-mono text-[10px] uppercase tracking-widest text-chalk-dim">
        <span className="hidden sm:inline">Arrow keys or WASD · Speeds up as you grow</span>
        <span className="sm:hidden">Swipe on the board · Speeds up as you grow</span>
      </div>
    </div>
  );
}
