export const translations = {
  pl: {
    // Navigation
    home: 'Strona główna',
    aboutMe: 'O mnie',
    projects: 'Projekty',
    services: 'Usługi',
    experience: 'Doświadczenie',
    contact: 'Kontakt',
    navigation: 'Nawigacja',

    // Banner
    bannerTitle: 'Cześć, jestem Przemek',
    bannerSubtitle: 'Full-Stack Developer',
    bannerDescription: 'Tworzę nowoczesne aplikacje webowe i mobilne. Specjalizuję się w Vue.js, React, Node.js i TypeScript.',

    // About Me
    aboutMeTitle: 'O mnie',
    aboutMeText: 'Jestem programistą z ponad 8-letnim doświadczeniem w tworzeniu oprogramowania. Specjalizuję się w tworzeniu aplikacji webowych i mobilnych, wykorzystując najnowsze technologie.',

    // Services
    servicesTitle: 'Usługi',
    webDev: 'Tworzenie stron WWW',
    webDevDesc: 'Nowoczesne, responsywne strony internetowe i aplikacje webowe.',
    mobileDev: 'Aplikacje mobilne',
    mobileDevDesc: 'Natywne i hybrydowe aplikacje na iOS i Android.',
    apiDev: 'Systemy i API',
    apiDevDesc: 'Skalowalne backendy, REST API i integracje z zewnętrznymi serwisami.',

    // Experience
    experienceTitle: 'Doświadczenie',
    yearsOfExperience: 'lat doświadczenia',

    // Projects
    projectsTitle: 'Projekty',
    viewProject: 'Zobacz projekt',
    viewAllProjects: 'Zobacz wszystkie projekty',
    technologies: 'Technologie',
    screenshots: 'Zrzuty ekranu',

    // Footer
    footerCta: 'Stwórzmy razem coś niesamowitego',
    footerHi: 'Zacznij od przywitania się',
    privacyPolicy: 'Polityka prywatności',
    allRightsReserved: 'Wszelkie prawa zastrzeżone',

    // SEO
    siteDescription: 'Recode Software zajmuje się profesjonalnym tworzeniem oprogramowania. Nasza oferta obejmuje dostosowane rozwiązania dla Twojego biznesu.',
  },

  en: {
    // Navigation
    home: 'Home',
    aboutMe: 'About me',
    projects: 'Projects',
    services: 'Services',
    experience: 'Experience',
    contact: 'Contact',
    navigation: 'Navigation',

    // Banner
    bannerTitle: "Hi, I'm Przemek",
    bannerSubtitle: 'Full-Stack Developer',
    bannerDescription: 'I build modern web and mobile applications. Specialized in Vue.js, React, Node.js and TypeScript.',

    // About Me
    aboutMeTitle: 'About me',
    aboutMeText: "I'm a developer with over 8 years of experience in software development. I specialize in building web and mobile applications using the latest technologies.",

    // Services
    servicesTitle: 'Services',
    webDev: 'Web Development',
    webDevDesc: 'Modern, responsive websites and web applications.',
    mobileDev: 'Mobile Apps',
    mobileDevDesc: 'Native and hybrid applications for iOS and Android.',
    apiDev: 'Systems & API',
    apiDevDesc: 'Scalable backends, REST APIs, and third-party integrations.',

    // Experience
    experienceTitle: 'Experience',
    yearsOfExperience: 'years of experience',

    // Projects
    projectsTitle: 'Projects',
    viewProject: 'View project',
    viewAllProjects: 'View all projects',
    technologies: 'Technologies',
    screenshots: 'Screenshots',

    // Footer
    footerCta: "Let's make something amazing together",
    footerHi: 'Start by saying hi',
    privacyPolicy: 'Privacy policy',
    allRightsReserved: 'All Rights Reserved',

    // SEO
    siteDescription: 'Recode Software specializes in professional software development. Our offer includes customized solutions for your business.',
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
