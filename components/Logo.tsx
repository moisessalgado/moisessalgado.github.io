import clsx from 'clsx';

/** Logo (olho) + nome. Duas versões do arquivo: preto para o tema claro, branco para o escuro. */
export default function Logo({ className, showName = true }: { className?: string; showName?: boolean }) {
  return (
    <span className={clsx('inline-flex items-center gap-3', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-preto.png" alt="" width={720} height={538} className="h-8 w-auto dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-branco.png" alt="" width={720} height={538} className="hidden h-8 w-auto dark:block" />
      {showName ? (
        <span className="hidden font-display text-base font-bold tracking-tight text-ink min-[480px]:inline dark:text-paper-light">Moises Salgado</span>
      ) : (
        <span className="sr-only">Moises Salgado</span>
      )}
    </span>
  );
}
