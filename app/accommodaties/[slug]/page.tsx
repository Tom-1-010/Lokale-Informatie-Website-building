import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Check,
  Heart,
  Share2,
  Calendar,
  ShieldCheck,
  BadgeCheck,
  Users,
  Wifi,
  Trees,
  Flame,
  PawPrint,
  Sparkles,
  ArrowRight,
  Footprints,
  Quote,
} from 'lucide-react';
import { accommodations, getAccommodationBySlug } from '@/lib/data/accommodations';
import { getCategoryBySlug } from '@/lib/data/categories';
import { regions } from '@/lib/data/provinces';
import PhotoGallery, { GalleryImage } from '@/components/accommodations/PhotoGallery';

export function generateStaticParams() {
  return accommodations.map((accommodation) => ({ slug: accommodation.slug }));
}

interface AccommodationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AccommodationPageProps) {
  const { slug } = await params;
  const accommodation = getAccommodationBySlug(slug);

  if (!accommodation) {
    return {
      title: 'Niet gevonden — BijzonderNachtje',
    };
  }

  return {
    title: `${accommodation.title} — BijzonderNachtje`,
    description: accommodation.description,
  };
}

// Placeholder-interieurfoto's zolang accommodaties één eigen foto hebben
const galleryExtras: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800', label: 'Woonkamer' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800', label: 'Slaapkamer' },
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800', label: 'Open haard' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', label: 'Omgeving' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800', label: 'Gastfoto' },
];

const hosts = [
  { names: 'Mark & Lise', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
  { names: 'Anne & Joris', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
  { names: 'Eva & Daan', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
  { names: 'Sanne & Pieter', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
];

const highlightIcons = [Sparkles, Flame, Trees];

export default async function AccommodationPage({ params }: AccommodationPageProps) {
  const { slug } = await params;
  const accommodation = getAccommodationBySlug(slug);

  if (!accommodation) {
    notFound();
  }

  const category = getCategoryBySlug(accommodation.category);
  const region = regions.find((r) => r.slug === accommodation.region);

  // Deterministische placeholder-cijfers per accommodatie tot er echte reviews zijn
  const seed = Number(accommodation.id) || 1;
  const rating = (4.7 + (seed % 3) * 0.1).toFixed(1).replace('.', ',');
  const reviewCount = 80 + ((seed * 37) % 220);
  const recommendPct = 94 + (seed % 6);
  const host = hosts[seed % hosts.length];

  const galleryImages: GalleryImage[] = [
    { src: accommodation.images[0], label: 'Huisje' },
    ...galleryExtras,
  ];

  const locationLine = [region?.name, accommodation.province, 'Nederland']
    .filter(Boolean)
    .join(', ');

  const amenities = [
    { icon: Sparkles, title: accommodation.features[0], sub: 'Inbegrepen' },
    { icon: Users, title: '2 personen', sub: 'Max. capaciteit' },
    { icon: Wifi, title: 'Gratis wifi', sub: 'Snel & stabiel' },
    { icon: Trees, title: category?.name ?? 'Bijzonder', sub: 'Volledig privé' },
    { icon: Flame, title: accommodation.features[1] ?? 'Sfeervol', sub: 'Gezellig & warm' },
    { icon: PawPrint, title: 'Huisdieren', sub: 'Van harte welkom' },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 pb-16">
      {/* Breadcrumb + acties */}
      <div className="detail-topbar">
        <nav className="breadcrumb" aria-label="Kruimelpad">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/accommodaties">{accommodation.province}</Link>
          {region && (
            <>
              <span aria-hidden="true">›</span>
              <Link href="/accommodaties">{region.name}</Link>
            </>
          )}
          <span aria-hidden="true">›</span>
          <span className="breadcrumb-current">{accommodation.title}</span>
        </nav>
        <div className="detail-actions">
          <button type="button" className="detail-action">
            <Heart width={16} height={16} strokeWidth={2.2} aria-hidden="true" />
            Opslaan
          </button>
          <button type="button" className="detail-action">
            <Share2 width={16} height={16} strokeWidth={2.2} aria-hidden="true" />
            Delen
          </button>
        </div>
      </div>

      {/* Galerij + boekingspaneel */}
      <div className="detail-layout">
        <div className="detail-main">
          <PhotoGallery images={galleryImages} title={accommodation.title} />

          {/* Voorzieningen */}
          <div className="amenity-bar">
            {amenities.map((amenity) => (
              <div key={amenity.title + amenity.sub} className="amenity-item">
                <amenity.icon width={22} height={22} strokeWidth={2} aria-hidden="true" />
                <div>
                  <strong>{amenity.title}</strong>
                  <span>{amenity.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="detail-side">
          <span className="detail-chip">
            <Star width={13} height={13} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
            Topfavoriet
          </span>
          <h1>{accommodation.title}</h1>
          <p className="detail-location">
            <MapPin width={16} height={16} strokeWidth={2.4} aria-hidden="true" />
            {locationLine}
          </p>
          <div className="detail-rating">
            <span className="detail-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={17} height={17} strokeWidth={0} fill="currentColor" />
              ))}
            </span>
            <strong>{rating}</strong>
            <span className="text-muted">· {reviewCount} beoordelingen</span>
            <span className="detail-recommend">
              <BadgeCheck width={16} height={16} strokeWidth={2.2} aria-hidden="true" />
              {recommendPct}% zou dit plekje aanbevelen
            </span>
          </div>

          <div className="why-card">
            <strong className="why-card-title">Waarom gasten dit boeken</strong>
            <div className="why-card-grid">
              {accommodation.features.slice(0, 3).map((feature, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <div key={feature} className="why-card-item">
                    <Icon width={24} height={24} strokeWidth={1.8} aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="detail-price">
            vanaf <strong>€{accommodation.price.from}</strong> <span>/ nacht</span>
          </p>

          <a className="button button-accent detail-cta" href={accommodation.affiliateUrl}>
            <Calendar width={19} height={19} strokeWidth={2.2} aria-hidden="true" />
            Bekijk beschikbaarheid
          </a>

          <ul className="detail-checks">
            <li>
              <Check width={15} height={15} strokeWidth={2.8} aria-hidden="true" />
              Je gaat door naar de aanbieder
            </li>
            <li>
              <Check width={15} height={15} strokeWidth={2.8} aria-hidden="true" />
              Geen extra kosten via BijzonderNachtje
            </li>
          </ul>

          <div className="trust-bar">
            <div className="trust-item">
              <ShieldCheck width={20} height={20} strokeWidth={2} aria-hidden="true" />
              <span>Geverifieerde reviews</span>
            </div>
            <div className="trust-item">
              <BadgeCheck width={20} height={20} strokeWidth={2} aria-hidden="true" />
              <span>Veilig boeken bij partner</span>
            </div>
            <div className="trust-item">
              <Calendar width={20} height={20} strokeWidth={2} aria-hidden="true" />
              <span>Directe beschikbaarheid</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Beschrijving */}
      <section className="detail-card mt-5">
        <h2 className="detail-card-title">Over dit plekje</h2>
        <p className="text-muted leading-relaxed max-w-[820px]">{accommodation.description}</p>
      </section>

      {/* Reviews / locatie / host */}
      <div className="detail-bottom-grid mt-5">
        <section className="detail-card">
          <h2 className="detail-card-title">Gasten beoordelen dit plekje met</h2>
          <div className="review-score">
            <strong>{rating}</strong>
            <span className="detail-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={18} height={18} strokeWidth={0} fill="currentColor" />
              ))}
            </span>
            <span className="text-muted text-sm">{reviewCount} beoordelingen</span>
          </div>
          <div className="review-grid">
            <div className="review-quote">
              <Quote width={18} height={18} strokeWidth={2.2} aria-hidden="true" />
              <p>
                Wat een magisch plekje! Alles was tot in de puntjes verzorgd en het
                huisje is super sfeervol en schoon. Perfect voor een weekend weg.
              </p>
              <footer>Sanne &amp; Tom · mei {new Date().getFullYear()}</footer>
            </div>
            <div className="review-quote review-reply">
              <strong className="review-reply-title">
                Reactie van de host
                <Heart width={13} height={13} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
              </strong>
              <p>
                Dankjewel voor jullie mooie review! Fijn om te horen dat jullie
                hebben genoten. Jullie zijn altijd weer welkom. 🌿
              </p>
            </div>
          </div>
        </section>

        <section className="detail-card">
          <h2 className="detail-card-title">Locatie &amp; omgeving</h2>
          <div className="location-grid">
            <div>
              <ul className="location-list">
                <li>
                  <Footprints width={17} height={17} strokeWidth={2.2} aria-hidden="true" />
                  5 min van wandelroutes
                </li>
                <li>
                  <MapPin width={17} height={17} strokeWidth={2.2} aria-hidden="true" />
                  Dicht bij {region?.name ?? `de mooiste plekken van ${accommodation.province}`}
                </li>
                <li>
                  <Trees width={17} height={17} strokeWidth={2.2} aria-hidden="true" />
                  Rustige natuuromgeving
                </li>
              </ul>
              <span className="location-link">
                Bekijk op kaart
                <ArrowRight width={15} height={15} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </div>
            <div className="location-map" aria-hidden="true">
              <svg viewBox="0 0 200 180" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                <rect width="200" height="180" fill="#E7F2E4" />
                <path d="M0 40C40 30 70 55 110 48s60-22 90-14" stroke="#fff" strokeWidth="7" fill="none" />
                <path d="M30 180C42 130 60 96 96 78s72-20 104-10" stroke="#fff" strokeWidth="5" fill="none" />
                <path d="M0 120c30 8 52 26 62 60" stroke="#fff" strokeWidth="4" fill="none" />
                <ellipse cx="160" cy="140" rx="34" ry="20" fill="#BFE3F2" />
                <circle cx="48" cy="52" r="10" fill="#CDE8C6" />
                <circle cx="70" cy="40" r="7" fill="#CDE8C6" />
                <path d="M100 96a14 14 0 0 1 28 0c0 10-14 24-14 24s-14-14-14-24Z" fill="#FF6FAF" />
                <circle cx="114" cy="95" r="5" fill="#fff" />
              </svg>
            </div>
          </div>
        </section>

        <section className="detail-card">
          <h2 className="detail-card-title">Over de host</h2>
          <div className="host-intro">
            <span className="host-avatar">
              <Image src={host.avatar} alt={`Host ${host.names}`} fill sizes="64px" className="object-cover" />
              <span className="host-avatar-check" aria-hidden="true">
                <Check width={11} height={11} strokeWidth={3.2} />
              </span>
            </span>
            <p>
              Wij zijn {host.names} en delen met liefde ons fijne plekje.
              We heten je van harte welkom!
            </p>
          </div>
          <Link className="host-link" href="/contact">
            Meer over de host
            <ArrowRight width={15} height={15} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <div className="host-badges">
            <span className="host-badge-icon" aria-hidden="true">
              <BadgeCheck width={15} height={15} strokeWidth={2.4} />
            </span>
            Superhost · Snelle reacties · Persoonlijke service
          </div>
        </section>
      </div>
    </div>
  );
}
