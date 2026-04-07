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

export default function Home() {
  const galleryPreview = [
    IMAGES.jetski1,
    IMAGES.pontoon1,
    IMAGES.jetski2,
    IMAGES.scenery2,
    IMAGES.pontoon2,
    IMAGES.group1,
    IMAGES.jetski4,
    IMAGES.scenery1,
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo — centered focal point */}
          <Image
            src={LOGO_URL}
            alt="OC Downtown Adventures"
            width={400}
            height={140}
            className="w-48 md:w-72 lg:w-80 h-auto mb-6 md:mb-8 drop-shadow-2xl"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Your Ocean City Adventure Starts Here
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-3 font-medium">
            Downtown Ocean City, Maryland
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Wild horses. Dolphins. Stunning sunsets. Experience Assateague Bay like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Your Adventure
            </a>
            <a
              href="#adventures"
              className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white/40 hover:bg-white/25 transition-all"
            >
              Explore Experiences
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-blue-brand text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-medium">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "New Jet Skis" },
              { icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", text: "Fun for All Ages" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "Right Downtown" },
              { icon: "M5 13l4 4L19 7", text: "Free Parking" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-yellow-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section id="adventures" className="py-16 md:py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-3">Choose Your Adventure</h2>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">
              Whether you want high-speed thrills or a relaxing cruise, we have the perfect experience for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Jet Ski Card */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-border hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image src={IMAGES.jetski1} alt="Jet ski riders on Assateague Bay" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-yellow-brand text-dark font-bold px-3 py-1 rounded-full text-sm">From $129/hr</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">Jet Ski Rentals</h3>
                <p className="text-gray-text mb-4">1-hour guided rides through Ocean City&apos;s largest and most beautiful riding area. Up to 3 riders per ski.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["1 Hour", "Guided Tour", "Ages 5+", "Up to 3 Riders"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-light text-blue-brand text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-3 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors">Book Now</a>
                  <Link href="/jet-ski" className="px-4 py-3 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">Details</Link>
                </div>
              </div>
            </div>

            {/* Pontoon Card */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-border hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image src={IMAGES.pontoon1} alt="Group enjoying a pontoon boat ride" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-yellow-brand text-dark font-bold px-3 py-1 rounded-full text-sm">From $329</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">Pontoon Boat Rentals</h3>
                <p className="text-gray-text mb-4">Self-guided bay cruises from 2 to 8 hours. Explore Assateague Island, see wild horses, and enjoy the water your way.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["2-8 Hours", "Self-Guided", "All Ages", "Up to 10 People"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-light text-blue-brand text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-3 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors">Book Now</a>
                  <Link href="/pontoon" className="px-4 py-3 border-2 border-blue-brand text-blue-brand font-semibold rounded-lg hover:bg-blue-brand hover:text-white transition-colors">Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-dark mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Safety First", desc: "Expert guides, brand new equipment, and daily safety inspections. Life vests provided for every rider." },
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", title: "Best Riding Area in OC", desc: "Explore Assateague Bay — Ocean City's largest and most beautiful riding area. See wild horses and dolphins!" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Family Owned & Operated", desc: "We're a local Ocean City family passionate about getting you out on the water. Your adventure is personal to us." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-blue-brand/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-dark mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-blue-brand/20" />
            {[
              { step: "1", title: "Book Online", desc: "Pick your adventure — jet ski or pontoon — and choose your date and time. Instant confirmation." },
              { step: "2", title: "Show Up & Gear Up", desc: "Arrive at 307 Dorchester St. Free parking! Our team will get you fitted with life vests and a full safety briefing." },
              { step: "3", title: "Hit the Water", desc: "Ride through Assateague Bay, see wild horses and dolphins, and make memories that last a lifetime." },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 bg-blue-brand text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5 relative z-10 shadow-lg">{item.step}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md">
              Book Your Adventure
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-3">Life on the Water</h2>
            <p className="text-gray-text text-lg">Real photos from real adventures</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {galleryPreview.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-48 md:w-72 md:h-56 relative rounded-xl overflow-hidden snap-center shadow-md">
                <Image src={src} alt={`Adventure photo ${i + 1}`} fill sizes="300px" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-brand font-semibold hover:text-blue-dark transition-colors">
              View Full Gallery
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="py-12 bg-blue-brand">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <span className="inline-block px-3 py-1 bg-yellow-brand text-dark text-xs font-bold uppercase rounded-full mb-3">Special Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Buy 3 Jet Ski Rides, Get the 4th FREE</h2>
            <p className="text-blue-200 mb-5">Available on sunrise and sunset rides. Bring the whole crew and save big on your Ocean City adventure!</p>
            <Link href="/promotions" className="inline-flex items-center px-6 py-3 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors">See All Deals</Link>
          </div>
          <div className="w-full md:w-80 h-64 md:h-72 relative rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image src={IMAGES.promo} alt="Buy 3 Get 4th Free promotion" fill sizes="320px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-7 h-7 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-2">What Our Guests Say</h2>
            <p className="text-gray-text">5-star rated on Google</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-gray-light p-6 rounded-xl border border-gray-border">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-text text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-brand text-white rounded-full flex items-center justify-center text-sm font-bold">{review.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-dark">{review.name}</p>
                    <p className="text-xs text-gray-text">{review.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Ocean City sunset" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/80" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready for Your Adventure?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Book your jet ski or pontoon boat today and experience the best of Ocean City from the water.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-semibold text-lg hover:text-yellow-brand transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{ADDRESS}</a>
          </p>
        </div>
      </section>
    </>
  );
}
