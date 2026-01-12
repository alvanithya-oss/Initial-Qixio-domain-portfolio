import { getDomain, getDomains } from "@/lib/domains";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getDomains().map(d => ({ domain: d.name }));
}

export async function generateMetadata({ params }: any) {
  const domain = getDomain(params.domain);
  return domain
    ? {
        title: `Buy ${domain.name} | Premium Domain`,
        description: domain.description
      }
    : {};
}

export default function DomainPage({ params }: any) {
  const domain = getDomain(params.domain);
  if (!domain) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          {domain.name} is for sale
        </h1>

        <p className="text-neutral-400 mb-6">
          {domain.description}
        </p>

        <div className="flex justify-center gap-6 mb-10 text-sm">
          <span>🔒 Secure Transaction</span>
          <span>⚡ Fast Transfer</span>
        </div>

        <form action="/api/offer" method="POST"
          className="bg-neutral-900 p-8 rounded-xl space-y-4">
          <input type="hidden" name="domain" value={domain.name} />

          <input name="name" required placeholder="Your Name"
            className="w-full p-3 rounded bg-neutral-800" />

          <input name="email" type="email" required placeholder="Your Email"
            className="w-full p-3 rounded bg-neutral-800" />

          <input name="offer" required placeholder="Your Offer (USD)"
            className="w-full p-3 rounded bg-neutral-800" />

          <button className="w-full bg-white text-black py-3 rounded font-semibold">
            Make an Offer
          </button>
        </form>
      </div>
    </main>
  );
}
