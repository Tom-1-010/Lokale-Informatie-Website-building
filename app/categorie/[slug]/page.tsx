import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/data/categories';
import { getAccommodationsByCategory } from '@/lib/data/accommodations';
import { categories } from '@/lib/data/categories';
import AccommodationCard from '@/components/accommodations/AccommodationCard';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categorie niet gevonden - Bijzonder Nachtje',
    };
  }

  return {
    title: `${category.name} - Bijzonder Nachtje`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryAccommodations = getAccommodationsByCategory(slug);
  const otherCategories = categories.filter((cat) => cat.slug !== slug);

  return (
    <div>
      <div className="bg-surface text-text py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/accommodaties" className="inline-flex items-center text-text-muted hover:text-gold mb-4">
            <ArrowLeft size={18} className="mr-2" />
            Terug naar alle accommodaties
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
            {category.name}
          </h1>
          <p className="text-text-muted text-lg">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-gold mb-2">
            {categoryAccommodations.length}{' '}
            {categoryAccommodations.length === 1 ? 'accommodatie' : 'accommodaties'}
          </h2>
          <p className="text-text-muted">
            Ontdek onze selectie van bijzondere {category.name.toLowerCase()} plekken
          </p>
        </div>

        {categoryAccommodations.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg mb-4">
              Nog geen accommodaties in deze categorie.
            </p>
            <Link href="/accommodaties">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">Bekijk alle accommodaties</Button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categoryAccommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))}
          </div>
        )}

        <div className="bg-gold/10 border border-gold/20 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Info className="text-gold flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gold mb-2">
                Boeken via externe aanbieder
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Bijzonder Nachtje is een affiliate website. Wanneer je klikt op
                &ldquo;Bekijk beschikbaarheid&rdquo; of &ldquo;Naar de aanbieder&rdquo;, word je
                doorgestuurd naar de website van de externe aanbieder. Daar
                kun je direct boeken.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-gold mb-6">
            Andere categorieën
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCategories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorie/${cat.slug}`}
                className="bg-surface border border-gold/20 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-gold/40"
              >
                <h3 className="font-semibold text-gold mb-1">{cat.name}</h3>
                <p className="text-sm text-text-muted">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
