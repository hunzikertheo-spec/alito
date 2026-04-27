'use client';

import { motion, type Variants } from 'framer-motion';
import HeroBackground from '@/components/ui/hero-ascii-one';

const statCards = [
  { num: '48h', label: 'Délai de livraison' },
  { num: 'CHF', label: 'Prix transparents' },
  { num: '01', label: 'Interlocuteur unique' },
];

const techStack = ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel · Suisse'];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

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
        <div className="flex items-center gap-2 text-white font-medium text-sm tracking-widest">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L18 16H2L10 2Z" fill="white" opacity="0.9" />
          </svg>
          ALITO
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
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-72px)] px-10">
        <div className="grid grid-cols-[1fr_200px] gap-10 items-center w-full">

        {/* Colonne gauche */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <span className="border border-white/15 rounded-full px-4 py-1 text-[11px] text-white/50 tracking-widest uppercase inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              Basé en Suisse · Chavornay
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-geist text-6xl font-bold text-white leading-[1.05] tracking-tight m-0"
          >
            On met votre<br />
            business{' '}
            <span className="text-white/40">en lumière.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm text-white/40 font-light leading-relaxed mt-5 mb-9 max-w-sm"
          >
            Site web professionnel livré en 48h.<br />Sans les prix d&apos;agence.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-3 items-center flex-wrap">
            <a
              href="#forfaits"
              className="bg-white text-[#0a0a0a] rounded-full px-6 py-3 text-sm font-medium flex items-center gap-1.5 no-underline"
            >
              Voir nos forfaits →
            </a>
            <a
              href="#tarif-lancement"
              className="border border-white/15 text-white/50 rounded-full px-6 py-3 text-sm font-light no-underline"
            >
              Offre de lancement
            </a>
          </motion.div>
        </motion.div>

        {/* Colonne droite — stat cards */}
        <motion.div
          className="hidden lg:flex flex-col gap-2 w-[200px] flex-shrink-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {statCards.map((card) => (
            <motion.div
              key={card.num}
              variants={itemVariants}
              className="w-full border border-white/[0.08] rounded-xl p-4 bg-white/[0.02]"
            >
              <div className="font-geist text-[32px] font-bold text-white leading-none mb-1">
                {card.num}
              </div>
              <div className="text-[11px] text-white/30 tracking-widest uppercase font-light">
                {card.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Dégradé de transition bas hero → sections claires */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #f5f5f4 100%)' }}
      />

      {/* Bande tech bas */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] px-10 py-4 flex gap-6 items-center">
        {techStack.map((item, i) => (
          <div key={item} className="flex items-center gap-6">
            {i > 0 && <div className="w-px h-3 bg-white/10 flex-shrink-0" />}
            <span className="text-[11px] text-white/30 font-light tracking-widest uppercase">{item}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
