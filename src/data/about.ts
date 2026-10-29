export type EditorialEntry = {
  period: string;
  title: string;
  institution: string;
  description?: string;
  highlights?: string[];
  website?: { label: string; url: string };
  chromatic?: boolean;
};

export const aboutPageContent = {
  introduction:
    "Sou desenvolvedor de software, formado em Análise e Desenvolvimento de Sistemas pelo IFPR e graduando em Engenharia de Software na UNINTER.\n\nAtuo profissionalmente no desenvolvimento de aplicações web, sites e e-commerces, utilizando tecnologias como TypeScript, Next.js e Node.js.\n\nTambém desenvolvo projetos próprios, com foco em APIs REST, modelagem de dados e regras de negócio. Atualmente, aprofundo meus conhecimentos em desenvolvimento Back-end com Java, Spring Boot e PostgreSQL, buscando evoluir profissionalmente nessa área.",
};

export const experiences: EditorialEntry[] = [
  {
    period: "06/2024 . ATUAL",
    title: "ANALISTA DE TI · REMOTO",
    institution: "MEGALU COMUNICAÇÃO",
    highlights: [
      "Lidero o desenvolvimento de e-commerces, sites e landing pages focadas em conversão utilizando WordPress, PHP, React, HTML e Tailwind.",
      "Responsável pela infraestrutura dos projetos: monitoramento de servidores e segurança, incluindo SSL e backups, garantindo 99,9% de uptime.",
      "Implemento técnicas de WPO para reduzir o tempo de carregamento e melhorar o desempenho de SEO.",
    ],
  },
  {
    period: "01/2023 . ATUAL",
    title: "DESENVOLVEDOR DE SOFTWARE FREELANCER",
    institution: "AUTÔNOMO",
    highlights: [
      "Desenvolvo sistemas e interfaces sob medida, com foco na necessidade do cliente e na experiência do usuário.",
      "Presto consultoria técnica na escolha de tecnologias, arquitetura de sistemas e automação de processos.",
      "Realizo manutenção evolutiva de sistemas legados e integração de novas funcionalidades.",
    ],
  },
  {
    period: "02/2021 . 12/2021",
    title: "ESTAGIÁRIO DE TI",
    institution: "PREFEITURA MUNICIPAL DE IMBAÚ",
    highlights: [
      "Realizei suporte e manutenção de hardware, atendimento a sistemas internos e administração da rede local.",
      "Apoiei a implementação de rotinas de atualização e políticas de segurança da informação.",
    ],
  },
];

export const volunteerProjects: EditorialEntry[] = [
  {
    period: "ATUAL",
    title: "DESENVOLVEDOR FULL STACK VOLUNTÁRIO",
    institution: "GEM · GRUPO ECONOMIA DO MAR",
    description:
      "Atuação no único grupo brasileiro reconhecido pelo CNPq voltado à Economia do Mar e Economia Azul, promovendo pesquisas interdisciplinares para o desenvolvimento sustentável do setor marítimo.",
    highlights: [
      "Tecnologias: React, CSS Modules, Swiper.js, Framer Motion, Python e Django.",
    ],
    website: {
      label: "grupoeconomiadomar.com",
      url: "https://grupoeconomiadomar.com",
    },
  },
];

export const education: EditorialEntry[] = [
  {
    period: "2026  EM CURSO",
    title: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
    institution: "UNINTER",
  },
  {
    period: "2020 . 2023",
    title: "TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    institution: "IFPR",
  },
];

export const technologyGroups = [
  {
    category: "FRONT-END",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "WordPress",
    ],
  },
  {
    category: "BACK-END",
    items: [
      "Java · em estudo",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Arquitetura REST",
      "Autenticação JWT",
      "Integração de APIs",
    ],
  },
  {
    category: "CMS & WEB",
    items: ["WordPress", "Elementor", "Otimização de Performance · WPO"],
  },
  {
    category: "INFRAESTRUTURA / DB",
    items: ["PostgreSQL", "MySQL", "cPanel", "Google Workspace"],
  },
];
