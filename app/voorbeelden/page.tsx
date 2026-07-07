import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, ArrowRight, MapPin } from 'lucide-react';
import { categories } from '@/lib/data/categories';
import { accommodations } from '@/lib/data/accommodations';

export const metadata: Metadata = {
  title: 'Voorbeeldpagina\'s — BijzonderNachtje (tijdelijk)',
  description: 'Tijdelijk overzicht van alle pagina\'s op de site, handig tijdens de ontwikkeling.',
  robots: { index: false, follow: false },
};

const mainPages = [
  { href: '/', title: 'Homepagina', description: 'Hero, zoekbalk, categorieën, uitgelichte plekken en nieuwsbrief.' },
  { href: '/accommodaties', title: 'Alle accommodaties', description: 'Overzicht van alle plekken met filters op categorie en provincie.' },
  { href: '/contact', title: 'Contact', description: 'Contactopties, formulier, FAQ en samenwerken.' },
  { href: '/voorbeelden', title: 'Voorbeelden (deze pagina)', description: 'Tijdelijk overzicht van alle pagina\'s tijdens de bouw.' },
];

export default function ExamplesPage() {
  return (
    <div className="w-full max-w-[1160px] mx-auto px-4 md:px-0">
      <section className="py-14 md:py-16">
        <p className="eyebrow text-accent text-sm font-bold uppercase tracking-widest mb-4">
          ✦ Tijdelijke pagina
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          Alle voorbeeldpagina&apos;s op een rij
        </h1>
        <p className="text-lg text-muted max-w-[640px] mb-6">
          Handig overzicht tijdens de bouw van de site: elke pagina die nu
          bestaat, met één klik te openen.
        </p>
        <div className="flex items-start gap-3 max-w-[640px] px-4 py-3 rounded-[18px] bg-soft border border-line">
          <Info className="text-primary flex-none mt-0.5" width={20} height={20} strokeWidth={2.2} />
          <p className="text-sm text-ink font-medium">
            Deze pagina is tijdelijk en bedoeld voor ontwikkeling. Hij staat niet
            in de navigatie en wordt niet geïndexeerd door zoekmachines. Weghalen
            kan later door de map <code>app/voorbeelden</code> te verwijderen.
          </p>
        </div>
      </section>

      <section className="section pb-12">
        <div className="section-heading max-w-[720px] mb-7">
          <h2>Hoofdpagina&apos;s</h2>
          <p className="text-muted text-lg">De vaste pagina&apos;s van de site.</p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {mainPages.map((page) => (
            <Link key={page.href} href={page.href} className="contact-option-card">
              <strong className="text-base">{page.title}</strong>
              <small className="text-muted text-sm leading-relaxed flex-1">{page.description}</small>
              <span className="contact-option-link">
                {page.href}
                <ArrowRight width={14} height={14} strokeWidth={2.4} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section py-12">
        <div className="section-heading max-w-[720px] mb-7">
          <h2>Categoriepagina&apos;s</h2>
          <p className="text-muted text-lg">
            {categories.length} categorieën, elk met een eigen pagina op <code>/categorie/…</code>
          </p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categorie/${category.slug}`} className="contact-option-card">
              <span className="category-icon text-xl" aria-hidden="true">{category.icon}</span>
              <strong className="text-base">{category.name}</strong>
              <small className="text-muted text-sm leading-relaxed flex-1">{category.description}</small>
              <span className="contact-option-link">
                /categorie/{category.slug}
                <ArrowRight width={14} height={14} strokeWidth={2.4} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section py-12 pb-16">
        <div className="section-heading max-w-[720px] mb-7">
          <h2>Accommodatiepagina&apos;s</h2>
          <p className="text-muted text-lg">
            {accommodations.length} voorbeeldplekken, elk met een detailpagina op <code>/accommodaties/…</code>
          </p>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((accommodation) => (
            <Link
              key={accommodation.slug}
              href={`/accommodaties/${accommodation.slug}`}
              className="contact-option-card"
            >
              <strong className="text-base">{accommodation.title}</strong>
              <small className="text-muted text-sm leading-relaxed inline-flex items-center gap-1.5">
                <MapPin width={14} height={14} strokeWidth={2.2} className="text-accent flex-none" />
                {accommodation.province} · vanaf €{accommodation.price.from} / nacht
              </small>
              <span className="contact-option-link">
                /accommodaties/{accommodation.slug}
                <ArrowRight width={14} height={14} strokeWidth={2.4} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
