"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

/* ─────────────────────────────────────────────
   SEASON OPENING DATE
   Change this to update when the season starts.
   Format: Month Day, Year
   ───────────────────────────────────────────── */
const SEASON_OPEN = new Date("June 1, 2026 08:30:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = SEASON_OPEN.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        <span className="text-2xl sm:text-4xl font-extrabold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">{label}</span>
    </div>
  );
}

export function SeasonCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      const tl = getTimeLeft();
      if (!tl) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        setTimeLeft(tl);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* Don't render if season has started or not yet mounted (avoid hydration mismatch) */
  if (!mounted || !timeLeft) return null;

  return (
    <section className="bg-gradient-to-r from-blue-dark via-blue-brand to-blue-dark py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          Season {SEASON_OPEN.getFullYear()}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          The Bay Opens Soon
        </h2>
        <p className="text-blue-200 text-sm sm:text-base mb-8">
          Book early to lock in your preferred dates — spots fill up fast!
        </p>

        {/* Countdown blocks */}
        <div className="flex justify-center gap-3 sm:gap-5 mb-8">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <TimeBlock value={timeLeft.seconds} label="Sec" />
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3.5 bg-yellow-brand text-dark font-bold text-base rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:scale-105"
        >
          Book Early & Save Your Spot
        </a>
      </div>
    </section>
  );
}
