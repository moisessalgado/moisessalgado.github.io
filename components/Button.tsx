import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink dark:focus-visible:outline-paper-light';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white hover:bg-ink-400 dark:bg-paper-light dark:text-ink dark:hover:bg-paper-dark',
  secondary:
    'bg-white text-ink ring-1 ring-inset ring-ink/15 hover:bg-paper-light dark:bg-white/5 dark:text-paper-light dark:ring-white/15 dark:hover:bg-white/10',
  ghost:
    'text-ink hover:text-ink-400 dark:text-paper-light dark:hover:text-paper-dark',
  onDark: 'bg-white text-ink hover:bg-paper-light',
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export default function Button({ href, variant = 'primary', className, children, external }: Props) {
  const classes = clsx(base, variants[variant], className);
  if (external || /^(https?:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        target={/^https?:/.test(href) ? '_blank' : undefined}
        rel={/^https?:/.test(href) ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
