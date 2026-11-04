import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { getProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos pessoais e open source de Moises Salgado.',
  alternates: { canonical: '/projetos/' },
};

export default function Projetos() {
  const projetos = getProjects();
  return (
    <PageShell>
      <Section tone="light">
        <PageTitle eyebrow="Projetos" title="Projetos" lead="Coisas que construí por interesse, no mesmo domínio ou em repositórios próprios." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.length ? (
            projetos.map((p) => (
              <a
                key={p.slug}
                href={p.url}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/15 dark:bg-white/[0.06]"
              >
                <h2 className="font-display text-xl font-bold text-ink group-hover:text-terracota dark:text-sand-light dark:group-hover:text-ocre">
                  {p.nome}
                </h2>
                <p className="text-sm text-ink-400 dark:text-sand-light/80">{p.descricao}</p>
              </a>
            ))
          ) : (
            <p className="text-ink-400">Em breve.</p>
          )}
        </div>
      </Section>
    </PageShell>
  );
}
