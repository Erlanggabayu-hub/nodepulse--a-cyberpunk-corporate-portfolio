import React from 'react'

export default function Marquee() {
  const keywords = [
    'DEPIN',
    'BLOCKCHAIN',
    'GOVERNANCE',
    'COMMUNITY',
    'NODE RUNNING',
    'WEB3',
    'INFRASTRUCTURE',
    'GAMEFI',
    'CONTENT STRATEGY',
    'AMBASSADOR',
  ]

  const renderRow = (direction) => {
    const items = [...keywords, ...keywords]
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <div className={`inline-flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
          {items.map((word, i) => (
            <span key={i} className="inline-flex items-center mx-4 md:mx-6">
              <span className="font-display font-bold text-2xl md:text-4xl tracking-tighter text-white/[0.07] hover:text-white/20 transition-colors duration-300 select-none">
                {word}
              </span>
              <span className="text-neon/30 text-lg md:text-2xl ml-4 md:ml-6 select-none">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="space-y-6">
        {renderRow('left')}
        {renderRow('right')}
      </div>
    </section>
  )
}