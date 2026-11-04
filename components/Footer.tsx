import Link from 'next/link';
import FooterMap from './FooterMap';
import { SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-ink text-white dark:bg-ink-900">
      <div className="relative h-80 overflow-hidden md:h-80">
        <FooterMap label="Mapa de Florianópolis" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent dark:from-ink-900" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent dark:from-ink-900" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent dark:from-ink-900/90 dark:via-ink-900/50 md:block" />
        <div className="container-x pointer-events-none relative flex h-full items-end pb-8 md:items-center md:pb-0">
          <div className="max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre">Onde estou</p>
            <p className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Florianópolis</p>
            <p className="mt-1 text-sm text-ink-100">{SITE.contact.city}</p>
            <p className="mt-4 text-xs tabular-nums tracking-[0.15em] text-ocre/80">27°35′43″S · 48°32′53″W</p>
          </div>
        </div>
      </div>
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-xl bg-ocre font-display text-sm font-bold text-ink">MS</span>
            <span className="font-display text-base font-bold">Moises Salgado</span>
          </span>
          <p className="max-w-sm text-sm text-ink-100">
            Sensoriamento remoto, geoprocessamento e ideias sobre filosofia, história, tecnologia e curiosidades.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre">Navegar</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            <li><Link href="/sobre/" className="hover:text-white">Sobre</Link></li>
            <li><Link href="/consultoria/" className="hover:text-white">Consultoria</Link></li>
            <li><Link href="/escritos/" className="hover:text-white">Escritos</Link></li>
            <li><Link href="/projetos/" className="hover:text-white">Projetos</Link></li>
            <li><Link href="/en/" className="hover:text-white">English</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre">Conectar</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            <li><a href={`mailto:${SITE.contact.email}`} className="hover:text-white">E-mail</a></li>
            <li><a href={SITE.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href={SITE.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            <li><a href="/rss.xml" className="hover:text-white">RSS</a></li>
            <li><a href={SITE.company.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">Coordenada Geo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-100 md:flex-row md:items-center">
          <span>© {year} Moises Salgado. Todos os direitos reservados.</span>
          <span>moisessalgado.com.br</span>
        </div>
      </div>
    </footer>
  );
}
