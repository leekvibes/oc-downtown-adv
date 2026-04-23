"use client";

export function OceanBanner() {
  return (
    <section
      className="relative overflow-hidden select-none"
      style={{ height: "72px", background: "linear-gradient(180deg, #164e8a 0%, #1B5FAE 40%, #1a6fc2 100%)" }}
    >
      {/* Subtle water surface effect — thin animated lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute w-[200%] h-full animate-[drift_12s_linear_infinite]">
          {[8, 20, 34, 48, 62].map((top) => (
            <div
              key={top}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ top: `${top}%`, left: 0, right: 0 }}
            />
          ))}
        </div>
      </div>

      {/* Scrolling ticker text — smooth infinite loop */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {[
                "Brand New 2026 Fleet",
                "From $129/hr",
                "Wild Horses on Assateague",
                "Daily Dolphin Sightings",
                "Free Parking",
                "5-Star Google Rated",
                "Sunset Rides Available",
                "Family Owned & Operated",
                "Buy 3 Get 4th Free",
                "Open Daily 8:30 AM",
              ].map((text) => (
                <span key={`${copy}-${text}`} className="flex items-center gap-4 mx-4">
                  <span className="text-white/90 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                    {text}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-yellow-brand/80 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Jet ski — detailed silhouette cruising right */}
      <div className="absolute animate-[cruise-right_16s_linear_infinite]" style={{ top: "50%", willChange: "transform" }}>
        <div className="relative">
          {/* Wake / water trail */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center mr-1 opacity-50">
            <div className="w-16 h-[2px] bg-gradient-to-l from-white/50 to-transparent rounded-full" />
          </div>
          <div className="absolute right-full top-[60%] -translate-y-1/2 flex items-center mr-1 opacity-30">
            <div className="w-10 h-[1px] bg-gradient-to-l from-white/40 to-transparent rounded-full" />
          </div>
          {/* Jet ski */}
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <path d="M2 14 C4 16 10 17 20 17 C30 17 36 16 39 13 L38 11.5 C34 14 26 15 18 15 C10 15 5 14 3 12.5Z" fill="white" fillOpacity="0.95"/>
            <path d="M8 13.5 C10 9 14 7 18 7 L28 7 C31 8 33 10 34 12.5 L32 14 C26 13 20 12.5 14 13Z" fill="white" fillOpacity="0.7"/>
            <path d="M21 4 C22 3 24 3 25 4 L26 6 L20 6Z" fill="white" fillOpacity="0.6"/>
            <line x1="27" y1="7" x2="31" y2="6" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          </svg>
          {/* Subtle reflection below */}
          <div className="absolute top-full left-2 right-2 h-[3px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-[1px]" />
        </div>
      </div>

      {/* Pontoon — detailed silhouette cruising left */}
      <div className="absolute animate-[cruise-left_22s_linear_infinite]" style={{ top: "50%", willChange: "transform", animationDelay: "6s" }}>
        <div className="relative">
          {/* Wake trail */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center ml-1 opacity-40">
            <div className="w-12 h-[2px] bg-gradient-to-r from-white/40 to-transparent rounded-full" />
          </div>
          {/* Pontoon */}
          <svg width="52" height="22" viewBox="0 0 52 22" fill="none" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] scale-x-[-1]">
            <rect x="6" y="16" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.9"/>
            <rect x="4" y="13.5" width="44" height="2.5" rx="1.2" fill="white" fillOpacity="0.6"/>
            <rect x="10" y="7" width="32" height="6.5" rx="1.5" fill="white" fillOpacity="0.65"/>
            <path d="M13 7 L13 3.5 C20 1.5 32 1.5 39 3.5 L39 7" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
            <path d="M13 3.5 C20 1.5 32 1.5 39 3.5" fill="white" fillOpacity="0.15"/>
            <circle cx="22" cy="5.5" r="1.5" fill="white" fillOpacity="0.45"/>
            <circle cx="28" cy="5" r="1.5" fill="white" fillOpacity="0.45"/>
            <circle cx="34" cy="5.5" r="1.5" fill="white" fillOpacity="0.45"/>
          </svg>
          <div className="absolute top-full left-3 right-3 h-[3px] bg-gradient-to-b from-white/8 to-transparent rounded-full blur-[1px]" />
        </div>
      </div>
    </section>
  );
}
