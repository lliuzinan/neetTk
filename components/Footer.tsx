import Link from "next/link";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div>
          <Link href="/" className="footerBrand">MedQGo</Link>
          <p>
            Free NCERT-aligned NEET-UG Biology MCQs, topic revision pages, and early access PDF resources for Indian exam preparation.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="footerLinks">
          <Link href="/neet-ug/biology">NEET Biology</Link>
          <Link href="/neet-biology-pdf">Free PDF</Link>
          <Link href="/neet-ug/biology/free-mcq-pdf">MCQ PDF guide</Link>
          <Link href="/site-map">Sitemap</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
