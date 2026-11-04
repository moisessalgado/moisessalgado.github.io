import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Button from '@/components/Button';
import PostCard from '@/components/PostCard';
import { TEMAS, getPosts } from '@/lib/blog';
import { SITE } from '@/lib/site';

export default function Home() {
  const recent = getPosts().slice(0, 3);
  return (
    <PageShell alt={{ pt: '/', en: '/en/' }}>
      <section className="bg-sand-light transition-colors duration-300 dark:bg-ink-800">
        <div className="container-x py-14 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Sensoriamento remoto · Geoprocessamento · Ideias</p>
            <h1 className="heading-xl mt-3">Moises Salgado</h1>
            <p className="mt-5 text-lg text-ink-400 dark:text-sand-light/90">
              Trabalho com dados de satélite e território. Aqui escrevo também sobre o que me interessa fora do trabalho:
              filosofia, história, tecnologia e curiosidades.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/escritos/" variant="primary">
                Ler os escritos <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/sobre/" variant="secondary">Sobre mim</Button>
              <Button href="/consultoria/" variant="ghost">Consultoria</Button>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <p className="eyebrow">Temas</p>
        <h2 className="heading-md mt-3">Sobre o que escrevo</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(TEMAS).map(([slug, label]) => (
            <Link
              key={slug}
              href={`/temas/${slug}/`}
              className="rounded-2xl border border-ink/10 bg-white p-6 font-display text-lg font-bold text-ink shadow-sm transition hover:text-terracota hover:shadow-md dark:border-white/15 dark:bg-white/[0.06] dark:text-sand-light dark:hover:text-ocre"
            >
              {label}
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <p className="eyebrow">Escritos</p>
        <h2 className="heading-md mt-3">Últimos textos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.length ? (
            recent.map((p) => <PostCard key={p.slug} post={p} />)
          ) : (
            <p className="text-ink-400 dark:text-sand-light/80">Os primeiros textos chegam em breve.</p>
          )}
        </div>
      </Section>

      <Section tone="ink">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre">Trabalho</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">Coordenada Geo</h2>
          <p className="mt-4 text-ink-100">
            Fundei a {SITE.company.name}, consultoria em inteligência geoespacial e climática. Antes, fui co-fundador e CTO da
            Agrosatélite, adquirida pela Serasa Experian em 2023.
          </p>
          <div className="mt-6">
            <Button href="/consultoria/" variant="onDark">
              Ver credenciais e contato <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
