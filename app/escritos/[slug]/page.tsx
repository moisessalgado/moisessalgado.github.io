import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import { mdxComponents } from '@/components/MDXComponents';
import { TEMAS, formatDate, getPost, getPosts } from '@/lib/blog';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/escritos/${slug}/` },
    openGraph: { type: 'article', publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/escritos/"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-terracota hover:text-terracota-dark dark:text-ocre"
          >
            ← Todos os escritos
          </Link>
          <header className="mt-8 border-b border-ink/10 pb-8 dark:border-sand-light/10">
            <Link
              href={`/temas/${post.tema}/`}
              className="mb-5 inline-block rounded-full bg-sand-light px-3 py-1 text-xs font-medium text-ink-700 dark:bg-ink-700 dark:text-sand-light"
            >
              {TEMAS[post.tema]}
            </Link>
            <h1 className="heading-lg">{post.title}</h1>
            {post.excerpt ? <p className="mt-5 text-lg leading-relaxed text-ink-400 dark:text-sand-light/80">{post.excerpt}</p> : null}
            <p className="mt-6 text-sm text-ink-400 dark:text-sand-light/60">
              Publicado em <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </header>
          <article className="mt-4">
            <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
        </div>
      </Section>
    </PageShell>
  );
}
