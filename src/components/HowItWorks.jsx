import { CheckCircle2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { title: 'Create your brief', desc: 'Describe your campaign goals, timeline and budget.' },
    { title: 'Get matched', desc: 'Our engine finds creators aligned with your audience.' },
    { title: 'Approve and contract', desc: 'Generate agreements instantly and fund secure escrow.' },
    { title: 'Launch and track', desc: 'Monitor content, conversions and payouts in real-time.' },
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">Four simple steps to launch your next creator campaign.</p>
        </div>

        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">{i + 1}. {s.title}</h3>
                  <p className="text-slate-300 mt-1 text-sm">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
