import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Textos, ideias e curiosidades de Moises Salgado.',
  alternates: { canonical: '/blog/' },
};

export default function Blog() {
  const posts = getPosts();
  return (
    <PageShell>
      <Section tone="light">
        <PageTitle eyebrow="Blog" title="Blog" lead="Textos, ideias e curiosidades." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length ? posts.map((p) => <PostCard key={p.slug} post={p} />) : <p className="text-ink-400">Os primeiros textos chegam em breve.</p>}
        </div>
      </Section>
    </PageShell>
  );
}
