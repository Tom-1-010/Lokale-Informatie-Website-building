import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { provinces } from '@/lib/data/provinces';
import { withBasePath } from '@/lib/utils';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="topbar" aria-label="Hoofdnavigatie">
        <Link className="brand" href="/" aria-label="BijzonderNachtje startpagina">
          <Image
            src={withBasePath('/logo.png')}
            alt="BijzonderNachtje"
            width={625}
            height={120}
            priority
            className="brand-logo"
          />
        </Link>
        <div className="nav-links" aria-label="Secties">
          <Link href="/accommodaties">Bijzondere plekjes</Link>
          <div className="nav-dropdown">
            <Link href="/accommodaties" className="nav-dropdown-trigger">
              Regio&apos;s
              <ChevronDown width={16} height={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <div className="nav-dropdown-menu" role="menu">
              {provinces.map((province) => (
                <Link key={province.code} href="/accommodaties" role="menuitem">
                  {province.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#inspiratie">Inspiratie</Link>
          <Link href="/contact">Over ons</Link>
        </div>
        <Link className="button button-accent header-cta" href="/accommodaties">
          Bekijk plekjes
          <ArrowRight width={16} height={16} strokeWidth={2.4} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
