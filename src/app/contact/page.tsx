import { Metadata } from "next";
import { BOOKING_URL, PHONE, PHONE_HREF, EMAIL, HOURS } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | OC Downtown Adventures",
  description: "Get in touch with OC Downtown Adventures. Call, email, or send us a message about jet ski and pontoon boat rentals in Ocean City, MD.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-brand text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-blue-200 text-lg">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-dark mb-6">Get in Touch</h2>
                <p className="text-gray-text text-lg leading-relaxed mb-8">
                  Have a question about our jet ski or pontoon boat rentals? Want to plan a group outing? We&apos;re here to help — reach out anytime!
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Phone</h3>
                  <a href={PHONE_HREF} className="text-blue-brand font-semibold text-lg hover:text-blue-dark transition-colors">
                    {PHONE}
                  </a>
                  <p className="text-gray-text text-sm mt-1">Call or text us anytime during business hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-blue-brand font-semibold hover:text-blue-dark transition-colors break-all">
                    {EMAIL}
                  </a>
                  <p className="text-gray-text text-sm mt-1">We typically respond within a few hours</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Hours</h3>
                  <p className="text-gray-text">{HOURS}</p>
                  <p className="text-gray-text text-sm mt-1">Open daily during the season</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Social Media</h3>
                  <p className="text-blue-brand font-semibold">@ocmd.downtown.adventures</p>
                  <p className="text-gray-text text-sm mt-1">Follow us on Instagram & TikTok for deals</p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-border p-6 md:p-8">
                <h3 className="text-xl font-bold text-dark mb-2">Send Us a Message</h3>
                <p className="text-gray-text text-sm mb-6">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Questions */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-dark mb-8 text-center">Common Questions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <h3 className="font-bold text-dark mb-2">Group Bookings</h3>
              <p className="text-gray-text text-sm leading-relaxed">Planning a big outing? Call us directly for special group rates on jet ski and pontoon rentals for parties of 6+.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <h3 className="font-bold text-dark mb-2">Weather Concerns</h3>
              <p className="text-gray-text text-sm leading-relaxed">If weather forces a cancellation, we&apos;ll contact you to reschedule at no extra cost. We&apos;re open rain or shine unless conditions are unsafe.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-border">
              <h3 className="font-bold text-dark mb-2">Same-Day Booking</h3>
              <p className="text-gray-text text-sm leading-relaxed">Need a ride today? Give us a call to check availability. Walk-ins are welcome but we can&apos;t guarantee spots during peak times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-blue-200 text-lg mb-8">Skip the wait — book your adventure online in just a few clicks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl">Book Now</a>
            <a href={PHONE_HREF} className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-brand transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
