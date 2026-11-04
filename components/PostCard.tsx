import Link from 'next/link';
import { TEMAS, formatDate, type PostMeta } from '@/lib/blog';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/escritos/${post.slug}/`}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/15 dark:bg-white/[0.06]"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-terracota dark:text-ocre">
        {TEMAS[post.tema]} · <time dateTime={post.date}>{formatDate(post.date, { day: '2-digit', month: 'short', year: 'numeric' })}</time>
        {post.draft ? <span className="ml-2 rounded-full bg-ocre/20 px-2 py-0.5 text-[10px]">rascunho</span> : null}
      </p>
      <h2 className="font-display text-xl font-bold text-ink group-hover:text-terracota dark:text-sand-light dark:group-hover:text-ocre">
        {post.title}
      </h2>
      <p className="text-sm text-ink-400 dark:text-sand-light/80">{post.excerpt}</p>
    </Link>
  );
}
