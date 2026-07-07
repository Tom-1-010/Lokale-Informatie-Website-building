import Link from 'next/link';
import { Search } from 'lucide-react';
import { accommodations } from '@/lib/data/accommodations';
import { categories } from '@/lib/data/categories';
import AccommodationCard from '@/components/accommodations/AccommodationCard';
import CategoryCard from '@/components/categories/CategoryCard';

export default function HomePage() {
  const featuredAccommodations = accommodations.slice(0, 4);

  return (
    <div className="w-full max-w-[1160px] mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] items-center gap-10 py-16 md:py-20">
        <div className="hero-copy">
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Bijzonder slapen in Nederland en daarbuiten
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Jouw bijzondere nachtje weg begint hier
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[560px] mb-8">
            Ontdek unieke overnachtingen in Nederland en daarbuiten. Van boshuisjes tot wellnesshuisjes en romantische tiny houses.
          </p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Link href="/accommodaties" className="button button-primary">
              Ontdek bijzondere plekken
            </Link>
            <Link href="/categorie" className="button button-secondary">
              Laat je inspireren
            </Link>
          </div>
          <ul className="hero-trust flex flex-wrap gap-2 md:gap-5 text-muted text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Handmatig geselecteerd
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Boeken via vertrouwde partners
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Gratis inspiratie
            </li>
          </ul>
        </div>
        <div className="hero-visual relative rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(90,44,160,0.14)] border border-white/60">
          <svg className="night-scene w-full h-auto" viewBox="0 0 420 340" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2D174D" />
                <stop offset=".55" stopColor="#5A2CA0" />
                <stop offset="1" stopColor="#9A6BD8" />
              </linearGradient>
              <linearGradient id="moonG" x1="300" y1="40" x2="340" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE3F0" />
                <stop offset="1" stopColor="#FF6FAF" />
              </linearGradient>
              <linearGradient id="hill" x1="0" y1="230" x2="0" y2="340" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3A2255" />
                <stop offset="1" stopColor="#2D174D" />
              </linearGradient>
            </defs>
            <rect width="420" height="340" fill="url(#sky)" />
            <g fill="#FFC5DE">
              <circle cx="52" cy="52" r="2.4" /><circle cx="120" cy="34" r="1.6" /><circle cx="188" cy="70" r="2" />
              <circle cx="252" cy="30" r="1.5" /><circle cx="86" cy="118" r="1.6" /><circle cx="382" cy="140" r="2" />
              <circle cx="150" cy="150" r="1.4" /><circle cx="230" cy="112" r="1.8" /><circle cx="30" cy="180" r="1.6" />
              <path d="M296 148l2.3 5.7 5.7 2.3-5.7 2.3-2.3 5.7-2.3-5.7-5.7-2.3 5.7-2.3 2.3-5.7Z" />
              <path d="M74 84l1.7 4.3 4.3 1.7-4.3 1.7-1.7 4.3-1.7-4.3-4.3-1.7 4.3-1.7 1.7-4.3Z" opacity=".85" />
            </g>
            <path d="M354 42a44 44 0 1 0 26 76 50 50 0 0 1-26-76Z" fill="url(#moonG)" />
            <g fill="#F3EDFB" opacity=".26">
              <ellipse cx="90" cy="212" rx="72" ry="20" />
              <ellipse cx="150" cy="224" rx="60" ry="16" />
              <ellipse cx="330" cy="196" rx="66" ry="18" />
            </g>
            <path d="M0 268c70-30 140-44 210-38s140 30 210 18v92H0v-72Z" fill="url(#hill)" />
            <g>
              <path d="M150 236l58-44 58 44v66H150v-66Z" fill="#7D4CC6" />
              <path d="M138 242l70-54 70 54" stroke="#FAF7FB" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="192" y="262" width="32" height="40" rx="7" fill="#2D174D" />
              <rect x="238" y="258" width="24" height="22" rx="6" fill="#FFC5DE" opacity=".95" />
            </g>
            <g fill="#F3EDFB" opacity=".2">
              <ellipse cx="60" cy="316" rx="90" ry="18" />
              <ellipse cx="360" cy="322" rx="100" ry="20" />
            </g>
          </svg>
          <div className="hero-visual-badge absolute left-4 bottom-4 p-3 rounded-[18px] bg-[rgba(250,247,251,0.92)] backdrop-blur-[12px] shadow-[0_14px_40px_rgba(90,44,160,0.1)]">
            <strong className="block text-sm font-bold">Boshuisje met hottub</strong>
            <span className="text-muted text-xs">Veluwe · vanaf €129 / nacht</span>
          </div>
        </div>
      </section>

      {/* Search Panel */}
      <section className="search-panel rounded-[24px] p-6 mb-5 bg-surface border border-line shadow-[0_14px_40px_rgba(90,44,160,0.1)]">
        <label htmlFor="staySearch" className="block mb-3 font-bold text-lg">Waar wil je wakker worden?</label>
        <div className="search-row relative flex flex-wrap gap-3 items-center">
          <span className="search-icon absolute left-[18px] top-1/2 -translate-y-1/2 text-muted pointer-events-none">
            <Search width={20} height={20} strokeWidth={2.2} strokeLinecap="round" />
          </span>
          <input 
            id="staySearch" 
            type="search" 
            placeholder="Zoek op plek, regio of sfeer — bijv. hottub, Veluwe, romantisch" 
            autoComplete="off"
            className="flex-1 min-w-[260px] min-h-[52px] border border-line rounded-full px-5 py-3 pl-12 text-ink bg-background outline-none focus:border-primary focus:shadow-[0_0_0_5px_rgba(125,76,198,0.14)] transition-all placeholder:text-[#9c8db0]"
          />
          <button className="button button-dark" type="button">Reset</button>
        </div>
        <p className="search-hint mt-2.5 min-h-[1.2em] text-muted text-sm"></p>
      </section>

      {/* Categories Section */}
      <section className="section py-12" id="categorieen">
        <div className="section-heading max-w-[720px] mb-7">
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Kies je sfeer
          </p>
          <h2>Bijzondere categorieën</h2>
          <p className="text-muted text-lg">
            Van verscholen boshuisjes tot spiegelhuisjes die opgaan in het landschap. Kies een categorie en filter direct het aanbod.
          </p>
        </div>
        <div className="category-grid grid grid-cols-4 gap-3.5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="section py-12" id="uitgelicht">
        <div className="section-heading max-w-[720px] mb-7">
          <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
            ✦ Uitgelicht
          </p>
          <h2>Bijzondere overnachtingen</h2>
          <p className="text-muted text-lg">
            Handmatig geselecteerde plekken met een duidelijke wow-factor. Je boekt via onze partners; wij helpen je alleen dromen én vinden.
          </p>
        </div>
        <div className="stay-grid grid grid-cols-4 gap-4">
          {featuredAccommodations.map((accommodation) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter my-12 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2D174D] via-[#5A2CA0] to-[#7D4CC6] text-white shadow-[0_24px_70px_rgba(90,44,160,0.14)] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.5)_0_0.8%,transparent_1.2%),radial-gradient(circle_at_88%_24%,rgba(255,197,222,0.6)_0_1%,transparent_1.5%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.35)_0_0.7%,transparent_1.1%),radial-gradient(circle_at_30%_80%,rgba(255,197,222,0.4)_0_0.9%,transparent_1.3%)]"></div>
        <div className="newsletter-inner relative max-w-[560px] mx-auto px-6 py-12 md:py-16 text-center">
          <div className="newsletter-moon w-16 h-16 grid place-items-center mx-auto mb-5 rounded-[22px] bg-white/12 backdrop-blur-[8px]">
            <svg viewBox="0 0 48 48" width={34} height={34} fill="none">
              <path d="M31 6a17 17 0 1 0 11 30A19 19 0 0 1 31 6Z" fill="#FAF7FB" />
              <path d="M37 9l1.3 3.2 3.2 1.3-3.2 1.3-1.3 3.2-1.3-3.2-3.2-1.3 3.2-1.3L37 9Z" fill="#FFC5DE" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Droom weg met inspiratie</h2>
          <p className="text-white/82 text-base max-w-[440px] mx-auto mb-6">
            Ontvang de mooiste bijzondere plekken en tips voor een weekendje weg direct in je mailbox. Geen spam, alleen dromen.
          </p>
          <form className="newsletter-form flex flex-wrap gap-2.5 justify-center">
            <label className="visually-hidden" htmlFor="newsletterEmail">E-mailadres</label>
            <input 
              id="newsletterEmail" 
              type="email" 
              name="email" 
              placeholder="jouw e-mailadres" 
              autoComplete="email" 
              required
              className="flex-1 min-w-[240px] min-h-[52px] border border-white/30 rounded-full px-5 text-ink bg-[rgba(250,247,251,0.96)] outline-none focus:border-[#FFC5DE] focus:shadow-[0_0_0_5px_rgba(255,197,222,0.25)]"
            />
            <button className="button button-accent" type="submit">Aanmelden</button>
          </form>
          <p className="newsletter-msg min-h-[1.3em] mt-4 font-bold text-[#FFC5DE]"></p>
        </div>
      </section>
    </div>
  );
}
