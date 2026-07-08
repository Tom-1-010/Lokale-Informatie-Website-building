import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { withBasePath } from '@/lib/utils';

const footerColumns = [
  {
    title: 'Ontdek',
    links: [
      { label: 'Bijzondere plekjes', href: '/accommodaties' },
      { label: "Regio's", href: '/accommodaties' },
      { label: 'Inspiratie', href: '/#inspiratie' },
    ],
  },
  {
    title: 'Informatie',
    links: [
      { label: 'Over ons', href: '/contact' },
      { label: 'Veelgestelde vragen', href: '/contact/#veelgestelde-vragen' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Voor hosts',
    links: [
      { label: 'Verhuur jouw plek', href: '/contact' },
      { label: 'Host voordelen', href: '/contact' },
      { label: 'Samenwerken', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <nav className="mobile-nav" aria-label="Mobiele navigatie">
        <Link href="/accommodaties">Plekjes</Link>
        <Link href="/#categorieen">Categorieën</Link>
        <Link href="/#inspiratie">Inspiratie</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link className="brand footer-brand" href="/" aria-label="Terug naar boven">
              <Image
                src={withBasePath('/logo.png')}
                alt="BijzonderNachtje"
                width={625}
                height={120}
                className="brand-logo brand-logo-footer"
              />
            </Link>
            <p className="footer-tagline">Jouw platform voor bijzondere overnachtingen</p>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} className="footer-col" aria-label={column.title}>
              <strong>{column.title}</strong>
              {column.links.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
              ))}
            </nav>
          ))}
          <div className="footer-col" aria-label="Volg ons">
            <strong>Volg ons</strong>
            <div className="footer-socials">
              <a href="https://www.instagram.com/bijzondernachtje" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram width={18} height={18} strokeWidth={2} />
              </a>
              <a href="https://www.facebook.com/bijzondernachtje" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook width={18} height={18} strokeWidth={2} />
              </a>
              <a href="https://www.pinterest.com/bijzondernachtje" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.64 19.31c-.05-.8-.1-2.03.02-2.9l1.17-4.95s-.3-.6-.3-1.48c0-1.39.8-2.42 1.81-2.42.85 0 1.26.64 1.26 1.4 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2Z" />
                </svg>
              </a>
              <a href="mailto:hallo@bijzondernachtje.nl" aria-label="E-mail">
                <Mail width={18} height={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-disclaimer">
          BijzonderNachtje kan een vergoeding ontvangen wanneer je via onze links boekt. Dit kost jou niets extra.
        </p>
        <p className="footer-copyright">
          ✦ © {new Date().getFullYear()} BijzonderNachtje — Alle rechten voorbehouden ✦
        </p>
      </footer>
    </>
  );
}
