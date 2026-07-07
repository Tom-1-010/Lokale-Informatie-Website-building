import { notFound } from 'next/navigation';
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
  Sparkles,
  ArrowRight,
  Footprints,
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

const galleryExtras: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900', label: 'Interieur' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900', label: 'Slaapkamer' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900', label: 'Omgeving' },
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

  const seed = Number(accommodation.id) || 1;
  const rating = (4.7 + (seed % 3) * 0.1).toFixed(1).replace('.', ',');
  const reviewCount = 80 + ((seed * 37) % 220);

  const galleryImages: GalleryImage[] = [
    { src: accommodation.images[0], label: 'Vooraanzicht' },
    ...galleryExtras,
  ];

  const locationLine = [region?.name, accommodation.province, 'Nederland']
    .filter(Boolean)
    .join(', ');

  const highlights = accommodation.features.slice(0, 3);
  const essentials = [
    { icon: Users, label: '2 personen' },
    { icon: Trees, label: category?.name ?? 'Bijzonder verblijf' },
    { icon: Wifi, label: 'Wifi aanwezig' },
    { icon: Flame, label: accommodation.features[1] ?? 'Sfeervol verblijf' },
  ];

  return (
    <div className="mx-auto w-full max-w-[1160px] px-4 pb-16 lg:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3 py-5">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-[#5F5570]" aria-label="Kruimelpad">
          <Link className="font-medium transition hover:text-[#4C1D95]" href="/">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <Link className="font-medium transition hover:text-[#4C1D95]" href="/accommodaties">
            Accommodaties
          </Link>
          <span aria-hidden="true">›</span>
          <span className="font-bold text-[#1C1230]">{accommodation.title}</span>
        </nav>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#E7DFF2] bg-white px-3.5 py-2 text-sm font-bold text-[#1C1230] transition hover:border-[#A78BFA]"
          >
            <Heart width={16} height={16} strokeWidth={2.2} aria-hidden="true" />
            Opslaan
          </button>
          <button
            type="button"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#E7DFF2] bg-white px-3.5 py-2 text-sm font-bold text-[#1C1230] transition hover:border-[#A78BFA]"
          >
            <Share2 width={16} height={16} strokeWidth={2.2} aria-hidden="true" />
            Delen
          </button>
        </div>
      </div>

      <header className="mb-6 max-w-[780px]">
        <span className="mb-3 inline-flex rounded-full bg-[#F7F2EA] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#4C1D95]">
          {category?.name ?? 'Bijzonder verblijf'}
        </span>
        <h1 className="text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#1C1230]">
          {accommodation.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#5F5570]">
          <span className="inline-flex items-center gap-2 font-semibold text-[#4C1D95]">
            <MapPin width={16} height={16} strokeWidth={2.4} aria-hidden="true" />
            {locationLine}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star width={16} height={16} strokeWidth={0} fill="#F59E0B" aria-hidden="true" />
            <strong className="text-[#1C1230]">{rating}</strong>
            <span>· {reviewCount} beoordelingen</span>
          </span>
        </div>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <main className="min-w-0 space-y-5">
          <PhotoGallery images={galleryImages} title={accommodation.title} />

          <section className="rounded-[28px] border border-[#E7DFF2] bg-white/95 p-6 shadow-[0_16px_40px_rgba(76,29,149,0.08)]">
            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1C1230]">Rustig bijzonder overnachten</h2>
            <p className="max-w-[780px] text-base leading-relaxed text-[#5F5570]">{accommodation.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {essentials.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-[18px] bg-[#FFFDF8] px-4 py-3">
                  <item.icon width={19} height={19} strokeWidth={2.1} aria-hidden="true" className="text-[#6D28D9]" />
                  <span className="text-sm font-bold text-[#1C1230]">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-[26px] border border-[#E7DFF2] bg-white/95 p-6 shadow-[0_14px_34px_rgba(76,29,149,0.07)]">
              <h2 className="mb-4 text-xl font-extrabold tracking-tight text-[#1C1230]">Waarom dit verblijf opvalt</h2>
              <ul className="space-y-3">
                {highlights.map((feature, index) => {
                  const Icon = highlightIcons[index % highlightIcons.length];
                  return (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-[#5F5570]">
                      <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-[#F7F2EA] text-[#6D28D9]">
                        <Icon width={17} height={17} strokeWidth={2.1} aria-hidden="true" />
                      </span>
                      <span>
                        <strong className="block text-[#1C1230]">{feature}</strong>
                        Past bij een rustig nachtje weg zonder overbodige drukte.
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="rounded-[26px] border border-[#E7DFF2] bg-white/95 p-6 shadow-[0_14px_34px_rgba(76,29,149,0.07)]">
              <h2 className="mb-4 text-xl font-extrabold tracking-tight text-[#1C1230]">Locatie & omgeving</h2>
              <ul className="space-y-3 text-sm font-medium text-[#5F5570]">
                <li className="flex items-center gap-2.5">
                  <Footprints width={17} height={17} strokeWidth={2.2} aria-hidden="true" className="text-[#1F6B3A]" />
                  5 min van wandelroutes
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin width={17} height={17} strokeWidth={2.2} aria-hidden="true" className="text-[#1F6B3A]" />
                  Dicht bij {region?.name ?? `mooie plekken in ${accommodation.province}`}
                </li>
                <li className="flex items-center gap-2.5">
                  <Trees width={17} height={17} strokeWidth={2.2} aria-hidden="true" className="text-[#1F6B3A]" />
                  Rustige natuuromgeving
                </li>
              </ul>
              <Link className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#4C1D95]" href="/accommodaties">
                Bekijk vergelijkbare plekjes
                <ArrowRight width={15} height={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </section>
          </div>

          <section className="rounded-[26px] border border-[#E7DFF2] bg-white/95 p-6 shadow-[0_14px_34px_rgba(76,29,149,0.07)]">
            <div className="flex flex-wrap items-center gap-3">
              <strong className="text-4xl font-extrabold tracking-tight text-[#1C1230]">{rating}</strong>
              <span className="inline-flex text-[#F59E0B]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={18} height={18} strokeWidth={0} fill="currentColor" />
                ))}
              </span>
              <span className="text-sm text-[#5F5570]">{reviewCount} beoordelingen</span>
            </div>
            <p className="mt-4 max-w-[760px] rounded-[20px] bg-[#FFFDF8] p-4 text-sm leading-relaxed text-[#5F5570]">
              “Een sfeervolle plek met veel rust en privacy. Precies goed voor een weekend weg zonder gedoe.”
            </p>
          </section>
        </main>

        <aside className="rounded-[28px] border border-[#E7DFF2] bg-white p-5 shadow-[0_18px_46px_rgba(76,29,149,0.12)] lg:sticky lg:top-24">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F2EA] px-3 py-1.5 text-xs font-bold text-[#4C1D95]">
              <BadgeCheck width={14} height={14} strokeWidth={2.3} aria-hidden="true" />
              Geselecteerd verblijf
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1C1230]">
              <Star width={15} height={15} strokeWidth={0} fill="#F59E0B" aria-hidden="true" />
              {rating}
            </span>
          </div>

          <p className="text-sm text-[#5F5570]">vanaf</p>
          <p className="mb-1 text-4xl font-extrabold tracking-tight text-[#1C1230]">
            €{accommodation.price.from}
            <span className="text-base font-semibold text-[#5F5570]"> / nacht</span>
          </p>
          <p className="mb-5 text-sm text-[#5F5570]">Je boekt veilig via de aanbieder. BijzonderNachtje rekent niets extra.</p>

          <a className="button button-primary w-full min-h-[56px] text-base" href={accommodation.affiliateUrl}>
            <Calendar width={19} height={19} strokeWidth={2.2} aria-hidden="true" />
            Bekijk beschikbaarheid
          </a>

          <ul className="mt-5 space-y-2.5 text-sm font-medium text-[#5F5570]">
            <li className="flex items-center gap-2">
              <Check width={16} height={16} strokeWidth={2.8} aria-hidden="true" className="text-[#1F6B3A]" />
              Door naar de aanbieder
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck width={16} height={16} strokeWidth={2.4} aria-hidden="true" className="text-[#1F6B3A]" />
              Geen extra kosten via ons
            </li>
            <li className="flex items-center gap-2">
              <Sparkles width={16} height={16} strokeWidth={2.4} aria-hidden="true" className="text-[#1F6B3A]" />
              Handmatig geselecteerd
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
