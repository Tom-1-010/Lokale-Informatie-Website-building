import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { accommodations, getAccommodationBySlug } from '@/lib/data/accommodations';
import { getCategoryBySlug } from '@/lib/data/categories';
import { MapPin, Check, Info, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
      title: 'Niet gevonden - Bijzonder Nachtje',
    };
  }

  return {
    title: `${accommodation.title} - Bijzonder Nachtje`,
    description: accommodation.description,
  };
}

export default async function AccommodationPage({ params }: AccommodationPageProps) {
  const { slug } = await params;
  const accommodation = getAccommodationBySlug(slug);

  if (!accommodation) {
    notFound();
  }

  const category = getCategoryBySlug(accommodation.category);

  return (
    <div>
      <div className="relative h-64 md:h-96 w-full bg-surface-light">
        <Image
          src={accommodation.images[0]}
          alt={accommodation.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                {category && (
                  <Link href={`/categorie/${category.slug}`}>
                    <Badge className="hover:bg-gold/30 cursor-pointer">
                      {category.name}
                    </Badge>
                  </Link>
                )}
                <Badge variant="secondary">{accommodation.type}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
                {accommodation.title}
              </h1>

              <div className="flex items-center text-text-muted mb-6">
                <MapPin size={20} className="mr-2 text-gold" />
                <span>{accommodation.province}</span>
                {accommodation.region && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{accommodation.region}</span>
                  </>
                )}
              </div>

              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {accommodation.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gold mb-4">
                Voorzieningen
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {accommodation.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check size={18} className="text-gold flex-shrink-0" />
                    <span className="text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Info className="text-gold flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gold mb-2">
                    Boeken via externe aanbieder
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Deze accommodatie wordt aangeboden door een externe partij.
                    Wanneer je klikt op &ldquo;Bekijk beschikbaarheid&rdquo; of &ldquo;Naar de
                    aanbieder&rdquo;, word je doorgestuurd naar hun website om direct
                    te boeken. De prijs en beschikbaarheid worden bepaald door de
                    aanbieder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-surface border border-gold/20 rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-1">Vanaf</p>
                <p className="text-3xl font-bold text-gold">
                  €{accommodation.price.from}
                </p>
                <p className="text-sm text-text-muted">per nacht</p>
              </div>

              <div className="space-y-3">
                <a
                  href={accommodation.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gold hover:bg-gold-light text-background">
                    Bekijk beschikbaarheid
                    <ExternalLink size={18} className="ml-2" />
                  </Button>
                </a>

                <a
                  href={accommodation.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-background">
                    Naar de aanbieder
                    <ExternalLink size={18} className="ml-2" />
                  </Button>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="text-xs text-text-muted text-center">
                  Prijs is indicatief en kan variëren per datum en
                  beschikbaarheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
