import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* background gradient + grid */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(50rem_50rem_at_110%_10%,rgba(34,211,238,0.12),transparent)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(to right, rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize:'48px 48px'}} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />

        {/* Pricing preview */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
              <p className="mt-3 text-slate-300">Start free. Upgrade as you grow.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[{name:'Starter', price:'Free', features:['10 creator views/mo','1 active campaign','Basic analytics']}, {name:'Growth', price:'$49/mo', features:['Unlimited views','5 active campaigns','Contract templates','Standard support']}, {name:'Scale', price:'$149/mo', features:['Unlimited everything','AI matching boost','Advanced analytics','Priority support']}].map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 translate-y-2" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-white text-slate-900 font-medium py-2.5 hover:bg-slate-100 transition">Choose {p.name}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 text-center backdrop-blur">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to launch your next creator campaign?</h3>
              <p className="mt-3 text-slate-300">Create a free account and start matching with verified influencers in minutes.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get started</a>
                <a href="#how" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500" />
            <span className="text-slate-300">© {new Date().getFullYear()} CollabFlow</span>
          </div>
          <div className="text-slate-400 text-sm">Built for brands and creators</div>
        </div>
      </footer>
    </div>
  )
}

export default App
