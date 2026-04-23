"use client";

import Link from "next/link";
import Image from "next/image";
import { BOOKING_URL, LOGO_URL, PHONE, PHONE_HREF } from "@/lib/constants";

// Links that go inside the hamburger menu on mobile
const MENU_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jet-ski", label: "Jet Ski Rentals" },
  { href: "/pontoon", label: "Pontoon Boats" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/find-us", label: "Find Us" },
  { href: "/partners", label: "Partners" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ & Policies" },
  { href: "/promotions", label: "Promotions" },
];

// All links for desktop nav bar
const DESKTOP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jet-ski", label: "Jet Skis" },
  { href: "/pontoon", label: "Pontoons" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/find-us", label: "Find Us" },
  { href: "/partners", label: "Partners" },
];

/** Close the mobile menu by unchecking the hidden checkbox.
 *  Used when navigating via client-side routing (links don't cause full reload). */
function closeMenu() {
  const cb = document.getElementById("menu-cb") as HTMLInputElement | null;
  if (cb) cb.checked = false;
}

export function Header() {
  return (
    <>
      {/* Hidden checkbox — the CSS-only toggle for the mobile menu.
          When checked, sibling selectors in globals.css show the backdrop & menu. */}
      <input type="checkbox" id="menu-cb" className="hidden" aria-hidden="true" />

      <header className="sticky top-0 z-[100] bg-white shadow-sm">
        {/* Top info bar - desktop only */}
        <div className="hidden md:block bg-blue-brand text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
            <span>Open Daily: 8:30 AM - 8:30 PM | Free Parking</span>
            <a href={PHONE_HREF} className="hover:text-yellow-brand transition-colors">
              {PHONE}
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="OC Downtown Adventures"
                width={180}
                height={60}
                className="h-10 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop full nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {DESKTOP_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-2 text-sm font-medium text-dark hover:text-blue-brand transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/promotions"
                className="px-3 py-1.5 text-sm font-bold text-dark bg-yellow-brand rounded-full hover:bg-yellow-hover transition-colors ml-1"
              >
                Promotions
              </Link>
            </nav>

            {/* Desktop Book Now */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-yellow-brand text-dark font-bold text-sm rounded-lg hover:bg-yellow-hover transition-colors shadow-md"
            >
              Book Now
            </a>

            {/* ── Mobile right side ── */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <Link href="/partners" className="px-2 py-1.5 text-[11px] sm:text-xs font-semibold text-dark hover:text-blue-brand transition-colors">
                Partners
              </Link>
              <Link href="/promotions" className="px-2.5 py-1 text-[11px] sm:text-xs font-bold text-dark bg-yellow-brand rounded-full hover:bg-yellow-hover transition-colors">
                Promotions
              </Link>

              {/* Hamburger — a <label> so it toggles the checkbox with ZERO JavaScript */}
              <label
                htmlFor="menu-cb"
                className="flex items-center justify-center w-10 h-10 text-dark active:bg-gray-100 rounded-lg flex-shrink-0 cursor-pointer"
                role="button"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop — a <label> so tapping it unchecks the checkbox (closes menu) without JS */}
      <label
        htmlFor="menu-cb"
        className="mobile-backdrop fixed inset-0 bg-black/40 z-[9998] lg:hidden opacity-0 pointer-events-none transition-opacity duration-300 cursor-default"
        aria-hidden="true"
      />

      {/* Slide-out menu */}
      <div className="mobile-menu fixed top-0 right-0 h-full w-72 bg-white z-[9999] lg:hidden shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out translate-x-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-border">
          <span className="font-bold text-dark text-sm">Menu</span>
          {/* Close button — also a <label>, no JS needed */}
          <label
            htmlFor="menu-cb"
            className="p-2 text-dark active:bg-gray-100 rounded-lg cursor-pointer"
            role="button"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {MENU_LINKS.map((link) =>
            link.label === "Promotions" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-2 px-3 py-3 text-base font-bold text-dark bg-yellow-brand/20 border border-yellow-brand/40 rounded-lg"
              >
                <svg className="w-5 h-5 text-yellow-brand pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Promotions & Deals
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-3 text-base font-medium text-dark hover:bg-blue-light active:bg-blue-light rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-4 space-y-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3.5 bg-yellow-brand text-dark font-bold text-center rounded-lg hover:bg-yellow-hover active:bg-yellow-hover transition-colors shadow-md"
            >
              Book Now
            </a>
            <a
              href={PHONE_HREF}
              className="block px-4 py-3 border-2 border-blue-brand text-blue-brand font-semibold text-center rounded-lg active:bg-blue-light transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
