import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Quem é Moises Salgado: agrônomo de formação, com mais de uma década em sensoriamento remoto e geoprocessamento.',
  alternates: { canonical: '/sobre/', languages: { 'pt-BR': '/sobre/', en: '/en/about/' } },
};

const link = 'font-medium text-ink underline underline-offset-4 hover:text-ink-600 dark:text-paper-light';

export default function Sobre() {
  return (
    <PageShell alt={{ pt: '/sobre/', en: '/en/about/' }}>
      <Section tone="light">
        <PageTitle eyebrow="Sobre" title="Olá, eu sou o Moisés" />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-[1.8]">
          <p>
            Sou pindamonhangabense, pai de família e observador das coisas da vida. Agrônomo de formação, passei a maior parte da
            carreira transformando imagens de satélite e dados territoriais em ferramentas de decisão. Moro em Florianópolis.
          </p>
          <p>
            Minha carreira começou em geoprocessamento, em 2008. Co-fundei a Agrosatélite, adquirida pela Serasa Experian em
            2023, e hoje atuo como consultor pela <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a>.
            Os detalhes estão em <a className={link} href="/profissional/">Profissional</a>.
          </p>
          <p>
            Este espaço é para o que não cabe num currículo: o que leio, penso e observo por aí.
          </p>
          <p>
            O histórico completo está no <a className={link} href={SITE.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            Para conversar, escreva para <a className={link} href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
