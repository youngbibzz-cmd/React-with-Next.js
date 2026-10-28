import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <Link className="brand" href="/" aria-label="Jordan Lee home">
          <span className="brand-mark" aria-hidden="true">J</span>
          <span>Jordan Lee</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          {links.map((link) => (
            <Link className={link.href === "/contact" ? "nav-contact" : undefined} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu"><span aria-hidden="true">☰</span></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
