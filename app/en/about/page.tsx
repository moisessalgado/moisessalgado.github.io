import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Moises Salgado: agronomist by training, with over a decade in remote sensing and geoprocessing.',
  alternates: { canonical: '/en/about/', languages: { 'pt-BR': '/sobre/', en: '/en/about/' } },
};

const link = 'font-medium text-terracota underline underline-offset-4 hover:text-terracota-dark dark:text-ocre';

export default function About() {
  return (
    <PageShell locale="en" alt={{ pt: '/sobre/', en: '/en/about/' }}>
      <Section tone="light">
        <PageTitle eyebrow="About" title="Hi, I'm Moisés" />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-[1.8]">
          <p>
            I&apos;m an agronomist by training and have spent most of my career turning satellite imagery and territorial data into
            decision tools. I live in Florianópolis, Brazil.
          </p>
          <p>
            I started in 2008 in a geoprocessing lab, worked at INPE and Funcate, and in 2013 co-founded Agrosatélite, where I was
            CTO for over ten years. There I helped create the MapBiomas croplands and planted forests methodologies and coordinated
            the data infrastructure of the LULUCF inventory in Brazil&apos;s Fourth National Communication to the UNFCCC. The company
            was acquired by Serasa Experian in 2023, where I led product development until 2025.
          </p>
          <p>
            Today I consult through <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a>, and
            use this space for what doesn&apos;t fit in a résumé: readings, ideas and experiments in philosophy, history, technology
            and other curiosities.
          </p>
          <p>
            The full history is on <a className={link} href={SITE.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>. To get
            in touch: <a className={link} href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
