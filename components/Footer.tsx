import Link from "next/link";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div>
          <Link href="/" className="footerBrand">MedQGo</Link>
          <p>
            Independent NEET-UG Biology revision notes and early access learning resources for Indian exam preparation.
          </p>
          <p className="footerDisclaimer">
            Educational use only. MedQGo is not official NCERT, NTA, or NEET material and does not provide medical advice, diagnosis, or treatment.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="footerLinks">
          <Link href="/neet-ug/biology">NEET Biology</Link>
          <Link href="/neet-biology-pdf">Revision Workbook</Link>
          <Link href="/site-map">Sitemap</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/team">Editorial Team</Link>
          <Link href="/authors/dongfeng">Author: DongFeng</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/copyright">Copyright</Link>
        </nav>
      </div>
    </footer>
  );
}
