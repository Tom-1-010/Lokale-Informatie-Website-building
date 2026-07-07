'use client';

import { useState, useMemo } from 'react';
import { accommodations } from '@/lib/data/accommodations';
import AccommodationCard from '@/components/accommodations/AccommodationCard';
import FilterBar from '@/components/filters/FilterBar';
import { FilterState } from '@/lib/types';
import { Info } from 'lucide-react';

export default function AccommodationsPage() {
  const [filters, setFilters] = useState<FilterState>({});

  const filteredAccommodations = useMemo(() => {
    return accommodations.filter((acc) => {
      if (filters.category && acc.category !== filters.category) {
        return false;
      }
      if (filters.province && acc.province !== filters.province) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div>
      <FilterBar onFilterChange={setFilters} currentFilters={filters} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
            Alle accommodaties
          </h1>
          <p className="text-text-muted">
            {filteredAccommodations.length}{' '}
            {filteredAccommodations.length === 1 ? 'accommodatie' : 'accommodaties'} gevonden
          </p>
        </div>

        {filteredAccommodations.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg mb-4">
              Geen accommodaties gevonden met deze filters.
            </p>
            <p className="text-text-muted">
              Probeer andere filters of bekijk alle accommodaties.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))}
          </div>
        )}

        <div className="mt-12 bg-gold/10 border border-gold/20 rounded-lg p-6">
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
                kun je direct boeken. De prijs en beschikbaarheid worden bepaald
                door de aanbieder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
