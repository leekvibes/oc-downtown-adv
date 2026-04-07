import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pontoon Boat Rentals | OC Downtown Adventures",
  description: "Rent a pontoon boat in Ocean City MD. Self-guided 2-8 hour bay cruises. See wild horses on Assateague Island. Up to 10 people. From $329.",
};

const pricing = [
  { hours: "2 Hours", price: "$329" },
  { hours: "3 Hours", price: "$419" },
  { hours: "4 Hours", price: "$479" },
  { hours: "5 Hours", price: "$529" },
  { hours: "6 Hours", price: "$659" },
  { hours: "8 Hours", price: "$859" },
];

const faqs = [
  { q: "How old do you have to be to drive?", a: "The driver must be at least 21 years old with a valid driver's license. No prior boating experience is needed — we'll give you a full orientation." },
  { q: "How many people can fit?", a: "Up to 10 people per pontoon boat. All ages are welcome!" },
  { q: "Is it self-guided?", a: "Yes! Unlike our jet skis, pontoon boats are self-guided excursions. You're the captain — go where you want within the bay area." },
  { q: "Can we bring alcohol?", a: "Yes, alcohol is permitted on pontoon boats. However, the driver must remain completely sober — no drinking and driving on the water." },
  { q: "Are life vests required?", a: "Life vests are available but not required for adults. Children must wear life vests and stay with adults at all times." },
  { q: "Where can we go?", a: "You can explore all of Assateague Bay — cruise past wild horses on Assateague Island, anchor at sandbars, or just relax on the open water. Bay only — ocean access is not permitted for safety." },
];

const photos = [
  IMAGES.pontoon1, IMAGES.pontoon2, IMAGES.pontoon3,
  IMAGES.pontoon4, IMAGES.pontoon5, IMAGES.pontoon6,
];

export default function PontoonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.pontoon1} alt="Pontoon boat on Assateague Bay" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Pontoon Boat Rentals</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">Self-Guided Bay Cruises — Your Way, Your Pace</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-all shadow-xl inline-block">
            Book Now — From $329
          </a>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">The Experience</h2>
          <div className="text-gray-text text-lg leading-relaxed space-y-4">
            <p>
              Imagine cruising through the calm waters of Assateague Bay with your closest friends and family, the sun on your face, and nothing but open water ahead. Our pontoon boats give you the freedom to explore Ocean City from a completely different perspective.
            </p>
            <p>
              Anchor along the shores of <strong>Assateague Island</strong> and watch the famous wild horses graze just feet from the water. Pull up to a sandbar and swim. Drop a fishing line over the side. Or simply cruise the bay with music playing and drinks in hand — it&apos;s your adventure, your way.
            </p>
            <p>
              With up to 10 people on board, pontoon rentals are perfect for family reunions, birthday celebrations, bachelor/bachelorette parties, or just a relaxing day on the water. Bring a cooler, a speaker, and your sense of adventure.
            </p>
          </div>

          {/* Suggested itinerary */}
          <div className="mt-10 bg-blue-light rounded-2xl p-6 md:p-8 border border-blue-brand/20">
            <h3 className="text-xl font-bold text-dark mb-4">Suggested 4-Hour Itinerary</h3>
            <div className="space-y-3 text-gray-text">
              {[
                "Depart from 307 Dorchester St — cruise south through the bay",
                "Pass by stunning waterfront homes and local landmarks",
                "Anchor near Assateague Island — watch wild horses from the water",
                "Swim, relax, or explore sandbars along the coast",
                "Cruise back through the bay as the sun starts to set",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-brand text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {pricing.map((item) => (
              <div key={item.hours} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-border hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-text mb-1">{item.hours}</div>
                <div className="text-2xl font-extrabold text-blue-brand">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md inline-block">Book Your Pontoon</a>
          </div>
        </div>
      </section>

      {/* What to Know / What to Bring */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-dark mb-4">What to Bring</h3>
              <ul className="space-y-2">
                {["Sunscreen, sunglasses, hats", "Towel and swimwear", "Cooler with drinks and snacks", "Bluetooth speaker for music", "Fishing gear (optional)", "Camera for the wild horses!"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-text">
                    <svg className="w-5 h-5 text-yellow-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-4">What&apos;s Provided</h3>
              <ul className="space-y-2">
                {["Pontoon boat with canopy/shade", "Life vests (all sizes)", "Full safety orientation", "Bay navigation guidance", "Free parking at our location"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-text">
                    <svg className="w-5 h-5 text-blue-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-border group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-blue-brand transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-text group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-text leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">Pontoon Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={src} alt={`Pontoon photo ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Cruise?</h2>
          <p className="text-blue-200 text-lg mb-8">Book your pontoon boat and explore Assateague Bay on your own terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
