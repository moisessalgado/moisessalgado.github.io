import clsx from 'clsx';
import type { ReactNode } from 'react';

export default function Card({
  title,
  body,
  icon,
  className,
  tone = 'light',
}: {
  title: string;
  body: string;
  icon?: ReactNode;
  className?: string;
  tone?: 'light' | 'onDark';
}) {
  return (
    <div
      className={clsx(
        'flex h-full flex-col gap-3 rounded-2xl p-6 shadow-sm transition hover:shadow-md',
        tone === 'light'
          ? 'border border-ink/10 bg-white dark:border-white/15 dark:bg-white/[0.06]'
          : 'border border-white/10 bg-white/5',
        className,
      )}
    >
      {icon ? (
        <div
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-xl',
            tone === 'light'
              ? 'bg-ink/5 text-ink dark:bg-white/10 dark:text-paper-light'
              : 'bg-white/10 text-paper-light',
          )}
        >
          {icon}
        </div>
      ) : null}
      <h3
        className={clsx(
          'font-display text-lg font-bold',
          tone === 'light' ? 'text-ink dark:text-paper-light' : 'text-white',
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          'text-sm leading-relaxed',
          tone === 'light' ? 'text-ink-400 dark:text-paper-light/90' : 'text-ink-100',
        )}
      >
        {body}
      </p>
    </div>
  );
}
