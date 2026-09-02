// status: 'live'  - the product is open for signups
//         'soon'  - the site is up but only collects launch notifications
export const products = {
  pl: [
    {
      slug: 'tfg-raport',
      name: 'tfgraport.pl',
      url: 'tfgraport.pl',
      status: 'live',
      description: 'Wgrywasz skany, PDF-y i zdjęcia faktur, a AI rozpoznaje dane, waliduje je i składa zgodny wykaz umów do Turystycznego Funduszu Gwarancyjnego.',
      technologies: ['NestJS', 'Astro', 'PostgreSQL', 'OpenAI', 'Stripe'],
      accent: '#f59e0b'
    },
    {
      slug: 'zorynthia',
      name: 'Zorynthia',
      url: 'zorynthia.eu',
      status: 'live',
      description: 'Tarot i astrologia z AI. Zadajesz pytanie, dostajesz immersyjny rozkład kart z interpretacją w sześciu językach, dostępny całą dobę.',
      technologies: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'OpenAI', 'Redis'],
      accent: '#7c3aed'
    },
    {
      slug: 'nie-dla-normalnych',
      name: 'Nie dla normalnych',
      url: 'niedlanormalnych.pl',
      status: 'live',
      description: 'Imprezowa gra karciana dla dorosłych. Gracie z telefonów, a telewizor czyta karty głosem lektora AI. Bez rejestracji i bez pudełka.',
      technologies: ['Next.js 15', 'NestJS', 'Socket.IO', 'PostgreSQL', 'Redis'],
      accent: '#eab308'
    },
    {
      slug: 'spedly',
      name: 'Spedly',
      url: 'spedly.eu',
      status: 'soon',
      description: 'Platforma do zarządzania transportami z wewnętrzną giełdą dla spedytorów. Aukcje w czasie rzeczywistym, powiadomienia kierowców, praca w oddziałach.',
      technologies: ['Nuxt', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Redis'],
      accent: '#2563eb'
    },
    {
      slug: 'voyeta',
      name: 'Voyeta',
      url: 'voyeta.eu',
      status: 'soon',
      description: 'System operacyjny dla biur podróży. CRM, sprzedaż wypraw, umowy, faktury i automatyczne raporty TFG/TFP w jednej platformie, zamiast w arkuszu Excela.',
      technologies: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'OpenAI', 'BullMQ'],
      accent: '#0d9488'
    }
  ],
  en: [
    {
      slug: 'tfg-raport',
      name: 'tfgraport.pl',
      url: 'tfgraport.pl',
      status: 'live',
      description: 'Upload scans, PDFs and invoice photos — AI reads the data, validates it and assembles a compliant contract report for the Polish Tourist Guarantee Fund.',
      technologies: ['NestJS', 'Astro', 'PostgreSQL', 'OpenAI', 'Stripe'],
      accent: '#f59e0b'
    },
    {
      slug: 'zorynthia',
      name: 'Zorynthia',
      url: 'zorynthia.eu',
      status: 'live',
      description: 'AI tarot and astrology. Ask a question and get an immersive card reading, interpreted in six languages and available around the clock.',
      technologies: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'OpenAI', 'Redis'],
      accent: '#7c3aed'
    },
    {
      slug: 'nie-dla-normalnych',
      name: 'Nie dla normalnych',
      url: 'niedlanormalnych.pl',
      status: 'live',
      description: 'A party card game for adults. Players join from their phones while the TV reads every card aloud in an AI voice. No signup, no box.',
      technologies: ['Next.js 15', 'NestJS', 'Socket.IO', 'PostgreSQL', 'Redis'],
      accent: '#eab308'
    },
    {
      slug: 'spedly',
      name: 'Spedly',
      url: 'spedly.eu',
      status: 'soon',
      description: 'A transport management platform with a private freight exchange for forwarders. Real-time auctions, driver notifications and multi-branch operations.',
      technologies: ['Nuxt', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Redis'],
      accent: '#2563eb'
    },
    {
      slug: 'voyeta',
      name: 'Voyeta',
      url: 'voyeta.eu',
      status: 'soon',
      description: 'An operating system for travel agencies. CRM, trip sales, contracts, invoices and automated TFG/TFP reporting in one platform instead of a spreadsheet.',
      technologies: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'OpenAI', 'BullMQ'],
      accent: '#0d9488'
    }
  ]
};
