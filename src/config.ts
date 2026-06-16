export const SITE = {
  name: 'Tool Scout Lab',
  url: 'https://toolscoutlab.com',
  author: 'Tool Scout Lab Team',
  email: 'contact@toolscoutlab.com',
} as const;

/** 替换为你的真实联盟链接 */
export const AFFILIATE_LINKS = {
  surfshark: 'https://YOUR-SURFSHARK-AFFILIATE-LINK',
  nordvpn: 'https://YOUR-NORDVPN-AFFILIATE-LINK',
  hostinger: 'https://YOUR-HOSTINGER-AFFILIATE-LINK',
} as const;

export const isRealAffiliateLink = (url: string) =>
  /^https?:\/\//.test(url) && !/YOUR-|example\.com/i.test(url);

export const LOCALES = ['en', 'de', 'ja', 'fr', 'es', 'pt', 'th', 'vn'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  ja: '日本語',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  th: 'ไทย',
  vn: 'Tiếng Việt',
};
