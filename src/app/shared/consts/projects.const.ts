import { Project } from "../models/projects.model";

export const PROJECTS: Project[] = [
  {
    name: 'Jobtrackr frontend',
    description: 'Frontend infrastructure for Jobtrackr, a job tracking tool.',
    link: 'https://github.com/murillo-nahas/jobtrackr-frontend',
    techs: ['React', 'TypeScript', 'Shadcn UI', 'Tanstack Query', 'TailwindCSS', 'Zod'],
  },
  {
    name: 'Jobtrackr backend',
    description: 'Backend infrastructure for Jobtrackr, a job tracking tool.',
    link: 'https://github.com/murillo-nahas/jobtrackr-backend',
    techs: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
  },
];
