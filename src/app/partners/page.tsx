import Image from "next/image";
import { Metadata } from "next";
import { PARTNERS, BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Partners | OC Downtown Adventures",
  description: "OC Downtown Adventures partners with the best local businesses in Ocean City, MD. Check out our partner restaurants and shops.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-brand text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Our Partners</h1>
          <p className="text-blue-200 text-lg">We team up with the best local businesses in Ocean City to make your visit unforgettable.</p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-10">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl shadow-lg border border-gray-border overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Logo section */}
                  <div className="bg-gray-light flex items-center justify-center p-10 md:p-12">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={120}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>

                  {/* Info section */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <h2 className="text-2xl font-extrabold text-dark mb-3">{partner.name}</h2>
                    <p className="text-gray-text leading-relaxed mb-4">{partner.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-text mb-5">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {partner.address}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {partner.hours}
                      </div>
                    </div>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-brand text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors text-sm"
                    >
                      Visit Website
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a partner */}
          <div className="mt-16 text-center bg-blue-light rounded-2xl p-10 border border-blue-brand/20">
            <h2 className="text-2xl font-extrabold text-dark mb-3">Become a Partner</h2>
            <p className="text-gray-text mb-6 max-w-xl mx-auto">
              Own a local business in Ocean City? We&apos;re always looking for great partners to team up with. Let&apos;s create something amazing together.
            </p>
            <a href="mailto:dorchesterstreetjetski@gmail.com?subject=Partnership%20Inquiry" className="inline-flex items-center px-6 py-3 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready for Your Adventure?</h2>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl inline-block">Book Now</a>
        </div>
      </section>
    </>
  );
}
