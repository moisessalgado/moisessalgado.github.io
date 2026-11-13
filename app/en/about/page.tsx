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

const link = 'font-medium text-ink underline underline-offset-4 hover:text-ink-600 dark:text-paper-light';

export default function About() {
  return (
    <PageShell locale="en" alt={{ pt: '/sobre/', en: '/en/about/' }}>
      <Section tone="light">
        <PageTitle eyebrow="About" title="Hi, I'm Moisés" />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-[1.8]">
          <p>
            I&apos;m from Pindamonhangaba, a family man and an observer of life&apos;s little things. An agronomist by training, I
            have spent most of my career turning satellite imagery and territorial data into decision tools. I live in
            Florianópolis, Brazil.
          </p>
          <p>
            My career started in geoprocessing in 2008. I co-founded Agrosatélite, acquired by Serasa Experian in 2023, and today
            I consult through <a className={link} href={SITE.company.url} target="_blank" rel="noopener noreferrer">Coordenada Geo</a>. The
            details are on the <a className={link} href="/en/professional/">Professional</a> page.
          </p>
          <p>
            This space is for what doesn&apos;t fit in a résumé: what I read, think and notice along the way.
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
