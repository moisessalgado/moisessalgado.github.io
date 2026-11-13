import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import { DesktopNav, MobileNav, type NavGroup } from './NavMenu';
import { SITE, type Locale } from '@/lib/site';

export default function Header({ locale, alt }: { locale: Locale; alt?: { pt: string; en: string } }) {
  const pt = locale === 'pt';
  const groups: NavGroup[] = pt
    ? [
        { label: 'Sobre', href: '/sobre/' },
        { label: 'Profissional', href: '/profissional/' },
        { label: 'Blog', href: '/blog/' },
      ]
    : [
        { label: 'About', href: '/en/about/' },
        { label: 'Professional', href: '/en/professional/' },
        { label: 'Blog (PT)', href: '/blog/' },
      ];
  const cta = { href: `mailto:${SITE.contact.email}`, label: pt ? 'Contato' : 'Contact' };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur dark:border-white/15 dark:bg-ink/90">
      <div className="container-x flex h-16 items-center justify-between gap-2 sm:h-20 sm:gap-4">
        <Link href={pt ? '/' : '/en/'} className="flex shrink-0 items-center" aria-label="Moises Salgado">
          <Logo />
        </Link>
        <DesktopNav groups={groups} />
        <div className="flex items-center gap-1 sm:gap-2">
          {alt ? <LocaleSwitcher current={locale} pt={alt.pt} en={alt.en} /> : null}
          <ThemeToggle label={pt ? 'Alternar tema' : 'Toggle theme'} />
          <Button href={cta.href} variant="primary" className="hidden sm:inline-flex">
            {cta.label}
          </Button>
          <MobileNav groups={groups} ctaHref={cta.href} ctaLabel={cta.label} />
        </div>
      </div>
    </header>
  );
}
