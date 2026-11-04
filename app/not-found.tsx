import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <PageShell>
      <Section tone="light">
        <p className="eyebrow">404</p>
        <h1 className="heading-lg mt-3">Página não encontrada</h1>
        <div className="mt-8"><Button href="/" variant="primary">Voltar ao início</Button></div>
      </Section>
    </PageShell>
  );
}
