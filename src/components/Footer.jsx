import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* CTA */}
        <p className="font-body text-sm tracking-[0.3em] uppercase text-cyan/50 mb-6">Let's connect</p>
        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter text-white mb-8">
          Ready to scale your community?
        </h2>

        {/* Email link */}
        <a
          href="mailto:hello@erlanggabayu.xyz"
          className="inline-block font-display font-bold text-xl md:text-3xl tracking-tight text-neon hover:text-cyan transition-colors duration-300 group"
        >
          <span className="border-b-2 border-neon/30 group-hover:border-cyan/60 pb-1 transition-colors duration-300">
            hello@erlanggabayu.xyz
          </span>
        </a>

        {/* Social row */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="#"
            className="glass rounded-full w-12 h-12 flex items-center justify-center text-white/40 hover:text-neon hover:border-neon/30 transition-all duration-300"
            aria-label="X / Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="#"
            className="glass rounded-full w-12 h-12 flex items-center justify-center text-white/40 hover:text-cyan hover:border-cyan/30 transition-all duration-300"
            aria-label="Telegram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.48-.428-.012-1.252-.242-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a
            href="mailto:hello@erlanggabayu.xyz"
            className="glass rounded-full w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="font-body text-xs text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} Erlangga Bayu &mdash; Built for the decentralized future.
          </p>
        </div>
      </div>
    </footer>
  )
}