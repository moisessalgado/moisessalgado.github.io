import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import PostCard from '@/components/PostCard';
import ThemeNav from '@/components/ThemeNav';
import { TEMAS, getPosts, type Tema } from '@/lib/blog';

type Params = { params: Promise<{ tema: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TEMAS).map((tema) => ({ tema }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tema } = await params;
  if (!(tema in TEMAS)) return {};
  return {
    title: TEMAS[tema as Tema],
    description: `Escritos sobre ${TEMAS[tema as Tema].toLowerCase()}.`,
    alternates: { canonical: `/temas/${tema}/` },
  };
}

export default async function TemaPage({ params }: Params) {
  const { tema } = await params;
  if (!(tema in TEMAS)) notFound();
  const posts = getPosts(tema as Tema);
  return (
    <PageShell>
      <Section tone="light">
        <PageTitle eyebrow="Tema" title={TEMAS[tema as Tema]} />
        <div className="mt-8"><ThemeNav current={tema} /></div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length ? posts.map((p) => <PostCard key={p.slug} post={p} />) : <p className="text-ink-400">Nada por aqui ainda.</p>}
        </div>
      </Section>
    </PageShell>
  );
}
