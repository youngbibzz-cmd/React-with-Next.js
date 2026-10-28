import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-width">
        <p className="footer-copy">© 2026 Jordan Lee</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="footer-credit">Designed with intention · Built with Next.js</p>
      </div>
    </footer>
  );
}
