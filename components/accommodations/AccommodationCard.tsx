import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Accommodation } from '@/lib/types';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export default function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <Link href={`/accommodaties/${accommodation.slug}`} className="stay-card">
      <div className="stay-media">
        <span className="stay-tag">{accommodation.category}</span>
      </div>
      <div className="stay-body">
        <h3>{accommodation.title}</h3>
        <div className="stay-location">
          <MapPin size={14} />
          <span>{accommodation.province}</span>
          {accommodation.region && <span> · {accommodation.region}</span>}
        </div>
        <p>{accommodation.description}</p>
        <div className="stay-foot">
          <div className="stay-price">
            €{accommodation.price.from}
            <small>per nacht</small>
          </div>
          <button className="button button-primary stay-cta">Bekijk</button>
        </div>
      </div>
    </Link>
  );
}
