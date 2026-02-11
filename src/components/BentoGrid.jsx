import React from 'react'

function NodeIcon() {
  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" fill="none">
      {/* Outer ring */}
      <circle cx="120" cy="120" r="90" stroke="url(#ring)" strokeWidth="1" opacity="0.3" />
      <circle cx="120" cy="120" r="60" stroke="url(#ring)" strokeWidth="0.5" opacity="0.15" />

      {/* Central node */}
      <circle cx="120" cy="120" r="18" fill="url(#centerGlow)" />
      <circle cx="120" cy="120" r="10" fill="#00FF94" opacity="0.9" />

      {/* Orbiting nodes */}
      <circle cx="120" cy="35" r="8" fill="#00F0FF" opacity="0.8" />
      <circle cx="195" cy="85" r="7" fill="#00F0FF" opacity="0.7" />
      <circle cx="195" cy="155" r="6" fill="#00FF94" opacity="0.6" />
      <circle cx="120" cy="205" r="7" fill="#00F0FF" opacity="0.7" />
      <circle cx="45" cy="155" r="8" fill="#00FF94" opacity="0.8" />
      <circle cx="45" cy="85" r="6" fill="#00F0FF" opacity="0.6" />

      {/* Connection lines */}
      <line x1="120" y1="120" x2="120" y2="35" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />
      <line x1="120" y1="120" x2="195" y2="85" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />
      <line x1="120" y1="120" x2="195" y2="155" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />
      <line x1="120" y1="120" x2="120" y2="205" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />
      <line x1="120" y1="120" x2="45" y2="155" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />
      <line x1="120" y1="120" x2="45" y2="85" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.35" />

      {/* Outer-to-outer connections */}
      <line x1="120" y1="35" x2="195" y2="85" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />
      <line x1="195" y1="85" x2="195" y2="155" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />
      <line x1="195" y1="155" x2="120" y2="205" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />
      <line x1="120" y1="205" x2="45" y2="155" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />
      <line x1="45" y1="155" x2="45" y2="85" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />
      <line x1="45" y1="85" x2="120" y2="35" stroke="#00F0FF" strokeWidth="0.5" opacity="0.15" />

      {/* Defs */}
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF94" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF94" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FF94" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00FF94" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default function BentoGrid() {
  return (
    <section id="spotlight" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-cyan/70 mb-3">Ecosystem</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white">
            Active Roles
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

          {/* Big Left Card — NodeOps */}
          <div className="glass bento-card rounded-2xl p-8 md:p-10 md:row-span-2 flex flex-col justify-between min-h-[420px] group relative overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
                <span className="font-body text-xs tracking-[0.2em] uppercase text-neon/80">Ambassador &bull; Aug 2025 — Present</span>
              </div>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-white mb-4">
                NodeOps Network
              </h3>
              <p className="font-body text-base text-white/50 leading-relaxed max-w-md">
                Educating users on Decentralized Physical Infrastructure. Driving governance participation and bridging technical knowledge with community engagement across the DePIN ecosystem.
              </p>
            </div>

            {/* Node visualization */}
            <div className="relative z-10 flex justify-center mt-8">
              <div className="w-48 h-48 md:w-56 md:h-56 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <NodeIcon />
              </div>
            </div>

            {/* Stats bar */}
            <div className="relative z-10 flex items-center gap-6 mt-8 pt-6 border-t border-white/5">
              <div>
                <p className="font-display font-bold text-xl text-neon">DePIN</p>
                <p className="font-body text-xs text-white/30">Focus</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="font-display font-bold text-xl text-cyan">Governance</p>
                <p className="font-body text-xs text-white/30">Role</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="font-display font-bold text-xl text-white/80">Active</p>
                <p className="font-body text-xs text-white/30">Status</p>
              </div>
            </div>
          </div>

          {/* Small Right Top Card — CreatorX */}
          <div className="glass bento-card rounded-2xl p-8 flex flex-col justify-between min-h-[200px] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-body text-xs tracking-[0.2em] uppercase text-cyan/70">Jan 2026 — Present</span>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tighter text-white mb-2">CreatorX</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">
                Content Strategy &amp; Creator Economy. Empowering creators through decentralized platforms and blockchain-native tools.
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-xs text-cyan font-body font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Content Strategy
              </span>
            </div>
          </div>

          {/* Small Right Bottom Card — W3GG */}
          <div className="glass bento-card rounded-2xl p-8 flex flex-col justify-between min-h-[200px] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="font-body text-xs tracking-[0.2em] uppercase text-purple-400/70">Sep 2025 — Present</span>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tighter text-white mb-2">W3GG</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">
                GameFi Growth. Bridging Web2 and Web3 gaming ecosystems to drive mass adoption and community engagement.
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20 text-xs text-purple-400 font-body font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                GameFi Growth
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}