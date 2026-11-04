import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import PostCard from '@/components/PostCard';
import ThemeNav from '@/components/ThemeNav';
import { getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Escritos',
  description: 'Textos sobre filosofia, história, tecnologia e curiosidades.',
  alternates: { canonical: '/escritos/' },
};

export default function Escritos() {
  const posts = getPosts();
  return (
    <PageShell>
      <Section tone="light">
        <PageTitle eyebrow="Escritos" title="Escritos" lead="Filosofia, história, tecnologia e curiosidades." />
        <div className="mt-8"><ThemeNav /></div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length ? posts.map((p) => <PostCard key={p.slug} post={p} />) : <p className="text-ink-400">Os primeiros textos chegam em breve.</p>}
        </div>
      </Section>
    </PageShell>
  );
}
