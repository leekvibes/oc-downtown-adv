import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jet Ski Rentals | OC Downtown Adventures",
  description: "Book a 1-hour guided jet ski ride in Assateague Bay, Ocean City MD. See wild horses, dolphins, and stunning scenery. From $129/hr. Ages 5+.",
};

const faqs = [
  { q: "How old do you have to be?", a: "Passengers must be at least 5 years old. Drivers must be at least 16 with a valid photo ID. All children must be accompanied by an adult." },
  { q: "How many people per jet ski?", a: "Up to 3 people (two adults and one child maximum). Three adults is not recommended. Weight capacity is approximately 450 lbs." },
  { q: "Do I need experience?", a: "No experience necessary! Our guides provide a full instructional review before you hit the water, and they accompany you throughout the entire ride." },
  { q: "Are life vests provided?", a: "Yes! Life vests are mandatory for all riders and are provided at no extra cost." },
  { q: "Can I drink alcohol before riding?", a: "No. You may not operate a jet ski if you are under the influence of alcohol or any other substance." },
  { q: "How long is the ride?", a: "Each rental is 1 hour of ride time. A Maryland-certified guide accompanies all rentals for your safety." },
];

const photos = [
  IMAGES.jetski1, IMAGES.jetski2, IMAGES.jetski3,
  IMAGES.jetski4, IMAGES.jetski5, IMAGES.jetski6,
];

export default function JetSkiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.heroJetski} alt="Jet ski action on Assateague Bay" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Jet Ski Rentals</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">1-Hour Guided Adventures in Assateague Bay</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-all shadow-xl inline-block">
            Book Now — $129/hr
          </a>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">The Experience</h2>
          <div className="prose prose-lg max-w-none text-gray-text">
            <p className="text-lg leading-relaxed mb-4">
              There&apos;s nothing quite like tearing across the crystal-clear waters of Assateague Bay on a brand-new jet ski. From the moment you leave the dock, you&apos;re surrounded by the beauty of Ocean City&apos;s largest and most scenic riding area.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Your guided adventure takes you past stunning waterfront homes, through open bay waters, and along the coastline of Assateague Island — one of the most beautiful barrier islands on the East Coast. Keep your eyes open for the famous <strong>wild Assateague horses</strong> grazing on the shore and <strong>dolphins</strong> playing in the wake.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you&apos;re a first-timer or an experienced rider, our expert guides ensure you have an incredible, safe experience. New jet skis, professional staff, and the best views in Ocean City — this is the ride of your vacation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center border border-gray-border">
            <h2 className="text-2xl font-extrabold text-dark mb-2">Jet Ski Rental</h2>
            <div className="text-5xl font-extrabold text-blue-brand mb-2">$129<span className="text-xl text-gray-text font-normal">/hr</span></div>
            <p className="text-gray-text mb-6">1-hour guided ride per jet ski</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
              {[
                { label: "Duration", value: "1 Hour" },
                { label: "Capacity", value: "Up to 3" },
                { label: "Min. Age", value: "5+ to ride" },
                { label: "Guide", value: "Included" },
              ].map((item) => (
                <div key={item.label} className="bg-blue-light rounded-lg p-3">
                  <div className="text-gray-text text-xs">{item.label}</div>
                  <div className="font-bold text-dark">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md">Book Now</a>
              <a href={PHONE_HREF} className="px-8 py-4 border-2 border-blue-brand text-blue-brand font-bold text-lg rounded-lg hover:bg-blue-brand hover:text-white transition-colors">Call to Book</a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Know / What to Bring */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                What to Bring
              </h3>
              <ul className="space-y-2">
                {["Sunscreen (also available for purchase)", "Towel", "Sunglasses and hat (at your own risk)", "Water bottle", "Positive vibes!"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-text">
                    <svg className="w-5 h-5 text-yellow-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                What&apos;s Provided
              </h3>
              <ul className="space-y-2">
                {["Brand new jet ski", "Life vest (mandatory, all sizes)", "Full safety & instructional briefing", "Certified guide for the entire ride", "Free parking at our location"].map((item) => (
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

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-border group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-blue-brand transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-text group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
          <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">Jet Ski Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={src} alt={`Jet ski photo ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Ride?</h2>
          <p className="text-blue-200 text-lg mb-8">Book your jet ski adventure today and experience the thrill of Assateague Bay.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
