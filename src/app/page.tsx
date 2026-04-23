import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_URL,
  IMAGES,
  HERO_VIDEO_URL,
  HERO_FALLBACK_IMAGE,
  LOGO_URL,
  REVIEWS,
  PHONE,
  PHONE_HREF,
  ADDRESS,
  ADDRESS_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AutoScrollGallery } from "@/components/AutoScrollGallery";
import { EmailSignup } from "@/components/EmailSignup";
import { WeatherBar } from "@/components/WeatherBar";

/* ── All gallery images for the auto-scroll strips ── */
const GALLERY_ROW_1 = [
  { src: IMAGES.jetski1, alt: "Jet ski riders on the bay" },
  { src: IMAGES.pontoon1, alt: "Pontoon boat cruise" },
  { src: IMAGES.scenery2, alt: "Golden sunset over the bay" },
  { src: IMAGES.jetski4, alt: "Jet ski adventure" },
  { src: IMAGES.group1, alt: "Group having fun on the water" },
  { src: IMAGES.pontoon3, alt: "Pontoon near Assateague" },
  { src: IMAGES.scenery1, alt: "Scenic bay views" },
  { src: IMAGES.jetski6, alt: "Riding through the waves" },
  { src: IMAGES.group3, alt: "Friends on a boat" },
  { src: IMAGES.pontoon5, alt: "Pontoon boat adventure" },
  { src: IMAGES.scenery4, alt: "Wild horses on Assateague" },
];

const GALLERY_ROW_2 = [
  { src: IMAGES.jetski2, alt: "Jet ski on open water" },
  { src: IMAGES.pontoon2, alt: "Group on pontoon boat" },
  { src: IMAGES.scenery3, alt: "Ocean City bay" },
  { src: IMAGES.jetski7, alt: "Jet ski rider" },
  { src: IMAGES.group2, alt: "Family adventure" },
  { src: IMAGES.pontoon4, alt: "Pontoon at sunset" },
  { src: IMAGES.jetski3, alt: "Jet ski tour" },
  { src: IMAGES.scenery5, alt: "Bay wildlife" },
  { src: IMAGES.group4, alt: "Group fun on the water" },
  { src: IMAGES.jetski8, alt: "Jet ski excitement" },
  { src: IMAGES.pontoon6, alt: "Pontoon boat group" },
];

/* ── Experience / "What You'll See" data ── */
const EXPERIENCES = [
  {
    title: "Wild Horses",
    desc: "Assateague Island is home to herds of wild horses that have roamed freely for centuries. Get up close from the water for a once-in-a-lifetime encounter.",
    image: IMAGES.scenery4,
  },
  {
    title: "Dolphins",
    desc: "Bottlenose dolphins regularly swim through the bay and inlet. Watch them leap and play alongside your boat in their natural habitat.",
    image: IMAGES.scenery3,
  },
  {
    title: "Stunning Sunsets",
    desc: "The bay offers unobstructed views of Ocean City's legendary sunsets. Book a late ride for golden-hour magic you'll never forget.",
    image: IMAGES.scenery2,
  },
  {
    title: "Assateague Island",
    desc: "A 37-mile stretch of untouched national seashore. Beach your pontoon, explore the sands, and experience true coastal wilderness.",
    image: IMAGES.jetski1,
  },
];

/* ── Occasion cards ── */
const OCCASIONS = [
  { title: "Family Day", desc: "All-ages fun the whole family will love", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", image: IMAGES.group1 },
  { title: "Bachelor / Bachelorette", desc: "Celebrate on the water before the big day", icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 16.25v.546", image: IMAGES.group3 },
  { title: "Date Night", desc: "Sunset rides built for two", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", image: IMAGES.scenery2 },
  { title: "Corporate Outing", desc: "Team building on the bay", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", image: IMAGES.group2 },
  { title: "Birthday Party", desc: "Make it a birthday they won't forget", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7", image: IMAGES.group4 },
];

/* ── Inline SVG wave for section backgrounds ── */
const WAVE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231B5FAE' fill-opacity='0.03' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`;

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_FALLBACK_IMAGE}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center py-16">
          {/* Logo */}
          <Image
            src={LOGO_URL}
            alt="OC Downtown Adventures"
            width={400}
            height={140}
            className="w-36 md:w-56 lg:w-64 h-auto mb-4 md:mb-6 drop-shadow-2xl"
            priority
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 drop-shadow-lg tracking-tight">
            Explore Assateague Bay on
            <br />
            <span className="text-yellow-brand">Brand-New Jet Skis &amp; Pontoon Boats</span>
          </h1>

          <a
            href={ADDRESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm md:text-base text-white/90 mb-2 font-medium hover:text-yellow-brand transition-colors"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {ADDRESS}
          </a>

          <p className="text-sm md:text-base text-white/80 mb-4 max-w-xl mx-auto">
            Ocean City&apos;s largest riding area. Brand new equipment. Adventures you won&apos;t find anywhere else.
          </p>

          {/* Google Reviews Badge */}
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-5 border border-white/20">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-4 h-4 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-xs">5.0</span>
            <span className="text-white/70 text-xs">on Google</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-yellow-brand text-dark font-bold text-base rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Your Adventure
            </a>
            <a
              href="#adventures"
              className="px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-bold text-base rounded-lg border-2 border-white/40 hover:bg-white/25 transition-all"
            >
              Explore Experiences
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIVE WEATHER BAR
      ═══════════════════════════════════════════════════════ */}
      <WeatherBar />

      {/* ═══════════════════════════════════════════════════════
          JET SKI SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="adventures" className="scroll-mt-16">
        <div className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal direction="left" className="order-2 lg:order-1">
                <span className="inline-block px-4 py-1.5 bg-blue-light text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-4">Jet Ski Rentals</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-5 leading-tight tracking-tight">
                  High-Speed Thrills on the Bay
                </h2>
                <p className="text-gray-text text-lg leading-relaxed mb-6">
                  Experience Ocean City&apos;s largest and most beautiful riding area on brand-new jet skis. Our guided tours take you through Assateague Bay where you&apos;ll see wild horses, dolphins, and stunning coastal scenery.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "From $129/hr", sub: "Per Jet Ski" },
                    { label: "1 Hour", sub: "Guided Tour" },
                    { label: "Up to 3", sub: "Riders Per Ski" },
                    { label: "Ages 5+", sub: "Welcome" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-light rounded-xl p-4 text-center">
                      <p className="text-xl font-extrabold text-blue-brand">{stat.label}</p>
                      <p className="text-xs text-gray-text font-medium mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-md">
                    Book Jet Skis
                  </a>
                  <Link href="/jet-ski" className="px-6 py-3.5 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">
                    Learn More
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={IMAGES.scenery1} alt="Jet ski rider on Assateague Bay" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FULL-BLEED PHOTO DIVIDER — Cinematic break
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[35vh] min-h-[250px] max-h-[400px] overflow-hidden">
        <Image
          src={IMAGES.scenery5}
          alt="Assateague Bay panoramic view"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/80 via-blue-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <ScrollReveal direction="left">
              <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-2">Assateague Bay</p>
              <p className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                50+ Square Miles
              </p>
              <p className="text-xl md:text-2xl text-white/80 font-medium mt-1">
                of open water to explore
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PONTOON SECTION — with subtle blue gradient
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-light/60 via-blue-light/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={IMAGES.pontoon1} alt="Group enjoying pontoon boat cruise" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="inline-block px-4 py-1.5 bg-blue-light text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-4">Pontoon Boats</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-5 leading-tight tracking-tight">
                Your Bay. Your Rules.
              </h2>
              <p className="text-gray-text text-lg leading-relaxed mb-6">
                Captain your own pontoon boat through Assateague Bay. Explore wild horse beaches, cruise to sandbars, and enjoy a private adventure with up to 10 guests. From 2 to 8 hours — your schedule, your way.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "From $329", sub: "Starting Rate" },
                  { label: "2-8 Hours", sub: "You Choose" },
                  { label: "Up to 10", sub: "Guests" },
                  { label: "Self-Guided", sub: "You Captain" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="text-xl font-extrabold text-blue-brand">{stat.label}</p>
                    <p className="text-xs text-gray-text font-medium mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-md">
                  Book a Pontoon
                </a>
                <Link href="/pontoon" className="px-6 py-3.5 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BY THE NUMBERS — Stats confidence banner
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-gradient-to-r from-yellow-brand via-yellow-hover to-yellow-brand relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "500+", label: "Happy Guests", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "5.0", label: "Google Rating", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { number: "50+", label: "Sq Miles of Water", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "100%", label: "Brand New Fleet", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                    </svg>
                  </div>
                  <p className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">{stat.number}</p>
                  <p className="text-dark/70 font-bold text-sm mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU'LL SEE — Experience Storytelling
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-light text-blue-brand text-xs font-bold uppercase tracking-widest rounded-full mb-4">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">What You&apos;ll See</h2>
            <p className="text-gray-text text-lg mt-3 max-w-2xl mx-auto">
              It&apos;s not just a rental — it&apos;s an adventure through one of the East Coast&apos;s most beautiful waterways.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 120}>
                <div className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={exp.image} alt={exp.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">{exp.title}</h3>
                    <p className="text-white/85 text-sm md:text-base leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CHOOSE YOUR OCCASION — Dark immersive section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-dark relative overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Plan Your Perfect Day</h2>
            <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
              Whatever the occasion, we&apos;ll make it unforgettable on the water.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {OCCASIONS.map((occ, i) => (
              <ScrollReveal key={occ.title} delay={i * 80}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative h-52 md:h-60 rounded-2xl overflow-hidden shadow-md ring-1 ring-white/10">
                    <Image src={occ.image} alt={occ.title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-blue-brand/80 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={occ.icon} />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-sm md:text-base">{occ.title}</h3>
                      <p className="text-white/70 text-xs mt-1 hidden md:block">{occ.desc}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — Dark premium section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-blue-dark relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-brand/20 rounded-full blur-[120px]" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Why Choose Us</h2>
            <p className="text-blue-200/70 text-lg mt-3">See how we compare to other rental companies in Ocean City.</p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="grid grid-cols-3 gap-0">
                {/* Header */}
                <div className="p-4 md:p-5 bg-white/5 font-bold text-white/60 text-sm border-b border-white/10">Feature</div>
                <div className="p-4 md:p-5 bg-blue-brand text-white font-bold text-sm text-center border-b border-blue-brand">OC Downtown Adventures</div>
                <div className="p-4 md:p-5 bg-white/5 font-bold text-white/60 text-sm text-center border-b border-white/10">Other Rentals</div>

                {[
                  { feature: "Downtown Location", us: true, them: false },
                  { feature: "Free Parking", us: true, them: false },
                  { feature: "Brand-New Equipment", us: true, them: false },
                  { feature: "Guided Jet Ski Tours", us: true, them: false },
                  { feature: "Family-Owned & Operated", us: true, them: false },
                  { feature: "Assateague Bay Access", us: true, them: true },
                  { feature: "Professional Photos (Yacht Shots)", us: true, them: false },
                  { feature: "Partner Restaurant Deals", us: true, them: false },
                ].map((row, i) => (
                  <div key={row.feature} className="contents">
                    <div className={`p-4 md:p-5 text-sm font-medium text-white/80 ${i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"} border-b border-white/5`}>
                      {row.feature}
                    </div>
                    <div className={`p-4 md:p-5 text-center ${i % 2 === 0 ? "bg-blue-brand/20" : "bg-blue-brand/10"} border-b border-white/5`}>
                      <span className="text-lg font-bold text-green-400">{row.us ? "\u2713" : "\u2717"}</span>
                    </div>
                    <div className={`p-4 md:p-5 text-center ${i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"} border-b border-white/5`}>
                      <span className={`text-lg font-bold ${row.them ? "text-green-400" : "text-red-400/60"}`}>{row.them ? "\u2713" : "\u2717"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — with wave pattern background
      ═══════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-24 bg-gray-light relative"
        style={{ backgroundImage: WAVE_SVG, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: '100% 300px' }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">How It Works</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-0.5 bg-blue-brand/20" />
            {[
              { step: "1", title: "Book Online", desc: "Pick your adventure — jet ski or pontoon — choose your date and time. Instant confirmation." },
              { step: "2", title: "Show Up & Gear Up", desc: "Arrive at 307 Dorchester St. Free parking! We'll get you fitted with life vests and a full safety briefing." },
              { step: "3", title: "Hit the Water", desc: "Ride through Assateague Bay, see wild horses and dolphins, and make memories that last a lifetime." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-blue-brand text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5 relative z-10 shadow-lg">{item.step}</div>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md hover:shadow-xl hover:scale-105 transition-all">
              Book Your Adventure
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ADD-ON: OC YACHT SHOTS — blue-light gradient tint
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-light via-white to-blue-light/40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3">
                {[IMAGES.jetski1, IMAGES.group1, IMAGES.pontoon2, IMAGES.jetski3].map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image src={src} alt={`Adventure photo ${i + 1}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="inline-block px-4 py-1.5 bg-yellow-brand/20 text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Add-On</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-5 leading-tight tracking-tight">
                OC Yacht Shots
              </h2>
              <p className="text-gray-text text-lg leading-relaxed mb-6">
                Don&apos;t let your best moments disappear with the waves. Our professional photographers capture your adventure on the water so you can relive it forever — high-quality, action-packed photos of your ride.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { step: "1", title: "Ride & Smile", desc: "We capture the action" },
                  { step: "2", title: "Find Photos", desc: "Browse your images" },
                  { step: "3", title: "Download", desc: "Share with everyone" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 bg-blue-brand text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">{item.step}</div>
                    <h3 className="text-sm font-bold text-dark">{item.title}</h3>
                    <p className="text-xs text-gray-text mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.ocyachtshots.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Your Photos
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AUTO-SCROLLING GALLERY — Dark container
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <ScrollReveal className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Life on the Water</h2>
            <p className="text-white/50 text-lg mt-3">Real photos from real adventures</p>
          </ScrollReveal>
        </div>

        {/* Two rows scrolling in opposite directions */}
        <div className="space-y-4">
          <AutoScrollGallery images={GALLERY_ROW_1} direction="left" />
          <AutoScrollGallery images={GALLERY_ROW_2} direction="right" />
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-dark transition-colors">
            View Full Gallery
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROMO BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-blue-brand overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <ScrollReveal direction="left" className="flex-1 text-white">
            <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Limited Time Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Buy 3 Jet Ski Rides, Get the 4th FREE</h2>
            <p className="text-blue-200 text-lg mb-6">Available on sunrise and sunset rides. Bring the whole crew and save big on your Ocean City adventure!</p>
            <Link href="/promotions" className="inline-flex items-center px-8 py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-lg">
              See All Deals
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" className="w-full md:w-96 flex-shrink-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={IMAGES.promo} alt="Buy 3 Get 4th Free promotion" fill sizes="400px" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          REVIEWS (Google badge + full reviews)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-border mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-extrabold text-dark">5.0</span>
              <span className="text-gray-text text-sm font-medium">Google Reviews</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">What Our Guests Say</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-text leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-brand text-white rounded-full flex items-center justify-center text-sm font-bold">{review.name[0]}</div>
                    <div>
                      <p className="font-bold text-dark">{review.name}</p>
                      <p className="text-xs text-gray-text">{review.source}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          EMAIL SIGNUP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-blue-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Get Exclusive Deals</h2>
          <p className="text-blue-200 text-lg mb-8">Be the first to know about discounts, promotions, and special offers.</p>
          <EmailSignup />
          <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Ocean City sunset" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/85 to-blue-dark/95" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">Ready for Your Adventure?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book your jet ski or pontoon boat today and experience the best of Ocean City from the water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Book Now
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-semibold text-lg hover:text-yellow-brand transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE}
              </a>
            </div>
            <p className="mt-8 text-white/50 text-sm">
              <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{ADDRESS}</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
