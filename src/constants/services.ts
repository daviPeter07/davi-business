import { Smartphone, HardDrive, Wrench, HeartHandshake } from 'lucide-react';

export interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ServiceCategory {
  title: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: 'Software',
    categoryIcon: Smartphone,
    services: [
      {
        name: 'E-commerce',
        description:
          'Plataformas de vendas online escaláveis com integração de pagamentos, inventário e análises em tempo real.',
        icon: Smartphone,
      },
      {
        name: 'Dashboards & Analytics',
        description:
          'Painéis de controle personalizados para visualizar métricas críticas do seu negócio com dados em tempo real.',
        icon: Smartphone,
      },
      {
        name: 'Landing Pages & Marketing Sites',
        description:
          'Sites otimizados para conversão, SEO e performance que transformam visitantes em clientes.',
        icon: Smartphone,
      },
      {
        name: 'APIs & Integrações',
        description:
          'Desenvolvimento de APIs robustas e integrações entre sistemas para automatizar fluxos de trabalho.',
        icon: Smartphone,
      },
      {
        name: 'Automações & Workflows',
        description:
          'Soluções RPA e automações inteligentes que eliminam tarefas manuais repetitivas.',
        icon: Smartphone,
      },
      {
        name: 'Apps Móveis',
        description:
          'Aplicativos nativos e cross-platform (iOS/Android) com interfaces intuitivas e performance otimizada.',
        icon: Smartphone,
      },
    ],
  },
  {
    title: 'Hardware',
    categoryIcon: HardDrive,
    services: [
      {
        name: 'Assistência Técnica & Manutenção',
        description: 'Suporte especializado para diagnóstico, reparo e manutenção de equipamentos.',
        icon: HardDrive,
      },
      {
        name: 'Montagem de Computadores',
        description:
          'Construção de PCs customizados otimizados para suas necessidades específicas.',
        icon: HardDrive,
      },
      {
        name: 'Diagnóstico e Troubleshooting',
        description: 'Identificação e resolução de problemas de hardware com agilidade e precisão.',
        icon: HardDrive,
      },
      {
        name: 'Upgrades de Hardware',
        description: 'Atualização de componentes para melhorar performance e funcionalidades.',
        icon: HardDrive,
      },
      {
        name: 'Configuração & Setup',
        description: 'Instalação completa e configuração de sistemas operacionais e software.',
        icon: HardDrive,
      },
      {
        name: 'Recuperação de Dados',
        description:
          'Recuperação segura de dados em caso de falhas de hardware ou exclusão acidental.',
        icon: HardDrive,
      },
    ],
  },
  {
    title: 'Consultoria',
    categoryIcon: Wrench,
    services: [
      {
        name: 'Arquitetura de Sistemas',
        description: 'Planejamento técnico robusto para soluções escaláveis e à prova do futuro.',
        icon: Wrench,
      },
      {
        name: 'Migrações de Dados',
        description:
          'Transferência segura e eficiente de dados entre sistemas sem perda ou downtime.',
        icon: Wrench,
      },
      {
        name: 'Otimização de Performance',
        description: 'Análise e melhoria de aplicações lentas para garantir experiência rápida.',
        icon: Wrench,
      },
      {
        name: 'Code Review & Mentoring',
        description:
          'Avaliação de código e treinamento de times para melhores práticas e qualidade.',
        icon: Wrench,
      },
      {
        name: 'Seleção de Stack Tecnológico',
        description: 'Recomendação das tecnologias mais adequadas para seu projeto específico.',
        icon: Wrench,
      },
    ],
  },
  {
    title: 'Suporte',
    categoryIcon: HeartHandshake,
    services: [
      {
        name: 'Suporte Contínuo',
        description:
          'Atendimento on-demand com tempos rápidos de resposta para manter seu negócio funcionando.',
        icon: HeartHandshake,
      },
      {
        name: 'Manutenção Preventiva',
        description:
          'Verificações regulares para identificar e resolver problemas antes que afetem o sistema.',
        icon: HeartHandshake,
      },
      {
        name: 'Atualizações & Patches',
        description:
          'Aplicação contínua de atualizações de segurança e melhorias de funcionalidade.',
        icon: HeartHandshake,
      },
      {
        name: 'Escalabilidade & Growth',
        description:
          'Suporte especializado enquanto seu negócio cresce e suas necessidades evoluem.',
        icon: HeartHandshake,
      },
    ],
  },
];
