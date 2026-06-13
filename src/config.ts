export const SITE = {
  name: 'Global Affiliate Hub',
  url: 'https://global-affiliate-site.pages.dev',
  author: 'SmartChoice Team',
  email: 'meiguo1928@gmail.com',
} as const;

/** 替换为你的真实联盟链接 */
export const AFFILIATE_LINKS = {
  surfshark: 'https://YOUR-SURFSHARK-AFFILIATE-LINK',
  nordvpn: 'https://YOUR-NORDVPN-AFFILIATE-LINK',
  hostinger: 'https://YOUR-HOSTINGER-AFFILIATE-LINK',
} as const;

export const LOCALES = ['en', 'de', 'es', 'ja', 'th'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  ja: '日本語',
  th: 'ไทย',
};
