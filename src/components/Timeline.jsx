import React from 'react'

export default function Timeline() {
  const events = [
    {
      year: '2025',
      title: 'Yellow Network',
      period: 'Aug — Nov 2025',
      description: 'Clearing & asset settlement infrastructure. Specialized in decentralized finance settlement layers.',
      status: 'completed',
    },
    {
      year: '2025',
      title: 'NodeOps Network',
      period: 'Aug 2025 — Present',
      description: 'DePIN infrastructure ambassador. Educating communities on decentralized physical infrastructure and governance.',
      status: 'active',
    },
    {
      year: '2025',
      title: 'W3GG',
      period: 'Sep 2025 — Present',
      description: 'Bridging Web2 & Web3 gaming. Driving adoption and community growth in the GameFi ecosystem.',
      status: 'active',
    },
    {
      year: '2026',
      title: 'CreatorX',
      period: 'Jan 2026 — Present',
      description: 'Empowering the creator economy through blockchain-native content strategy and decentralized platforms.',
      status: 'active',
    },
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-cyan/70 mb-3">Journey</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white">
            Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-neon/40 via-cyan/20 to-transparent" />

          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className="relative pl-12 group">
                {/* Glowing dot */}
                <div className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full flex items-center justify-center ${
                  event.status === 'active' ? 'animate-pulse-glow' : ''
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    event.status === 'active' ? 'bg-neon' : 'bg-white/30'
                  }`} />
                  {event.status === 'active' && (
                    <div className="absolute inset-0 rounded-full bg-neon/20 animate-ping" style={{ animationDuration: '2s' }} />
                  )}
                </div>

                {/* Content */}
                <div className="glass bento-card rounded-xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white group-hover:text-neon transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {event.status === 'active' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon/10 border border-neon/20 text-[10px] text-neon font-body font-medium uppercase tracking-wider">
                          Active
                        </span>
                      )}
                      <span className="font-body text-xs text-white/30">{event.period}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-white/40 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}