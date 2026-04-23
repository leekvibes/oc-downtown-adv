"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      {submitted ? (
        <div className="flex-1 text-center py-3 px-4 bg-white/20 backdrop-blur-sm rounded-lg text-white font-semibold">
          You&apos;re in! We&apos;ll send you the best deals.
        </div>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-brand focus:border-transparent"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-yellow-brand text-dark font-bold rounded-lg hover:bg-yellow-hover transition-colors shadow-lg flex-shrink-0"
          >
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
