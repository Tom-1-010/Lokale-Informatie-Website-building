'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

export interface GalleryImage {
  src: string;
  label: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title: string;
}

export default function PhotoGallery({ images, title }: PhotoGalleryProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  const step = (delta: number) => {
    setIndex((prev) => (prev + delta + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <div className="gallery-main">
        <Image
          key={current.src}
          src={current.src}
          alt={`${title} — ${current.label}`}
          fill
          priority={index === 0}
          sizes="(max-width: 980px) 100vw, 62vw"
          className="object-cover"
        />
        <span className="gallery-badge">
          <Star width={14} height={14} strokeWidth={2.4} fill="currentColor" aria-hidden="true" />
          Topfavoriet
        </span>
        <button
          type="button"
          className="gallery-arrow gallery-arrow-left"
          onClick={() => step(-1)}
          aria-label="Vorige foto"
        >
          <ChevronLeft width={20} height={20} strokeWidth={2.4} />
        </button>
        <button
          type="button"
          className="gallery-arrow gallery-arrow-right"
          onClick={() => step(1)}
          aria-label="Volgende foto"
        >
          <ChevronRight width={20} height={20} strokeWidth={2.4} />
        </button>
        <span className="gallery-counter">
          <Camera width={15} height={15} strokeWidth={2.2} aria-hidden="true" />
          {index + 1} / {images.length}
        </span>
      </div>
      <div className="gallery-thumbs" role="tablist" aria-label="Foto's">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={image.label}
            className={`gallery-thumb${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="140px"
              className="object-cover"
            />
            <span className="gallery-thumb-label">{image.label}</span>
            {image.label === 'Gastfoto' && (
              <span className="gallery-thumb-heart" aria-hidden="true">
                <Heart width={12} height={12} strokeWidth={2.4} fill="currentColor" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
