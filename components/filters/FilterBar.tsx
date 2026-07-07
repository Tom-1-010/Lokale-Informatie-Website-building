'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/data/categories';
import { provinces } from '@/lib/data/provinces';
import { FilterState } from '@/lib/types';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  currentFilters: FilterState;
}

export default function FilterBar({ onFilterChange, currentFilters }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...currentFilters,
      category: currentFilters.category === category ? undefined : category,
    });
  };

  const handleProvinceChange = (province: string) => {
    onFilterChange({
      ...currentFilters,
      province: currentFilters.province === province ? undefined : province,
    });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = currentFilters.category || currentFilters.province;

  return (
    <div className="bg-surface border-b border-gold/20 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gold" />
              <h2 className="font-semibold text-gold">Filters</h2>
            </div>

            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-sm"
                >
                  <X size={16} className="mr-1" />
                  Wissen
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? 'Sluiten' : 'Filters'}
              </Button>
            </div>
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-text-muted mb-2">Categorie</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => handleCategoryChange(category.slug)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        currentFilters.category === category.slug
                          ? 'bg-gold text-background'
                          : 'bg-surface-light text-text hover:bg-gold/20'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-text-muted mb-2">Provincie</h3>
                <div className="flex flex-wrap gap-2">
                  {provinces.map((province) => (
                    <button
                      key={province.code}
                      onClick={() => handleProvinceChange(province.name)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        currentFilters.province === province.name
                          ? 'bg-gold text-background'
                          : 'bg-surface-light text-text hover:bg-gold/20'
                      }`}
                    >
                      {province.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
