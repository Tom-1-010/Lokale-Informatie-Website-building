import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <nav className="mobile-nav" aria-label="Mobiele navigatie">
        <Link href="#uitgelicht">Ontdek</Link>
        <Link href="#categorieen">Categorieën</Link>
        <Link href="#inspiratie">Inspiratie</Link>
        <Link href="#nieuwsbrief">Nieuwsbrief</Link>
      </nav>

      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/" aria-label="Terug naar boven">
            <span className="brand-name">bijz<span className="brand-moon" aria-hidden="true">o</span>nder<em>nachtje</em></span>
          </Link>
          <nav className="footer-links" aria-label="Voetnavigatie">
            <Link href="#categorieen">Categorieën</Link>
            <Link href="#uitgelicht">Uitgelicht</Link>
            <Link href="#inspiratie">Inspiratie</Link>
            <Link href="#hoe-werkt-het">Hoe het werkt</Link>
            <Link href="#nieuwsbrief">Nieuwsbrief</Link>
          </nav>
        </div>
        <p className="footer-disclaimer">
          BijzonderNachtje kan een vergoeding ontvangen wanneer je via onze links boekt. Dit kost jou niets extra.
        </p>
        <p>
          © <span id="year">{new Date().getFullYear()}</span> BijzonderNachtje. Alle getoonde accommodaties zijn voorlopige voorbeelden; prijzen en beschikbaarheid volgen via onze boekingspartners.
        </p>
      </footer>
    </>
  );
}
