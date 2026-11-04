import type { Metadata } from 'next';
import { Layers, Satellite, Leaf, Cpu } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Consulting',
  description: 'Remote sensing, geoprocessing and geospatial and climate intelligence consulting, through Coordenada Geo.',
  alternates: { canonical: '/en/consulting/', languages: { 'pt-BR': '/consultoria/', en: '/en/consulting/' } },
};

const areas = [
  { icon: Layers, title: 'Geospatial architecture', body: 'WebGIS and spatial data infrastructure for operations and governance.' },
  { icon: Satellite, title: 'Satellite monitoring', body: 'Land use and land-use change at territorial scale.' },
  { icon: Leaf, title: 'Climate and carbon', body: 'Greenhouse gas inventories and decision frameworks.' },
  { icon: Cpu, title: 'AI and remote sensing', body: 'Models applied to satellite imagery.' },
];

const credentials = [
  'Former CTO and co-founder of Agrosatélite (acquired by Serasa Experian in 2023)',
  'Co-created the MapBiomas croplands and planted forests methodologies',
  "Coordinated IT and database for the LULUCF inventory in Brazil's Fourth National Communication to the UNFCCC",
  '10+ years leading technology, product and R&D in geospatial intelligence',
];

export default function Consulting() {
  return (
    <PageShell locale="en" alt={{ pt: '/consultoria/', en: '/en/consulting/' }}>
      <Section tone="light">
        <PageTitle
          eyebrow="Consulting"
          title="Remote sensing and geoprocessing"
          lead="I design and implement systems that turn satellite data, land use and climate variables into decision-ready information for the private sector, government and impact organizations."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <Card key={a.title} title={a.title} body={a.body} icon={<a.icon className="h-5 w-5" />} />
          ))}
        </div>
      </Section>
      <Section tone="sand">
        <h2 className="heading-md">Credentials</h2>
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
