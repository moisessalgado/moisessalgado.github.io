import type { Metadata } from 'next';
import { Layers, Satellite, Leaf, Cpu } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Consultoria',
  description: 'Consultoria em sensoriamento remoto, geoprocessamento e inteligência geoespacial e climática, pela Coordenada Geo.',
  alternates: { canonical: '/consultoria/', languages: { 'pt-BR': '/consultoria/', en: '/en/consulting/' } },
};

const areas = [
  { icon: Layers, title: 'Arquitetura geoespacial', body: 'WebGIS e infraestrutura de dados espaciais para operação e governança.' },
  { icon: Satellite, title: 'Monitoramento por satélite', body: 'Uso e mudança de uso da terra em escala territorial.' },
  { icon: Leaf, title: 'Clima e carbono', body: 'Inventários de gases de efeito estufa e frameworks para decisão.' },
  { icon: Cpu, title: 'IA e sensoriamento remoto', body: 'Modelos aplicados a imagens de satélite.' },
];

const credentials = [
  'Ex-CTO e co-fundador da Agrosatélite (adquirida pela Serasa Experian em 2023)',
  'Co-criação das metodologias de culturas agrícolas e florestas plantadas do MapBiomas',
  'Coordenação de TI e banco de dados do inventário LULUCF na Quarta Comunicação Nacional ao UNFCCC',
  'Mais de 10 anos liderando tecnologia, produto e P&D em inteligência geoespacial',
];

export default function Consultoria() {
  return (
    <PageShell alt={{ pt: '/consultoria/', en: '/en/consulting/' }}>
      <Section tone="light">
        <PageTitle
          eyebrow="Consultoria"
          title="Sensoriamento remoto e geoprocessamento"
          lead="Desenho e implemento sistemas que convertem dados de satélite, uso da terra e clima em informação para decisão, para o setor privado, o setor público e organizações de impacto."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <Card key={a.title} title={a.title} body={a.body} icon={<a.icon className="h-5 w-5" />} />
          ))}
        </div>
      </Section>
      <Section tone="sand">
        <h2 className="heading-md">Credenciais</h2>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 marker:text-terracota dark:marker:text-ocre">
          {credentials.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={SITE.company.url} variant="primary">coordenadageo.com.br</Button>
          <Button href={`mailto:${SITE.contact.email}`} variant="secondary">{SITE.contact.email}</Button>
        </div>
      </Section>
    </PageShell>
  );
}
