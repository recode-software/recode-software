export interface Skill {
  name: string;
  level: 'advanced' | 'intermediate';
  projects?: number;
}

export interface CompetencyCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  skills: Skill[];
}

export const competencies: Record<'pl' | 'en', CompetencyCategory[]> = {
  pl: [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Nowoczesne interfejsy uzytkownika',
      icon: 'code',
      accent: '#42b883',
      skills: [
        { name: 'Vue.js 2/3', level: 'advanced', projects: 12 },
        { name: 'React 18/19', level: 'advanced' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'TailwindCSS', level: 'advanced' },
        { name: 'Material UI', level: 'advanced' },
        { name: 'shadcn/ui', level: 'advanced' },
        { name: 'Nuxt 2/3/4', level: 'advanced' },
        { name: 'Next.js', level: 'advanced' },
        { name: 'Electron', level: 'intermediate' },
        { name: 'TipTap', level: 'intermediate' },
        { name: 'Leaflet', level: 'intermediate' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'Skalowalne API i serwisy',
      icon: 'server',
      accent: '#e0234e',
      skills: [
        { name: 'NestJS', level: 'advanced', projects: 10 },
        { name: 'Laravel', level: 'advanced' },
        { name: 'Symfony', level: 'advanced' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'PHP', level: 'advanced' },
        { name: 'gRPC', level: 'intermediate' },
        { name: 'BullMQ', level: 'advanced' },
        { name: 'AWS SQS', level: 'advanced' },
        { name: 'REST API', level: 'advanced' },
        { name: 'GraphQL', level: 'intermediate' },
      ]
    },
    {
      id: 'databases',
      title: 'Bazy danych',
      description: 'Wydajne struktury danych i ORM',
      icon: 'database',
      accent: '#4169e1',
      skills: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'MySQL', level: 'intermediate' },
        { name: 'Redis', level: 'advanced' },
        { name: 'TypeORM', level: 'advanced' },
        { name: 'Doctrine ORM', level: 'advanced' },
        { name: 'Eloquent', level: 'advanced' },
        { name: 'Meilisearch', level: 'intermediate' },
      ]
    },
    {
      id: 'ai',
      title: 'AI / LLM',
      description: 'Integracja modeli AI z aplikacjami',
      icon: 'brain',
      accent: '#7c3aed',
      skills: [
        { name: 'OpenAI API', level: 'advanced' },
        { name: 'Anthropic Claude', level: 'advanced' },
        { name: 'Azure OpenAI', level: 'intermediate' },
        { name: 'Mistral AI', level: 'intermediate' },
        { name: 'AI SDK (Vercel)', level: 'advanced' },
        { name: 'OCR', level: 'advanced' },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps / Cloud',
      description: 'Infrastruktura i automatyzacja',
      icon: 'cloud',
      accent: '#2496ed',
      skills: [
        { name: 'Docker', level: 'advanced' },
        { name: 'Kubernetes (K3s)', level: 'intermediate' },
        { name: 'Helm Charts', level: 'intermediate' },
        { name: 'ArgoCD', level: 'intermediate' },
        { name: 'Ansible', level: 'intermediate' },
        { name: 'AWS', level: 'advanced' },
        { name: 'Azure', level: 'intermediate' },
        { name: 'CI/CD', level: 'advanced' },
        { name: 'Sentry', level: 'advanced' },
        { name: 'MinIO', level: 'advanced' },
      ]
    },
    {
      id: 'architecture',
      title: 'Wzorce architektoniczne',
      description: 'Architektura systemow enterprise',
      icon: 'layers',
      accent: '#f59e0b',
      skills: [
        { name: 'CQRS', level: 'advanced' },
        { name: 'Event-Driven', level: 'advanced' },
        { name: 'DDD', level: 'advanced' },
        { name: 'Microservices', level: 'advanced' },
        { name: 'Strategy Pattern', level: 'advanced' },
        { name: 'Factory Pattern', level: 'advanced' },
        { name: 'Repository Pattern', level: 'advanced' },
        { name: 'Multi-tenancy', level: 'intermediate' },
      ]
    },
    {
      id: 'realtime',
      title: 'Real-time',
      description: 'Komunikacja w czasie rzeczywistym',
      icon: 'zap',
      accent: '#ff6600',
      skills: [
        { name: 'WebSocket', level: 'advanced' },
        { name: 'Socket.io', level: 'advanced' },
        { name: 'SSE', level: 'advanced' },
        { name: 'Redis Pub/Sub', level: 'advanced' },
        { name: 'BullMQ', level: 'advanced' },
        { name: 'RabbitMQ', level: 'intermediate' },
      ]
    },
    {
      id: 'testing',
      title: 'Testowanie',
      description: 'Testy automatyczne i jakosc kodu',
      icon: 'check',
      accent: '#22c55e',
      skills: [
        { name: 'Jest', level: 'advanced' },
        { name: 'Playwright', level: 'intermediate' },
        { name: 'Cypress', level: 'intermediate' },
        { name: 'PHPUnit', level: 'intermediate' },
        { name: 'E2E Testing', level: 'advanced' },
        { name: 'Mocha', level: 'intermediate' },
      ]
    },
    {
      id: 'integrations',
      title: 'Integracje',
      description: 'Platnosci, OAuth, dokumenty i wiecej',
      icon: 'plug',
      accent: '#ec4899',
      skills: [
        { name: 'Przelewy24', level: 'intermediate' },
        { name: 'SaferPay', level: 'intermediate' },
        { name: 'Elavon', level: 'intermediate' },
        { name: 'Stripe', level: 'intermediate' },
        { name: 'OAuth', level: 'advanced' },
        { name: 'PDF', level: 'advanced' },
        { name: 'Excel', level: 'intermediate' },
        { name: 'Web scraping', level: 'intermediate' },
        { name: 'i18n', level: 'advanced' },
      ]
    },
  ],
  en: [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Modern user interfaces',
      icon: 'code',
      accent: '#42b883',
      skills: [
        { name: 'Vue.js 2/3', level: 'advanced', projects: 12 },
        { name: 'React 18/19', level: 'advanced' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'TailwindCSS', level: 'advanced' },
        { name: 'Material UI', level: 'advanced' },
        { name: 'shadcn/ui', level: 'advanced' },
        { name: 'Nuxt 2/3/4', level: 'advanced' },
        { name: 'Next.js', level: 'advanced' },
        { name: 'Electron', level: 'intermediate' },
        { name: 'TipTap', level: 'intermediate' },
        { name: 'Leaflet', level: 'intermediate' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'Scalable APIs and services',
      icon: 'server',
      accent: '#e0234e',
      skills: [
        { name: 'NestJS', level: 'advanced', projects: 10 },
        { name: 'Laravel', level: 'advanced' },
        { name: 'Symfony', level: 'advanced' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'PHP', level: 'advanced' },
        { name: 'gRPC', level: 'intermediate' },
        { name: 'BullMQ', level: 'advanced' },
        { name: 'AWS SQS', level: 'advanced' },
        { name: 'REST API', level: 'advanced' },
        { name: 'GraphQL', level: 'intermediate' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Efficient data structures and ORM',
      icon: 'database',
      accent: '#4169e1',
      skills: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'MySQL', level: 'intermediate' },
        { name: 'Redis', level: 'advanced' },
        { name: 'TypeORM', level: 'advanced' },
        { name: 'Doctrine ORM', level: 'advanced' },
        { name: 'Eloquent', level: 'advanced' },
        { name: 'Meilisearch', level: 'intermediate' },
      ]
    },
    {
      id: 'ai',
      title: 'AI / LLM',
      description: 'Integrating AI models with applications',
      icon: 'brain',
      accent: '#7c3aed',
      skills: [
        { name: 'OpenAI API', level: 'advanced' },
        { name: 'Anthropic Claude', level: 'advanced' },
        { name: 'Azure OpenAI', level: 'intermediate' },
        { name: 'Mistral AI', level: 'intermediate' },
        { name: 'AI SDK (Vercel)', level: 'advanced' },
        { name: 'OCR', level: 'advanced' },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps / Cloud',
      description: 'Infrastructure and automation',
      icon: 'cloud',
      accent: '#2496ed',
      skills: [
        { name: 'Docker', level: 'advanced' },
        { name: 'Kubernetes (K3s)', level: 'intermediate' },
        { name: 'Helm Charts', level: 'intermediate' },
        { name: 'ArgoCD', level: 'intermediate' },
        { name: 'Ansible', level: 'intermediate' },
        { name: 'AWS', level: 'advanced' },
        { name: 'Azure', level: 'intermediate' },
        { name: 'CI/CD', level: 'advanced' },
        { name: 'Sentry', level: 'advanced' },
        { name: 'MinIO', level: 'advanced' },
      ]
    },
    {
      id: 'architecture',
      title: 'Architectural Patterns',
      description: 'Enterprise system architecture',
      icon: 'layers',
      accent: '#f59e0b',
      skills: [
        { name: 'CQRS', level: 'advanced' },
        { name: 'Event-Driven', level: 'advanced' },
        { name: 'DDD', level: 'advanced' },
        { name: 'Microservices', level: 'advanced' },
        { name: 'Strategy Pattern', level: 'advanced' },
        { name: 'Factory Pattern', level: 'advanced' },
        { name: 'Repository Pattern', level: 'advanced' },
        { name: 'Multi-tenancy', level: 'intermediate' },
      ]
    },
    {
      id: 'realtime',
      title: 'Real-time',
      description: 'Real-time communication',
      icon: 'zap',
      accent: '#ff6600',
      skills: [
        { name: 'WebSocket', level: 'advanced' },
        { name: 'Socket.io', level: 'advanced' },
        { name: 'SSE', level: 'advanced' },
        { name: 'Redis Pub/Sub', level: 'advanced' },
        { name: 'BullMQ', level: 'advanced' },
        { name: 'RabbitMQ', level: 'intermediate' },
      ]
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Automated testing and code quality',
      icon: 'check',
      accent: '#22c55e',
      skills: [
        { name: 'Jest', level: 'advanced' },
        { name: 'Playwright', level: 'intermediate' },
        { name: 'Cypress', level: 'intermediate' },
        { name: 'PHPUnit', level: 'intermediate' },
        { name: 'E2E Testing', level: 'advanced' },
        { name: 'Mocha', level: 'intermediate' },
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Payments, OAuth, documents and more',
      icon: 'plug',
      accent: '#ec4899',
      skills: [
        { name: 'Przelewy24', level: 'intermediate' },
        { name: 'SaferPay', level: 'intermediate' },
        { name: 'Elavon', level: 'intermediate' },
        { name: 'Stripe', level: 'intermediate' },
        { name: 'OAuth', level: 'advanced' },
        { name: 'PDF', level: 'advanced' },
        { name: 'Excel', level: 'intermediate' },
        { name: 'Web scraping', level: 'intermediate' },
        { name: 'i18n', level: 'advanced' },
      ]
    },
  ]
};
