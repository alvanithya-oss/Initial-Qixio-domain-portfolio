"use client";

import { useState } from "react";
import Link from "next/link";
import { getDomains } from "../lib/domains";

export default function HomePage() {
  const domains = getDomains();
  const [query, setQuery] = useState("");

  const filtered = domains.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-12">
      {/* content */}
    </main>
  );
}
