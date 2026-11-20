import Link from 'next/link';
import { formatDate, type PostMeta } from '@/lib/blog';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/15 dark:bg-white/[0.06]"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-200">
        <time dateTime={post.date}>{formatDate(post.date, { day: '2-digit', month: 'short', year: 'numeric' })}</time>
        {!post.published ? <span className="ml-2 rounded-full bg-ink/10 px-2 py-0.5 text-[10px] dark:bg-white/15">rascunho</span> : null}
      </p>
      <h2 className="font-display text-xl font-bold text-ink group-hover:text-ink-400 dark:text-paper-light dark:group-hover:text-paper-dark">
        {post.title}
      </h2>
      <p className="text-sm text-ink-400 dark:text-paper-light/80">{post.excerpt}</p>
    </Link>
  );
}
