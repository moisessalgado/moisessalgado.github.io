import { ArrowRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Button from '@/components/Button';
import PostCard from '@/components/PostCard';
import { mdxComponents } from '@/components/MDXComponents';
import { getPosts } from '@/lib/blog';
import { getSite } from '@/lib/content';
import type { Locale } from '@/lib/site';

const md = (source: string) => (
  <MDXRemote source={source} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
);

// Single-page home: texts come from content/site.md (pt) and content/site.en.md (en).
export default function OnePage({ locale }: { locale: Locale }) {
  const pt = locale === 'pt';
  const site = getSite(locale);
  const { inicio, sobre, blog } = site;
  const recent = pt ? getPosts().slice(0, 3) : [];
  const root = pt ? '' : '/en';

  return (
    <PageShell locale={locale} alt={{ pt: '/', en: '/en/' }}>
      <section id="inicio" className="scroll-mt-20 bg-white transition-colors duration-300 dark:bg-ink">
        <div className="container-x py-14 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">{inicio.fields.eyebrow}</p>
            <h1 className="heading-xl mt-3">{inicio.fields.titulo}</h1>
            <div className="mt-5 text-lg text-ink-400 dark:text-paper-light/90 [&_p]:my-0 [&_p]:text-lg [&_p]:text-ink-400 dark:[&_p]:text-paper-light/90">
              {md(inicio.body)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`${root}/#sobre`} variant="primary">
                {pt ? 'Sobre mim' : 'About me'} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={pt ? '/#blog' : '/blog/'} variant="secondary">
                {pt ? 'Ler o blog' : 'Blog (PT)'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="sobre" tone="ink" className="scroll-mt-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-300">{sobre.fields.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white">{sobre.fields.titulo}</h2>
          <div className="mt-4 [&_p]:my-4 [&_p]:text-ink-100 dark:[&_p]:text-ink-100 [&_a]:text-white [&_a]:decoration-white/40 [&_strong]:text-white">
            {md(sobre.body)}
          </div>
        </div>
      </Section>

      {pt && blog ? (
        <Section id="blog" tone="light" className="scroll-mt-20">
          <p className="eyebrow">{blog.fields.eyebrow}</p>
          <h2 className="heading-md mt-3">{blog.fields.titulo}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.length ? (
              recent.map((p) => <PostCard key={p.slug} post={p} />)
            ) : (
              <p className="text-ink-400 dark:text-paper-light/80">{blog.fields.vazio}</p>
            )}
          </div>
          {recent.length ? (
            <div className="mt-8">
              <Button href="/blog/" variant="secondary">
                Ver todos os textos <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ) : null}
        </Section>
      ) : null}
    </PageShell>
  );
}
