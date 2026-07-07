import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="topbar" aria-label="Hoofdnavigatie">
        <Link className="brand" href="/" aria-label="BijzonderNachtje startpagina">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="26" height="26" fill="none" aria-hidden="true">
              <path d="M31 6a17 17 0 1 0 11 30A19 19 0 0 1 31 6Z" fill="#fff" />
              <path d="M36 8l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" fill="#FFC5DE" />
            </svg>
          </span>
          <span className="brand-name">bijz<span className="brand-moon" aria-hidden="true">o</span>nder<em>nachtje</em></span>
        </Link>
        <div className="nav-links" aria-label="Secties">
          <Link href="#categorieen">Categorieën</Link>
          <Link href="#uitgelicht">Uitgelicht</Link>
          <Link href="#inspiratie">Inspiratie</Link>
          <Link href="#hoe-werkt-het">Hoe het werkt</Link>
        </div>
        <Link className="button button-primary header-cta" href="#uitgelicht">Ontdek bijzondere plekken</Link>
      </nav>
    </header>
  );
}
