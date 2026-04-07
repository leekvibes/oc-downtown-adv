import Image from "next/image";
import { Metadata } from "next";
import { BOOKING_URL, IMAGES, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Promotions & Deals | OC Downtown Adventures",
  description: "Save on jet ski and pontoon boat rentals in Ocean City, MD. Current deals: Buy 3 jet ski rides, get the 4th free. Check out all our promotions.",
};

export default function PromotionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-brand text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Deals & Promotions</h1>
          <p className="text-blue-200 text-lg">Save big on your Ocean City water adventure</p>
        </div>
      </section>

      {/* Featured Deal */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative min-h-[300px] md:min-h-[400px]">
                <Image src={IMAGES.promo} alt="Buy 3 Get 4th Free promotion" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-yellow-brand text-dark text-xs font-bold uppercase rounded-full mb-4">Featured Deal</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">Buy 3 Jet Ski Rides, Get the 4th FREE</h2>
                <p className="text-gray-text text-lg leading-relaxed mb-6">
                  Bring the whole crew and save big! When you book 3 jet ski rides, the 4th ride is completely free. Available on sunrise and sunset rides only.
                </p>
                <div className="bg-blue-light rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-dark text-sm mb-2">How it works:</h3>
                  <ul className="space-y-1 text-sm text-gray-text">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Book 3 jet ski rentals for your group
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      The 4th jet ski rental is on us — completely free
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-yellow-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Available on sunrise &amp; sunset rides only
                    </li>
                  </ul>
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md text-center">
                  Book Now & Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Promotions */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-dark mb-8 text-center">More Ways to Save</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Group discount */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Group Discounts</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">Planning a big outing? Contact us directly for special group rates on jet ski and pontoon rentals for parties of 6 or more.</p>
              <a href={PHONE_HREF} className="text-blue-brand font-semibold text-sm hover:text-blue-dark transition-colors">Call for group pricing</a>
            </div>

            {/* Sunset Special */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-yellow-brand/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Sunrise & Sunset Rides</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">The most magical times on the water — and where our best deals are. Book a sunrise or sunset slot for the best experience AND the best price.</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-blue-brand font-semibold text-sm hover:text-blue-dark transition-colors">Check availability</a>
            </div>

            {/* Early booking */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Book Early, Save More</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">The earlier you book, the better your chances of getting the exact time slot you want. Peak summer weekends sell out fast — don&apos;t wait!</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-blue-brand font-semibold text-sm hover:text-blue-dark transition-colors">Book now</a>
            </div>

            {/* Follow for deals */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Follow Us for Flash Deals</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">Follow us on Instagram and TikTok for last-minute deals, flash sales, and exclusive promotions that only our followers get.</p>
              <p className="text-blue-brand font-semibold text-sm">@ocmd.downtown.adventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don&apos;t Miss Out</h2>
          <p className="text-blue-200 text-lg mb-8">Book your adventure today and take advantage of our current deals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
