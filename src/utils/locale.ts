import type { Locale } from '../config';
import { LOCALES } from '../config';

export function localePath(lang: Locale, path = ''): string {
  const clean = path.replace(/^\//, '');
  return `/${lang}/${clean}`.replace(/\/$/, '') + (clean ? '/' : '/');
}

export function switchLocalePath(currentLang: Locale, targetLang: Locale, subPath: string): string {
  return localePath(targetLang, subPath);
}

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLang] = url.pathname.split('/');
  if (LOCALES.includes(maybeLang as Locale)) return maybeLang as Locale;
  return 'en';
}
