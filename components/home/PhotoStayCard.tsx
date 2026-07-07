import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Heart } from 'lucide-react';
import { Accommodation } from '@/lib/types';
import { getCategoryBySlug } from '@/lib/data/categories';

interface PhotoStayCardProps {
  accommodation: Accommodation;
}

export default function PhotoStayCard({ accommodation }: PhotoStayCardProps) {
  const category = getCategoryBySlug(accommodation.category);

  return (
    <article className="photo-card">
      <div className="photo-card-media">
        <Image
          src={accommodation.images[0]}
          alt={accommodation.title}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw"
          className="object-cover"
        />
        {category && (
          <span className="photo-card-tag">
            <span aria-hidden="true">{category.icon}</span>
            {category.name}
          </span>
        )}
        <span className="photo-card-fav" aria-hidden="true">
          <Heart width={17} height={17} strokeWidth={2.2} />
        </span>
      </div>
      <div className="photo-card-body">
        <h3>{accommodation.title}</h3>
        <p className="photo-card-location">
          <MapPin width={14} height={14} strokeWidth={2.4} aria-hidden="true" />
          {accommodation.province}, Nederland
        </p>
        <p className="photo-card-desc">{accommodation.description}</p>
        <div className="photo-card-foot">
          <p className="photo-card-price">
            vanaf <strong>€{accommodation.price.from}</strong> / nacht
          </p>
          <Link
            className="button button-accent photo-card-cta"
            href={`/accommodaties/${accommodation.slug}`}
          >
            Bekijk beschikbaarheid
          </Link>
        </div>
      </div>
    </article>
  );
}
