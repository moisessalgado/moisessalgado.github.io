import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Texts, ideas and curiosities',
  description:
    "Personal site of Moises Salgado: from Pindamonhangaba, a family man and observer of life's little things. Texts, ideas and curiosities (mostly in Portuguese).",
  alternates: { canonical: '/en/', languages: { 'pt-BR': '/', en: '/en/' } },
};

export default function HomeEn() {
  return (
    <PageShell locale="en" alt={{ pt: '/', en: '/en/' }}>
      <section className="bg-paper-light dark:bg-ink-800">
        <div className="container-x py-14 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Pindamonhangaba · Florianópolis</p>
            <h1 className="heading-xl mt-3">Moises Salgado</h1>
            <p className="mt-5 text-lg text-ink-400 dark:text-paper-light/90">
              From Pindamonhangaba, a family man and observer of life&apos;s little things. This is my public notebook: texts,
              ideas and curiosities (mostly in Portuguese).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/en/about/" variant="primary">About me <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/en/professional/" variant="secondary">Professional</Button>
              <Button href="/blog/" variant="ghost">Blog (PT)</Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
