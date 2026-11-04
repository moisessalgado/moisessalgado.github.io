export default function PageTitle({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="heading-lg mt-3">{title}</h1>
      {lead ? <p className="mt-4 text-lg text-ink-400 dark:text-sand-light/80">{lead}</p> : null}
    </div>
  );
}
