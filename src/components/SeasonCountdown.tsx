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
}

function getTimeLeft(): TimeLeft | null {
  const diff = SEASON_OPEN.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export function SeasonCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

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
    }, 60_000); // update every minute (no need for seconds in this format)
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !timeLeft || dismissed) return null;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] group"
    >
      <div className="relative bg-blue-brand text-white pl-4 pr-10 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-3 hover:bg-blue-dark transition-all hover:scale-105 cursor-pointer animate-[fadeInUp_0.5s_ease-out]">
        {/* Pulse dot */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-brand opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-brand" />
        </span>

        {/* Text */}
        <span className="text-sm font-bold whitespace-nowrap">
          Season opens in {timeLeft.days}d {timeLeft.hours}h — Book Early
        </span>

        {/* Dismiss X */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          className="absolute top-1/2 -translate-y-1/2 right-2.5 w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white/80 hover:text-white transition-colors"
          aria-label="Dismiss countdown"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </a>
  );
}
