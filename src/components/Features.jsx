import { Handshake, Wallet, LineChart, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Handshake,
    title: "Smart matching",
    desc: "AI surfaces creators whose audience and vibe fit your brief, not just follower count.",
  },
  {
    icon: Wallet,
    title: "Contracts & payouts",
    desc: "Glassmorphic contracts, transparent fees, on-time payouts across currencies.",
  },
  {
    icon: LineChart,
    title: "Live performance",
    desc: "Unified dashboard for reach, clicks, sales — plug in Shopify, GA4, TikTok, and more.",
  },
  {
    icon: ShieldCheck,
    title: "Brand safety",
    desc: "Fraud checks, content rights, disclosure tracking — handled automatically.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Built for modern brand–creator collabs
          </h2>
          <p className="mt-4 text-blue-200/80">
            Everything you need to run partnerships end‑to‑end, designed with a minimalist fintech feel.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur hover:bg-slate-900/60 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
