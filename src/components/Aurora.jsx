import React from 'react'

export default function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Cyan blob - top right */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl animate-aurora-1"
        style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }}
      />
      {/* Neon green blob - bottom left */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl animate-aurora-2"
        style={{ background: 'radial-gradient(circle, #00FF94 0%, transparent 70%)' }}
      />
      {/* Mixed blob - center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl animate-aurora-3"
        style={{ background: 'radial-gradient(circle, #00F0FF 0%, #00FF94 50%, transparent 70%)' }}
      />
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />
    </div>
  )
}