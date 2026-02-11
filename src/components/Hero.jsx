import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Overline tag */}
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-cyan mb-8 opacity-0-init animate-fade-up">
          Web3 Ambassador &bull; DePIN Specialist
        </p>

        {/* Main name - stroke text */}
        <h1 className="stroke-text font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-6 opacity-0-init animate-fade-up-delay-1">
          ERLANGGA
          <br />
          BAYU
        </h1>

        {/* Sub headline */}
        <p className="font-display font-medium text-xl sm:text-2xl md:text-3xl tracking-tight text-white/90 mb-12 opacity-0-init animate-fade-up-delay-2">
          Architecting the DePIN Ecosystem.
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-init animate-fade-up-delay-3">
          <a
            href="#spotlight"
            className="btn-neon px-8 py-4 rounded-xl font-display font-bold text-base tracking-tight inline-flex items-center gap-2"
          >
            <span>View Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-glass px-8 py-4 rounded-xl font-display font-medium text-base tracking-tight inline-flex items-center gap-2"
          >
            <span>Contact Me</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-neon rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}