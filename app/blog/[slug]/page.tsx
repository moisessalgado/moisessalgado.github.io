import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import { mdxComponents } from '@/components/MDXComponents';
import { formatDate, getPost, getPosts } from '@/lib/blog';

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
    alternates: { canonical: `/blog/${slug}/` },
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
            href="/blog/"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400 hover:text-ink dark:text-ink-200 dark:hover:text-paper-light"
          >
            ← Blog
          </Link>
          <header className="mt-8 border-b border-ink/10 pb-8 dark:border-paper-light/10">
            <h1 className="heading-lg">{post.title}</h1>
            {post.excerpt ? <p className="mt-5 text-lg leading-relaxed text-ink-400 dark:text-paper-light/80">{post.excerpt}</p> : null}
            <p className="mt-6 text-sm text-ink-400 dark:text-paper-light/60">
              Publicado em <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            {post.tags.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-paper-light px-3 py-1 text-xs font-medium text-ink-700 dark:bg-ink-700 dark:text-paper-light">
                    #{tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>
          <article className="mt-4">
            <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
        </div>
      </Section>
    </PageShell>
  );
}
