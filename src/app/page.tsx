"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  Search,
  CheckCircle,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Code,
  BarChart3,
  Headphones,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { LampContainer } from "@/components/ui/lamp";

/* ─────────────────── Helpers ─────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─────────────────── Header ─────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "border-b border-[#e5e5e5]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-[#0a0a0a]"
          >
            <path
              d="M14 2L2 26h8l4-8 4 8h8L14 2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-[#0a0a0a] font-bold tracking-wide text-sm uppercase">
            Alito
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Forfaits", "À propos", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "").replace("à", "a")}`}
              className="text-sm text-[#737373] hover:text-[#2563eb] transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-[#0a0a0a] text-white px-5 py-2 text-sm font-medium hover:bg-[#262626] transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

/* ─────────────────── Hero ─────────────────── */

function Hero() {
  return (
    <LampContainer className="pt-16">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 bg-slate-800/60 border border-cyan-500/30 text-cyan-300 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
          🇨🇭 Basé en Suisse · Chavornay
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0.5, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl leading-[1.1]"
      >
        On met votre business
        <br />
        en lumière.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
        className="mt-4 text-center text-slate-400 text-base md:text-lg max-w-xl leading-[1.75]"
      >
        Site web professionnel livré en 48h.
        <br className="hidden sm:block" />
        Sans les prix d&apos;agence.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7, ease: "easeInOut" }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#forfaits"
          className="rounded-full bg-cyan-500 text-slate-950 px-7 py-3.5 text-sm font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
        >
          Voir nos forfaits <ArrowRight className="size-4" />
        </a>
        <a
          href="#services"
          className="rounded-full border border-slate-600 text-slate-300 px-7 py-3.5 text-sm font-semibold hover:border-slate-400 hover:text-white transition-colors"
        >
          Voir nos réalisations
        </a>
      </motion.div>
    </LampContainer>
  );
}

/* ─────────────────── Services ─────────────────── */

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Un site à votre image, conçu pour convertir vos visiteurs en clients. Design moderne, navigation intuitive et contenu structuré.",
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    description:
      "Référencement local et technique pour que vos clients vous trouvent facilement sur Google dans votre région.",
  },
  {
    icon: Zap,
    title: "Performance & Vitesse",
    description:
      "Sites ultra-rapides avec un score Lighthouse optimal. Chaque milliseconde compte pour l'expérience utilisateur et le SEO.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f5f5f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        {/* Left */}
        <motion.div
          className="lg:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#2563eb] font-medium text-[11px] tracking-[0.1em] uppercase mb-4"
          >
            Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[48px] font-bold text-[#0a0a0a] leading-[1.1] tracking-[-0.03em]"
          >
            Tout ce qu&apos;il faut pour briller en ligne.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#737373] text-base leading-[1.7] max-w-sm"
          >
            Des solutions complètes adaptées aux indépendants et PME de
            Suisse romande.
          </motion.p>
        </motion.div>

        {/* Right — Cards */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#d4d4d4] hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 size-12 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <service.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#737373] leading-[1.7] text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── Forfaits ─────────────────── */

const plans = [
  {
    name: "Essentiel",
    price: "900",
    borderColor: "border-[#e5e5e5]",
    dark: false,
    features: [
      "Site one-page responsive",
      "Design personnalisé",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus",
    ],
  },
  {
    name: "Standard",
    price: "1'600",
    borderColor: "border-[#e5e5e5]",
    dark: false,
    popular: true,
    accent: true,
    features: [
      "Jusqu'à 5 pages",
      "Design sur mesure",
      "Animations & interactions",
      "SEO avancé & analytics",
      "Hébergement 1 an inclus",
      "Support prioritaire 3 mois",
    ],
  },
  {
    name: "Pro",
    price: "2'800",
    borderColor: "border-[#e5e5e5]",
    dark: false,
    features: [
      "Pages illimitées",
      "CMS intégré (blog, portfolio…)",
      "Multilingue",
      "SEO technique complet",
      "Hébergement 1 an inclus",
      "Support prioritaire 6 mois",
      "Formations & documentation",
    ],
  },
];

function Forfaits() {
  return (
    <section id="forfaits" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#2563eb] font-medium text-[11px] tracking-[0.1em] uppercase mb-4"
          >
            Forfaits
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[48px] font-bold text-[#0a0a0a] tracking-[-0.03em]"
          >
            Des prix transparents.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#737373] text-base leading-[1.7] max-w-lg mx-auto"
          >
            Choisissez le forfait adapté à vos besoins. Tous les prix sont en
            CHF, sans surprise.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl border-2 p-8 flex flex-col bg-white ${plan.borderColor} ${
                plan.accent ? "border-t-[#2563eb] border-t-4" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-[11px] font-medium tracking-[0.05em] uppercase px-4 py-1 rounded-full">
                  Populaire
                </span>
              )}

              <h3 className="text-lg font-bold mt-1 text-[#0a0a0a]">
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-bold text-[#0a0a0a]">
                  {plan.price}
                </span>
                <span className="ml-1 text-[#a3a3a3]">
                  CHF
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#737373]"
                  >
                    <CheckCircle
                      className={`size-4 flex-shrink-0 mt-0.5 ${
                        plan.accent ? "text-[#2563eb]" : "text-[#0a0a0a]"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`rounded-full py-3 text-sm font-medium text-center transition-colors ${
                  plan.accent
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                    : "bg-[#f5f5f4] text-[#0a0a0a] hover:bg-[#e5e5e5]"
                }`}
              >
                Choisir {plan.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── À propos ─────────────────── */

function About() {
  return (
    <section id="apropos" className="bg-[#f5f5f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#2563eb] font-medium text-[11px] tracking-[0.1em] uppercase mb-4"
          >
            À propos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[48px] font-bold text-[#0a0a0a] leading-[1.1] tracking-[-0.03em]"
          >
            Théo Hunziker, développeur passionné.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[#737373] text-base leading-[1.7]"
          >
            Basé à Chavornay dans le canton de Vaud, j&apos;accompagne les
            entreprises locales dans leur présence en ligne. Mon approche :
            allier design moderne, performance technique et accompagnement
            personnalisé.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-white border border-[#e5e5e5] text-[#737373] text-sm px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Right — Info cards */}
        <motion.div
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {[
            { icon: MapPin, title: "Basé à Chavornay", subtitle: "Gros-de-Vaud, VD" },
            { icon: CheckCircle, title: "Disponible", subtitle: "Pour de nouveaux projets" },
            { icon: Clock, title: "Réponse sous 48h", subtitle: "Du lundi au vendredi" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-white border border-[#e5e5e5] rounded-2xl px-8 py-6 flex items-center gap-5"
            >
              <div className="flex-shrink-0 size-12 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
                <item.icon className="size-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#0a0a0a]">
                  {item.title}
                </div>
                <div className="text-sm text-[#a3a3a3] mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── FAQ ─────────────────── */

const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "En général, un site vitrine est livré en 2 à 4 semaines selon la complexité. Je travaille de manière itérative avec des validations régulières.",
  },
  {
    question: "Est-ce que je pourrai modifier le site moi-même ?",
    answer:
      "Oui ! Selon le forfait choisi, un CMS intuitif vous permet de modifier textes et images sans toucher au code. Je fournis aussi une formation.",
  },
  {
    question: "Le site sera-t-il adapté aux mobiles ?",
    answer:
      "Absolument. Tous mes sites sont responsive par défaut et testés sur tous les appareils (mobile, tablette, desktop).",
  },
  {
    question: "Qu'est-ce qui est inclus dans l'hébergement ?",
    answer:
      "L'hébergement inclut un certificat SSL, un nom de domaine .ch ou .com, des sauvegardes automatiques et un CDN pour la performance.",
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer:
      "Oui, je propose des forfaits de maintenance mensuelle incluant mises à jour, sauvegardes et support technique.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Un acompte de 30% est demandé au démarrage du projet, le solde à la livraison. Je propose aussi le paiement en 3 fois sans frais.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#2563eb] font-medium text-[11px] tracking-[0.1em] uppercase mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[48px] font-bold text-[#0a0a0a] tracking-[-0.03em]"
          >
            Questions fréquentes
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-[#e5e5e5]"
              >
                <AccordionTrigger className="text-[#0a0a0a] text-left text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#737373] text-base leading-[1.7]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── Contact ─────────────────── */

function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left — Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#2563eb] font-medium text-[11px] tracking-[0.1em] uppercase mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[48px] font-bold text-[#0a0a0a] leading-[1.1] tracking-[-0.03em]"
          >
            Parlons de votre projet.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[#737373] text-base leading-[1.7] mb-8"
          >
            Remplissez le formulaire et je vous recontacte sous 48h.
          </motion.p>

          <motion.form
            variants={stagger}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#d4d4d4] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.ch"
                  className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#d4d4d4] transition-colors"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                Forfait souhaité
              </label>
              <select className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#d4d4d4] transition-colors">
                <option value="">Sélectionner un forfait</option>
                <option value="essentiel">Essentiel — 900 CHF</option>
                <option value="standard">Standard — 1&apos;600 CHF</option>
                <option value="pro">Pro — 2&apos;800 CHF</option>
                <option value="custom">Sur mesure</option>
              </select>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Décrivez votre projet..."
                className="w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10 focus:border-[#d4d4d4] transition-colors resize-none"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="rounded-full bg-[#0a0a0a] text-white px-8 py-3 text-sm font-medium hover:bg-[#262626] transition-colors inline-flex items-center gap-2"
              >
                Envoyer <ArrowRight className="size-4" />
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="lg:pl-8"
        >
          <motion.div variants={fadeUp} className="space-y-8 mt-12 lg:mt-24">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "alito.theo@gmail.com",
                href: "mailto:alito.theo@gmail.com",
              },
              {
                icon: MapPin,
                label: "Localisation",
                value: "Chavornay, Vaud, Suisse",
                href: null,
              },
              {
                icon: Clock,
                label: "Disponibilité",
                value: "Lun–Ven, 9h–18h",
                href: null,
              },
            ].map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 size-10 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center text-[#737373]">
                  <info.icon className="size-5" />
                </div>
                <div>
                  <div className="text-sm text-[#a3a3a3]">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#0a0a0a] font-medium hover:text-[#262626] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-[#0a0a0a] font-medium">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-4"
          >
            {[
              { icon: Shield, text: "Données hébergées en Suisse" },
              { icon: Headphones, text: "Support réactif" },
              { icon: Code, text: "Code propre & maintenable" },
              { icon: BarChart3, text: "Analytics inclus" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#e5e5e5]"
              >
                <badge.icon className="size-4 text-[#0a0a0a] flex-shrink-0" />
                <span className="text-xs text-[#737373]">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── Footer ─────────────────── */

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                className="text-white"
              >
                <path
                  d="M14 2L2 26h8l4-8 4 8h8L14 2z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-white font-bold tracking-wide text-sm uppercase">
                Alito
              </span>
            </div>
            <p className="text-[#737373] text-sm leading-relaxed">
              Développeur web freelance basé à Chavornay, Suisse. Sites
              modernes et performants.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {["Services", "Forfaits", "À propos", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, "").replace("à", "a")}`}
                      className="text-[#737373] text-sm hover:text-white/80 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Sites Vitrines",
                "Optimisation SEO",
                "Performance Web",
                "Maintenance",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <span className="text-[#737373] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:alito.theo@gmail.com"
                  className="text-[#737373] text-sm hover:text-white/80 transition-colors"
                >
                  alito.theo@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#737373] text-sm">
                  Chavornay, Vaud, Suisse
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#737373] text-sm">
            © 2025 Alito — Théo Hunziker. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#737373] text-sm hover:text-white/80 transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-[#737373] text-sm hover:text-white/80 transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── Page ─────────────────── */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Forfaits />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
