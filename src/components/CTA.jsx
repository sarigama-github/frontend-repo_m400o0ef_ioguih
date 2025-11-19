export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-10 backdrop-blur">
          <div className="absolute -inset-20 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(600px_circle_at_90%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Ready to run your next campaign?
                </h3>
                <p className="mt-2 text-blue-200/80 max-w-2xl">
                  Start free. Upgrade when you need advanced reporting, usage rights, and multi-market payouts.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                  Create account
                </button>
                <button className="px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/20">
                  Talk to sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
