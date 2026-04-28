'use client';

import HeroBackground from '@/components/ui/hero-ascii-one';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">

      {/* Background animé UnicornStudio */}
      <HeroBackground />

      {/* Grille de fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbe lumière */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(80,80,255,0.06) 0%, transparent 70%)' }}
      />

      {/* Coins décoratifs */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 pointer-events-none" />

      {/* Ligne horizontale nav */}
      <div className="absolute top-[72px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-10 h-[72px]">
        <div className="flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L19 18H14L10 12L6 18H1Z" fill="white" />
          </svg>
          <span className="text-white font-semibold text-base tracking-wide">ALITO</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {['Services', 'Lancement', 'Forfaits', 'À propos', 'FAQ'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace('à ', '')}`}
                className="text-white/40 text-xs font-light tracking-wide hover:text-white/70 transition-colors no-underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-white text-[#0a0a0a] rounded-full px-5 py-2 text-xs font-medium"
        >
          Contact
        </a>
      </nav>

      {/* Corps */}
      <div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-16 items-center pl-16 pr-8"
        style={{ minHeight: 'calc(100vh - 72px - 56px)' }}
      >
        {/* Colonne gauche — texte */}
        <div className="flex flex-col max-w-lg">
          <span className="border border-white/20 rounded-full px-4 py-1.5 text-[11px] text-white/60 tracking-widest uppercase inline-flex items-center gap-2 mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
            Basé en Suisse · Chavornay
          </span>

          <h1 className="text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            On met votre business<br />
            <span className="text-white/45">en lumière.</span>
          </h1>

          <p className="text-base text-white/60 font-light leading-relaxed mb-8">
            Site web professionnel livré en 48h.<br />
            Sans les prix d&apos;agence.
          </p>

          <div className="flex gap-3 items-center">
            <a
              href="#forfaits"
              className="bg-white text-[#0a0a0a] rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-1.5 no-underline hover:bg-white/90 transition-colors"
            >
              Voir nos forfaits →
            </a>
            <a
              href="#lancement"
              className="border border-white/30 text-white/80 rounded-full px-6 py-3 text-sm font-light no-underline hover:border-white/50 transition-colors"
            >
              Offre de lancement
            </a>
          </div>
        </div>

        {/* Colonne droite — stat cards */}
        <div className="hidden lg:flex flex-col gap-2.5">
          {[
            { num: '48h', label: 'Délai de livraison' },
            { num: 'CHF', label: 'Prix transparents' },
            { num: '01', label: 'Interlocuteur unique' },
          ].map((card) => (
            <div
              key={card.num}
              className="border border-white/10 rounded-xl p-4 bg-white/[0.04] backdrop-blur-sm"
            >
              <div className="text-[32px] font-bold text-white leading-none mb-1">
                {card.num}
              </div>
              <div className="text-[11px] text-white/40 tracking-widest uppercase font-light">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bande tech bas */}
      <div className="relative z-30 border-t border-white/10 px-10 py-5 flex items-center gap-3 flex-wrap">
        {[
          { label: 'Next.js' },
          { label: 'Tailwind CSS' },
          { label: 'Framer Motion' },
          { label: 'Vercel · Suisse' },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-3">
            {i > 0 && <div className="w-px h-3 bg-white/20 flex-shrink-0" />}
            <span className="text-xs text-white/80 font-medium tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Dégradé de transition bas hero → sections claires */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #f4f4f5 100%)' }}
      />

    </section>
  );
}
