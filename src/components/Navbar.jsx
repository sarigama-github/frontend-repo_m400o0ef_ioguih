import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">LinkUp</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-blue-200/80 hover:text-white transition-colors">Features</a>
            <a href="#how" className="text-blue-200/80 hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="text-blue-200/80 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-blue-200/80 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/20 transition-colors">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">Get started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 text-white/90">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            <a href="#features" className="block text-blue-200/90 hover:text-white">Features</a>
            <a href="#how" className="block text-blue-200/90 hover:text-white">How it works</a>
            <a href="#pricing" className="block text-blue-200/90 hover:text-white">Pricing</a>
            <a href="#contact" className="block text-blue-200/90 hover:text-white">Contact</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm rounded-xl border border-white/10 text-white/90">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
