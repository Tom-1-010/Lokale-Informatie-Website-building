import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { accommodations } from '@/lib/data/accommodations';
import PhotoStayCard from '@/components/home/PhotoStayCard';
import SearchPanel from '@/components/home/SearchPanel';
import NewsletterCard from '@/components/home/NewsletterCard';

const featuredSlugs = [
  'romantisch-boshuisje-drenthe',
  'tiny-house-veluwe',
  'boomhut-limburg',
  'wellness-huisje-zeeland',
];

const categoryChips = [
  { icon: '🛁', label: 'Met hottub', href: '/categorie/wellness' },
  { icon: '❤️', label: 'Romantisch', href: '/categorie/romantisch' },
  { icon: '🌲', label: 'In het bos', href: '/categorie/natuur' },
  { icon: '🌊', label: 'Aan het water', href: '/categorie/water' },
  { icon: '🏠', label: 'Tiny house', href: '/categorie/tiny-house' },
  { icon: '⛺', label: 'Glamping', href: '/categorie/glamping' },
];

export default function HomePage() {
  const featuredAccommodations = featuredSlugs
    .map((slug) => accommodations.find((acc) => acc.slug === slug))
    .filter((acc) => acc !== undefined);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-6">
      {/* Hero */}
      <section className="hero-panel">
        <div className="hero-panel-copy">
          <p className="hero-chip">
            <Sparkles width={15} height={15} strokeWidth={2.4} aria-hidden="true" />
            Jouw platform voor bijzondere overnachtingen
          </p>
          <h1>
            Bijzonder overnachten<br />begint <em>hier.</em>
          </h1>
          <p className="hero-sub">
            Ontdek de mooiste en meest unieke overnachtingen in Nederland.
            Weg van de massa, dichter bij elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/accommodaties" className="button button-accent">
              Bekijk bijzondere plekjes
              <ArrowRight width={17} height={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link href="/#inspiratie" className="button button-secondary">
              Laat je inspireren ✦
            </Link>
          </div>
          <span className="hero-deco-moon" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="58" height="58" fill="none">
              <path d="M40 8a23 23 0 1 0 15 40A25 25 0 0 1 40 8Z" fill="#FFB3D4" />
              <path d="M50 10l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6 1.6-4Z" fill="#FFC5DE" />
            </svg>
          </span>
        </div>
        <div className="hero-panel-photo">
          <Image
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200"
            alt="Sfeervol boshuisje in de avondschemering"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 54vw"
            className="object-cover"
          />
          <span className="hero-photo-badge">
            <Heart width={15} height={15} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
            Favoriet onder reizigers
          </span>
        </div>
      </section>

      {/* Search bar */}
      <section className="search-wrap" aria-label="Zoeken">
        <SearchPanel />
      </section>

      {/* Featured */}
      <section className="section pt-12 pb-4" id="uitgelicht">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <h2 className="featured-heading">Uitgelichte bijzondere overnachtingen ✦</h2>
          <Link className="see-all-link" href="/accommodaties">
            Bekijk alle plekjes
            <ArrowRight width={15} height={15} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
        <div className="photo-grid">
          {featuredAccommodations.map((accommodation) => (
            <PhotoStayCard key={accommodation.id} accommodation={accommodation} />
          ))}
        </div>
      </section>

      {/* Category chips */}
      <section className="section py-6" id="categorieen" aria-label="Categorieën">
        <div className="chip-row">
          {categoryChips.map((chip) => (
            <Link key={chip.label} href={chip.href} className="category-chip">
              <span aria-hidden="true">{chip.icon}</span>
              {chip.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Inspiratie + nieuwsbrief */}
      <section className="section grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] py-6 mb-12" id="inspiratie">
        <div className="inspiration-card">
          <div className="inspiration-visual" aria-hidden="true">
            <svg viewBox="0 0 420 340" fill="none" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <linearGradient id="inspSky" x1="0" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2D174D" />
                  <stop offset=".55" stopColor="#5A2CA0" />
                  <stop offset="1" stopColor="#9A6BD8" />
                </linearGradient>
                <linearGradient id="inspHill" x1="0" y1="230" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3A2255" />
                  <stop offset="1" stopColor="#2D174D" />
                </linearGradient>
              </defs>
              <rect width="420" height="340" fill="url(#inspSky)" />
              <g fill="#FFC5DE">
                <circle cx="52" cy="52" r="2.4" /><circle cx="120" cy="34" r="1.6" /><circle cx="188" cy="70" r="2" />
                <circle cx="252" cy="30" r="1.5" /><circle cx="86" cy="118" r="1.6" /><circle cx="382" cy="140" r="2" />
                <path d="M296 108l2.3 5.7 5.7 2.3-5.7 2.3-2.3 5.7-2.3-5.7-5.7-2.3 5.7-2.3 2.3-5.7Z" />
              </g>
              <path d="M330 42a40 40 0 1 0 24 70 46 46 0 0 1-24-70Z" fill="#FAF7FB" />
              <g fill="#F3EDFB" opacity=".26">
                <ellipse cx="90" cy="212" rx="72" ry="20" />
                <ellipse cx="330" cy="196" rx="66" ry="18" />
              </g>
              <path d="M0 268c70-30 140-44 210-38s140 30 210 18v92H0v-72Z" fill="url(#inspHill)" />
              <g>
                <path d="M150 236l58-44 58 44v66H150v-66Z" fill="#7D4CC6" />
                <path d="M138 242l70-54 70 54" stroke="#FAF7FB" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <rect x="192" y="262" width="32" height="40" rx="7" fill="#2D174D" />
                <rect x="238" y="258" width="24" height="22" rx="6" fill="#FFC5DE" opacity=".95" />
              </g>
            </svg>
          </div>
          <div className="inspiration-copy">
            <h2>Weekend weg, maar dan <em>bijzonder.</em></h2>
            <p>De mooiste plekjes in Nederland om even helemaal op te laden en te genieten.</p>
            <Link className="button button-secondary" href="/accommodaties">
              Ontdek inspiratie
              <ArrowRight width={16} height={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <NewsletterCard />
      </section>
    </div>
  );
}
