import Header from './Header';
import LocaleHtmlLang from './LocaleHtmlLang';
import type { Locale } from '@/lib/site';

export default function PageShell({
  locale = 'pt',
  alt,
  children,
}: {
  locale?: Locale;
  alt?: { pt: string; en: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <Header locale={locale} alt={alt} />
      <main className="flex-1">{children}</main>
    </>
  );
}
