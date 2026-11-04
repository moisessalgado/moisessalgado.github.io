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

const link = 'font-medium text-terracota underline underline-offset-4 hover:text-terracota-dark dark:text-ocre';

export default function Sobre() {
  return (
    <PageShell alt={{ pt: '/sobre/', en: '/en/about/' }}>
      <Section tone="light">
        <PageTitle eyebrow="Sobre" title="Olá, eu sou o Moisés" />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-[1.8]">
          <p>
            Sou agrônomo de formação e passei a maior parte da carreira transformando imagens de satélite e dados territoriais em
            ferramentas de decisão. Moro em Florianópolis.
          </p>
          <p>
            Comecei em 2008 num laboratório de geoprocessamento, passei pelo INPE e pela Funcate, e em 2013 co-fundei a
            Agrosatélite, onde fui CTO por mais de dez anos. Lá, ajudei a criar as metodologias de culturas agrícolas e florestas
            plantadas do MapBiomas e coordenei a infraestrutura de dados do inventário LULUCF da Quarta Comunicação Nacional do
            Brasil ao UNFCCC. Em 2023 a empresa foi adquirida pela Serasa Experian, onde liderei desenvolvimento de produto até 2025.
          </p>
          <p>
            Hoje atuo como consultor pela <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a> e
            uso este espaço para o que não cabe num currículo: leituras, ideias e experimentos em filosofia, história, tecnologia
            e outras curiosidades.
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
