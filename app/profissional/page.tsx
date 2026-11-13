import type { Metadata } from 'next';
import { Layers, Satellite, Leaf, Cpu } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Profissional',
  description:
    'Trajetória profissional de Moises Salgado: co-fundador e CTO da Agrosatélite (adquirida pela Serasa Experian em 2023) e fundador da Coordenada Geo.',
  alternates: { canonical: '/profissional/', languages: { 'pt-BR': '/profissional/', en: '/en/professional/' } },
};

const link = 'font-medium text-ink underline underline-offset-4 hover:text-ink-400 dark:text-paper-light dark:hover:text-paper-dark';

const projetos = [
  'Canasat: mapeamento da cana-de-açúcar no Centro-Sul do Brasil, há cerca de 20 anos',
  'Moratória da Soja: monitoramento do plantio de soja em áreas desmatadas da Amazônia, há cerca de 15 anos',
  'Metodologias de culturas agrícolas e florestas plantadas do MapBiomas',
  'Inventário Nacional de Gases de Efeito Estufa (setor de mudança de uso da terra), desde 2018: coordenei a infraestrutura de TI e o banco de dados do inventário LULUCF na Quarta Comunicação Nacional ao UNFCCC',
  'Plataformas abertas: Agroideal, Observatório da Restauração e do Reflorestamento do Brasil e Radar de Sustentabilidade da Soja no MATOPIBA',
  'SIMFaz, sistema de monitoramento de fazendas, com análise no nível da propriedade rural',
];

const areas = [
  { icon: Satellite, title: 'Sensoriamento remoto e geoprocessamento', body: 'Mapeamento e monitoramento por satélite, uso e mudança de uso da terra.' },
  { icon: Layers, title: 'Dados e WebGIS', body: 'Arquitetura geoespacial e infraestrutura de dados espaciais.' },
  { icon: Leaf, title: 'Clima e carbono', body: 'Inventários de gases de efeito estufa e frameworks para decisão.' },
  { icon: Cpu, title: 'Produto, IA e liderança técnica', body: 'Times de engenharia e produto, e modelos de IA aplicados a imagens de satélite.' },
];

const fontes = [
  { label: 'Serasa Experian e Agrosatélite: sinergia de propósitos e soluções (Serasa Experian, 2024)', href: 'https://www.serasaexperian.com.br/conteudos/serasa-experian-e-agrosatelite-sinergia-de-propositos-e-solucoes-fortalece-atuacao-no-agronegocio/' },
  { label: 'Agrosatélite agora é parte da Serasa Experian (MundoGEO, jun/2023)', href: 'https://mundogeo.com/2023/06/20/agrosatelite-agora-e-parte-da-serasa-experian/' },
  { label: 'Com Agrosatélite, Serasa amplia serviços para agronegócio (Forbes Agro, mai/2023)', href: 'https://forbes.com.br/forbes-agro/2023/05/com-agrosatelite-serasa-amplia-servicos-para-agronegocio/' },
  { label: 'Trajetória da Agrosatélite: quando tecnologia, ciência e inovação… (LinkedIn)', href: 'https://www.linkedin.com/pulse/trajet%C3%B3ria-da-agrosat%C3%A9lite-quando-tecnologia-ci%C3%AAncia-inova%C3%A7%C3%A3o-risso-kykjf/' },
];

export default function Profissional() {
  return (
    <PageShell alt={{ pt: '/profissional/', en: '/en/professional/' }}>
      <Section tone="light">
        <PageTitle
          eyebrow="Profissional"
          title="Minha trajetória profissional"
          lead="Mais de uma década em geotecnologia: da Agrosatélite, que co-fundei, à Coordenada Geo, minha nova fase dedicada a consultoria e projetos."
        />
        <div className="mt-10 max-w-3xl space-y-5 text-base leading-[1.8]">
          <h2 className="heading-md">Agrosatélite (2013 a 2023)</h2>
          <p>
            Comecei em 2008 num laboratório de geoprocessamento na Universidade de Taubaté e passei pela Funcate e pelo INPE.
            Em 2013, co-fundei a Agrosatélite com Bernardo Rudorff, Daniel Aguiar e Joel Risso, e fui CTO por mais de dez anos.
          </p>
          <p>
            A Agrosatélite se tornou referência em geoprocessamento e monitoramento agrícola por imagens de satélite, sem abandonar
            o perfil técnico-científico. Mapeou culturas no Brasil e também na Argentina, no Paraguai e na China. Alguns dos projetos
            e plataformas em que trabalhamos:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-ink dark:marker:text-paper-light">
            {projetos.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <h3 className="font-display text-xl font-bold text-ink dark:text-paper-light">A aquisição pela Serasa Experian</h3>
          <p>
            Em maio de 2023, a Serasa Experian adquiriu a Agrosatélite para ampliar sua frente de agronegócio (ESG, crédito e
            seguro rural), incorporando um acervo de dez anos de safras mapeadas. Com a integração, a Serasa passou a estimar que
            poderia monitorar 100% do território brasileiro para soja, milho, algodão, cana e café. A linha de produtos de mapas
            virou o Land Use (uso da terra, com foco ESG) e o Crop Maps (mapeamento das principais culturas) na plataforma da Serasa.
          </p>
          <p>
            Depois da aquisição, liderei o desenvolvimento de produto na Serasa Experian até 2025.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <div className="max-w-3xl">
          <h2 className="heading-md">Coordenada Geo (2025 até hoje)</h2>
          <p className="mt-5 text-base leading-[1.8]">
            A <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a> é a minha nova fase
            profissional, dedicada a consultoria e projetos. Atendo o setor privado, o setor público e organizações de impacto, e o
            trabalho se concentra em:
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <Card key={a.title} title={a.title} body={a.body} icon={<a.icon className="h-5 w-5" />} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={SITE.company.url} variant="primary">coordenadageo.com.br</Button>
          <Button href={`mailto:${SITE.contact.email}`} variant="secondary">{SITE.contact.email}</Button>
        </div>
      </Section>

      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-display text-xl font-bold text-ink dark:text-paper-light">Para saber mais</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm marker:text-ink dark:marker:text-paper-light">
            {fontes.map((f) => (
              <li key={f.href}>
                <a className={link} href={f.href} target="_blank" rel="noopener noreferrer">{f.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageShell>
  );
}
