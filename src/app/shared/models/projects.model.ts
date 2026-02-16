export enum ProjectFilter {
  ALL = 'all',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
}

export type Project = {
  name: string;
  description: string;
  date: string;
  link: string;
  techs: string[];
  tag: Exclude<ProjectFilter, ProjectFilter.ALL>;
};
