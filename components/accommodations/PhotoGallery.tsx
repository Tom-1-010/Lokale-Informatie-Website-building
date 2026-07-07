'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const hasMultipleImages = images.length > 1;

  const step = (delta: number) => {
    setIndex((prev) => (prev + delta + images.length) % images.length);
  };

  return (
    <div className="space-y-3">
      <div className="relative h-[310px] overflow-hidden rounded-[28px] bg-[#F7F2EA] shadow-[0_18px_50px_rgba(76,29,149,0.12)] md:h-[460px]">
        <Image
          key={current.src}
          src={current.src}
          alt={`${title} — ${current.label}`}
          fill
          priority={index === 0}
          sizes="(max-width: 980px) 100vw, 760px"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C1230]/55 to-transparent" />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-white/85 text-[#1C1230] shadow-[0_8px_24px_rgba(28,18,48,0.18)] transition hover:bg-white"
              onClick={() => step(-1)}
              aria-label="Vorige foto"
            >
              <ChevronLeft width={20} height={20} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-white/85 text-[#1C1230] shadow-[0_8px_24px_rgba(28,18,48,0.18)] transition hover:bg-white"
              onClick={() => step(1)}
              aria-label="Volgende foto"
            >
              <ChevronRight width={20} height={20} strokeWidth={2.4} />
            </button>
          </>
        )}

        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-bold text-[#1C1230] shadow-[0_8px_24px_rgba(28,18,48,0.16)]">
          <Camera width={15} height={15} strokeWidth={2.2} aria-hidden="true" />
          {index + 1} van {images.length}
        </span>
      </div>

      {hasMultipleImages && (
        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Foto's">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={image.label}
              className={`relative h-16 w-24 flex-none overflow-hidden rounded-[16px] border bg-[#F7F2EA] transition ${
                i === index
                  ? 'border-[#6D28D9] opacity-100 shadow-[0_8px_20px_rgba(76,29,149,0.18)]'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              onClick={() => setIndex(i)}
            >
              <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
