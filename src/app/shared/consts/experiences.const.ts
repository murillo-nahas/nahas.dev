import { Experience } from "../models/experiences.model";

export const EXPERIENCES: Experience[] = [
  {
    title: 'Full-Stack Software Engineer',
    company: 'Merch',
    companyLink: 'https://merch.co',
    date: '2024 · Present',
    description: 'At Merch, I build and maintain a large-scale merchandising platform using Angular and NestJS within an NX monorepo. I work across the stack to deliver production features end to end, redesign shared frontend modules to improve UX and maintainability, and architect backend services, background jobs, and AWS Lambda functions. My work also involves contributing to AWS-based cloud and serverless infrastructure, with a strong focus on scalability, clean architecture, and long-term maintainability.',
  },
  {
    title: 'Mobile Software Engineer',
    company: 'Be220',
    companyLink: 'https://be220.com',
    date: '2024 · 2025',
    description: 'At Be220, I built and delivered cross-platform mobile applications using Ionic, TailwindCSS, and Firebase, leading two production apps from zero to launch: Ineide, a location-based marketplace, and Previsc, a retirement planning app integrated with a .NET API. I owned the full mobile development lifecycle — from architecture and UI to backend integration and app store releases — and led internal workshops on payment gateway integrations such as Asaas and Pagar.me.',
  },
  {
    title: 'Mobile Software Engineer',
    company: 'Bradesco Seguros',
    companyLink: 'https://www.bradescoseguros.com.br/',
    date: '2022 · 2024',
    description: 'At Bradesco Seguros, I led the development of the Capitalização section of a high-traffic mobile app using Ionic and built a Backend for Frontend (BFF) to support mobile feature delivery. I refactored the BFF from Node.js and Express to NestJS with Zod validation, improving maintainability and type safety, while delivering new features, performance improvements, and analytics tracking across the Bradesco Seguros and Bradesco Bank mobile apps.',
  },
];
