import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Button from '@/components/Button';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/blog';
import { SITE } from '@/lib/site';

export default function Home() {
  const recent = getPosts().slice(0, 3);
  return (
    <PageShell alt={{ pt: '/', en: '/en/' }}>
      <section className="bg-white transition-colors duration-300 dark:bg-ink">
        <div className="container-x py-14 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Pindamonhangaba · Florianópolis</p>
            <h1 className="heading-xl mt-3">Moises Salgado</h1>
            <p className="mt-5 text-lg text-ink-400 dark:text-paper-light/90">
              Pindamonhangabense, pai de família e observador das coisas da vida. Este é o meu caderno público: textos, ideias e
              curiosidades.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/blog/" variant="primary">
                Ler o blog <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/sobre/" variant="secondary">Sobre mim</Button>
              <Button href="/profissional/" variant="ghost">Profissional</Button>
            </div>
          </div>
        </div>
      </section>

      <Section tone="ink">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-300">Trabalho</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">Coordenada Geo</h2>
          <p className="mt-4 text-ink-100">
            Fundei a {SITE.company.name}, consultoria em inteligência geoespacial e climática. Antes, fui co-fundador e CTO da
            Agrosatélite, adquirida pela Serasa Experian em 2023.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/profissional/" variant="onDark">
              Minha trajetória profissional <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={SITE.company.url} variant="onDark">coordenadageo.com.br</Button>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <p className="eyebrow">Blog</p>
        <h2 className="heading-md mt-3">Últimos textos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.length ? (
            recent.map((p) => <PostCard key={p.slug} post={p} />)
          ) : (
            <p className="text-ink-400 dark:text-paper-light/80">Os primeiros textos chegam em breve.</p>
          )}
        </div>
      </Section>
    </PageShell>
  );
}
