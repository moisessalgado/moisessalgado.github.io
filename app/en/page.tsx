import type { Metadata } from 'next';
import OnePage from '@/components/OnePage';

export const metadata: Metadata = {
  title: 'Texts, ideas and curiosities',
  description:
    "Personal site of Moises Salgado: from Pindamonhangaba, a family man and observer of life's little things. Texts, ideas and curiosities (mostly in Portuguese).",
  alternates: { canonical: '/en/', languages: { 'pt-BR': '/', en: '/en/' } },
};

export default function HomeEn() {
  return <OnePage locale="en" />;
}
