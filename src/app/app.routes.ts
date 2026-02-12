import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'posts',
    loadComponent: () => import('./pages/posts/posts').then(m => m.Posts),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
];
