"use client";

export function OceanBanner() {
  return (
    <section className="relative bg-blue-brand overflow-hidden select-none" style={{ height: "80px" }}>
      {/* Animated wave background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-[200%] h-10 opacity-15 animate-[wave_8s_ease-in-out_infinite]" viewBox="0 0 2400 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 T1500 20 T1800 20 T2100 20 T2400 20 V40 H0Z" fill="white" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[200%] h-8 opacity-10 animate-[wave_6s_ease-in-out_infinite_reverse]" viewBox="0 0 2400 32" preserveAspectRatio="none">
          <path d="M0 16 Q150 0 300 16 T600 16 T900 16 T1200 16 T1500 16 T1800 16 T2100 16 T2400 16 V32 H0Z" fill="white" />
        </svg>
      </div>

      {/* Floating stat bubbles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hidden md:flex items-center gap-16 text-white/80 text-xs font-bold uppercase tracking-widest">
          <span className="animate-[float_3s_ease-in-out_infinite]">From $129/hr</span>
          <span className="animate-[float_3s_ease-in-out_infinite_0.5s]">Wild Horses</span>
          <span className="animate-[float_3s_ease-in-out_infinite_1s]">Dolphins</span>
          <span className="animate-[float_3s_ease-in-out_infinite_1.5s]">Free Parking</span>
          <span className="animate-[float_3s_ease-in-out_infinite_2s]">5-Star Rated</span>
        </div>
        {/* Mobile: fewer items */}
        <div className="flex md:hidden items-center gap-6 text-white/80 text-[10px] font-bold uppercase tracking-widest">
          <span className="animate-[float_3s_ease-in-out_infinite]">From $129/hr</span>
          <span className="animate-[float_3s_ease-in-out_infinite_0.7s]">Wild Horses</span>
          <span className="animate-[float_3s_ease-in-out_infinite_1.4s]">Free Parking</span>
        </div>
      </div>

      {/* Jet Ski silhouette moving right */}
      <div className="absolute top-1/2 -translate-y-1/2 animate-[cruise-right_14s_linear_infinite]" style={{ willChange: "transform" }}>
        <div className="flex items-center gap-1 opacity-90">
          {/* Spray behind */}
          <div className="flex flex-col gap-0.5 opacity-60">
            <div className="w-6 h-0.5 bg-white/40 rounded-full animate-[spray_0.8s_ease-out_infinite]" />
            <div className="w-8 h-0.5 bg-white/30 rounded-full animate-[spray_0.8s_ease-out_infinite_0.2s]" />
            <div className="w-5 h-0.5 bg-white/20 rounded-full animate-[spray_0.8s_ease-out_infinite_0.4s]" />
          </div>
          {/* Jet Ski SVG */}
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none" className="drop-shadow-lg">
            {/* Hull */}
            <path d="M4 20 Q8 24 24 24 Q40 24 46 18 L44 16 Q36 20 24 20 Q12 20 6 18Z" fill="white" opacity="0.95"/>
            {/* Body */}
            <path d="M10 18 Q12 10 20 8 L32 8 Q36 10 38 16 L36 18 Q28 16 20 16Z" fill="#F5C518"/>
            {/* Rider */}
            <circle cx="26" cy="6" r="3" fill="white" opacity="0.9"/>
            <path d="M24 9 Q26 12 28 9" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
            {/* Handlebar */}
            <line x1="30" y1="10" x2="34" y2="8" stroke="white" strokeWidth="1" opacity="0.7"/>
          </svg>
        </div>
      </div>

      {/* Pontoon boat silhouette moving left */}
      <div className="absolute top-1/2 -translate-y-1/2 animate-[cruise-left_18s_linear_infinite]" style={{ willChange: "transform", animationDelay: "4s" }}>
        <div className="flex items-center gap-1 opacity-80">
          {/* Pontoon SVG */}
          <svg width="56" height="30" viewBox="0 0 56 30" fill="none" className="drop-shadow-lg scale-x-[-1]">
            {/* Pontoons (two hulls) */}
            <rect x="6" y="22" width="44" height="4" rx="2" fill="white" opacity="0.9"/>
            <rect x="8" y="18" width="40" height="3" rx="1.5" fill="white" opacity="0.7"/>
            {/* Deck */}
            <rect x="10" y="10" width="36" height="8" rx="2" fill="#F5C518" opacity="0.9"/>
            {/* Canopy */}
            <path d="M14 10 L14 4 Q28 0 42 4 L42 10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
            <path d="M14 4 Q28 0 42 4" fill="white" opacity="0.2"/>
            {/* People silhouettes */}
            <circle cx="22" cy="8" r="2" fill="white" opacity="0.7"/>
            <circle cx="28" cy="7" r="2" fill="white" opacity="0.7"/>
            <circle cx="34" cy="8" r="2" fill="white" opacity="0.7"/>
          </svg>
          {/* Small wake */}
          <div className="flex flex-col gap-0.5 opacity-40">
            <div className="w-4 h-0.5 bg-white/40 rounded-full" />
            <div className="w-6 h-0.5 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Tiny wave dots scattered */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 30, 50, 70, 85].map((left) => (
          <div
            key={left}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-[sparkle_2s_ease-in-out_infinite]"
            style={{ left: `${left}%`, top: `${20 + (left % 3) * 20}%`, animationDelay: `${left * 0.05}s` }}
          />
        ))}
      </div>
    </section>
  );
}
