"use client";

import { useState } from "react";
import Link from "next/link";
import { getDomains } from "@/lib/domains";

export default function HomePage() {
  const domains = getDomains();
  const [query, setQuery] = useState("");

  const filtered = domains.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">
        Premium Domains for Sale
      </h1>

      <p className="text-center text-neutral-400 mb-8">
        Secure transfer • Direct ownership • No brokers
      </p>

      {/* SEARCH (≈20 lines incl. logic) */}
      <input
        className="w-full max-w-xl mx-auto block mb-10 p-3 rounded bg-neutral-900"
        placeholder="Search domain..."
        onChange={e => setQuery(e.target.value)}
      />

      {/* FEATURED */}
      <h2 className="text-2xl font-semibold mb-6">Featured Domains</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {filtered
          .filter(d => d.featured)
          .map(d => (
            <Link key={d.name} href={`/${d.name}`}
              className="border border-neutral-800 p-6 rounded-xl hover:border-white">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="text-sm text-neutral-400 mt-2">{d.description}</p>
              <p className="mt-3 text-green-400">{d.price_range}</p>
            </Link>
          ))}
      </div>

      {/* ALL DOMAINS */}
      <h2 className="text-xl font-semibold mb-4">All Domains</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {filtered.map(d => (
          <Link key={d.name} href={`/${d.name}`}
            className="p-4 rounded border border-neutral-800 hover:border-neutral-500">
            {d.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
