import type { Metadata } from 'next';
import { Layers, Satellite, Leaf, Cpu } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Professional',
  description:
    'Professional background of Moises Salgado: co-founder and CTO of Agrosatélite (acquired by Serasa Experian in 2023) and founder of Coordenada Geo.',
  alternates: { canonical: '/en/professional/', languages: { 'pt-BR': '/profissional/', en: '/en/professional/' } },
};

const link = 'font-medium text-ink underline underline-offset-4 hover:text-ink-400 dark:text-paper-light dark:hover:text-paper-dark';

const projects = [
  'Canasat: sugarcane mapping in Brazil’s Center-South, for about 20 years',
  'Soy Moratorium: monitoring of soy planting on deforested Amazon land, for about 15 years',
  'MapBiomas croplands and planted forests methodologies',
  'National Greenhouse Gas Inventory (land-use change sector), since 2018: I coordinated IT and database for the LULUCF inventory in Brazil’s Fourth National Communication to the UNFCCC',
  'Open platforms: Agroideal, the Brazilian Restoration and Reforestation Observatory and the MATOPIBA Soy Sustainability Radar',
  'SIMFaz, a farm monitoring system with property-level analysis',
];

const areas = [
  { icon: Satellite, title: 'Remote sensing and geoprocessing', body: 'Satellite mapping and monitoring, land use and land-use change.' },
  { icon: Layers, title: 'Data and WebGIS', body: 'Geospatial architecture and spatial data infrastructure.' },
  { icon: Leaf, title: 'Climate and carbon', body: 'Greenhouse gas inventories and decision frameworks.' },
  { icon: Cpu, title: 'Product, AI and technical leadership', body: 'Engineering and product teams, and AI models applied to satellite imagery.' },
];

const sources = [
  { label: 'Serasa Experian and Agrosatélite: synergy of purposes and solutions (Serasa Experian, 2024, PT)', href: 'https://www.serasaexperian.com.br/conteudos/serasa-experian-e-agrosatelite-sinergia-de-propositos-e-solucoes-fortalece-atuacao-no-agronegocio/' },
  { label: 'Agrosatélite is now part of Serasa Experian (MundoGEO, Jun 2023, PT)', href: 'https://mundogeo.com/2023/06/20/agrosatelite-agora-e-parte-da-serasa-experian/' },
  { label: 'With Agrosatélite, Serasa expands services for agribusiness (Forbes Agro, May 2023, PT)', href: 'https://forbes.com.br/forbes-agro/2023/05/com-agrosatelite-serasa-amplia-servicos-para-agronegocio/' },
  { label: 'Agrosatélite’s story: when technology, science and innovation… (LinkedIn, PT)', href: 'https://www.linkedin.com/pulse/trajet%C3%B3ria-da-agrosat%C3%A9lite-quando-tecnologia-ci%C3%AAncia-inova%C3%A7%C3%A3o-risso-kykjf/' },
];

export default function Professional() {
  return (
    <PageShell locale="en" alt={{ pt: '/profissional/', en: '/en/professional/' }}>
      <Section tone="light">
        <PageTitle
          eyebrow="Professional"
          title="My professional background"
          lead="Over a decade in geotechnology: from Agrosatélite, which I co-founded, to Coordenada Geo, my new phase dedicated to consulting and projects."
        />
        <div className="mt-10 max-w-3xl space-y-5 text-base leading-[1.8]">
          <h2 className="heading-md">Agrosatélite (2013 to 2023)</h2>
          <p>
            I started in 2008 in a geoprocessing lab at the University of Taubaté and worked at Funcate and INPE. In 2013 I
            co-founded Agrosatélite with Bernardo Rudorff, Daniel Aguiar and Joel Risso, and was its CTO for over ten years.
          </p>
          <p>
            Agrosatélite became a reference in geoprocessing and agricultural monitoring from satellite imagery, without giving up
            its technical-scientific profile. It mapped crops in Brazil and also in Argentina, Paraguay and China. Some of the
            projects and platforms we worked on:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-ink dark:marker:text-paper-light">
            {projects.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <h3 className="font-display text-xl font-bold text-ink dark:text-paper-light">The Serasa Experian acquisition</h3>
          <p>
            In May 2023, Serasa Experian acquired Agrosatélite to expand its agribusiness unit (ESG, credit and rural insurance),
            adding a ten-year archive of mapped harvests. With the integration, Serasa estimated it could monitor 100% of Brazil’s
            territory for soy, corn, cotton, sugarcane and coffee. The maps product line became Land Use (land use, with an ESG
            focus) and Crop Maps (mapping of the main crops) on Serasa’s platform.
          </p>
          <p>After the acquisition, I led product development at Serasa Experian until 2025.</p>
        </div>
      </Section>

      <Section tone="paper">
        <div className="max-w-3xl">
          <h2 className="heading-md">Coordenada Geo (2025 to today)</h2>
          <p className="mt-5 text-base leading-[1.8]">
            <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a> is my new professional
            phase, dedicated to consulting and projects. I work with the private sector, government and impact organizations, focused on:
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
          <h2 className="font-display text-xl font-bold text-ink dark:text-paper-light">Learn more</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm marker:text-ink dark:marker:text-paper-light">
            {sources.map((f) => (
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
