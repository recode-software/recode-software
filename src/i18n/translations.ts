export const translations = {
  pl: {
    // Navigation
    home: 'Strona główna',
    aboutMe: 'O mnie',
    projects: 'Projekty',
    services: 'Specjalizacje',
    experience: 'Umiejętności',
    contact: 'Kontakt',
    navigation: 'Nawigacja',

    // Banner
    bannerTitle: 'Cześć, jestem Przemek',
    bannerSubtitle: 'Full-Stack Developer',
    bannerDescription: 'Tworzę nowoczesne aplikacje webowe i mobilne. Specjalizuję się w Vue.js, React, Node.js i TypeScript.',

    // About Me
    aboutMeTitle: 'O mnie',
    aboutMeText: 'Jestem programistą z ponad 10-letnim doświadczeniem w tworzeniu oprogramowania. Specjalizuję się w tworzeniu aplikacji webowych i mobilnych, wykorzystując najnowsze technologie.',

    // Competencies
    competenciesTitle: 'Umiejętności',
    competenciesSubtitle: 'Technologie i narzędzia, z którymi pracuję na co dzień',

    // Services / Specializations
    servicesTitle: 'Specjalizacje',
    servicesSubtitle: 'Kompleksowe usługi programistyczne dla Twojego biznesu',
    webDev: 'Tworzenie stron WWW',
    webDevDesc: 'Nowoczesne, responsywne strony internetowe i aplikacje webowe.',
    mobileDev: 'Aplikacje mobilne',
    mobileDevDesc: 'Natywne i hybrydowe aplikacje na iOS i Android.',
    apiDev: 'Systemy i API',
    apiDevDesc: 'Skalowalne backendy, REST API i integracje z zewnętrznymi serwisami.',

    // Architecture
    architectureTitle: 'Architektura',
    architectureSubtitle: 'Sprawdzone wzorce w systemach klasy enterprise',

    // Stats
    statsTitle: 'W liczbach',

    // Experience (legacy)
    experienceTitle: 'Umiejętności',
    yearsOfExperience: 'lat doświadczenia',

    // Projects
    projectsTitle: 'Projekty',
    viewProject: 'Zobacz projekt',
    viewAllProjects: 'Zobacz wszystkie projekty',
    technologies: 'Technologie',
    screenshots: 'Zrzuty ekranu',
    companiesTitle: 'Doświadczenie w firmach',

    // Products
    productsTitle: 'Moje produkty',
    productsSubtitle: 'Autorskie produkty, które zbudowałem i wypuściłem na rynek',

    // Footer
    footerCta: 'Stwórzmy razem coś niesamowitego',
    footerHi: 'Zacznij od przywitania się',
    privacyPolicy: 'Polityka prywatności',
    allRightsReserved: 'Wszelkie prawa zastrzeżone',

    // SEO
    siteDescription: 'Recode Software - fullstack developer z 10+ letnim doświadczeniem. Aplikacje webowe, systemy enterprise, integracje AI. NestJS, Vue.js, Laravel, TypeScript.',
  },

  en: {
    // Navigation
    home: 'Home',
    aboutMe: 'About me',
    projects: 'Projects',
    services: 'Specializations',
    experience: 'Skills',
    contact: 'Contact',
    navigation: 'Navigation',

    // Banner
    bannerTitle: "Hi, I'm Przemek",
    bannerSubtitle: 'Full-Stack Developer',
    bannerDescription: 'I build modern web and mobile applications. Specialized in Vue.js, React, Node.js and TypeScript.',

    // About Me
    aboutMeTitle: 'About me',
    aboutMeText: "I'm a developer with over 10 years of experience in software development. I specialize in building web and mobile applications using the latest technologies.",

    // Competencies
    competenciesTitle: 'Skills',
    competenciesSubtitle: 'Technologies and tools I work with daily',

    // Services / Specializations
    servicesTitle: 'Specializations',
    servicesSubtitle: 'Comprehensive development services for your business',
    webDev: 'Web Development',
    webDevDesc: 'Modern, responsive websites and web applications.',
    mobileDev: 'Mobile Apps',
    mobileDevDesc: 'Native and hybrid applications for iOS and Android.',
    apiDev: 'Systems & API',
    apiDevDesc: 'Scalable backends, REST APIs, and third-party integrations.',

    // Architecture
    architectureTitle: 'Architecture',
    architectureSubtitle: 'Proven patterns in enterprise-grade systems',

    // Stats
    statsTitle: 'By the numbers',

    // Experience (legacy)
    experienceTitle: 'Skills',
    yearsOfExperience: 'years of experience',

    // Projects
    projectsTitle: 'Projects',
    viewProject: 'View project',
    viewAllProjects: 'View all projects',
    technologies: 'Technologies',
    screenshots: 'Screenshots',
    companiesTitle: 'Company experience',

    // Products
    productsTitle: 'My Products',
    productsSubtitle: 'Products of my own that I built and shipped to market',

    // Footer
    footerCta: "Let's make something amazing together",
    footerHi: 'Start by saying hi',
    privacyPolicy: 'Privacy policy',
    allRightsReserved: 'All Rights Reserved',

    // SEO
    siteDescription: 'Recode Software - fullstack developer with 10+ years of experience. Web applications, enterprise systems, AI integrations. NestJS, Vue.js, Laravel, TypeScript.',
  }
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pl;

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] || translations.en[key] || key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'pl';
}
