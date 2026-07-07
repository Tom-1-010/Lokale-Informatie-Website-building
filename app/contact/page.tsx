import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Lightbulb,
  Handshake,
  Newspaper,
  Clock,
  Instagram,
  MessageCircle,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import ContactFaq from '@/components/contact/ContactFaq';

export const metadata: Metadata = {
  title: 'Contact — BijzonderNachtje',
  description:
    'Vragen, tips voor bijzondere plekken, samenwerkingen of pers? Neem contact op met BijzonderNachtje. We reageren meestal binnen twee werkdagen.',
};

const contactOptions = [
  {
    icon: Mail,
    title: 'Algemene vragen',
    description: 'Vragen over de site, een plek of je droomweekend? Mail ons gerust.',
    linkLabel: 'hallo@bijzondernachtje.nl',
    href: 'mailto:hallo@bijzondernachtje.nl',
  },
  {
    icon: Lightbulb,
    title: 'Tip een plek',
    description: 'Een bijzondere overnachting gespot die op de site hoort? We horen het graag.',
    linkLabel: 'tips@bijzondernachtje.nl',
    href: 'mailto:tips@bijzondernachtje.nl',
  },
  {
    icon: Handshake,
    title: 'Samenwerken',
    description: 'Verhuur je zelf iets bijzonders of wil je adverteren? Laten we kennismaken.',
    linkLabel: 'partners@bijzondernachtje.nl',
    href: 'mailto:partners@bijzondernachtje.nl',
  },
  {
    icon: Newspaper,
    title: 'Pers & media',
    description: 'Beeldmateriaal, cijfers of een interview nodig voor een publicatie?',
    linkLabel: 'pers@bijzondernachtje.nl',
    href: 'mailto:pers@bijzondernachtje.nl',
  },
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1160px] mx-auto px-4 md:px-0">
      {/* Hero */}
      <section className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] items-center gap-10 py-14 md:py-20">
        <div>
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We horen graag van je
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[560px] mb-8">
            Een vraag, een gouden tip voor een bijzondere plek of zin om samen te
            werken? Stuur ons een berichtje — we lezen alles persoonlijk.
          </p>
          <ul className="flex flex-wrap gap-2 md:gap-5 text-muted text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Reactie binnen 2 werkdagen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Persoonlijk antwoord, geen bots
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Tips zijn altijd welkom
            </li>
          </ul>
        </div>
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(90,44,160,0.14)] border border-white/60">
          <svg className="w-full h-auto" viewBox="0 0 420 340" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="contactSky" x1="0" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D174D" />
                <stop offset=".55" stopColor="#5A2CA0" />
                <stop offset="1" stopColor="#9A6BD8" />
              </linearGradient>
              <linearGradient id="contactMoon" x1="310" y1="36" x2="352" y2="108" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE3F0" />
                <stop offset="1" stopColor="#FF6FAF" />
              </linearGradient>
              <linearGradient id="contactHill" x1="0" y1="230" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3A2255" />
                <stop offset="1" stopColor="#2D174D" />
              </linearGradient>
              <linearGradient id="contactEnvelope" x1="150" y1="190" x2="270" y2="290" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FAF7FB" />
                <stop offset="1" stopColor="#F3EDFB" />
              </linearGradient>
            </defs>
            <rect width="420" height="340" fill="url(#contactSky)" />
            <g fill="#FFC5DE">
              <circle cx="48" cy="58" r="2.2" /><circle cx="126" cy="36" r="1.6" /><circle cx="196" cy="78" r="2" />
              <circle cx="262" cy="34" r="1.5" /><circle cx="82" cy="126" r="1.6" /><circle cx="378" cy="150" r="2" />
              <circle cx="152" cy="146" r="1.4" /><circle cx="236" cy="118" r="1.8" /><circle cx="34" cy="188" r="1.6" />
              <path d="M300 140l2.3 5.7 5.7 2.3-5.7 2.3-2.3 5.7-2.3-5.7-5.7-2.3 5.7-2.3 2.3-5.7Z" />
              <path d="M78 86l1.7 4.3 4.3 1.7-4.3 1.7-1.7 4.3-1.7-4.3-4.3-1.7 4.3-1.7 1.7-4.3Z" opacity=".85" />
            </g>
            <path d="M358 40a44 44 0 1 0 26 76 50 50 0 0 1-26-76Z" fill="url(#contactMoon)" />
            <g fill="#F3EDFB" opacity=".26">
              <ellipse cx="92" cy="206" rx="70" ry="18" />
              <ellipse cx="330" cy="192" rx="64" ry="16" />
            </g>
            <path d="M0 272c72-30 142-42 212-36s138 28 208 16v88H0v-68Z" fill="url(#contactHill)" />
            {/* Envelope floating like a paper plane of dreams */}
            <g>
              <rect x="150" y="196" width="124" height="88" rx="14" fill="url(#contactEnvelope)" />
              <path d="M154 208l58 44 58-44" stroke="#7D4CC6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="272" cy="198" r="16" fill="#FF6FAF" />
              <path d="M272 191.5l1.9 4.6 4.6 1.9-4.6 1.9-1.9 4.6-1.9-4.6-4.6-1.9 4.6-1.9 1.9-4.6Z" fill="#FFE3F0" />
            </g>
            {/* Dotted flight path */}
            <path d="M60 250c30-34 60-52 90-54" stroke="#FFC5DE" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" fill="none" opacity=".8" />
            <g fill="#F3EDFB" opacity=".2">
              <ellipse cx="64" cy="318" rx="88" ry="18" />
              <ellipse cx="356" cy="324" rx="98" ry="20" />
            </g>
          </svg>
          <div className="absolute left-4 bottom-4 p-3 rounded-[18px] bg-[rgba(250,247,251,0.92)] backdrop-blur-[12px] shadow-[0_14px_40px_rgba(90,44,160,0.1)]">
            <strong className="block text-sm font-bold">Post voor het dromenteam</strong>
            <span className="text-muted text-xs">Beantwoord binnen 2 werkdagen 🌙</span>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section pb-12" id="contactopties">
        <div className="section-heading max-w-[720px] mb-7">
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Kies je route
          </p>
          <h2>Waarmee kunnen we je helpen?</h2>
          <p className="text-muted text-lg">
            Kies het onderwerp dat past, dan komt je bericht meteen bij de juiste
            persoon terecht. Twijfel je? Het formulier hieronder werkt altijd.
          </p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map((option) => (
            <a key={option.title} href={option.href} className="contact-option-card">
              <span className="category-icon" aria-hidden="true">
                <option.icon width={22} height={22} strokeWidth={2} />
              </span>
              <strong className="text-base">{option.title}</strong>
              <small className="text-muted text-sm leading-relaxed flex-1">{option.description}</small>
              <span className="contact-option-link">
                {option.linkLabel}
                <ArrowRight width={14} height={14} strokeWidth={2.4} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section py-12" id="contactformulier">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.7fr)] items-start">
          <div>
            <div className="section-heading max-w-[720px] mb-7">
              <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
                ✦ Stuur een bericht
              </p>
              <h2>Het contactformulier</h2>
              <p className="text-muted text-lg">
                Vul je gegevens in en vertel waar je aan denkt. Hoe concreter je
                bericht, hoe sneller we je kunnen helpen.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="grid gap-4 lg:sticky lg:top-24">
            <div className="contact-info-card">
              <span className="category-icon" aria-hidden="true">
                <Clock width={22} height={22} strokeWidth={2} />
              </span>
              <strong>Reactietijd</strong>
              <p>
                Meestal binnen <strong className="text-ink">2 werkdagen</strong>.
                We zijn een klein team van dromers, dus in het weekend slapen we
                zelf ook graag ergens bijzonders.
              </p>
            </div>
            <div className="contact-info-card">
              <span className="category-icon" aria-hidden="true">
                <MessageCircle width={22} height={22} strokeWidth={2} />
              </span>
              <strong>Volg ons</strong>
              <p>
                De nieuwste plekken en acties zie je het eerst op onze socials.
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <a
                  className="contact-social-chip"
                  href="https://www.instagram.com/bijzondernachtje"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram width={16} height={16} strokeWidth={2.2} />
                  Instagram
                </a>
                <a
                  className="contact-social-chip"
                  href="https://www.pinterest.com/bijzondernachtje"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle width={16} height={16} strokeWidth={2.2} />
                  Pinterest
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <span className="category-icon" aria-hidden="true">
                <ShieldCheck width={22} height={22} strokeWidth={2} />
              </span>
              <strong>Goed om te weten</strong>
              <p>
                Boekingen lopen altijd via onze partners of de accommodatie zelf.
                Voor vragen over een lopende boeking kun je het beste direct bij
                hen terecht — wij hebben geen inzage in reserveringen.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section py-12" id="veelgestelde-vragen">
        <div className="section-heading max-w-[720px] mb-7">
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Veelgestelde vragen
          </p>
          <h2>Misschien staat je antwoord hier al</h2>
          <p className="text-muted text-lg">
            De vragen die we het vaakst in onze mailbox vinden, alvast voor je
            beantwoord. Staat jouw vraag er niet tussen? Het formulier staat voor je klaar.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.7fr)] items-start">
          <ContactFaq />
          <div className="contact-info-card">
            <span className="category-icon" aria-hidden="true">
              <HelpCircle width={22} height={22} strokeWidth={2} />
            </span>
            <strong>Nog steeds een vraagteken?</strong>
            <p>
              Geen probleem. Stel je vraag via het formulier en we zoeken het
              persoonlijk voor je uit.
            </p>
            <a className="button button-secondary mt-2" href="#contactformulier">
              Naar het formulier
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="my-12 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2D174D] via-[#5A2CA0] to-[#7D4CC6] text-white shadow-[0_24px_70px_rgba(90,44,160,0.14)] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.5)_0_0.8%,transparent_1.2%),radial-gradient(circle_at_88%_24%,rgba(255,197,222,0.6)_0_1%,transparent_1.5%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.35)_0_0.7%,transparent_1.1%),radial-gradient(circle_at_30%_80%,rgba(255,197,222,0.4)_0_0.9%,transparent_1.3%)]"></div>
        <div className="relative max-w-[560px] mx-auto px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Liever meteen wegdromen?</h2>
          <p className="text-white/80 text-base max-w-[440px] mx-auto mb-6">
            Je hoeft ons natuurlijk niets te vragen om alvast je volgende
            bijzondere nachtje te vinden.
          </p>
          <Link href="/accommodaties" className="button button-accent">
            Ontdek bijzondere plekken
            <ArrowRight width={18} height={18} strokeWidth={2.4} />
          </Link>
        </div>
      </section>
    </div>
  );
}
