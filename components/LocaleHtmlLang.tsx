'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/site';

/** Static export has a single root layout; set <html lang> per page on the client. */
export default function LocaleHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR';
  }, [locale]);
  return null;
}
