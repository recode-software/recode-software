export interface SubPattern {
  name: string;
  metric: string;
}

export interface ArchitecturePattern {
  id: string;
  name: string;
  metric: string;
  metricLabel: string;
  description: string;
  projects: string[];
  subPatterns?: SubPattern[];
}

export const architecturePatterns: Record<'pl' | 'en', ArchitecturePattern[]> = {
  pl: [
    {
      id: 'cqrs',
      name: 'CQRS',
      metric: '1103+',
      metricLabel: 'plików',
      description: 'Command Query Responsibility Segregation z @nestjs/cqrs',
      projects: ['CargoNest', 'Voyeta', 'Huwim', 'YouTube-Plex'],
      subPatterns: [
        { name: 'Strategy', metric: '68+' },
        { name: 'Factory', metric: '23+' },
      ]
    },
    {
      id: 'event-driven',
      name: 'Event-Driven',
      metric: '119+',
      metricLabel: 'listenerów',
      description: 'Architektura zdarzeniowa z EventEmitter i kolejkami',
      projects: ['CargoNest', 'MERA', 'Shelfae', 'Voyeta'],
      subPatterns: [
        { name: 'BullMQ', metric: '130+ handlers' },
        { name: 'SQS', metric: '130+ handlers' },
      ]
    },
    {
      id: 'ddd',
      name: 'DDD',
      metric: '43',
      metricLabel: 'pakiety domenowe',
      description: 'Domain-Driven Design z pelna separacja domen',
      projects: ['MERA', 'Zywo', 'Transport.Solbet'],
      subPatterns: [
        { name: 'Repository', metric: '520+' },
        { name: 'Value Objects', metric: 'PHP 8.1 enums' },
      ]
    },
    {
      id: 'microservices',
      name: 'Microservices',
      metric: '19+',
      metricLabel: 'serwisów',
      description: 'Architektura mikroserwisowa z gRPC i kolejkami',
      projects: ['CargoNest', 'Voyeta'],
      subPatterns: [
        { name: 'gRPC', metric: '12 proto' },
        { name: 'Multi-tenancy', metric: '3+ projekty' },
      ]
    },
  ],
  en: [
    {
      id: 'cqrs',
      name: 'CQRS',
      metric: '1103+',
      metricLabel: 'files',
      description: 'Command Query Responsibility Segregation with @nestjs/cqrs',
      projects: ['CargoNest', 'Voyeta', 'Huwim', 'YouTube-Plex'],
      subPatterns: [
        { name: 'Strategy', metric: '68+' },
        { name: 'Factory', metric: '23+' },
      ]
    },
    {
      id: 'event-driven',
      name: 'Event-Driven',
      metric: '119+',
      metricLabel: 'listeners',
      description: 'Event-driven architecture with EventEmitter and queues',
      projects: ['CargoNest', 'MERA', 'Shelfae', 'Voyeta'],
      subPatterns: [
        { name: 'BullMQ', metric: '130+ handlers' },
        { name: 'SQS', metric: '130+ handlers' },
      ]
    },
    {
      id: 'ddd',
      name: 'DDD',
      metric: '43',
      metricLabel: 'domain packages',
      description: 'Domain-Driven Design with full domain separation',
      projects: ['MERA', 'Zywo', 'Transport.Solbet'],
      subPatterns: [
        { name: 'Repository', metric: '520+' },
        { name: 'Value Objects', metric: 'PHP 8.1 enums' },
      ]
    },
    {
      id: 'microservices',
      name: 'Microservices',
      metric: '19+',
      metricLabel: 'services',
      description: 'Microservice architecture with gRPC and queues',
      projects: ['CargoNest', 'Voyeta'],
      subPatterns: [
        { name: 'gRPC', metric: '12 proto' },
        { name: 'Multi-tenancy', metric: '3+ projects' },
      ]
    },
  ]
};
