import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Remote sensing, geoprocessing and ideas',
  description:
    'Personal site of Moises Salgado: remote sensing and geoprocessing consultant, writing about philosophy, history, technology and curiosities.',
  alternates: { canonical: '/en/', languages: { 'pt-BR': '/', en: '/en/' } },
};

export default function HomeEn() {
  return (
    <PageShell locale="en" alt={{ pt: '/', en: '/en/' }}>
      <section className="bg-sand-light dark:bg-ink-800">
        <div className="container-x py-14 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Remote sensing · Geoprocessing · Ideas</p>
            <h1 className="heading-xl mt-3">Moises Salgado</h1>
            <p className="mt-5 text-lg text-ink-400 dark:text-sand-light/90">
              I work with satellite and territorial data. This site is also where I write about what interests me beyond work:
              philosophy, history, technology and curiosities (mostly in Portuguese).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/en/consulting/" variant="primary">Consulting <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/en/about/" variant="secondary">About me</Button>
              <Button href="/escritos/" variant="ghost">Writing (PT)</Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
