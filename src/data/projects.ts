export type Project = {
  id: string
  number: string
  name: string
  year: string
  description: string
  technologies: string[]
  githubUrl?: string
  status?: string
  image: string | null
}

export const projects: Project[] = [
  {
    id: 'meu-controle',
    number: '01',
    name: 'MEU CONTROLE',
    year: '2026',
    description:
      'Sistema de gestão financeira pessoal com múltiplos controles e acompanhamento mensal.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/RossoniPablo/meu-controle-pessoal',
    image: null,
  },
  {
    id: 'gestao-eventos-ingressos',
    number: '02',
    name: 'SISTEMA DE GESTÃO DE EVENTOS E INGRESSOS',
    year: '2026',
    description:
      'Sistema backend de uma plataforma de venda e gerenciamento de ingressos, desenvolvido com Java e Spring Boot. O projeto contempla a gestão de eventos e organizadores, com funcionalidades planejadas para compra de ingressos, cadastro de participantes, simulação de pagamentos e validação de ingressos individuais por QR Code.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Spring Data JPA',
      'Hibernate',
      'APIs REST',
      'Bean Validation',
    ],
    status: 'Em desenvolvimento',
    image: null,
  },
]
