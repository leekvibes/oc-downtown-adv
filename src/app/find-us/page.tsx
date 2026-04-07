import { Metadata } from "next";
import { BOOKING_URL, PHONE, PHONE_HREF, ADDRESS, ADDRESS_URL, HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Find Us | OC Downtown Adventures",
  description: "Visit OC Downtown Adventures at 307 Dorchester Street, Ocean City, MD. Free parking, right in downtown. Get directions and see our location on the map.",
};

export default function FindUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-brand text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Find Us</h1>
          <p className="text-blue-200 text-lg">Right in the heart of downtown Ocean City</p>
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Live Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.8!2d-75.0875!3d38.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d64c1d3a7e3d%3A0x4f0c5a2b0c8e4f0a!2s307%20Dorchester%20St%2C%20Ocean%20City%2C%20MD%2021842!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OC Downtown Adventures Location"
              className="w-full"
            />
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <a
              href={ADDRESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-border hover:shadow-md hover:border-blue-brand/30 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-brand/20 transition-colors">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Address</h3>
              <p className="text-gray-text text-sm leading-relaxed">{ADDRESS}</p>
              <p className="text-blue-brand font-semibold text-sm mt-3 group-hover:text-blue-dark transition-colors">Get Directions &rarr;</p>
            </a>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Hours</h3>
              <p className="text-gray-text text-sm">{HOURS}</p>
              <p className="text-gray-text text-sm mt-2">Open daily during the season</p>
            </div>

            {/* Parking */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <div className="w-12 h-12 bg-yellow-brand/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Free Parking</h3>
              <p className="text-gray-text text-sm leading-relaxed">Free parking available right at our location. No meters, no hassle — just pull up and get on the water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-dark mb-8 text-center">Getting Here</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <h3 className="font-bold text-dark mb-3">From the North (Boardwalk Area)</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Head south on Philadelphia Ave (Coastal Hwy) toward downtown. Turn right onto Dorchester Street. We&apos;re at 307 Dorchester Street on the bay side — you can&apos;t miss us!
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <h3 className="font-bold text-dark mb-3">From the South (West OC / Rt 50)</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Cross the Route 50 bridge into Ocean City. Continue straight — Dorchester Street is one of the first streets in downtown. Turn right and head toward the bay. Free parking is right at our dock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Know */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-dark mb-8 text-center">Before You Arrive</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Arrive 15-20 Min Early</h3>
              <p className="text-gray-text text-sm">Give yourself time for check-in and your safety briefing before hitting the water.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Bring Valid ID</h3>
              <p className="text-gray-text text-sm">All jet ski drivers need a valid photo ID. Pontoon drivers must be 21+ with a valid license.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Wear What Gets Wet</h3>
              <p className="text-gray-text text-sm">You will get splashed! Wear swimwear or clothes you don&apos;t mind getting wet. Sunscreen is a must.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">See You on the Water</h2>
          <p className="text-blue-200 text-lg mb-8">Book your adventure and come visit us in downtown Ocean City.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
