'use client';

import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Home, Search } from 'lucide-react';
import { provinces } from '@/lib/data/provinces';
import { categories } from '@/lib/data/categories';

export default function SearchPanel() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/accommodaties');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} aria-label="Zoek een bijzondere plek">
      <div className="search-cell">
        <span className="search-cell-icon" aria-hidden="true">
          <MapPin width={20} height={20} strokeWidth={2.2} />
        </span>
        <div className="search-cell-body">
          <label htmlFor="searchRegion">Waar wil je heen?</label>
          <select id="searchRegion" defaultValue="">
            <option value="">Kies een regio of provincie</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="search-cell">
        <span className="search-cell-icon" aria-hidden="true">
          <Calendar width={20} height={20} strokeWidth={2.2} />
        </span>
        <div className="search-cell-body">
          <label htmlFor="searchDate">Wanneer?</label>
          <input id="searchDate" type="date" aria-label="Kies je datum" />
        </div>
      </div>
      <div className="search-cell">
        <span className="search-cell-icon" aria-hidden="true">
          <Home width={20} height={20} strokeWidth={2.2} />
        </span>
        <div className="search-cell-body">
          <label htmlFor="searchType">Type verblijf</label>
          <select id="searchType" defaultValue="">
            <option value="">Alle types</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="button button-accent search-submit" type="submit">
        <Search width={18} height={18} strokeWidth={2.4} aria-hidden="true" />
        Zoek plekjes
      </button>
    </form>
  );
}
