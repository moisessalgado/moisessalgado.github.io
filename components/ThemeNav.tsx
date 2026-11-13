import Link from 'next/link';
import clsx from 'clsx';
import { TEMAS } from '@/lib/blog';

export default function ThemeNav({ current }: { current?: string }) {
  const item = (href: string, label: string, active: boolean) => (
    <Link
      key={href}
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'rounded-full px-4 py-1.5 text-sm font-semibold transition',
        active
          ? 'bg-ink text-white dark:bg-paper-light dark:text-ink'
          : 'bg-white text-ink ring-1 ring-inset ring-ink/15 hover:bg-paper-light dark:bg-white/5 dark:text-paper-light dark:ring-white/15 dark:hover:bg-white/10',
      )}
    >
      {label}
    </Link>
  );
  return (
    <nav aria-label="Temas" className="flex flex-wrap gap-2">
      {item('/escritos/', 'Todos', !current)}
      {Object.entries(TEMAS).map(([slug, label]) => item(`/temas/${slug}/`, label, current === slug))}
    </nav>
  );
}
