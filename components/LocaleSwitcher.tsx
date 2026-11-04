import Link from 'next/link';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/site';

/** Only rendered on pages that exist in both languages. */
export default function LocaleSwitcher({ current, pt, en }: { current: Locale; pt: string; en: string }) {
  const items: Array<{ l: Locale; href: string }> = [
    { l: 'pt', href: pt },
    { l: 'en', href: en },
  ];
  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/80 py-1 pl-2 pr-1 text-xs font-semibold uppercase tracking-widest shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
    >
      <Globe aria-hidden className="h-3.5 w-3.5 text-ink/60 dark:text-sand-light/60" />
      {items.map(({ l, href }) => (
        <Link
          key={l}
          href={href}
          lang={l === 'pt' ? 'pt-BR' : 'en'}
          aria-current={l === current ? 'true' : undefined}
          className={`w-9 rounded-full py-1 text-center transition-colors ${
            l === current
              ? 'bg-terracota text-white'
              : 'text-ink/70 hover:text-ink dark:text-sand-light/80 dark:hover:text-sand-light'
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
