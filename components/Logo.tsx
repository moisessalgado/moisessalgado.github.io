import clsx from 'clsx';

/** Monograma "MS" + nome, nas cores da marca (adapta ao tema escuro). */
export default function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold text-ocre dark:bg-ocre dark:text-ink"
      >
        MS
      </span>
      <span className="font-display text-base font-bold tracking-tight text-ink dark:text-sand-light">
        Moises Salgado
      </span>
    </span>
  );
}
