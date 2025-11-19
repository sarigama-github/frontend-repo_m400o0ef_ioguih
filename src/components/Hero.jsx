import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.2),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/40 px-3 py-1 text-xs text-blue-200/80 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
            The modern way brands collaborate with creators
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Power your next creator partnership with clarity and speed
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 max-w-xl">
            Match with the right creators, brief faster, track performance, and pay seamlessly — all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
              Launch campaign
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/20">
              Explore creators
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-blue-200/70">
            <div>
              <div className="text-white font-semibold">5,000+</div>
              verified creators
            </div>
            <div>
              <div className="text-white font-semibold">98%</div>
              brand satisfaction
            </div>
            <div>
              <div className="text-white font-semibold">$120M+</div>
              tracked GMV
            </div>
          </div>
        </div>

        <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl border border-white/10 overflow-hidden bg-slate-900/40 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          <div className="pointer-events-none absolute -inset-20 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
