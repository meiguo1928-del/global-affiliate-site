import type { Locale } from '../config';

type UiStrings = {
  nav: { home: string; about: string; testing: string; contact: string; privacy: string };
  disclosure: { title: string; text: string };
  footer: { rights: string; disclosure: string };
  home: {
    title: string;
    subtitle: string;
    helpTitle: string;
    helpBullets: string[];
    dealsTitle: string;
    dealsSubtitle: string;
    dealBadges: { ai: string; hosting: string; security: string };
    dealButtons: { ai: string; hosting: string; security: string };
    latest: string;
    readMore: string;
    tracksTitle: string;
    tracks: { title: string; desc: string; href: string }[];
    emptyTrack: string;
  };
  about: { title: string; body: string[] };
  testing: {
    title: string;
    intro: string;
    sections: { heading: string; body: string[] }[];
  };
  contact: { title: string; body: string; emailLabel: string };
  privacy: { title: string; sections: { heading: string; body: string }[] };
  article: {
    updated: string;
    ctaIntro: string;
    ctaPending: string;
    ctaSurfshark: string;
    ctaNordvpn: string;
    ctaHostinger: string;
  };
};

export const ui: Record<Locale, UiStrings> = {
  en: {
    nav: { home: 'Home', about: 'About', testing: 'How We Test', contact: 'Contact', privacy: 'Privacy' },
    disclosure: {
      title: 'Affiliate Disclosure',
      text: 'This article contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.',
    },
    footer: {
      rights: 'All rights reserved.',
      disclosure: 'Affiliate Disclosure: We earn commissions from qualifying purchases.',
    },
    home: {
      title: 'Tool Scout Lab: Buy Better, Spend Less',
      subtitle: 'AI tools, business software, hosting, and security guides focused on price, value, and results.',
      helpTitle: 'How this site helps you',
      helpBullets: [
        'Compare prices before buying software.',
        'Find alternatives when one tool is too expensive.',
        'See who should buy and who should skip each product.',
      ],
      dealsTitle: 'Featured Buying Shortcuts',
      dealsSubtitle: 'Start with the most common comparison paths. Check pricing and terms before purchasing.',
      dealBadges: {
        ai: 'AI & Marketing',
        hosting: 'Website Hosting',
        security: 'VPN & Security',
      },
      dealButtons: {
        ai: 'Compare AI tools',
        hosting: 'Compare hosting',
        security: 'Compare VPNs',
      },
      latest: 'Latest Guides',
      readMore: 'Read guide',
      tracksTitle: 'Popular Buying Tracks',
      tracks: [
        { title: 'AI Tools', desc: 'Find cheaper alternatives and practical pricing breakdowns.', href: 'category/ai-tools' },
        { title: 'Hosting', desc: 'Pick reliable hosting with the best value for beginners.', href: 'category/hosting' },
        { title: 'Security', desc: 'Compare VPN and security products before you pay.', href: 'category/security' },
      ],
      emptyTrack: 'No guides in this category yet. More buying guides are coming soon.',
    },
    about: {
      title: 'About Us',
      body: [
        'Tool Scout Lab publishes independent comparison guides for AI tools, web hosting, security software, and small-business SaaS.',
        'Our reviews are based on publicly available specs, pricing pages, and hands-on testing notes where applicable. We clearly label affiliate links.',
        'We do not accept paid placements in exchange for guaranteed positive reviews.',
        'We serve readers worldwide in multiple languages.',
      ],
    },
    testing: {
      title: 'How We Test',
      intro: 'Our goal is to help readers make safer, clearer buying decisions. We do not publish fake hands-on claims, invented prices, or guaranteed positive coverage.',
      sections: [
        {
          heading: 'What we verify',
          body: [
            'We check public pricing pages, plan limits, core features, renewal terms, and commercial-use restrictions when available.',
            'For tools we have not personally tested, we describe the analysis as research-based and avoid claiming direct usage.',
          ],
        },
        {
          heading: 'How we compare products',
          body: [
            'We focus on practical buying criteria: total cost, ease of setup, use-case fit, support expectations, and upgrade path.',
            'We prioritize high-intent comparisons such as pricing, alternatives, and tool-vs-tool decisions.',
          ],
        },
        {
          heading: 'Affiliate disclosure',
          body: [
            'Some outbound links may become affiliate links after partner approval. This does not change the price paid by readers.',
            'Affiliate relationships do not guarantee positive reviews, rankings, or recommendations.',
          ],
        },
        {
          heading: 'Update policy',
          body: [
            'Software pricing and features change frequently. We use article update dates to show when a guide was last reviewed.',
            'Readers should always confirm final pricing and terms on the official vendor website before purchase.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      body: 'Questions, corrections, or partnership inquiries — reach us by email. We publish independent product comparisons and may earn affiliate commissions.',
      emailLabel: 'Email',
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Who we are',
          body: 'Tool Scout Lab operates this website as an independent publisher. Please use our Contact page for support requests.',
        },
        {
          heading: 'Data we collect',
          body: 'We use Google Analytics to understand traffic patterns (pages visited, country, device type). Affiliate networks may set cookies when you click outbound links.',
        },
        {
          heading: 'Your rights (GDPR)',
          body: 'EU/EEA visitors may request access or deletion of personal data we hold. Email us with your request.',
        },
        {
          heading: 'Affiliate links',
          body: 'Outbound links to merchants may track referrals. This does not change the price you pay.',
        },
      ],
    },
    article: {
      updated: 'Last updated',
      ctaIntro: 'Ready to compare live pricing and current deals?',
      ctaPending: 'Affiliate links will be added after partner approval.',
      ctaSurfshark: 'Check Surfshark pricing',
      ctaNordvpn: 'Check NordVPN pricing',
      ctaHostinger: 'Check Hostinger pricing',
    },
  },
  de: {
    nav: { home: 'Start', about: 'Über uns', testing: 'Testmethode', contact: 'Kontakt', privacy: 'Datenschutz' },
    disclosure: {
      title: 'Affiliate-Hinweis',
      text: 'Dieser Artikel enthält Affiliate-Links. Bei einem Kauf über unsere Links erhalten wir ggf. eine Provision — für Sie ohne Mehrkosten.',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      disclosure: 'Affiliate-Hinweis: Wir verdienen Provisionen bei qualifizierten Käufen.',
    },
    home: {
      title: 'Tool Scout Lab: Besser kaufen, weniger zahlen',
      subtitle: 'Vergleiche zu KI-Tools, Business-Software, Hosting und Sicherheit — mit Fokus auf Preis und Nutzen.',
      helpTitle: 'So hilft dir diese Website',
      helpBullets: [
        'Preise vor dem Kauf vergleichen.',
        'Alternativen finden, wenn ein Tool zu teuer ist.',
        'Schnell prüfen, für wen sich ein Produkt lohnt.',
      ],
      dealsTitle: 'Empfohlene Kaufpfade',
      dealsSubtitle: 'Starten Sie mit häufig genutzten Vergleichen. Vor dem Kauf Preise und Bedingungen prüfen.',
      dealBadges: {
        ai: 'KI & Marketing',
        hosting: 'Webhosting',
        security: 'VPN & Sicherheit',
      },
      dealButtons: {
        ai: 'KI-Tools vergleichen',
        hosting: 'Hosting vergleichen',
        security: 'VPNs vergleichen',
      },
      latest: 'Neueste Ratgeber',
      readMore: 'Ratgeber lesen',
      tracksTitle: 'Beliebte Kauf-Routen',
      tracks: [
        { title: 'KI-Tools', desc: 'Günstige Alternativen und Preisvergleiche.', href: 'category/ai-tools' },
        { title: 'Hosting', desc: 'Zuverlässiges Hosting mit gutem Preis-Leistungs-Verhältnis.', href: 'category/hosting' },
        { title: 'Sicherheit', desc: 'VPN- und Sicherheitsprodukte vor dem Kauf vergleichen.', href: 'category/security' },
      ],
      emptyTrack: 'Für diese Kategorie sind noch keine Beiträge verfügbar.',
    },
    about: {
      title: 'Über uns',
      body: [
        'Tool Scout Lab veröffentlicht unabhängige Vergleichsratgeber zu KI-Tools, Webhosting, Sicherheitssoftware und SaaS für kleine Unternehmen.',
        'Unsere Bewertungen basieren auf öffentlichen Spezifikationen, Preisseiten und — wo möglich — eigenen Tests. Affiliate-Links sind gekennzeichnet.',
        'Wir erreichen Leser weltweit in mehreren Sprachen.',
      ],
    },
    testing: {
      title: 'Unsere Testmethode',
      intro: 'Unser Ziel ist eine sachliche Kaufentscheidung ohne erfundene Erfahrungsberichte, falsche Preise oder garantierte positive Bewertungen.',
      sections: [
        {
          heading: 'Was wir prüfen',
          body: [
            'Wir prüfen öffentliche Preisseiten, Tarifgrenzen, Kernfunktionen, Verlängerungsbedingungen und kommerzielle Nutzungsrechte, sofern verfügbar.',
            'Wenn wir ein Produkt nicht selbst getestet haben, kennzeichnen wir die Bewertung als recherchebasiert und behaupten keine direkte Nutzung.',
          ],
        },
        {
          heading: 'Wie wir vergleichen',
          body: [
            'Wir bewerten Gesamtkosten, Einrichtung, Nutzungsszenario, Support-Erwartungen und Upgrade-Pfad.',
            'Der Fokus liegt auf kaufnahen Vergleichen: Preise, Alternativen und Tool-gegen-Tool-Entscheidungen.',
          ],
        },
        {
          heading: 'Affiliate-Hinweis',
          body: [
            'Einige externe Links können nach Partnerfreigabe Affiliate-Links werden. Der Preis für Leser ändert sich dadurch nicht.',
            'Affiliate-Beziehungen garantieren keine positiven Bewertungen oder Platzierungen.',
          ],
        },
        {
          heading: 'Aktualisierung',
          body: [
            'Preise und Funktionen ändern sich häufig. Das Aktualisierungsdatum zeigt, wann ein Ratgeber zuletzt geprüft wurde.',
            'Endpreise und Bedingungen sollten immer auf der offiziellen Anbieterwebsite bestätigt werden.',
          ],
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      body: 'Fragen, Korrekturen oder Kooperationen — schreiben Sie uns per E-Mail.',
      emailLabel: 'E-Mail',
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Verantwortlicher',
          body: 'Tool Scout Lab betreibt diese Website als unabhängiger Publisher. Für Anfragen nutzen Sie bitte die Kontaktseite.',
        },
        {
          heading: 'Erhobene Daten',
          body: 'Wir nutzen Google Analytics (besuchte Seiten, Land, Gerätetyp). Affiliate-Netzwerke können Cookies setzen, wenn Sie auf externe Links klicken.',
        },
        {
          heading: 'Ihre Rechte (DSGVO)',
          body: 'Besucher aus EU/EWR können Auskunft oder Löschung personenbezogener Daten verlangen. Senden Sie uns eine E-Mail.',
        },
        {
          heading: 'Affiliate-Links',
          body: 'Externe Händlerlinks können Referrals tracken. Der Preis für Sie ändert sich dadurch nicht.',
        },
      ],
    },
    article: {
      updated: 'Zuletzt aktualisiert',
      ctaIntro: 'Bereit, aktuelle Preise und Angebote zu vergleichen?',
      ctaPending: 'Affiliate-Links werden nach Partnerfreigabe ergänzt.',
      ctaSurfshark: 'Surfshark-Preise ansehen',
      ctaNordvpn: 'NordVPN-Preise ansehen',
      ctaHostinger: 'Hostinger-Preise ansehen',
    },
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', testing: 'Méthode', contact: 'Contact', privacy: 'Confidentialité' },
    disclosure: {
      title: 'Divulgation d’affiliation',
      text: 'Cet article peut contenir des liens d’affiliation. Nous pouvons recevoir une commission sans coût supplémentaire pour vous.',
    },
    footer: {
      rights: 'Tous droits réservés.',
      disclosure: 'Divulgation : nous pouvons percevoir des commissions sur certains achats qualifiés.',
    },
    home: {
      title: 'Tool Scout Lab : acheter mieux, dépenser moins',
      subtitle: 'Guides sur les outils IA, logiciels SaaS, hébergement et sécurité, avec un focus sur le prix, la conformité et la valeur réelle.',
      helpTitle: 'Comment ce site vous aide',
      helpBullets: [
        'Comparer les prix avant d’acheter un logiciel.',
        'Trouver des alternatives lorsqu’un outil devient trop coûteux.',
        'Identifier rapidement à qui un produit convient ou ne convient pas.',
      ],
      dealsTitle: 'Parcours de comparaison recommandés',
      dealsSubtitle: 'Commencez par les comparaisons les plus utiles. Vérifiez toujours les prix et conditions avant achat.',
      dealBadges: {
        ai: 'IA & Marketing',
        hosting: 'Hébergement web',
        security: 'VPN & Sécurité',
      },
      dealButtons: {
        ai: 'Comparer les outils IA',
        hosting: 'Comparer l’hébergement',
        security: 'Comparer les VPN',
      },
      latest: 'Guides récents',
      readMore: 'Lire le guide',
      tracksTitle: 'Parcours d’achat populaires',
      tracks: [
        { title: 'Outils IA', desc: 'Comparer les prix, alternatives et usages professionnels.', href: 'category/ai-tools' },
        { title: 'Hébergement', desc: 'Choisir un hébergement fiable et adapté aux petites entreprises.', href: 'category/hosting' },
        { title: 'Sécurité', desc: 'Comparer VPN et outils de sécurité avant de payer.', href: 'category/security' },
      ],
      emptyTrack: 'Aucun guide dans cette catégorie pour le moment.',
    },
    about: {
      title: 'À propos',
      body: [
        'Tool Scout Lab publie des guides comparatifs indépendants sur les outils IA, l’hébergement web, la sécurité et les logiciels SaaS pour petites entreprises.',
        'Nos analyses s’appuient sur des informations publiques, des pages de prix et des notes de test lorsque disponibles. Les liens d’affiliation sont clairement signalés.',
        'Nous n’acceptons pas de placements payants en échange d’avis positifs garantis.',
      ],
    },
    testing: {
      title: 'Notre méthode',
      intro: 'Notre objectif est d’aider les lecteurs à prendre des décisions d’achat plus sûres et plus rationnelles. Nous ne publions pas de fausses expériences, de prix inventés ni d’avis positifs garantis.',
      sections: [
        {
          heading: 'Ce que nous vérifions',
          body: [
            'Nous examinons les pages tarifaires publiques, limites de forfaits, fonctions clés, conditions de renouvellement, conformité et restrictions d’usage commercial lorsque disponibles.',
            'Lorsqu’un outil n’a pas été testé directement, nous le présentons comme une analyse fondée sur la recherche et évitons toute affirmation d’usage direct.',
          ],
        },
        {
          heading: 'Comment nous comparons',
          body: [
            'Nous évaluons le coût total, la facilité de configuration, l’adéquation au cas d’usage, les attentes de support et la trajectoire de montée en gamme.',
            'Nous privilégions les comparaisons proches de l’achat : prix, alternatives et choix entre outils.',
          ],
        },
        {
          heading: 'Affiliation',
          body: [
            'Certains liens externes peuvent devenir des liens d’affiliation après approbation partenaire. Le prix payé par le lecteur ne change pas.',
            'Une relation d’affiliation ne garantit jamais un avis positif, un classement favorable ou une recommandation.',
          ],
        },
        {
          heading: 'Mises à jour',
          body: [
            'Les prix et fonctionnalités changent souvent. La date de mise à jour indique la dernière vérification du guide.',
            'Avant tout achat, confirmez toujours le prix final, la conformité et les conditions sur le site officiel du fournisseur.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      body: 'Questions, corrections ou partenariats : contactez-nous par e-mail. Nous publions des comparatifs indépendants et pouvons percevoir des commissions d’affiliation.',
      emailLabel: 'E-mail',
    },
    privacy: {
      title: 'Politique de confidentialité',
      sections: [
        { heading: 'Qui sommes-nous', body: 'Tool Scout Lab est un éditeur indépendant.' },
        { heading: 'Données collectées', body: 'Nous pouvons utiliser des outils d’analyse et les réseaux d’affiliation peuvent déposer des cookies lors des clics sortants.' },
        { heading: 'Droits RGPD', body: 'Les visiteurs de l’UE/EEE peuvent demander l’accès ou la suppression de leurs données personnelles.' },
        { heading: 'Liens d’affiliation', body: 'Les liens externes peuvent suivre les recommandations sans modifier le prix payé.' },
      ],
    },
    article: {
      updated: 'Dernière mise à jour',
      ctaIntro: 'Prêt à comparer les prix et offres actuelles ?',
      ctaPending: 'Les liens d’affiliation seront ajoutés après approbation partenaire.',
      ctaSurfshark: 'Voir les prix Surfshark',
      ctaNordvpn: 'Voir les prix NordVPN',
      ctaHostinger: 'Voir les prix Hostinger',
    },
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', testing: 'Cómo probamos', contact: 'Contacto', privacy: 'Privacidad' },
    disclosure: {
      title: 'Divulgación de afiliados',
      text: 'Este artículo contiene enlaces de afiliado. Podemos recibir una comisión sin costo adicional para usted.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      disclosure: 'Divulgación: ganamos comisiones por compras calificadas.',
    },
    home: {
      title: 'Tool Scout Lab: compra mejor y gasta menos',
      subtitle: 'Guías de herramientas de IA, software empresarial, hosting y seguridad enfocadas en valor real.',
      helpTitle: 'Cómo te ayuda este sitio',
      helpBullets: [
        'Comparar precios antes de comprar.',
        'Encontrar alternativas más baratas.',
        'Ver rápidamente para quién sí o no conviene cada producto.',
      ],
      dealsTitle: 'Rutas de comparación recomendadas',
      dealsSubtitle: 'Empieza por las comparativas más útiles. Verifica precios y condiciones antes de comprar.',
      dealBadges: {
        ai: 'IA y Marketing',
        hosting: 'Hosting Web',
        security: 'VPN y Seguridad',
      },
      dealButtons: {
        ai: 'Comparar herramientas IA',
        hosting: 'Comparar hosting',
        security: 'Comparar VPN',
      },
      latest: 'Guías recientes',
      readMore: 'Leer guía',
      tracksTitle: 'Rutas de compra populares',
      tracks: [
        { title: 'Herramientas IA', desc: 'Alternativas más baratas y análisis de precios.', href: 'category/ai-tools' },
        { title: 'Hosting', desc: 'Elige hosting confiable con mejor relación costo-beneficio.', href: 'category/hosting' },
        { title: 'Seguridad', desc: 'Compara VPN y seguridad antes de comprar.', href: 'category/security' },
      ],
      emptyTrack: 'Aún no hay guías en esta categoría.',
    },
    about: {
      title: 'Sobre nosotros',
      body: [
        'Tool Scout Lab publica comparativas independientes de herramientas de IA, hosting, seguridad y software para pequeños negocios.',
        'Nuestras reseñas se basan en especificaciones públicas y precios oficiales. Los enlaces de afiliado están claramente indicados.',
      ],
    },
    testing: {
      title: 'Cómo probamos',
      intro: 'Nuestro objetivo es ayudar a comprar con menos riesgo. No publicamos experiencias inventadas, precios falsos ni reseñas positivas garantizadas.',
      sections: [
        {
          heading: 'Qué verificamos',
          body: [
            'Revisamos precios públicos, límites de planes, funciones principales, renovaciones y condiciones de uso comercial cuando están disponibles.',
            'Si no hemos probado una herramienta directamente, evitamos afirmarlo y presentamos el contenido como análisis basado en investigación.',
          ],
        },
        {
          heading: 'Cómo comparamos',
          body: [
            'Evaluamos costo total, facilidad de configuración, ajuste al caso de uso, soporte esperado y camino de actualización.',
            'Priorizamos búsquedas con intención de compra: precios, alternativas y comparaciones entre herramientas.',
          ],
        },
        {
          heading: 'Divulgación de afiliados',
          body: [
            'Algunos enlaces externos pueden convertirse en enlaces de afiliado tras la aprobación de socios. Esto no cambia el precio para el lector.',
            'Una relación de afiliado no garantiza reseñas positivas ni posiciones favorables.',
          ],
        },
        {
          heading: 'Actualizaciones',
          body: [
            'Los precios y funciones cambian con frecuencia. La fecha de actualización indica la última revisión del contenido.',
            'Siempre recomendamos confirmar precio final y términos en la web oficial del proveedor.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contacto',
      body: 'Preguntas o correcciones — escríbanos por correo.',
      emailLabel: 'Correo',
    },
    privacy: {
      title: 'Política de privacidad',
      sections: [
        { heading: 'Quiénes somos', body: 'Tool Scout Lab opera este sitio como editor independiente.' },
        { heading: 'Datos', body: 'Usamos Google Analytics. Los enlaces de afiliado pueden usar cookies.' },
        { heading: 'Derechos GDPR', body: 'Los visitantes de la UE pueden solicitar acceso o eliminación de datos.' },
        { heading: 'Enlaces de afiliado', body: 'Los enlaces externos pueden rastrear referidos sin cambiar su precio.' },
      ],
    },
    article: {
      updated: 'Actualizado',
      ctaIntro: '¿Listo para comparar precios y ofertas actuales?',
      ctaPending: 'Los enlaces de afiliado se añadirán después de la aprobación.',
      ctaSurfshark: 'Ver precios Surfshark',
      ctaNordvpn: 'Ver precios NordVPN',
      ctaHostinger: 'Ver precios Hostinger',
    },
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', testing: 'Como avaliamos', contact: 'Contato', privacy: 'Privacidade' },
    disclosure: {
      title: 'Divulgação de afiliados',
      text: 'Este artigo pode conter links de afiliado. Podemos receber comissão sem custo adicional para você.',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      disclosure: 'Divulgação: podemos ganhar comissões por compras qualificadas.',
    },
    home: {
      title: 'Tool Scout Lab: compre melhor e gaste menos',
      subtitle: 'Guias de ferramentas de IA, SaaS, hospedagem e segurança com foco em preço, produtividade e retorno.',
      helpTitle: 'Como este site ajuda você',
      helpBullets: [
        'Comparar preços antes de assinar uma ferramenta.',
        'Encontrar alternativas quando um software fica caro demais.',
        'Ver rapidamente para quem cada produto vale ou não vale a pena.',
      ],
      dealsTitle: 'Caminhos de comparação recomendados',
      dealsSubtitle: 'Comece pelas comparações mais úteis. Confira preço e condições antes de comprar.',
      dealBadges: {
        ai: 'IA & Marketing',
        hosting: 'Hospedagem web',
        security: 'VPN & Segurança',
      },
      dealButtons: {
        ai: 'Comparar ferramentas IA',
        hosting: 'Comparar hospedagem',
        security: 'Comparar VPNs',
      },
      latest: 'Guias recentes',
      readMore: 'Ler guia',
      tracksTitle: 'Categorias de compra populares',
      tracks: [
        { title: 'Ferramentas de IA', desc: 'Alternativas econômicas e análise de preço para criadores.', href: 'category/ai-tools' },
        { title: 'Hospedagem', desc: 'Hospedagem confiável e acessível para negócios digitais.', href: 'category/hosting' },
        { title: 'Segurança', desc: 'Compare VPN e segurança antes de pagar.', href: 'category/security' },
      ],
      emptyTrack: 'Ainda não há guias nesta categoria.',
    },
    about: {
      title: 'Sobre nós',
      body: [
        'Tool Scout Lab publica comparativos independentes sobre ferramentas de IA, hospedagem, segurança e SaaS para pequenos negócios e criadores.',
        'Nossas análises usam informações públicas, páginas de preços e notas de teste quando disponíveis. Links de afiliado são identificados com clareza.',
        'Não aceitamos pagamentos em troca de avaliações positivas garantidas.',
      ],
    },
    testing: {
      title: 'Como avaliamos',
      intro: 'Nosso objetivo é ajudar você a comprar com mais segurança. Não publicamos experiências falsas, preços inventados nem avaliações positivas garantidas.',
      sections: [
        {
          heading: 'O que verificamos',
          body: [
            'Verificamos páginas públicas de preço, limites de planos, recursos principais, renovação e uso comercial quando disponível.',
            'Quando não testamos uma ferramenta diretamente, tratamos o conteúdo como análise baseada em pesquisa e não fingimos uso prático.',
          ],
        },
        {
          heading: 'Como comparamos',
          body: [
            'Analisamos custo total, facilidade de uso, encaixe no caso de uso, suporte esperado e caminho de upgrade.',
            'Priorizamos temas próximos da compra: preço, alternativas e comparações entre ferramentas.',
          ],
        },
        {
          heading: 'Afiliados',
          body: [
            'Alguns links externos podem virar links de afiliado após aprovação. O preço para o leitor não muda.',
            'Afiliados não garantem avaliação positiva, ranking melhor ou recomendação.',
          ],
        },
        {
          heading: 'Atualizações',
          body: [
            'Preços e recursos mudam com frequência. A data de atualização mostra quando o guia foi revisado.',
            'Antes de comprar, confirme preço final e termos no site oficial do fornecedor.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contato',
      body: 'Dúvidas, correções ou parcerias: envie um e-mail. Publicamos comparativos independentes e podemos receber comissões de afiliados.',
      emailLabel: 'E-mail',
    },
    privacy: {
      title: 'Política de privacidade',
      sections: [
        { heading: 'Quem somos', body: 'Tool Scout Lab é um editor independente.' },
        { heading: 'Dados', body: 'Podemos usar análise de tráfego e redes de afiliados podem usar cookies em links externos.' },
        { heading: 'Direitos', body: 'Visitantes podem solicitar acesso ou exclusão de dados pessoais quando aplicável.' },
        { heading: 'Links de afiliado', body: 'Links externos podem rastrear indicações sem alterar o preço pago.' },
      ],
    },
    article: {
      updated: 'Atualizado em',
      ctaIntro: 'Pronto para comparar preços e ofertas atuais?',
      ctaPending: 'Os links de afiliado serão adicionados após aprovação dos parceiros.',
      ctaSurfshark: 'Ver preços Surfshark',
      ctaNordvpn: 'Ver preços NordVPN',
      ctaHostinger: 'Ver preços Hostinger',
    },
  },
  ja: {
    nav: { home: 'ホーム', about: '概要', testing: '評価方法', contact: '連絡', privacy: 'プライバシー' },
    disclosure: {
      title: 'アフィリエイト開示',
      text: '本記事にはアフィリエイトリンクが含まれます。リンク経由の購入で当サイトに報酬が発生する場合があります（お客様の負担は増えません）。',
    },
    footer: { rights: '無断転載禁止', disclosure: 'アフィリエイトリンクにより報酬を得る場合があります。' },
    home: {
      title: 'Tool Scout Lab: 賢く買って無駄を減らす',
      subtitle: 'AIツール、ビジネスソフト、ホスティング、セキュリティ製品を価格重視で比較。',
      helpTitle: 'このサイトでできること',
      helpBullets: [
        '購入前に価格を比較できます。',
        '高すぎる製品の代替案を探せます。',
        '自分に合う製品かどうかを素早く判断できます。',
      ],
      dealsTitle: 'おすすめ比較ルート',
      dealsSubtitle: 'よく使われる比較から始められます。購入前に価格と条件を確認してください。',
      dealBadges: {
        ai: 'AI・マーケ',
        hosting: 'ホスティング',
        security: 'VPN・セキュリティ',
      },
      dealButtons: {
        ai: 'AIツールを比較',
        hosting: 'ホスティングを比較',
        security: 'VPNを比較',
      },
      latest: '最新ガイド',
      readMore: '記事を読む',
      tracksTitle: '人気の購入カテゴリ',
      tracks: [
        { title: 'AIツール', desc: '安い代替案と価格比較を確認。', href: 'category/ai-tools' },
        { title: 'ホスティング', desc: '初心者向けにコスパ重視で選ぶ。', href: 'category/hosting' },
        { title: 'セキュリティ', desc: '購入前にVPN/セキュリティ製品を比較。', href: 'category/security' },
      ],
      emptyTrack: 'このカテゴリの記事はまだありません。',
    },
    about: {
      title: 'サイトについて',
      body: ['Tool Scout LabはAIツール、ホスティング、セキュリティ製品の独立比較記事を公開しています。'],
    },
    testing: {
      title: '評価方法',
      intro: '読者が安心して比較できるよう、架空の使用体験、確認していない価格、肯定的評価の保証は掲載しません。',
      sections: [
        {
          heading: '確認する内容',
          body: [
            '公開価格、プラン制限、主要機能、更新料金、商用利用条件などを確認します。',
            '実際に使用していない製品については、調査に基づく分析として扱い、直接利用したとは記載しません。',
          ],
        },
        {
          heading: '比較基準',
          body: [
            '総コスト、導入のしやすさ、用途への適合性、サポート期待値、アップグレードのしやすさを重視します。',
            '価格、代替案、製品同士の比較など、購入判断に近いテーマを優先します。',
          ],
        },
        {
          heading: 'アフィリエイト開示',
          body: [
            '外部リンクは提携承認後にアフィリエイトリンクになる場合があります。読者の支払額は変わりません。',
            '提携関係は、肯定的なレビューや順位を保証するものではありません。',
          ],
        },
        {
          heading: '更新方針',
          body: [
            'ソフトウェアの価格や機能は頻繁に変わります。記事の更新日で最終確認時期を示します。',
            '購入前には必ず公式サイトで最終価格と条件をご確認ください。',
          ],
        },
      ],
    },
    contact: { title: 'お問い合わせ', body: 'ご質問はメールでどうぞ。', emailLabel: 'メール' },
    privacy: {
      title: 'プライバシーポリシー',
      sections: [
        { heading: '運営者', body: 'Tool Scout Labが運営する独立メディアです。' },
        { heading: '収集データ', body: 'Google Analyticsを使用します。' },
        { heading: 'GDPR', body: 'EU訪問者はデータ削除を請求できます。' },
        { heading: 'アフィリエイト', body: '外部リンクはトラッキングする場合があります。' },
      ],
    },
    article: {
      updated: '更新日',
      ctaIntro: '最新価格とキャンペーンを比較しますか？',
      ctaPending: 'アフィリエイトリンクは承認後に追加されます。',
      ctaSurfshark: 'Surfshark料金',
      ctaNordvpn: 'NordVPN料金',
      ctaHostinger: 'Hostinger料金',
    },
  },
  vn: {
    nav: { home: 'Trang chủ', about: 'Giới thiệu', testing: 'Cách đánh giá', contact: 'Liên hệ', privacy: 'Riêng tư' },
    disclosure: {
      title: 'Tiết lộ liên kết tiếp thị',
      text: 'Bài viết có thể chứa liên kết tiếp thị liên kết. Chúng tôi có thể nhận hoa hồng mà không làm tăng chi phí của bạn.',
    },
    footer: {
      rights: 'Đã đăng ký bản quyền.',
      disclosure: 'Tiết lộ: chúng tôi có thể nhận hoa hồng từ các giao dịch đủ điều kiện.',
    },
    home: {
      title: 'Tool Scout Lab: mua thông minh, tiết kiệm hơn',
      subtitle: 'Hướng dẫn về công cụ AI, SaaS, hosting và bảo mật cho người làm MMO, bán hàng online và doanh nghiệp nhỏ.',
      helpTitle: 'Trang này giúp bạn như thế nào',
      helpBullets: [
        'So sánh giá trước khi đăng ký phần mềm.',
        'Tìm lựa chọn thay thế khi một công cụ quá đắt.',
        'Biết nhanh công cụ nào phù hợp để làm nội dung, bán hàng và kiếm tiền online.',
      ],
      dealsTitle: 'Lộ trình so sánh nên xem',
      dealsSubtitle: 'Bắt đầu từ các nhóm so sánh phổ biến. Hãy kiểm tra giá và điều khoản trước khi mua.',
      dealBadges: {
        ai: 'AI & Marketing',
        hosting: 'Hosting website',
        security: 'VPN & Bảo mật',
      },
      dealButtons: {
        ai: 'So sánh công cụ AI',
        hosting: 'So sánh hosting',
        security: 'So sánh VPN',
      },
      latest: 'Hướng dẫn mới nhất',
      readMore: 'Đọc hướng dẫn',
      tracksTitle: 'Nhóm mua phổ biến',
      tracks: [
        { title: 'Công cụ AI', desc: 'Tìm công cụ rẻ hơn để làm nội dung, TikTok và MMO.', href: 'category/ai-tools' },
        { title: 'Hosting', desc: 'Chọn hosting để làm website bán hàng, blog hoặc landing page.', href: 'category/hosting' },
        { title: 'Bảo mật', desc: 'So sánh VPN và công cụ bảo mật trước khi trả tiền.', href: 'category/security' },
      ],
      emptyTrack: 'Chưa có bài viết trong danh mục này.',
    },
    about: {
      title: 'Giới thiệu',
      body: [
        'Tool Scout Lab xuất bản các bài so sánh độc lập về công cụ AI, hosting, bảo mật và SaaS cho người làm nội dung, freelancer và doanh nghiệp nhỏ.',
        'Chúng tôi dựa trên thông tin công khai, trang giá và ghi chú thử nghiệm khi có. Liên kết tiếp thị được nêu rõ.',
        'Chúng tôi không nhận tiền để đảm bảo đánh giá tích cực.',
      ],
    },
    testing: {
      title: 'Cách chúng tôi đánh giá',
      intro: 'Mục tiêu là giúp người đọc mua an toàn hơn. Chúng tôi không bịa trải nghiệm, không bịa giá và không đảm bảo đánh giá tích cực vì thù lao.',
      sections: [
        {
          heading: 'Chúng tôi kiểm tra gì',
          body: [
            'Chúng tôi xem trang giá công khai, giới hạn gói, tính năng chính, điều khoản gia hạn và điều kiện dùng thương mại khi có.',
            'Nếu chưa trực tiếp dùng công cụ, chúng tôi mô tả là phân tích dựa trên nghiên cứu và không giả vờ đã trải nghiệm.',
          ],
        },
        {
          heading: 'Cách so sánh',
          body: [
            'Chúng tôi tập trung vào tổng chi phí, độ dễ dùng, mức phù hợp với nhu cầu, hỗ trợ và khả năng nâng cấp.',
            'Ưu tiên các chủ đề gần quyết định mua: giá, lựa chọn thay thế và so sánh công cụ.',
          ],
        },
        {
          heading: 'Tiếp thị liên kết',
          body: [
            'Một số liên kết ngoài có thể trở thành liên kết tiếp thị sau khi được duyệt. Giá người đọc trả không thay đổi.',
            'Quan hệ tiếp thị liên kết không đảm bảo đánh giá tích cực hay thứ hạng tốt hơn.',
          ],
        },
        {
          heading: 'Cập nhật',
          body: [
            'Giá và tính năng phần mềm thay đổi thường xuyên. Ngày cập nhật cho biết thời điểm nội dung được rà soát.',
            'Trước khi mua, hãy kiểm tra giá và điều khoản cuối cùng trên website chính thức.',
          ],
        },
      ],
    },
    contact: {
      title: 'Liên hệ',
      body: 'Nếu có câu hỏi, góp ý hoặc hợp tác, hãy gửi email cho chúng tôi. Chúng tôi xuất bản so sánh độc lập và có thể nhận hoa hồng tiếp thị liên kết.',
      emailLabel: 'Email',
    },
    privacy: {
      title: 'Chính sách riêng tư',
      sections: [
        { heading: 'Chúng tôi là ai', body: 'Tool Scout Lab là nhà xuất bản độc lập.' },
        { heading: 'Dữ liệu', body: 'Chúng tôi có thể dùng phân tích truy cập và mạng tiếp thị có thể dùng cookie khi bạn nhấp liên kết ngoài.' },
        { heading: 'Quyền của bạn', body: 'Bạn có thể yêu cầu truy cập hoặc xóa dữ liệu cá nhân khi luật áp dụng cho phép.' },
        { heading: 'Liên kết tiếp thị', body: 'Liên kết ngoài có thể theo dõi giới thiệu mà không thay đổi giá bạn trả.' },
      ],
    },
    article: {
      updated: 'Cập nhật lần cuối',
      ctaIntro: 'Sẵn sàng so sánh giá và ưu đãi hiện tại?',
      ctaPending: 'Liên kết tiếp thị sẽ được thêm sau khi đối tác phê duyệt.',
      ctaSurfshark: 'Xem giá Surfshark',
      ctaNordvpn: 'Xem giá NordVPN',
      ctaHostinger: 'Xem giá Hostinger',
    },
  },
  th: {
    nav: { home: 'หน้าแรก', about: 'เกี่ยวกับ', testing: 'วิธีรีวิว', contact: 'ติดต่อ', privacy: 'ความเป็นส่วนตัว' },
    disclosure: {
      title: 'เปิดเผยพันธมิตร',
      text: 'บทความนี้มีลิงก์พันธมิตร เราอาจได้รับค่าคอมมิชชันโดยไม่เพิ่มค่าใช้จ่ายให้คุณ',
    },
    footer: { rights: 'สงวนลิขสิทธิ์', disclosure: 'เราได้รับค่าคอมมิชชันจากการซื้อที่มีสิทธิ์' },
    home: {
      title: 'Tool Scout Lab: ซื้อคุ้ม ใช้น้อยจ่ายน้อย',
      subtitle: 'คู่มือเปรียบเทียบเครื่องมือ AI ซอฟต์แวร์ธุรกิจ โฮสติ้ง และความปลอดภัย เน้นความคุ้มค่า',
      helpTitle: 'เว็บไซต์นี้ช่วยคุณอย่างไร',
      helpBullets: [
        'เปรียบเทียบราคาก่อนตัดสินใจซื้อ',
        'หาเครื่องมือทดแทนเมื่อของเดิมแพงเกินไป',
        'ดูให้ชัดว่าเครื่องมือนี้เหมาะกับใคร',
      ],
      dealsTitle: 'เส้นทางเปรียบเทียบที่แนะนำ',
      dealsSubtitle: 'เริ่มจากหมวดที่คนเปรียบเทียบบ่อย โปรดตรวจสอบราคาและเงื่อนไขก่อนซื้อ',
      dealBadges: {
        ai: 'AI และการตลาด',
        hosting: 'โฮสติ้งเว็บไซต์',
        security: 'VPN และความปลอดภัย',
      },
      dealButtons: {
        ai: 'เปรียบเทียบเครื่องมือ AI',
        hosting: 'เปรียบเทียบโฮสติ้ง',
        security: 'เปรียบเทียบ VPN',
      },
      latest: 'บทความล่าสุด',
      readMore: 'อ่านบทความ',
      tracksTitle: 'หมวดที่คนนิยมค้นหา',
      tracks: [
        { title: 'เครื่องมือ AI', desc: 'หาเครื่องมือทดแทนที่ถูกกว่าและเปรียบเทียบราคา', href: 'category/ai-tools' },
        { title: 'โฮสติ้ง', desc: 'เลือกโฮสติ้งที่คุ้มค่าและเชื่อถือได้', href: 'category/hosting' },
        { title: 'ความปลอดภัย', desc: 'เปรียบเทียบ VPN/ความปลอดภัยก่อนซื้อ', href: 'category/security' },
      ],
      emptyTrack: 'ยังไม่มีบทความในหมวดนี้',
    },
    about: {
      title: 'เกี่ยวกับเรา',
      body: ['Tool Scout Lab เผยแพร่คู่มือเปรียบเทียบเครื่องมือ AI โฮสติ้ง และความปลอดภัยแบบอิสระ'],
    },
    testing: {
      title: 'วิธีรีวิวของเรา',
      intro: 'เราเน้นช่วยให้ผู้อ่านตัดสินใจซื้ออย่างปลอดภัย ไม่สร้างประสบการณ์ปลอม ไม่แต่งราคา และไม่รับประกันรีวิวเชิงบวกเพื่อค่าตอบแทน',
      sections: [
        {
          heading: 'สิ่งที่เราตรวจสอบ',
          body: [
            'เราตรวจสอบหน้าราคา ข้อจำกัดของแพ็กเกจ ฟีเจอร์หลัก เงื่อนไขต่ออายุ และสิทธิ์ใช้งานเชิงพาณิชย์เมื่อมีข้อมูล',
            'ถ้าเครื่องมือใดยังไม่ได้ทดลองใช้โดยตรง เราจะระบุเป็นการวิเคราะห์จากข้อมูลสาธารณะ ไม่กล่าวอ้างว่าได้ทดลองจริง',
          ],
        },
        {
          heading: 'เกณฑ์เปรียบเทียบ',
          body: [
            'เราให้ความสำคัญกับต้นทุนรวม ความง่ายในการเริ่มใช้งาน ความเหมาะสมกับงานจริง การสนับสนุน และเส้นทางอัปเกรด',
            'เราเน้นหัวข้อที่ใกล้การตัดสินใจซื้อ เช่น ราคา ทางเลือกทดแทน และการเปรียบเทียบเครื่องมือ',
          ],
        },
        {
          heading: 'การเปิดเผยลิงก์พันธมิตร',
          body: [
            'บางลิงก์ภายนอกอาจกลายเป็นลิงก์พันธมิตรหลังจากได้รับอนุมัติ โดยราคาที่ผู้อ่านจ่ายจะไม่เปลี่ยน',
            'ความสัมพันธ์แบบพันธมิตรไม่รับประกันรีวิวเชิงบวกหรืออันดับที่ดีกว่า',
          ],
        },
        {
          heading: 'การอัปเดตข้อมูล',
          body: [
            'ราคาและฟีเจอร์ของซอฟต์แวร์เปลี่ยนได้บ่อย วันที่อัปเดตบทความจึงบอกช่วงเวลาที่ตรวจข้อมูลล่าสุด',
            'ก่อนซื้อควรตรวจสอบราคาและเงื่อนไขสุดท้ายจากเว็บไซต์ทางการเสมอ',
          ],
        },
      ],
    },
    contact: { title: 'ติดต่อ', body: 'สอบถามหรือแก้ไขข้อมูล — อีเมลถึงเรา', emailLabel: 'อีเมล' },
    privacy: {
      title: 'นโยบายความเป็นส่วนตัว',
      sections: [
        { heading: 'ผู้ดำเนินการ', body: 'Tool Scout Lab เป็นสื่ออิสระ' },
        { heading: 'ข้อมูล', body: 'ใช้ Google Analytics ลิงก์พันธมิตรอาจใช้คุกกี้' },
        { heading: 'GDPR', body: 'ผู้เยี่ยมชม EU ขอลบข้อมูลได้' },
        { heading: 'ลิงก์พันธมิตร', body: 'ลิงก์ภายนอกอาจติดตามการอ้างอิง' },
      ],
    },
    article: {
      updated: 'อัปเดต',
      ctaIntro: 'พร้อมเปรียบเทียบราคาและดีลล่าสุดหรือยัง?',
      ctaPending: 'ลิงก์พันธมิตรจะถูกเพิ่มหลังจากได้รับอนุมัติ',
      ctaSurfshark: 'ดูราคา Surfshark',
      ctaNordvpn: 'ดูราคา NordVPN',
      ctaHostinger: 'ดูราคา Hostinger',
    },
  },
};
