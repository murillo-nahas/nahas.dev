import { Project, ProjectFilter } from "../models/projects.model";

export const PROJECTS: Project[] = [
  {
    name: 'Jobtrackr frontend',
    description: 'Frontend infrastructure for Jobtrackr, a job tracking tool.',
    date: '2026',
    link: 'https://github.com/murillo-nahas/jobtrackr-frontend',
    techs: ['React', 'TypeScript', 'Shadcn UI', 'Tanstack Query', 'TailwindCSS', 'Zod'],
    tag: ProjectFilter.FRONTEND,
  },
  {
    name: 'Jobtrackr backend',
    description: 'Backend infrastructure for Jobtrackr, a job tracking tool.',
    date: '2026',
    link: 'https://github.com/murillo-nahas/jobtrackr-backend',
    techs: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    tag: ProjectFilter.BACKEND,
  },
];
