import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF, EMAIL, ADDRESS, ADDRESS_URL, HOURS } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Us | OC Downtown Adventures",
  description: "Family-owned jet ski and pontoon boat rental in downtown Ocean City, MD. Learn our story and why we love getting people out on the water.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery5} alt="Ocean City waterfront" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-xl text-white/90">Family Owned. Locally Operated. Ocean City Proud.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">Our Story</h2>
              <div className="text-gray-text text-lg leading-relaxed space-y-4">
                <p>
                  OC Downtown Adventures started with a simple idea: share our love for Ocean City&apos;s waterways with visitors and locals alike. As a family born and raised in Ocean City, Maryland, we grew up on the bay — fishing, crabbing, riding jet skis, and watching sunsets over Assateague Island.
                </p>
                <p>
                  What started as a passion for the water turned into a family business. Today, we operate out of <strong>307 Dorchester Street</strong>, right in the heart of downtown Ocean City, offering jet ski and pontoon boat rentals in the largest and most beautiful riding area in town — Assateague Bay.
                </p>
                <p>
                  We take pride in running a tight ship — brand new equipment inspected daily, certified guides who genuinely care about your experience, and a commitment to safety that never wavers. When you rent with us, you&apos;re not just a customer — you&apos;re family.
                </p>
                <p>
                  Whether it&apos;s your first time on a jet ski or your hundredth time cruising the bay on a pontoon, we&apos;re here to make sure you have the time of your life. That&apos;s our promise.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image src={IMAGES.group1} alt="OC Downtown Adventures team" fill sizes="300px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Family Owned & Operated", desc: "We're not a franchise or a corporate chain. We're a local Ocean City family that takes personal pride in every adventure we send out on the water." },
              { title: "Brand New Equipment", desc: "We invest in the latest jet skis and well-maintained pontoon boats, inspected daily so you always get a safe, reliable ride." },
              { title: "Best Location in OC", desc: "Right in downtown Ocean City with free parking. Our location gives you direct access to Assateague Bay's best riding area — wild horses, dolphins, and all." },
              { title: "Safety is Non-Negotiable", desc: "Every rider gets a life vest, every jet ski trip gets a certified guide, and every piece of equipment is checked before it hits the water. Period." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-10 text-center">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-blue-light min-h-[300px]">
              <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 hover:bg-blue-brand/5 transition-colors">
                <svg className="w-16 h-16 text-blue-brand mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-bold text-dark mb-1">{ADDRESS}</p>
                <p className="text-blue-brand font-semibold">Tap for Directions</p>
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-brand mb-3">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-text hover:text-blue-brand transition-colors">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-text hover:text-blue-brand transition-colors">
                      <svg className="w-5 h-5 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {EMAIL}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-brand mb-3">Hours</h3>
                <p className="text-gray-text">{HOURS}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-brand mb-3">Parking</h3>
                <p className="text-gray-text">Free parking available right at our location — no meters, no hassle.</p>
              </div>

              {/* Contact Form (non-functional) */}
              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-brand mb-3">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Come See Us on the Water</h2>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl inline-block">Book Your Adventure</a>
        </div>
      </section>
    </>
  );
}
