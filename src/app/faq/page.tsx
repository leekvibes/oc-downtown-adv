import { Metadata } from "next";
import { BOOKING_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ & Policies | OC Downtown Adventures",
  description: "Frequently asked questions about jet ski and pontoon boat rentals in Ocean City, MD. Booking policies, age requirements, weather policy, and more.",
};

const sections = [
  {
    title: "Booking & Reservations",
    faqs: [
      { q: "Do I need to make a reservation?", a: "We highly recommend booking online in advance to guarantee your preferred date and time. Walk-ins are accepted based on availability, but weekends and peak season fill up fast." },
      { q: "How do I book?", a: "You can book directly through our website by clicking any 'Book Now' button — it takes you to our secure booking system where you can choose your activity, date, and time. You can also call us at (443) 664-6180." },
      { q: "What is your cancellation policy?", a: "We recommend canceling at least 24 hours before your scheduled rental for a full refund. Cancellations within 24 hours may be subject to a fee. If weather forces a cancellation, we will work with you to reschedule." },
      { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome! However, availability is not guaranteed — especially during peak summer weekends. Booking ahead is always your best bet." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards. Payment is processed at the time of booking through our secure online system." },
      { q: "Can I book for a large group?", a: "Absolutely! For groups needing multiple jet skis or pontoon boats, contact us directly and we'll help coordinate your adventure." },
    ],
  },
  {
    title: "Jet Ski Rentals",
    faqs: [
      { q: "How old do you have to be to ride a jet ski?", a: "Passengers must be at least 5 years old. Drivers must be at least 16 with a valid photo ID. Drivers under 18 need a parent or guardian signature." },
      { q: "How many people fit on a jet ski?", a: "Up to 3 people per jet ski — two adults and one child is the recommended maximum. Weight capacity is approximately 450 lbs." },
      { q: "Do I need experience?", a: "No experience needed! Our guides provide a complete safety and instructional briefing before every ride. They accompany you on the water the entire time." },
      { q: "Do I need a boater's license?", a: "No boater's license is required. Maryland regulations require a certified guide to accompany all jet ski rentals, which we provide." },
      { q: "Are life vests provided?", a: "Yes — life vests are mandatory for all riders and are provided free of charge in all sizes." },
      { q: "How long is the ride?", a: "Each jet ski rental is 1 hour of ride time. You should arrive 15-20 minutes early for check-in and your safety briefing." },
      { q: "How fast do the jet skis go?", a: "Our brand new jet skis can reach speeds of 40+ mph depending on conditions and rider weight." },
    ],
  },
  {
    title: "Pontoon Boat Rentals",
    faqs: [
      { q: "How old do you have to be to drive a pontoon?", a: "The driver must be at least 21 years old with a valid driver's license. No boating experience is required — we provide a full orientation before departure." },
      { q: "How many people fit on a pontoon boat?", a: "Up to 10 people per pontoon boat. All ages are welcome." },
      { q: "Are pontoon boats self-guided?", a: "Yes! Unlike jet skis, pontoon boats are self-guided. You're the captain — explore the bay at your own pace." },
      { q: "Can we bring alcohol?", a: "Yes, alcohol is permitted on pontoon boats. The driver must remain sober at all times — no exceptions." },
      { q: "Can we anchor at Assateague Island?", a: "Yes! You can anchor near Assateague Island to watch wild horses, swim at sandbars, or just relax. This is one of the highlights of a pontoon rental." },
      { q: "What's included in the rental?", a: "Each rental includes the pontoon boat with canopy for shade, life vests in all sizes, a full safety orientation, and free parking at our location." },
    ],
  },
  {
    title: "Safety & Weather",
    faqs: [
      { q: "What safety measures do you have?", a: "Safety is our top priority. All jet ski rides include a certified guide. Life vests are mandatory for jet ski riders and available for all pontoon passengers. Our equipment is inspected daily." },
      { q: "What happens if the weather is bad?", a: "We monitor weather conditions closely. If conditions are unsafe, we will contact you to reschedule your rental at no additional cost. Light rain typically doesn't affect operations — we're open rain or shine unless there are dangerous conditions." },
      { q: "Can I ride a jet ski if I've been drinking?", a: "Absolutely not. You may not operate a jet ski or pontoon boat under the influence of alcohol or any other substance. This is strictly enforced for everyone's safety." },
    ],
  },
  {
    title: "General",
    faqs: [
      { q: "Where are you located?", a: "307 Dorchester Street, Ocean City, MD 21842 — right in the heart of downtown Ocean City, on the bay side." },
      { q: "Is parking free?", a: "Yes! We have free parking available right at our location. No meters, no hassle." },
      { q: "What are your hours?", a: "We're open Monday through Sunday, 8:30 AM to 8:30 PM during the season." },
      { q: "How early should I arrive?", a: "We recommend arriving 15-20 minutes before your scheduled time to complete check-in and your safety briefing." },
      { q: "Can I get photos of my ride?", a: "Yes! Our affiliated photography service, OC Yacht Shots, captures professional photos of your adventure. Visit ocyachtshots.com after your ride to find and purchase your images." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-brand text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">FAQ & Policies</h1>
          <p className="text-blue-200 text-lg">Everything you need to know before your adventure</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-extrabold text-dark mb-5 flex items-center gap-2">
                <div className="w-1.5 h-7 bg-blue-brand rounded-full" />
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-xl border border-gray-border group shadow-sm">
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
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-dark mb-4">Still Have Questions?</h2>
          <p className="text-gray-text text-lg mb-8">We&apos;re happy to help! Give us a call or book your adventure today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="px-8 py-4 bg-blue-brand text-white font-bold text-lg rounded-lg hover:bg-blue-dark transition-colors shadow-md inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {PHONE}
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-md">Book Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
