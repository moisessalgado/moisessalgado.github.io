import clsx from 'clsx';
import type { ReactNode } from 'react';

export default function Section({
  id,
  className,
  children,
  tone = 'light',
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: 'light' | 'paper' | 'ink';
}) {
  const tones = {
    light: 'bg-white text-ink-700 dark:bg-ink dark:text-paper-light',
    paper: 'bg-paper-light text-ink-700 dark:bg-ink-700 dark:text-paper-light',
    ink: 'bg-ink text-white dark:bg-ink-900 dark:text-paper-light',
  } as const;
  return (
    <section
      id={id}
      className={clsx('py-12 sm:py-16 lg:py-24 transition-colors duration-300', tones[tone], className)}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
